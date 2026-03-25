import React from "react";
import { useNavigate } from "react-router-dom";
import { lessons } from "../data/lessons";
import LessonCard from "./LessonCard";

export default function LessonsSection() {
  const navigate = useNavigate();

  const handleNavigate = (href) => {
    if (href && href.startsWith("/")) {
      navigate(href);
    }
  };

  return (
    <div id="lessons">
      {/* Section intro */}
      <div style={{ padding: "80px 28px 0", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.13)" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Course Content</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F0F8", letterSpacing: "-0.03em", lineHeight: 1.05,
            }}>
              All 16{" "}
              <span style={{ background: "linear-gradient(135deg, #9D56FF, #F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                CSPT
              </span>{" "}
              Lessons
            </h2>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.65)", maxWidth: "420px", lineHeight: 1.75 }}>
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
        />
      ))}
    </div>
  );
}