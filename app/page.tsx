"use client";

import SideBar from "./components/SideBar";
import BentoGrid from "./components/HomeBentoGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full">
          <BentoGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
