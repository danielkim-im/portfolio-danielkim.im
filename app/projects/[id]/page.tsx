export const dynamic = "force-dynamic";
export const runtime = "edge";

import HeaderBlock from "./PostBlocks/HeaderBlock";
import TextBlock from "./PostBlocks/TextBlock";
import TextBoldBlock from "./PostBlocks/TextBoldBlock";
import ImageBlock from "./PostBlocks/ImageBlock";
import VideoBlock from "./PostBlocks/VideoBlock";
import LinkBlock from "./PostBlocks/LinkBlock";
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
        <div className="ml-[240px] pb-[5%] w-full min-h-screen bg-white">
          <img
            src={data.imageSrc}
            className="w-full bg-gray-200 object-cover lg:aspect-auto lg:h-120"
          />

          <p className="mt-5 text-center">{data.affiliation}</p>
          <h1 className="mt-5 text-4xl font-bold text-center tracking-tight">
            {data.title}
          </h1>
          <p className="mt-5 text-center">{data.collaborators}</p>
          <p className="mt-5 text-center text-gray-500">{data.date}</p>
          <div className="mt-5 max-w-[75%] mx-auto">
            {data.post_data?.map(
              (
                post: {
                  type: string;
                  content: any;
                  header: string;
                  text: string;
                  image_src: string;
                  video_src: string;
                  link: string;
                  link_title: string;
                },
                index: number
              ) => {
                switch (post.type) {
                  case "header":
                    return <HeaderBlock key={index} header={post.header} />;
                  case "text":
                    return <TextBlock key={index} text={post.text} />;
                  case "text-bold":
                    return <TextBoldBlock key={index} text={post.text} />;
                  case "image":
                    return (
                      <ImageBlock key={index} image_src={post.image_src} />
                    );
                  case "video":
                    return (
                      <VideoBlock key={index} video_src={post.video_src} />
                    );
                  case "link":
                    return (
                      <LinkBlock
                        key={index}
                        link={post.link}
                        link_title={post.link_title}
                      />
                    );
                  default:
                    return null;
                }
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
