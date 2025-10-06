/* File: src/App.jsx */
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { ScrollingHomePage } from "./components/ScrollingHomePage";
import { StarfieldBackground } from "./components/StarfieldBackground";
import { FloatingElements } from "./components/FloatingElements";
import Footer from "./components/Footer";
export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={{
        backgroundImage: "url(./assets/bg-hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 -z-20 "></div>

      <StarfieldBackground />
      <FloatingElements />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="relative z-10">
        <ScrollingHomePage onPageChange={setCurrentPage} />
      </main>
    </div>
  );
}
