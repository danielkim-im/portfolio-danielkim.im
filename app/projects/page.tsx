import React from "react";
import { createClient } from "@supabase/supabase-js";
import config from "../config";
import ProjectCard from "../components/ProjectCard";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export async function ProjectsPage() {
  const { data, error } = await supabase
    .from("project")
    .select()
    .order("date", { ascending: false });
  return (
    <main
      className="bg-background min-h-screen
          md:ml-auto
          md:h-screen md:overflow-y-scroll
          md:p-25 p-10 md:pl-12.5 gap-10 flex flex-col "
    >
      {error && (
        <p className="text-red-500">Failed to load projects: {error.message}</p>
      )}
      <div className="md:max-w-[50vw] mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>

        <div className="">
          {data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
