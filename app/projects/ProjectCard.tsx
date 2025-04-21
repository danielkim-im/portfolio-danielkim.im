"use client";

import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative cursor-pointer">
        <img
          alt={project.imageAlt}
          src={project.imageSrc}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4">
          <h3 className="text-sm text-gray-700">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{project.description}</p>
          <p className="text-sm font-medium text-gray-900">{project.date}</p>
        </div>
      </div>
    </Link>
  );
}
