import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Sticky Navbar with white background */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full ">
        {" "}
        {/* Add pt-20 (padding-top) to ensure content is not overlapped */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
