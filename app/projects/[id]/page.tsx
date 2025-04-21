import SideBar from "@/app/components/SideBar";
import Footer from "@/app/components/Footer";
import config from "@/app/config";
import { createClient } from "@supabase/supabase-js";

type Props = {
  params: {
    id: string;
  };
};

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export const dynamic = "force-dynamic";

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("public", true)
    .eq("id", id)
    .single();

  if (error || !data) {
    return (
      <main className="bg-background">
        <div className="ml-[240px] w-full min-h-screen flex items-center justify-center">
          <p className="text-red-500">Error loading project data.</p>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full min-h-screen">
          <img
            src={data.imageSrc}
            className="w-full bg-gray-200 object-cover lg:aspect-auto lg:h-120"
          />

          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="mt-4">{data.affiliation}</p>
          <p className="mt-4">{data.description}</p>
          <div className="mt-4 space-y-2">
            {data.links?.map(
              (link: { name: string; url: string }, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:underline"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
