import React from "react";
import { lessons } from "../data/lessons";
import LessonCard from "./LessonCard";

export default function LessonsSection() {
  const handleNavigate = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="lessons">
      {/* Section intro */}
      <div style={{ padding: "80px 28px 0", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Course Content</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FAFAFA", letterSpacing: "-0.03em", lineHeight: 1.05,
            }}>
              All 16{" "}
              <span style={{ background: "linear-gradient(135deg, #8B3CF7, #F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                CSPT
              </span>{" "}
              Lessons
            </h2>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(250,250,250,0.4)", maxWidth: "420px", lineHeight: 1.75 }}>
              From hardware fundamentals to cutting-edge AI and IoT platforms — explore each lesson in depth.
            </p>
          </div>
        </div>
      </div>

      {/* Lesson cards */}
      {lessons.map((lesson, index) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          isReversed={index % 2 !== 0}
          onNavigate={handleNavigate}
        />
      ))}
    </div>
  );
}