import React from "react";

const proprietors = [
  { name: "Proprietor 1", role: "Subject Matter Expert", icon: "👨‍💻", accent: { primary: "#9D56FF", bg: "rgba(157,86,255,0.22)", border: "rgba(157,86,255,0.45)", text: "#c4a0ff" } },
  { name: "Proprietor 2", role: "Content Developer",    icon: "👩‍💻", accent: { primary: "#F472B6", bg: "rgba(244,114,182,0.1)",  border: "rgba(244,114,182,0.28)", text: "#F472B6" } },
  { name: "Proprietor 3", role: "Platform Designer",    icon: "🧑‍🎨", accent: { primary: "#FEF3C7", bg: "rgba(254,243,199,0.07)", border: "rgba(254,243,199,0.22)", text: "#FEF3C7" } },
  { name: "Proprietor 4", role: "Systems Architect",    icon: "👩‍🔬", accent: { primary: "#9D56FF", bg: "rgba(157,86,255,0.22)", border: "rgba(157,86,255,0.45)", text: "#c4a0ff" } },
];

export default function Proprietors() {
  return (
    <section id="proprietors" style={{ padding: "88px 0", borderBottom: "1px solid rgba(255,255,255,0.13)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>The Team</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#F0F0F8", letterSpacing: "-0.025em", marginBottom: "12px",
          }}>
            Meet the{" "}
            <span style={{ background: "linear-gradient(135deg, #9D56FF, #F472B6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Proprietors
            </span>
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.75)", maxWidth: "400px", margin: "0 auto", lineHeight: 1.75 }}>
            The BSIT-S3A students behind this comprehensive CSPT learning resource.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
          {proprietors.map((p, i) => (
            <div key={i} className="panel panel-hover" style={{ padding: "28px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0" }}>

              {/* Avatar */}
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                background: p.accent.bg, border: `1px solid ${p.accent.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px", marginBottom: "14px",
                boxShadow: `0 0 20px ${p.accent.bg}`,
              }}>{p.icon}</div>

              {/* Name */}
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F0F0F8", marginBottom: "4px" }}>
                {p.name}
              </p>

              {/* Role */}
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.75)", letterSpacing: "0.04em", marginBottom: "16px" }}>
                {p.role}
              </p>

              {/* Accent bar */}
              <div style={{ width: "28px", height: "2px", borderRadius: "2px", background: p.accent.primary }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}