import React from "react";
import { lessons } from "../data/lessons";

export default function Footer() {
  const col1 = lessons.slice(0, 8);
  const col2 = lessons.slice(8, 16);

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0d3b4e 0%, #0a2d3d 100%)",
        borderTop: "3px solid rgba(252,184,25,0.3)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: -80, right: -60,
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(252,184,25,0.12), transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 250, height: 250,
        background: "radial-gradient(circle, rgba(212,56,40,0.1), transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="clay-btn px-3 py-1.5 text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "linear-gradient(135deg, #FCB819, #F27800)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                BSIT-S3A
              </div>
            </div>
            <h3 className="font-black text-xl mb-3 text-white leading-tight">
              Computer System &amp; Platform Technologies
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              A curated learning resource for BSIT 3rd Year students covering 16 comprehensive
              lessons on computing systems, platforms, and emerging technologies.
            </p>

            {/* Color palette chips */}
            <div className="flex gap-2 mt-5">
              {["#0d3b4e", "#D43828", "#F27800", "#FCB819", "#F4E2B7"].map((c) => (
                <div key={c} style={{
                  width: 24, height: 24, borderRadius: "50%",
                  background: c,
                  border: "2px solid rgba(255,255,255,0.2)",
                  boxShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                }} />
              ))}
            </div>
          </div>

          {/* Lesson Links Col 1 */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "#FCB819" }}>
              Lessons 01–08
            </h4>
            <ul className="space-y-2">
              {col1.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    className="text-sm flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Poppins', sans-serif" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#FCB819"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                  >
                    <span>{l.icon}</span>
                    <span>{l.shortTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lesson Links Col 2 */}
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider" style={{ color: "#FCB819" }}>
              Lessons 09–16
            </h4>
            <ul className="space-y-2">
              {col2.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    className="text-sm flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Poppins', sans-serif" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#FCB819"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                  >
                    <span>{l.icon}</span>
                    <span>{l.shortTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2025 BSIT-S3A · Computer System &amp; Platform Technologies · All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#home" className="text-xs font-semibold" style={{ color: "#FCB819" }}>
              ↑ Back to Top
            </a>
            <a href="#ppt-compilation" className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              PPT Compilation
            </a>
            <a href="#proprietors" className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Proprietors
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
