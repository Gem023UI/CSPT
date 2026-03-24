import React from "react";
import { lessons } from "../data/lessons";

const accents = [
  { border: "rgba(157,86,255,0.55)", bg: "rgba(157,86,255,0.22)", text: "#c4a0ff", iconBorder: "rgba(157,86,255,0.55)" },
  { border: "rgba(244,114,182,0.3)",  bg: "rgba(244,114,182,0.1)",  text: "#F472B6",  iconBorder: "rgba(244,114,182,0.4)" },
  { border: "rgba(254,243,199,0.25)", bg: "rgba(254,243,199,0.07)", text: "#FEF3C7",  iconBorder: "rgba(254,243,199,0.3)" },
];

export default function LessonOverview({ onNavigate }) {
  return (
    <section style={{ padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.13)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <span className="section-label">All Lessons</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#F0F0F8" }}>
              What You'll{" "}
              <span style={{ background: "linear-gradient(135deg, #9D56FF, #F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Learn
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.75)", maxWidth: "400px", lineHeight: 1.7 }}>
              16 comprehensive lessons spanning computer systems and platform technologies.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "12px",
        }}>
          {lessons.map((lesson) => {
            const accent = accents[(lesson.id - 1) % 3];
            return (
              <div
                key={lesson.id}
                className="panel panel-hover"
                onClick={() => onNavigate(lesson.href)}
                style={{ padding: "18px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    width: "38px", height: "38px", flexShrink: 0,
                    borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", background: accent.bg, border: `1px solid ${accent.iconBorder}`,
                  }}>{lesson.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: accent.text, letterSpacing: "0.06em" }}>
                      {String(lesson.id).padStart(2, "0")}
                    </span>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "13px", color: "#F0F0F8", marginTop: "1px", lineHeight: 1.25 }}>
                      {lesson.shortTitle}
                    </h3>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.75)", lineHeight: 1.65, flex: 1 }}>
                  {lesson.description.slice(0, 88)}…
                </p>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: accent.text }}>View →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}