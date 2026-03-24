import React from "react";
import { lessons } from "../data/lessons";

export default function PPTCompilation() {
  return (
    <section id="ppt-compilation" className="py-20" style={{ background: "rgba(13,59,78,0.04)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="lesson-badge mb-4 inline-block">Resources</span>
          <h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0d3b4e", letterSpacing: "-0.03em" }}
          >
            PPT Compilation
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(13,59,78,0.65)" }}>
            Download or view the presentation slides for each lesson in the Computer System &amp; Platform Technologies course.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lessons.map((lesson) => {
            const colors = [
              "linear-gradient(135deg, #0d3b4e, #1a5a75)",
              "linear-gradient(135deg, #D43828, #F27800)",
              "linear-gradient(135deg, #F27800, #FCB819)",
            ];
            const bg = colors[(lesson.id - 1) % 3];

            return (
              <div
                key={lesson.id}
                className="clay-card p-4 flex flex-col"
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                <div
                  style={{
                    height: "70px",
                    borderRadius: "12px",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    marginBottom: "10px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute", bottom: -8, right: -5,
                    fontSize: "2.5rem", fontWeight: 900,
                    color: "rgba(255,255,255,0.1)",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1,
                  }}>
                    {String(lesson.id).padStart(2, "0")}
                  </div>
                  <span style={{ position: "relative", zIndex: 1 }}>{lesson.icon}</span>
                </div>

                <p className="text-xs font-bold mb-1" style={{ color: "#FCB819" }}>
                  Lesson {String(lesson.id).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold mb-3 leading-tight flex-1" style={{ color: "#0d3b4e" }}>
                  {lesson.shortTitle}
                </p>

                <button
                  className="clay-btn text-xs font-semibold py-2 w-full text-center"
                  style={{
                    background: bg,
                    color: "white",
                    border: "2px solid rgba(255,255,255,0.3)",
                  }}
                >
                  📥 Download PPT
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
