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
import ProprietorsPage from "./components/ProprietorsPage";

import Lesson1 from "./components/lessons/Lesson1";
import Lesson2 from "./components/lessons/Lesson2";
import Lesson3 from "./components/lessons/Lesson3";
import Lesson4 from "./components/lessons/Lesson4";
import Lesson5 from "./components/lessons/Lesson5";
import Lesson6 from "./components/lessons/Lesson6";
import Lesson7 from "./components/lessons/Lesson7";
import Lesson8 from "./components/lessons/Lesson8";
import Lesson9 from "./components/lessons/Lesson9";
import Lesson10 from "./components/lessons/Lesson10";
import Lesson11 from "./components/lessons/Lesson11";
import Lesson12 from "./components/lessons/Lesson12";
import Lesson13 from "./components/lessons/Lesson13";
import Lesson14 from "./components/lessons/Lesson14";
import Lesson15 from "./components/lessons/Lesson15";
import Lesson16 from "./components/lessons/Lesson16";

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
        <LessonOverview />
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

        {/* Proprietors page */}
        <Route path="/proprietors" element={<ProprietorsPage />} />

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
          path="/lesson/4"
          element={<LessonLayout><Lesson4 /></LessonLayout>}
        />
        <Route
          path="/lesson/5"
          element={<LessonLayout><Lesson5 /></LessonLayout>}
        />
        <Route
          path="/lesson/6"
          element={<LessonLayout><Lesson6 /></LessonLayout>}
        />
        <Route
          path="/lesson/7"
          element={<LessonLayout><Lesson7 /></LessonLayout>}
        />
        <Route
          path="/lesson/8"
          element={<LessonLayout><Lesson8 /></LessonLayout>}
        />
        <Route
          path="/lesson/9"
          element={<LessonLayout><Lesson9 /></LessonLayout>}
        />
        <Route
          path="/lesson/10"
          element={<LessonLayout><Lesson10 /></LessonLayout>}
        />
        <Route
          path="/lesson/11"
          element={<LessonLayout><Lesson11 /></LessonLayout>}
        />
        <Route
          path="/lesson/12"
          element={<LessonLayout><Lesson12 /></LessonLayout>}
        />
        <Route
          path="/lesson/13"
          element={<LessonLayout><Lesson13 /></LessonLayout>}
        />
        <Route
          path="/lesson/14"
          element={<LessonLayout><Lesson14 /></LessonLayout>}
        />
        <Route
          path="/lesson/15"
          element={<LessonLayout><Lesson15 /></LessonLayout>}
        />
        <Route
          path="/lesson/16"
          element={<LessonLayout><Lesson16 /></LessonLayout>}
        />

        {/* 404 fallback — redirects home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}