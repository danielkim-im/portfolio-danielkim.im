"use client";

import SideBar from "./components/SideBar";
import BentoGrid from "./components/HomeBentoGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <SideBar />
      <div className="md:ml-[240px] pt-[7.5vh] md:pt-0">
        <BentoGrid />
      </div>
      <Footer />
    </main>
  );
}
