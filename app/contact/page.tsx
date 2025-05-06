import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import config from "../config";

const ContactPage = () => {
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full min-h-screen">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex flex-row justify-around h-auto pt-[5vh] pb-[5vh]">
              <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
              <div>
                <p>Get in touch</p>
                <p>
                  <a href={`mailto:${config.emailAddress}`}>
                    {config.emailAddress}
                  </a>
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <p>
                  <a
                    href={config.linkedInURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href={config.gitHubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
