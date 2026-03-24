import React from "react";
import { lessons } from "../data/lessons";

const accentColors = [
  { border: "rgba(157,86,255,0.55)", bg: "rgba(157,86,255,0.25)", text: "#c4a0ff" },
  { border: "rgba(244,114,182,0.35)", bg: "rgba(244,114,182,0.12)", text: "#F472B6" },
  { border: "rgba(254,243,199,0.28)", bg: "rgba(254,243,199,0.08)", text: "#FEF3C7" },
];

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
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed", inset: 0, zIndex: 9998,
            background: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(6px)",
          }}
        />
      )}

      {/* Drawer panel */}
      <aside style={{
        position: "fixed", top: 0, left: 0, bottom: 0, width: "300px",
        zIndex: 9999,
        background: "#1a1a22",
        borderRight: "1px solid rgba(255,255,255,0.15)",
        boxShadow: isOpen ? "12px 0 48px rgba(0,0,0,0.6)" : "none",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column", overflowY: "auto",
      }}>

        {/* Header */}
        <div style={{
          padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.13)",
          background: "linear-gradient(160deg, rgba(157,86,255,0.22) 0%, transparent 60%)",
          position: "relative",
        }}>
          {/* Glow dot */}
          <div style={{
            position: "absolute", top: "18px", right: "18px",
            width: "6px", height: "6px", borderRadius: "50%", background: "#9D56FF",
            boxShadow: "0 0 10px rgba(139,60,247,0.8)",
          }} />

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "2px 9px", borderRadius: "999px",
                border: "1px solid rgba(157,86,255,0.55)", background: "rgba(157,86,255,0.22)",
                fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#c4a0ff", marginBottom: "10px",
              }}>BSIT-S3A</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "17px", color: "#F0F0F8", marginBottom: "3px" }}>
                CSPT Lessons
              </h2>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.65)", letterSpacing: "0.04em" }}>
                Computer System & Platform Technologies
              </p>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "6px", color: "rgba(240,240,248,0.75)", padding: "6px 9px",
                cursor: "pointer", fontSize: "14px", transition: "all 0.15s", marginTop: "2px",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#F0F0F8"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(240,240,248,0.75)"; }}
              aria-label="Close drawer"
            >✕</button>
          </div>
        </div>

        {/* Lesson nav */}
        <nav style={{ flex: 1, padding: "14px 12px" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,240,248,0.5)", padding: "4px 8px 10px" }}>
            Navigate Lessons
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
            {lessons.map((lesson) => {
              const accent = accentColors[(lesson.id - 1) % 3];
              return (
                <li key={lesson.id}>
                  <button
                    onClick={() => handleLinkClick(lesson.href)}
                    style={{
                      width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "10px",
                      padding: "8px 10px", borderRadius: "7px",
                      background: "transparent", border: "1px solid transparent",
                      cursor: "pointer", transition: "all 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; }}
                  >
                    {/* Icon */}
                    <span style={{
                      flexShrink: 0, width: "32px", height: "32px",
                      borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "15px", background: accent.bg, border: `1px solid ${accent.border}`,
                    }}>{lesson.icon}</span>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: accent.text, letterSpacing: "0.05em" }}>
                          {String(lesson.id).padStart(2, "0")}
                        </span>
                        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "12px", color: "#F0F0F8", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {lesson.shortTitle}
                        </span>
                      </div>
                    </div>
                    <span style={{ color: "rgba(240,240,248,0.45)", fontSize: "12px" }}>›</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div style={{ padding: "14px", borderTop: "1px solid rgba(255,255,255,0.13)" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
            <a href="#ppt-compilation" onClick={onClose} style={{
              flex: 1, textAlign: "center", padding: "9px", borderRadius: "6px",
              fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
              border: "1px solid rgba(255,255,255,0.16)", color: "rgba(240,240,248,0.75)", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#F0F0F8"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.color = "rgba(240,240,248,0.75)"; }}
            >PPT Slides</a>
            <a href="#proprietors" onClick={onClose} style={{
              flex: 1, textAlign: "center", padding: "9px", borderRadius: "6px",
              fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em",
              background: "#F472B6", color: "#0f0f12", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f990c8"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#F472B6"; }}
            >Proprietors</a>
          </div>
          <p style={{ textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,240,248,0.45)", letterSpacing: "0.06em" }}>
            © 2025 BSIT-S3A · All rights reserved
          </p>
        </div>
      </aside>
    </>
  );
}