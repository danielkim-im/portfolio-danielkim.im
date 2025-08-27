"use client";

import Link from "next/link";
import { IconDownload, IconStar, IconArrowUpRight } from "@tabler/icons-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image_src: string;
  primary_link: string;
  secondary_link: string;
  date: string;
  installs: string;
  star_rating: any;
};

export default function ProjectCard({ project }: { project: Project }) {
  const CardContent = () => (
    <div className="flex flex-col md:flex-row overflow-hidden cursor-pointer gap-5 pt-5 pb-5 mr-5 ml-5">
      <img
        className="
        w-full md:w-1/4
        h-auto aspect-16/9 object-cover
        self-start rounded-sm
      "
        src={project.image_src}
      />
      <div className="w-full md:w-3/4 flex flex-col justify-center gap-2.5">
        <div className="flex gap-1 items-center">
          <h4 style={{ fontWeight: "bold" }}>{project.title}</h4>
          {project.primary_link && (
            <IconArrowUpRight stroke={2} className="h-[1em]" color="#F0EDCC" />
          )}
        </div>

        <p>{project.description}</p>
        <div className="flex gap-2.5">
          {project.installs && (
            <div className="flex gap-1 items-center">
              <IconDownload stroke={2} className="h-[1em]" color="#F0EDCC" />
              <p>{project.installs}</p>
            </div>
          )}
          {project.star_rating && (
            <div className="flex gap-1 items-center">
              <IconStar stroke={2} className="h-[1em]" color="#F0EDCC" />
              <p>{project.star_rating}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className="hover:shadow-md hover:backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ease-in-out rounded-lg relative">
      {project.primary_link ? (
        <Link
          href={project.primary_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </main>
  );
}
