"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import config from "../config";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default function GetExperience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    async function fetchExperience() {
      const { data } = await supabase
        .from("experience")
        .select()
        .order("start_date", { ascending: false });

      setExperience(data || []);
    }

    fetchExperience();
  }, []);

  return experience;
}
