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
            <h2 className="text-3xl font-bold tracking-tight">About me</h2>
            <p className="mt-2.5">
              I'm a Mathematics Specialist (Probability & Statistics) at the
              University of Toronto with a strong interest in data science and
              ML.
            </p>

            <h2 className="text-2xl mt-10 font-bold tracking-tight">
              Education
            </h2>
            <span>
              <p className="text-lg mt-2.5">University of Toronto</p>
              <p className="text-sm">
                Bachelor of Science - Mathematics & Its Applications Specialist
                (Probability/Statistics)
              </p>
              <p className="text-sm text-gray-500">
                Sep 2024 - Jun 2028 · 4 yrs
              </p>
              <p className="text-sm text-gray-500">Toronto, ON, Canada</p>
            </span>

            <h2 className="text-2xl mt-10 font-bold tracking-tight">
              Experience
            </h2>
            <div>
              <span>
                <p className="text-lg mt-2.5">Android Engineer</p>
                <p className="text-sm">Yola Studio (Self-employed)</p>
                <p className="text-sm text-gray-500">
                  Jul 2020 - Jan 2023 · 2 yrs 7 mos
                </p>
                <div className="mt-1.25">
                  <p className="text-sm">
                    • Developed and launched a K-pop entertainment app,
                    attracting over 15,000 registered users.
                  </p>
                  <p className="text-sm">
                    • Utilized Android Studio, Java, Firebase, Google Analytics,
                    Google Cloud Platform, and Cloudflare CDN to build, manage,
                    and optimize app services.
                  </p>
                  <p className="text-sm">
                    • Founded and independently grew Yola Studio during high
                    school, demonstrating early creativity, entrepreneurial
                    spirit, and technical expertise.
                  </p>
                </div>
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
