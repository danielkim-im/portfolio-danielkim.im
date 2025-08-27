"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabase = createClient(config.supabaseUrl, config.supabaseKey, {
  db: { schema: "public" },
});

export type Experience = {
  id: string;
  company: string;
  title: string;
  start_date: string;
  end_date: string | null;
  description: string;
  location: string;
};


export function useExperience() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let alive = true;

    async function fetchExperience() {
      try {
        const { data, error } = await supabase
          .from("experience")
          .select()
          .order("start_date", { ascending: false });

        if (error) throw error;
        if (alive) setExperience(data ?? []);
      } catch (e: any) {
        if (alive) setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    }

    fetchExperience();
    return () => {
      alive = false;
    };
  }, []);

  return { experience, loading, error };
}
