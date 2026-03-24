import React from "react";
import { lessons } from "../data/lessons";

const accents = [
  { primary: "#8B3CF7", bg: "rgba(139,60,247,0.12)", border: "rgba(139,60,247,0.3)", text: "#c4a0ff" },
  { primary: "#F472B6", bg: "rgba(244,114,182,0.1)",  border: "rgba(244,114,182,0.28)", text: "#F472B6" },
  { primary: "#FEF3C7", bg: "rgba(254,243,199,0.07)", border: "rgba(254,243,199,0.22)", text: "#FEF3C7" },
];

export default function PPTCompilation() {
  return (
    <section id="ppt-compilation" style={{ padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Resources</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#FAFAFA", letterSpacing: "-0.025em",
            }}>
              PPT{" "}
              <span style={{ background: "linear-gradient(135deg, #8B3CF7, #F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Compilation
              </span>
            </h2>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(250,250,250,0.4)", maxWidth: "400px", lineHeight: 1.7 }}>
              Download or view presentation slides for each CSPT lesson.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "10px" }}>
          {lessons.map((lesson) => {
            const accent = accents[(lesson.id - 1) % 3];
            return (
              <div key={lesson.id} className="panel" style={{ padding: "0", overflow: "hidden" }}>
                {/* Top color band */}
                <div style={{
                  height: "64px", background: accent.bg, border: "none",
                  borderBottom: `1px solid ${accent.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.6rem", position: "relative", overflow: "hidden",
                }}>
                  <div className="grid-lines" style={{ opacity: 0.5 }} />
                  <span style={{ position: "relative", zIndex: 1 }}>{lesson.icon}</span>
                  {/* Big watermark */}
                  <span style={{
                    position: "absolute", right: "-4px", bottom: "-8px",
                    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2.6rem",
                    color: "rgba(255,255,255,0.06)", lineHeight: 1, letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}>{String(lesson.id).padStart(2, "0")}</span>
                </div>

                {/* Content */}
                <div style={{ padding: "14px" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: accent.text, letterSpacing: "0.06em" }}>
                    Lesson {String(lesson.id).padStart(2, "0")}
                  </span>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "13px",
                    color: "#FAFAFA", margin: "4px 0 14px", lineHeight: 1.25,
                  }}>{lesson.shortTitle}</h3>

                  <button style={{
                    width: "100%", padding: "9px", borderRadius: "5px", cursor: "pointer",
                    fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em",
                    background: accent.bg, border: `1px solid ${accent.border}`, color: accent.text,
                    transition: "all 0.18s",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = accent.primary;
                      e.currentTarget.style.color = "#080808";
                      e.currentTarget.style.fontWeight = "600";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = accent.bg;
                      e.currentTarget.style.color = accent.text;
                      e.currentTarget.style.fontWeight = "500";
                    }}
                  >
                    ↓ Download PPT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}