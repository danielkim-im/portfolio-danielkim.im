import { createClient } from "@supabase/supabase-js";
import ProjectCard from "../components/ProjectCard";
import config from "../config";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function Projects() {
  const { data, error } = await supabase
    .from("project")
    .select()
    .order("date", { ascending: false });

  return (
    <main className="bg-background min-h-screen">
      {error && (
        <p className="text-red-500">Failed to load projects: {error.message}</p>
      )}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Recent Projects</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
