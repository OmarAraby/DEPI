import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* Routing..... */}
      <div className="container py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
