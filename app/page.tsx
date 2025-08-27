"use client";

import { useRef, useEffect } from "react";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import { useProjects, type Project } from "./hooks/useProjects";
import { useExperience, type Experience } from "./hooks/useExperience";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import config from "./config";

export default function Home() {
  const rightRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);

  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
  } = useProjects();
  const { experience, loading: expLoading, error: expError } = useExperience();

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const mq = window.matchMedia("(min-width: 768px)"); // Tailwind md

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (mq.matches) right.scrollTop += e.deltaY;
    };

    const attach = () =>
      left.addEventListener("wheel", onWheel, { passive: false });
    const detach = () => left.removeEventListener("wheel", onWheel);

    if (mq.matches) attach();

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) attach();
      else detach();
    };

    mq.addEventListener("change", handleChange);
    return () => {
      detach();
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <main className="flex flex-col md:flex-row md:h-screen md:overflow-hidden">
      <div
        ref={leftRef}
        className="
          w-full md:w-40/100
          md:fixed md:left-0 md:top-0 md:h-screen
          bg-background md:p-25 p-10 md:pr-12.5 gap-10 flex flex-col
        "
      >
        <div>
          <h1>Daniel Kim</h1>
          <h2>Math &amp; Stats @ UofT</h2>
        </div>

        <h4>
          Mathematics &amp; Statistics student applying data science and machine
          learning through projects in modeling, analysis, and visualization.
        </h4>

        <p>
          #Python #SQL #PostgreSQL #Supabase #Firebase #NumPy #Pandas
          #Matplotlib #ScikitLearn #Tableau #DataVisualization #Statistics
          #MachineLearning #DataScience #GitHub
        </p>

        <div className="flex flex-row gap-5">
          <Link
            href={config.gitHubURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub stroke={2} color="#F0EDCC" />
          </Link>
          <Link
            href={config.linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin stroke={2} color="#F0EDCC" />
          </Link>
          <Link
            href={`mailto:${config.emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{config.emailAddress}</p>
          </Link>
        </div>
      </div>

      <div
        ref={rightRef}
        className="
          w-full md:w-60/100
          md:ml-auto
          md:h-screen md:overflow-y-scroll
          md:p-25 p-10 md:pl-12.5 gap-10 flex flex-col
        "
      >
        <div>
          <h2>Experience</h2>
          {expLoading && <p>Loading…</p>}
          {expError && (
            <p className="text-red-500">Failed to load: {expError.message}</p>
          )}
          {!expLoading &&
            !expError &&
            experience?.map((exp: Experience) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
        </div>

        <div>
          <h2>Projects</h2>
          {projectsLoading && <p>Loading…</p>}
          {projectsError && (
            <p className="text-red-500">
              Failed to load: {projectsError.message}
            </p>
          )}
          {!projectsLoading &&
            !projectsError &&
            projects?.map((proj: Project) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}

          <Link href="/projects">
            <div className="flex gap-1 items-center cursor-pointer group pt-5">
              <h4
                className="font-bold group-hover:underline"
                style={{ fontWeight: "bold" }}
              >
                View All Projects
              </h4>
              <IconArrowRight stroke={2} className="h-[1em]" color="#F0EDCC" />
            </div>
          </Link>
        </div>

        <div>
          <h2>Education</h2>
          <div className="pt-5">
            <h4>University of Toronto</h4>
            <p>
              Bachelor of Science - Specialist in Mathematics &amp; Its
              Applications (Probability/Statistics)
            </p>
            <p>Sep 2024 - Jun 2028</p>
          </div>
        </div>

        <div>
          <h2>Certifications</h2>
          <div className="pt-5 gap-5 flex flex-col">
            <div>
              <h4>IBM Data Analysis with Python</h4> <p>Issued Jul 2025</p>
            </div>
            <div>
              <h4>IBM Python for Data Science, AI &amp; Development</h4>
              <p>Issued May 2025</p>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <p>Developed with ❤️ from Toronto</p>
          <p>Copyright © 2025 Daniel (Euichan) Kim</p>
        </div>
      </div>
    </main>
  );
}
