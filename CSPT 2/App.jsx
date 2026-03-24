import React, { useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import LessonsSection from "./components/LessonsSection";
import PPTCompilation from "./components/PPTCompilation";
import Proprietors from "./components/Proprietors";
import Footer from "./components/Footer";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main>
        <Hero onOpenDrawer={() => setDrawerOpen(true)} />
        <LessonsSection />
        <PPTCompilation />
        <Proprietors />
      </main>

      <Footer />
    </div>
  );
}
