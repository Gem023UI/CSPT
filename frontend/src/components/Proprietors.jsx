import React from "react";

const proprietors = [
  { name: "Proprietor 1", role: "Subject Matter Expert", icon: "👨‍💻", grad: "linear-gradient(135deg,#0d3b4e,#1a5a75)" },
  { name: "Proprietor 2", role: "Content Developer",    icon: "👩‍💻", grad: "linear-gradient(135deg,#D43828,#F27800)" },
  { name: "Proprietor 3", role: "Platform Designer",    icon: "🧑‍🎨", grad: "linear-gradient(135deg,#F27800,#FCB819)" },
  { name: "Proprietor 4", role: "Systems Architect",    icon: "👩‍🔬", grad: "linear-gradient(135deg,#0d3b4e,#D43828)" },
];

export default function Proprietors() {
  return (
    <section id="proprietors" style={{ padding: "72px 0", background: "rgba(13,59,78,0.025)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="lesson-badge mb-4 inline-block">The Team</span>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#0d3b4e", letterSpacing: "-0.03em" }}>
            Meet the{" "}
            <span style={{ background: "linear-gradient(135deg,#D43828,#F27800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Proprietors
            </span>
          </h2>
          <p style={{ color: "rgba(13,59,78,0.65)", fontSize: "14px", maxWidth: "440px", margin: "0 auto", lineHeight: 1.75 }}>
            The BSIT-S3A students behind this comprehensive CSPT learning resource.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          {proprietors.map((p, i) => (
            <div key={i} className="clay-card" style={{ padding: "24px 18px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", background: "rgba(255,255,255,0.7)" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: p.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "12px", border: "3px solid rgba(255,255,255,0.55)", boxShadow: "4px 4px 0 rgba(0,0,0,0.1)" }}>
                {p.icon}
              </div>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#0d3b4e", marginBottom: "4px" }}>{p.name}</p>
              <p style={{ fontSize: "11px", color: "rgba(13,59,78,0.5)", marginBottom: "12px" }}>{p.role}</p>
              <div style={{ width: "36px", height: "3px", borderRadius: "3px", background: p.grad }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
