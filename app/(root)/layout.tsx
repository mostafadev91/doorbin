import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light100_dark900 h-screen flex flex-col font-vazirmatn">
      <Navbar />

      <div className="flex-1 flex">
        LeftSidebar
        <section className="flex-1">{children}</section>
        RightSidebar
      </div>
    </main>
  );
};

export default Layout;
