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
      background: scrolled ? "rgba(8,8,8,0.96)" : "rgba(8,8,8,0.65)",
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Left: hamburger + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={onOpenDrawer}
            aria-label="Open navigation"
            style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px", padding: "7px 8px", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: "4px", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(139,60,247,0.55)"; e.currentTarget.style.background = "rgba(139,60,247,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "transparent"; }}
          >
            <span style={{ display: "block", width: "15px", height: "1.5px", background: "#FAFAFA", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "11px", height: "1.5px", background: "rgba(250,250,250,0.45)", borderRadius: "2px" }} />
            <span style={{ display: "block", width: "15px", height: "1.5px", background: "#FAFAFA", borderRadius: "2px" }} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div style={{
              width: "26px", height: "26px",
              background: "linear-gradient(135deg, #8B3CF7, #F472B6)",
              borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px",
            }}>💻</div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "14px", letterSpacing: "0.01em" }}>CSPT</span>
            <span className="hide-mobile" style={{
              fontFamily: "'DM Mono', monospace", fontSize: "10px",
              color: "rgba(250,250,250,0.3)", letterSpacing: "0.08em",
              paddingLeft: "10px", borderLeft: "1px solid rgba(255,255,255,0.09)",
            }}>BSIT-S3A · AY 2024–2025</span>
          </div>
        </div>

        {/* Center nav */}
        <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
              color: "rgba(250,250,250,0.48)", padding: "6px 13px", borderRadius: "4px", transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#FAFAFA"; e.currentTarget.style.background = "rgba(255,255,255,0.055)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(250,250,250,0.48)"; e.currentTarget.style.background = "transparent"; }}
            >{label}</a>
          ))}
        </nav>

        {/* Right: CTAs */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <a href="#ppt-compilation" className="hide-mobile" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
            color: "rgba(250,250,250,0.55)", padding: "7px 14px", borderRadius: "5px",
            border: "1px solid rgba(255,255,255,0.09)", transition: "all 0.18s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#FAFAFA"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "rgba(250,250,250,0.55)"; }}
          >PPT Slides</a>
          <a href="#proprietors" style={{
            fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.05em",
            color: "#080808", padding: "7px 14px", borderRadius: "5px",
            background: "#F472B6", fontWeight: 600, transition: "all 0.18s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f990c8"; e.currentTarget.style.boxShadow = "0 0 18px rgba(244,114,182,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#F472B6"; e.currentTarget.style.boxShadow = "none"; }}
          >The Team</a>
        </div>
      </div>
    </header>
  );
}