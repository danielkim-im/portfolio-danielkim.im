"use client";

import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  image_src: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative cursor-pointer">
        <img
          src={project.image_src}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        />
        <div className="mt-2.5">
          <p className="text-sm font-bold">{project.title}</p>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
