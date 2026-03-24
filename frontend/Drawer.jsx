import React from "react";
import { lessons } from "../data/lessons";

export default function Drawer({ isOpen, onClose }) {
  const handleLinkClick = (href) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* DaisyUI Drawer overlay */}
      <div className={`drawer ${isOpen ? "drawer-open" : ""}`} style={{ position: "fixed", inset: 0, zIndex: 9998, pointerEvents: isOpen ? "all" : "none" }}>
        {/* Overlay */}
        {isOpen && (
          <div
            className="drawer-overlay"
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(13,59,78,0.45)",
              backdropFilter: "blur(4px)",
              zIndex: 9998,
            }}
          />
        )}

        {/* Drawer panel */}
        <aside
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: "320px",
            zIndex: 9999,
            background: "rgba(253,248,240,0.97)",
            backdropFilter: "blur(20px)",
            borderRight: "3px solid rgba(13,59,78,0.15)",
            boxShadow: "8px 0 40px rgba(13,59,78,0.2)",
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {/* Drawer Header */}
          <div
            style={{
              padding: "20px 20px 16px",
              borderBottom: "2px solid rgba(13,59,78,0.1)",
              background: "linear-gradient(135deg, #0d3b4e 0%, #1a5a75 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative blob */}
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 120, height: 120,
              background: "radial-gradient(circle, rgba(252,184,25,0.3), transparent 70%)",
              borderRadius: "50%",
            }} />

            <div className="flex items-center justify-between relative z-10">
              <div>
                <div className="lesson-badge mb-2">BSIT-S3A</div>
                <h2 className="font-bold text-white text-lg leading-tight">
                  CSPT Lessons
                </h2>
                <p className="text-xs mt-0.5" style={{ color: "#FCB819" }}>
                  Computer System &amp; Platform Technologies
                </p>
              </div>
              <button
                onClick={onClose}
                className="clay-btn px-3 py-2 text-white font-bold text-lg"
                style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.25)" }}
                aria-label="Close drawer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lesson Navigation */}
          <nav className="flex-1 py-4 px-3">
            <p className="text-xs font-semibold uppercase tracking-widest px-2 mb-3" style={{ color: "#F27800" }}>
              Navigate Lessons
            </p>
            <ul className="space-y-1.5">
              {lessons.map((lesson) => (
                <li key={lesson.id}>
                  <button
                    onClick={() => handleLinkClick(lesson.href)}
                    className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 group"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      border: "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(13,59,78,0.07)";
                      e.currentTarget.style.border = "2px solid rgba(13,59,78,0.15)";
                      e.currentTarget.style.boxShadow = "3px 3px 0px rgba(13,59,78,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.border = "2px solid transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl text-lg"
                      style={{
                        background: lesson.id % 3 === 0
                          ? "linear-gradient(135deg, #F27800, #FCB819)"
                          : lesson.id % 3 === 1
                          ? "linear-gradient(135deg, #0d3b4e, #1a5a75)"
                          : "linear-gradient(135deg, #D43828, #F27800)",
                        border: "2px solid rgba(255,255,255,0.5)",
                        boxShadow: "3px 3px 0px rgba(0,0,0,0.12)",
                      }}
                    >
                      {lesson.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-bold"
                          style={{ color: "#FCB819" }}
                        >
                          {String(lesson.id).padStart(2, "0")}
                        </span>
                        <span
                          className="text-sm font-semibold truncate"
                          style={{ color: "#0d3b4e" }}
                        >
                          {lesson.shortTitle}
                        </span>
                      </div>
                    </div>
                    <span style={{ color: "#D43828", fontSize: "14px" }}>→</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div
            className="px-4 py-4"
            style={{ borderTop: "2px solid rgba(13,59,78,0.1)" }}
          >
            <div className="flex gap-2">
              <a
                href="#ppt-compilation"
                onClick={() => { onClose(); }}
                className="clay-btn flex-1 text-center text-xs font-semibold py-2"
                style={{ background: "rgba(13,59,78,0.08)", color: "#0d3b4e", border: "2px solid rgba(13,59,78,0.2)" }}
              >
                PPT Compilation
              </a>
              <a
                href="#proprietors"
                onClick={() => { onClose(); }}
                className="clay-btn flex-1 text-center text-xs font-semibold py-2 text-white"
                style={{ background: "linear-gradient(135deg, #D43828, #F27800)", border: "2px solid rgba(255,255,255,0.3)" }}
              >
                Proprietors
              </a>
            </div>
            <p className="text-center text-xs mt-3" style={{ color: "rgba(13,59,78,0.4)" }}>
              © 2025 BSIT-S3A · All rights reserved
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
