import React from "react";
import { lessons } from "../data/lessons";

export default function LessonOverview({ onNavigate }) {
  return (
    <section className="py-20" style={{ background: "rgba(13,59,78,0.03)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="lesson-badge mb-4 inline-block">All Lessons</span>
          <h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0d3b4e", letterSpacing: "-0.03em" }}
          >
            What You'll Learn
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(13,59,78,0.65)" }}>
            16 comprehensive lessons spanning the full spectrum of computer systems and platform technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map((lesson) => {
            const colors = [
              { gradient: "linear-gradient(135deg, #0d3b4e, #1a5a75)", light: "rgba(13,59,78,0.07)", border: "rgba(13,59,78,0.18)" },
              { gradient: "linear-gradient(135deg, #D43828, #F27800)", light: "rgba(212,56,40,0.07)", border: "rgba(212,56,40,0.18)" },
              { gradient: "linear-gradient(135deg, #F27800, #FCB819)", light: "rgba(242,120,0,0.07)", border: "rgba(242,120,0,0.18)" },
            ];
            const palette = colors[(lesson.id - 1) % 3];

            return (
              <div
                key={lesson.id}
                className="clay-card p-5 flex flex-col"
                style={{ background: "rgba(255,255,255,0.7)", cursor: "pointer" }}
                onClick={() => onNavigate(lesson.href)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: palette.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    flexShrink: 0,
                    border: "2px solid rgba(255,255,255,0.4)",
                    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
                  }}>
                    {lesson.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold" style={{ color: "#FCB819" }}>
                      {String(lesson.id).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-sm leading-tight" style={{ color: "#0d3b4e" }}>
                      {lesson.shortTitle}
                    </h3>
                  </div>
                </div>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "rgba(13,59,78,0.6)" }}>
                  {lesson.description.slice(0, 90)}…
                </p>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs font-bold" style={{ color: "#D43828" }}>View →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
