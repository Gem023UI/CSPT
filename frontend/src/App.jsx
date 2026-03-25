import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Hero from "./components/Hero";
import LessonOverview from "./components/LessonOverview";
import LessonsSection from "./components/LessonsSection";
import PPTCompilation from "./components/PPTCompilation";
import Proprietors from "./components/Proprietors";
import Footer from "./components/Footer";

import Lesson1 from "./components/lessons/Lesson1";
import Lesson2 from "./components/lessons/Lesson2";
import Lesson3 from "./components/lessons/Lesson3";
import Lesson5 from "./components/lessons/Lesson5";
import Lesson7 from "./components/lessons/Lesson7";
import Lesson8 from "./components/lessons/Lesson8";

// ── Home page (existing landing page) ───────────────────────────────────────
function HomePage() {
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

// ── Lesson page wrapper — includes Header + Drawer on every lesson page ──────
function LessonLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      {children}
      <Footer />
    </>
  );
}

// ── Root app with router ─────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Individual lesson pages */}
        <Route
          path="/lesson/1"
          element={<LessonLayout><Lesson1 /></LessonLayout>}
        />
        <Route
          path="/lesson/2"
          element={<LessonLayout><Lesson2 /></LessonLayout>}
        />
        <Route
          path="/lesson/3"
          element={<LessonLayout><Lesson3 /></LessonLayout>}
        />
        <Route
          path="/lesson/5"
          element={<LessonLayout><Lesson5 /></LessonLayout>}
        />
        <Route
          path="/lesson/7"
          element={<LessonLayout><Lesson7 /></LessonLayout>}
        />
        <Route
          path="/lesson/8"
          element={<LessonLayout><Lesson8 /></LessonLayout>}
        />

        {/* 404 fallback — redirects home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}