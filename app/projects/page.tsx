import React from "react";
import SideBar from "../components/SideBar";
import Projects from "./Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full">
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
