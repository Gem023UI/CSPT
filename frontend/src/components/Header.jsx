import React, { useState, useEffect } from "react";

export default function Header({ onOpenDrawer }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Lessons", href: "#lessons" },
    { label: "Resources", href: "#ppt-compilation" },
    { label: "Team", href: "#proprietors" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000,
      height: "62px", display: "flex", alignItems: "center", padding: "0 28px",
      background: scrolled ? "rgba(15,15,18,0.97)" : "rgba(15,15,18,0.75)",
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.12)" : "transparent"}`,
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Left: hamburger + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={onOpenDrawer}
            aria-label="Open navigation"
            style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "6px", padding: "7px 8px", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: "4px", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(157,86,255,0.6)"; e.currentTarget.style.background = "rgba(157,86,255,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          >
            <span style={{ display: "block", width: "15px", height: "1.5px", background: "#F0F0F8", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "11px", height: "1.5px", background: "rgba(240,240,248,0.6)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "15px", height: "1.5px", background: "#F0F0F8", borderRadius: "2px" }} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div style={{
              width: "26px", height: "26px",
              background: "linear-gradient(135deg, #9D56FF, #F472B6)",
              borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px",
            }}>💻</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "14px", letterSpacing: "0.01em", color: "#F0F0F8" }}>CSPT</span>
            <span className="hide-mobile" style={{
              fontFamily: "'DM Mono', monospace", fontSize: "10px",
              color: "rgba(240,240,248,0.45)", letterSpacing: "0.08em",
              paddingLeft: "10px", borderLeft: "1px solid rgba(255,255,255,0.15)",
            }}>BSIT-S3A · AY 2024–2025</span>
          </div>
        </div>

        {/* Center nav */}
        <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
              color: "rgba(240,240,248,0.62)", padding: "6px 13px", borderRadius: "4px", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#F0F0F8"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(240,240,248,0.62)"; e.currentTarget.style.background = "transparent"; }}
            >{label}</a>
          ))}
        </nav>

        {/* Right: CTAs */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <a href="#ppt-compilation" className="hide-mobile" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
            color: "rgba(240,240,248,0.7)", padding: "7px 14px", borderRadius: "5px",
            border: "1px solid rgba(255,255,255,0.18)", transition: "all 0.18s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"; e.currentTarget.style.color = "#F0F0F8"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(240,240,248,0.7)"; e.currentTarget.style.background = "transparent"; }}
          >PPT Slides</a>
          <a href="#proprietors" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
            color: "#0f0f12", padding: "7px 14px", borderRadius: "5px",
            background: "#F472B6", fontWeight: 600, transition: "all 0.18s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f990c8"; e.currentTarget.style.boxShadow = "0 0 18px rgba(244,114,182,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#F472B6"; e.currentTarget.style.boxShadow = "none"; }}
          >The Team</a>
        </div>
      </div>
    </header>
  );
}