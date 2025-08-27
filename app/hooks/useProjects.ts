"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabase = createClient(config.supabaseUrl, config.supabaseKey, {
  db: { schema: "public" },
});

export type Project = {
  id: string;
  title: string;
  description: string;
  image_src: string;
  primary_link: string;
  secondary_link: string;
  installs: string;
  star_rating: number;
  date: string;
  pinned: boolean;
};

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let alive = true;

    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from("project")
          .select()
          .eq("pinned", true)
          .order("date", { ascending: false });

        if (error) throw error;
        if (alive) setProjects(data ?? []);
      } catch (e: any) {
        if (alive) setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    }

    fetchProject();
    return () => {
      alive = false;
    };
  }, []);

  return { projects, loading, error };
}
