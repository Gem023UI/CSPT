import React, { useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import LessonOverview from "./components/LessonOverview";
import LessonsSection from "./components/LessonsSection";
import PPTCompilation from "./components/PPTCompilation";
import Proprietors from "./components/Proprietors";
import Footer from "./components/Footer";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main>
        <Hero onOpenDrawer={() => setDrawerOpen(true)} />
        <LessonOverview onNavigate={handleNavigate} />
        <LessonsSection />
        <PPTCompilation />
        <Proprietors />
      </main>
      <Footer />
    </>
  );
}