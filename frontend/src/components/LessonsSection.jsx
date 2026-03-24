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
      <div style={{ textAlign: "center", padding: "72px 24px 24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(242,120,0,0.1)",
            border: "2px solid rgba(242,120,0,0.25)",
            borderRadius: "99px",
            padding: "6px 18px",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#F27800", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em" }}>
            📖 ALL 16 LESSONS
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#0d3b4e",
            letterSpacing: "-0.03em",
            marginBottom: "12px",
            lineHeight: 1.1,
          }}
        >
          We Solve IT Problems{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D43828, #F27800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            With Technology
          </span>
        </h2>
        <p style={{ color: "rgba(13,59,78,0.6)", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
          Explore all 16 CSPT lessons in depth — from hardware fundamentals to cutting-edge AI and IoT platforms.
        </p>
      </div>

      {/* Each lesson as a full-width alternating section */}
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
