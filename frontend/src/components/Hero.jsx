import React from "react";

export default function Hero({ onOpenDrawer }) {
  const stats = [
    { value: "16", label: "Lessons" },
    { value: "3rd", label: "Year Level" },
    { value: "S3A", label: "Section" },
    { value: "2024", label: "Academic Year" },
  ];

  const chips = [
    { icon: "🖥️", label: "Hardware", style: { top: "14%", left: "8%" } },
    { icon: "🤖", label: "AI & ML", style: { top: "22%", right: "6%" } },
    { icon: "☁️", label: "Cloud", style: { bottom: "28%", left: "5%" } },
    { icon: "🔐", label: "Security", style: { bottom: "20%", right: "9%" } },
    { icon: "🌐", label: "Web", style: { top: "58%", left: "2%" } },
    { icon: "📡", label: "IoT", style: { top: "45%", right: "3%" } },
  ];

  return (
    <section id="home" className="dot-grid" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      paddingTop: "62px", position: "relative", overflow: "hidden",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    }}>
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: "700px", height: "700px", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(157,86,255,0.16) 0%, transparent 65%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", top: "15%", right: "-5%",
        width: "400px", height: "400px", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(244,114,182,0.13) 0%, transparent 65%)",
        borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "320px", height: "320px", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(254,243,199,0.09) 0%, transparent 65%)",
        borderRadius: "50%",
      }} />

      {/* Floating tech chips */}
      {chips.map((c) => (
        <div key={c.label} className="float-anim" style={{
          position: "absolute", ...c.style,
          background: "rgba(26,26,34,0.9)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.16)", borderRadius: "999px",
          padding: "7px 14px", display: "flex", alignItems: "center", gap: "7px",
          fontSize: "12px", fontFamily: "'DM Mono', monospace", color: "rgba(240,240,248,0.75)",
          pointerEvents: "none",
        }}>
          <span>{c.icon}</span><span>{c.label}</span>
        </div>
      ))}

      {/* Main content */}
      <div style={{ maxWidth: "860px", width: "100%", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div className="fade-up" style={{ marginBottom: "28px", display: "flex", justifyContent: "center" }}>
          <span className="tag tag-purple">BSIT-S3A · AY 2024–2025</span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-1" style={{
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          color: "#F0F0F8", letterSpacing: "-0.03em", lineHeight: 1.02, marginBottom: "24px",
        }}>
          Computer System{" "}
          <span style={{
            background: "linear-gradient(135deg, #9D56FF 0%, #F472B6 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>& Platform</span>
          <br />Technologies
        </h1>

        {/* Sub */}
        <p className="fade-up-2" style={{
          fontSize: "15px", color: "rgba(240,240,248,0.68)", maxWidth: "560px",
          margin: "0 auto 36px", lineHeight: 1.75, fontFamily: "'DM Mono', monospace",
        }}>
          Your complete learning hub for BSIT 3rd Year — 16 comprehensive lessons spanning hardware fundamentals to cutting-edge AI, IoT, and cloud platforms.
        </p>

        {/* CTAs */}
        <div className="fade-up-3" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}>
          <button onClick={onOpenDrawer} className="btn btn-primary">
            <span>📚</span> Browse Lessons
          </button>
          <a href="#lesson-1" className="btn btn-outline">
            <span>▶</span> Start Learning
          </a>
        </div>

        {/* Stats bar */}
        <div className="fade-up-4" style={{
          display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0",
          background: "rgba(26,26,34,0.85)", border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "10px", overflow: "hidden", backdropFilter: "blur(12px)",
          maxWidth: "560px", margin: "0 auto",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              flex: "1 1 120px", padding: "20px 16px", textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem",
                background: i % 2 === 0
                  ? "linear-gradient(135deg, #9D56FF, #F472B6)"
                  : "linear-gradient(135deg, #F472B6, #FEF3C7)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                letterSpacing: "-0.03em", lineHeight: 1,
              }}>{s.value}</div>
              <div style={{ fontSize: "10px", fontFamily: "'DM Mono', monospace", color: "rgba(240,240,248,0.5)", letterSpacing: "0.08em", marginTop: "4px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,240,248,0.35)", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, rgba(157,86,255,0.7), transparent)" }} />
      </div>
    </section>
  );
}