import React from "react";

export default function LessonCard({ lesson, isReversed, onNavigate }) {
  const colorMap = {
    "#0d3b4e": { gradient: "linear-gradient(135deg, #0d3b4e, #1a5a75)", light: "rgba(13,59,78,0.08)", border: "rgba(13,59,78,0.2)" },
    "#D43828": { gradient: "linear-gradient(135deg, #D43828, #F27800)", light: "rgba(212,56,40,0.08)", border: "rgba(212,56,40,0.2)" },
    "#F27800": { gradient: "linear-gradient(135deg, #F27800, #FCB819)", light: "rgba(242,120,0,0.08)", border: "rgba(242,120,0,0.2)" },
  };
  const palette = colorMap[lesson.color] || colorMap["#0d3b4e"];

  return (
    <section
      id={`lesson-${lesson.id}`}
      className={`py-16 sm:py-20 ${isReversed ? "lesson-even" : ""}`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background accent blob */}
      <div style={{
        position: "absolute",
        top: "50%",
        [isReversed ? "left" : "right"]: "-80px",
        transform: "translateY(-50%)",
        width: "350px",
        height: "350px",
        background: `radial-gradient(circle, ${palette.light.replace("0.08", "0.18")} 0%, transparent 70%)`,
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}
          style={{ flexDirection: isReversed ? "row-reverse" : "row" }}
        >
          {/* Visual Side */}
          <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
            <div className="clay-card overflow-hidden" style={{ padding: "12px", background: "rgba(255,255,255,0.7)" }}>
              <div
                style={{
                  borderRadius: "14px",
                  aspectRatio: "16/9",
                  background: palette.gradient,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Grid pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }} />

                {/* Lesson number big watermark */}
                <div style={{
                  position: "absolute",
                  bottom: -20,
                  right: -10,
                  fontSize: "8rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.07)",
                  lineHeight: 1,
                  fontFamily: "'Poppins', sans-serif",
                  userSelect: "none",
                }}>
                  {String(lesson.id).padStart(2, "0")}
                </div>

                <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px" }}>
                  <div style={{ fontSize: "4.5rem", marginBottom: "12px", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>
                    {lesson.icon}
                  </div>
                  <div style={{
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "50px",
                    padding: "6px 16px",
                    display: "inline-block",
                  }}>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.02em" }}>
                      Lesson {lesson.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
            {/* Lesson number + badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-black text-5xl"
                style={{
                  background: palette.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}
              >
                {String(lesson.id).padStart(2, "0")}
              </span>
              <span className="lesson-badge">Lesson</span>
            </div>

            <h2
              className="font-black mb-4 leading-tight"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#0d3b4e",
                letterSpacing: "-0.02em",
              }}
            >
              {lesson.title}
            </h2>

            <p
              className="text-base mb-6 leading-relaxed"
              style={{ color: "rgba(13,59,78,0.7)" }}
            >
              {lesson.description}
            </p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-7">
              {lesson.topics.map((topic) => (
                <span
                  key={topic}
                  style={{
                    background: palette.light,
                    color: "#0d3b4e",
                    border: `1.5px solid ${palette.border}`,
                    borderRadius: "50px",
                    padding: "4px 12px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate(lesson.href)}
              className="clay-btn px-6 py-3 text-sm font-bold text-white"
              style={{
                background: palette.gradient,
                border: "2px solid rgba(255,255,255,0.3)",
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
