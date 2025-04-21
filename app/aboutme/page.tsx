import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const AboutMePage = () => {
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full min-h-screen">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <p>
              *This page is under development. Improved UI/UX will be delivered
              asap (final exam season 🥲)
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              About me
            </h2>
            <p>
              Mathematics and statistics student at the University of Toronto
              with a strong interest in data science and ML. Hi, and welcome!
              This site is a home for my projects, ideas, and whatever else I
              have been diving into lately. It is also my sandbox, where I try
              out whatever I'm into these days.
            </p>

            <h2>Education</h2>
            <span>
              <p>University of Toronto</p>
              <p>
                Bachelor of Science - BSc, Mathematics & Its Applications
                Specialist (Probability/Statistics)
              </p>
              <p>Sep 2024 - Jun 2028 · 4 yrs</p>
              <p>Toronto, ON, Canada</p>
            </span>

            <h2>Experience</h2>
            <div>
              <span>
                <p>English Language Teacher</p>
                <p>Read101 (Contract Part-time)</p>
                <p>Apr 2024 - Jul 2024 · 4 mos</p>
                <p>Yongin, Gyeonggi, South Korea</p>
              </span>
              <span>
                <p>Android Engineer</p>
                <p>Read101 (Contract Part-time)</p>
                <p>Apr 2024 - Jul 2024 · 4 mos</p>
                <p>Yongin, Gyeonggi, South Korea</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutMePage;
