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

export default function GetProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProject() {
      const { data } = await supabase
        .from("project")
        .select()
        .eq("pinned", true)
        .order("date", { ascending: false });

      setProjects(data || []);
    }

    fetchProject();
  }, []);

  return projects;
}
