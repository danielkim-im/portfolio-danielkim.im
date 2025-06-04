import React from "react";
import SideBar from "../components/SideBar";
import Projects from "./Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <main className="bg-backgroundpt-0">
      <div className="flex flex-row md:ml-[240px] pt-[5vh] md:pt-0">
        <SideBar />
        <div className="w-full">
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsPage;
