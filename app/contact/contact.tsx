import React from "react";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <main className="bg-background">
      <div className="flex flex-row">
        <SideBar />
        <div className="ml-[240px] w-full">
          <h1>Contact Page</h1>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
