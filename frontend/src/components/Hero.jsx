import React from "react";

const CLOUDINARY_HERO = "https://res.cloudinary.com/dtqrzl2qg/image/upload/v1748930400/hero-tech_sample.jpg";

export default function Hero({ onOpenDrawer }) {
  return (
    <section
      id="home"
      className="blob-bg min-h-screen flex items-center relative"
      style={{ paddingTop: "80px" }}
    >
      {/* Large decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(252,184,25,0.18) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-8%",
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, rgba(242,120,0,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, rgba(212,56,40,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="lesson-badge">BSIT-S3A · AY 2024–2025</span>
            </div>

            <h1
              className="font-black leading-none mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#0d3b4e",
                letterSpacing: "-0.03em",
              }}
            >
              Computer System{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D43828, #F27800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                &amp; Platform
              </span>
              <br />
              Technologies
            </h1>

            <p
              className="text-lg mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(13,59,78,0.7)" }}
            >
              Your complete guide to understanding computing systems—from hardware fundamentals
              to cutting-edge AI and IoT platforms. Explore 16 comprehensive lessons curated for BSIT students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={onOpenDrawer}
                className="clay-btn px-7 py-3 text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #0d3b4e, #1a5a75)",
                  border: "2px solid rgba(255,255,255,0.25)",
                }}
              >
                📚 Browse Lessons
              </button>
              <a
                href="#lesson-1"
                className="clay-btn px-7 py-3 text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #FCB819, #F27800)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.4)",
                }}
              >
                🚀 Start Learning
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4">
              {[
                { number: "16", label: "Lessons" },
                { number: "3rd", label: "Year — S3A" },
                { number: "2024", label: "Academic Year" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="clay-card px-5 py-3 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                >
                  <span
                    className="font-black text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #D43828, #F27800)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#0d3b4e" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main clay card visual */}
            <div
              className="float-anim"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
              }}
            >
              {/* Main image card */}
              <div
                className="clay-card overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #0d3b4e 0%, #1a5a75 50%, #0d3b4e 100%)",
                    aspectRatio: "16/10",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Tech grid pattern overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `
                      linear-gradient(rgba(252,184,25,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(252,184,25,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                  }} />
                  <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "8px" }}>💻</div>
                    <p style={{ color: "#FCB819", fontWeight: 700, fontSize: "1.1rem" }}>
                      CSPT Learning Hub
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: "4px" }}>
                      16 Comprehensive Lessons
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating lesson chips */}
              {[
                { icon: "🖥️", label: "Hardware", top: "-18px", left: "20px", bg: "linear-gradient(135deg, #0d3b4e, #1a5a75)" },
                { icon: "🤖", label: "AI", top: "30px", right: "-20px", bg: "linear-gradient(135deg, #D43828, #F27800)" },
                { icon: "☁️", label: "Cloud", bottom: "-15px", left: "30px", bg: "linear-gradient(135deg, #FCB819, #F27800)" },
                { icon: "🔐", label: "Security", bottom: "30px", right: "-15px", bg: "linear-gradient(135deg, #0d3b4e, #D43828)" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    position: "absolute",
                    top: chip.top,
                    bottom: chip.bottom,
                    left: chip.left,
                    right: chip.right,
                    background: chip.bg,
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    border: "2px solid rgba(255,255,255,0.4)",
                    boxShadow: "4px 4px 0px rgba(0,0,0,0.15)",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {chip.icon} {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#lesson-1"
            className="flex flex-col items-center gap-2 text-xs font-semibold"
            style={{ color: "rgba(13,59,78,0.5)" }}
          >
            <span>Scroll to explore</span>
            <div
              style={{
                width: "2px",
                height: "32px",
                background: "linear-gradient(to bottom, rgba(13,59,78,0.3), transparent)",
                borderRadius: "2px",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
