import React from "react";
import { lessons } from "../data/lessons";

export default function Footer() {
  const col1 = lessons.slice(0, 8);
  const col2 = lessons.slice(8, 16);

  return (
    <footer style={{
      background: "#0f0f12",
      borderTop: "1px solid rgba(255,255,255,0.13)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Ambient top glow */}
      <div style={{
        position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)",
        width: "500px", height: "200px", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(157,86,255,0.18) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 28px 32px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "16px" }}>
              <div style={{
                width: "26px", height: "26px",
                background: "linear-gradient(135deg, #9D56FF, #F472B6)",
                borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px",
              }}>💻</div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "15px" }}>CSPT</span>
            </div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "16px",
              color: "#F0F0F8", lineHeight: 1.25, marginBottom: "10px",
            }}>
              Computer System &amp;<br />Platform Technologies
            </h3>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.6)", lineHeight: 1.75, marginBottom: "20px" }}>
              A curated learning resource for BSIT 3rd Year students — 16 comprehensive lessons on computing systems, platforms, and emerging technologies.
            </p>

            {/* Color swatches */}
            <div style={{ display: "flex", gap: "6px" }}>
              {["#0f0f12", "#9D56FF", "#F472B6", "#FEF3C7"].map((c) => (
                <div key={c} style={{
                  width: "18px", height: "18px", borderRadius: "50%", background: c,
                  border: "1px solid rgba(255,255,255,0.15)",
                }} />
              ))}
            </div>
          </div>

          {/* Lessons col 1 */}
          <div>
            <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9D56FF", marginBottom: "16px" }}>
              Lessons 01–08
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {col1.map((l) => (
                <li key={l.id}>
                  <a href={l.href} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    fontFamily: "'DM Mono', monospace", fontSize: "11px",
                    color: "rgba(240,240,248,0.72)", transition: "all 0.15s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#c4a0ff"; e.currentTarget.style.paddingLeft = "4px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,240,248,0.72)"; e.currentTarget.style.paddingLeft = "0"; }}
                  >
                    <span>{l.icon}</span><span>{l.shortTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons col 2 */}
          <div>
            <h4 style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F472B6", marginBottom: "16px" }}>
              Lessons 09–16
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {col2.map((l) => (
                <li key={l.id}>
                  <a href={l.href} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    fontFamily: "'DM Mono', monospace", fontSize: "11px",
                    color: "rgba(240,240,248,0.72)", transition: "all 0.15s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#F472B6"; e.currentTarget.style.paddingLeft = "4px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,240,248,0.72)"; e.currentTarget.style.paddingLeft = "0"; }}
                  >
                    <span>{l.icon}</span><span>{l.shortTitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,240,248,0.5)", letterSpacing: "0.06em" }}>
            © 2025 BSIT-S3A · Computer System &amp; Platform Technologies · All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a href="#home" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#9D56FF", letterSpacing: "0.06em", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#c4a0ff"}
              onMouseLeave={e => e.currentTarget.style.color = "#9D56FF"}
            >↑ Back to Top</a>
            <a href="#ppt-compilation" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,240,248,0.6)", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(240,240,248,0.75)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(240,240,248,0.6)"}
            >PPT Compilation</a>
            <a href="#proprietors" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,240,248,0.6)", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(240,240,248,0.75)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(240,240,248,0.6)"}
            >Proprietors</a>
          </div>
        </div>
      </div>
    </footer>
  );
}