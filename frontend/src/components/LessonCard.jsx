import React from "react";

const accents = {
  "#0d3b4e": { primary: "#8B3CF7", secondary: "#c4a0ff", bg: "rgba(139,60,247,0.1)",  border: "rgba(139,60,247,0.3)",  glow: "rgba(139,60,247,0.2)"  },
  "#D43828": { primary: "#F472B6", secondary: "#f9a8d4", bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.28)", glow: "rgba(244,114,182,0.18)" },
  "#F27800": { primary: "#FEF3C7", secondary: "#fde68a", bg: "rgba(254,243,199,0.07)", border: "rgba(254,243,199,0.22)", glow: "rgba(254,243,199,0.12)" },
};

export default function LessonCard({ lesson, isReversed, onNavigate }) {
  const pal = accents[lesson.color] || accents["#0d3b4e"];

  return (
    <section
      id={`lesson-${lesson.id}`}
      style={{
        padding: "72px 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative", overflow: "hidden",
        background: isReversed ? "rgba(255,255,255,0.012)" : "transparent",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "50%", [isReversed ? "right" : "left"]: "-100px",
        transform: "translateY(-50%)",
        width: "400px", height: "400px", pointerEvents: "none",
        background: `radial-gradient(circle, ${pal.glow} 0%, transparent 65%)`,
        borderRadius: "50%",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center",
          direction: isReversed ? "rtl" : "ltr",
        }}>

          {/* Visual panel */}
          <div style={{ direction: "ltr" }}>
            <div style={{
              background: "#101010", border: `1px solid ${pal.border}`,
              borderRadius: "12px", overflow: "hidden", position: "relative",
              aspectRatio: "16/10",
              boxShadow: `0 0 40px ${pal.glow}`,
            }}>
              {/* Grid lines */}
              <div className="grid-lines" />

              {/* Big watermark number */}
              <span style={{
                position: "absolute", bottom: "-16px", right: "8px",
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "7rem", lineHeight: 1,
                color: "rgba(255,255,255,0.04)", userSelect: "none",
                letterSpacing: "-0.04em",
              }}>{String(lesson.id).padStart(2, "0")}</span>

              {/* Center content */}
              <div style={{
                position: "relative", zIndex: 1, height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "24px", textAlign: "center",
              }}>
                <div style={{ fontSize: "3.8rem", marginBottom: "14px", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))" }}>
                  {lesson.icon}
                </div>
                <div style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: "999px",
                  background: pal.bg, border: `1px solid ${pal.border}`,
                }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: pal.secondary, letterSpacing: "0.06em" }}>
                    Lesson {String(lesson.id).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: "3px", height: "40px",
                background: `linear-gradient(to bottom, ${pal.primary}, transparent)`,
              }} />
              <div style={{
                position: "absolute", top: 0, left: 0,
                width: "40px", height: "3px",
                background: `linear-gradient(to right, ${pal.primary}, transparent)`,
              }} />
            </div>
          </div>

          {/* Content */}
          <div style={{ direction: "ltr" }}>
            {/* Number + label */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <span style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "3.5rem",
                lineHeight: 1, letterSpacing: "-0.04em",
                background: `linear-gradient(135deg, ${pal.primary}, ${pal.secondary})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{String(lesson.id).padStart(2, "0")}</span>
              <span style={{
                padding: "3px 9px", borderRadius: "999px",
                border: `1px solid ${pal.border}`, background: pal.bg,
                fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em",
                textTransform: "uppercase", color: pal.secondary,
              }}>Lesson</span>
            </div>

            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#FAFAFA",
              letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: "14px",
            }}>{lesson.title}</h2>

            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: "13px",
              color: "rgba(250,250,250,0.5)", lineHeight: 1.75, marginBottom: "22px",
            }}>{lesson.description}</p>

            {/* Topics */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "28px" }}>
              {lesson.topics.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => onNavigate(lesson.href)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "10px 20px", borderRadius: "6px", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 500, letterSpacing: "0.05em",
                background: pal.bg, border: `1px solid ${pal.border}`, color: pal.secondary,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = pal.primary;
                e.currentTarget.style.color = "#080808";
                e.currentTarget.style.borderColor = pal.primary;
                e.currentTarget.style.fontWeight = "600";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = pal.bg;
                e.currentTarget.style.color = pal.secondary;
                e.currentTarget.style.borderColor = pal.border;
                e.currentTarget.style.fontWeight = "500";
              }}
            >
              {lesson.icon} Explore {lesson.shortTitle} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}