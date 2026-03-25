import React, { useState } from "react";
import { proprietors, groupInfo } from "../data/proprietors";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";

const accentCycle = [
  {
    primary: "#9D56FF",
    secondary: "#c4a0ff",
    bg: "rgba(157,86,255,0.15)",
    border: "rgba(157,86,255,0.4)",
    glow: "rgba(157,86,255,0.25)",
  },
  {
    primary: "#F472B6",
    secondary: "#f9a8d4",
    bg: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.35)",
    glow: "rgba(244,114,182,0.2)",
  },
  {
    primary: "#FEF3C7",
    secondary: "#fde68a",
    bg: "rgba(254,243,199,0.1)",
    border: "rgba(254,243,199,0.3)",
    glow: "rgba(254,243,199,0.15)",
  },
];

function ProprietorCard({ proprietor, index }) {
  const [hovered, setHovered] = useState(false);
  const accent = accentCycle[index % 3];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a22",
        border: hovered
          ? "1px solid " + accent.border
          : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(0,0,0,0.4), 0 0 0 1px " + accent.border
          : "none",
        position: "relative",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, " +
            accent.primary +
            ", " +
            accent.secondary +
            ")",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "200px",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, " + accent.glow + " 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s",
          borderRadius: "50%",
        }}
      />

      <div style={{ padding: "28px", position: "relative", zIndex: 1 }}>
        {/* Profile image + number */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: hovered
                  ? "2px solid " + accent.primary
                  : "2px solid rgba(255,255,255,0.15)",
                overflow: "hidden",
                transition: "border-color 0.3s",
                boxShadow: hovered ? "0 0 20px " + accent.glow : "none",
              }}
            >
              <img
                src={proprietor.profileImage}
                alt={proprietor.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Index badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-4px",
                right: "-4px",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: accent.bg,
                border: "1px solid " + accent.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                color: accent.secondary,
                fontWeight: 700,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "17px",
                color: "#F0F0F8",
                marginBottom: "4px",
                lineHeight: 1.2,
              }}
            >
              {proprietor.name}
            </h3>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "3px 10px",
                borderRadius: "999px",
                background: accent.bg,
                border: "1px solid " + accent.border,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: accent.secondary,
                  letterSpacing: "0.05em",
                }}
              >
                {proprietor.role}
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "rgba(240,240,248,0.68)",
            lineHeight: 1.75,
            marginBottom: "20px",
            borderLeft: "2px solid " + accent.border,
            paddingLeft: "12px",
          }}
        >
          {proprietor.bio}
        </p>

        {/* Social links
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {proprietor (
            <a
              href={proprietor}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                borderRadius: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.05em",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(240,240,248,0.7)",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent.border;
                e.currentTarget.style.color = accent.secondary;
                e.currentTarget.style.background = accent.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(240,240,248,0.7)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              ⌥ GitHub ↗
            </a>
          )}
          {proprietor.socialLinks.linkedin && (
            <a
              href={proprietor.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                borderRadius: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.05em",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(240,240,248,0.7)",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent.border;
                e.currentTarget.style.color = accent.secondary;
                e.currentTarget.style.background = accent.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(240,240,248,0.7)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              ⌥ LinkedIn ↗
            </a>
          )}
          {proprietor.socialLinks.email && (
            <a
              href={"mailto:" + proprietor.socialLinks.email}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                borderRadius: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.05em",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(240,240,248,0.7)",
                textDecoration: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = accent.border;
                e.currentTarget.style.color = accent.secondary;
                e.currentTarget.style.background = accent.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "rgba(240,240,248,0.7)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              ✉ Email
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default function ProprietorsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const stats = [
    { value: String(proprietors.length), label: "Contributors" },
    { value: "16", label: "Lessons Built" },
    { value: groupInfo.section, label: "Section" },
    { value: groupInfo.year, label: "Year" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f12", color: "#F0F0F8" }}>
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="dot-grid"
        style={{
          paddingTop: "130px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px",
            height: "600px",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(157,86,255,0.14) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(244,114,182,0.1) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 28px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              marginBottom: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(157,86,255,0.55)",
                background: "rgba(157,86,255,0.2)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c4a0ff",
              }}
            >
              👥 {groupInfo.section} · {groupInfo.course}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#F0F0F8",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Meet the{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #9D56FF 0%, #F472B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Proprietors
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "14px",
              color: "rgba(240,240,248,0.65)",
              maxWidth: "560px",
              margin: "0 auto 48px",
              lineHeight: 1.75,
              textAlign: "center",
            }}
          >
            The dedicated team of BSIT 3rd Year students who researched,
            designed, and built this comprehensive learning resource for{" "}
            {groupInfo.course}.
          </p>

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              background: "rgba(26,26,34,0.85)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "10px",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: "1 1 120px",
                  padding: "20px 16px",
                  textAlign: "center",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, #9D56FF, #F472B6)"
                        : "linear-gradient(135deg, #F472B6, #FEF3C7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    fontFamily: "'DM Mono', monospace",
                    color: "rgba(240,240,248,0.5)",
                    letterSpacing: "0.08em",
                    marginTop: "4px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proprietors Grid ──────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 28px",
          }}
        >
          {/* Section label */}
          <div style={{ marginBottom: "48px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "2px 10px",
                borderRadius: "999px",
                border: "1px solid rgba(157,86,255,0.5)",
                background: "rgba(157,86,255,0.15)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#c4a0ff",
                marginBottom: "12px",
                display: "block",
              }}
            >
              Contributors
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "#F0F0F8",
                }}
              >
                The{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #9D56FF, #F472B6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Team
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px",
                  color: "rgba(240,240,248,0.6)",
                  maxWidth: "400px",
                  lineHeight: 1.7,
                }}
              >
                {groupInfo.institution} · {groupInfo.course} · AY{" "}
                {groupInfo.year}
              </p>
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {proprietors.map((proprietor, index) => (
              <ProprietorCard
                key={proprietor.id}
                proprietor={proprietor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Group info banner ─────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background:
            "linear-gradient(135deg, rgba(157,86,255,0.08) 0%, rgba(244,114,182,0.06) 100%)",
          padding: "48px 28px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  background: "linear-gradient(135deg, #9D56FF, #F472B6)",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                }}
              >
                💻
              </div>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "15px",
                  color: "#F0F0F8",
                }}
              >
                CSPT
              </span>
            </div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "rgba(240,240,248,0.55)",
                lineHeight: 1.7,
              }}
            >
              {groupInfo.course}
              <br />
              {groupInfo.section} · {groupInfo.institution}
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <a
              href="/"
              style={{
                padding: "9px 20px",
                borderRadius: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.05em",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(240,240,248,0.75)",
                textDecoration: "none",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
                e.currentTarget.style.color = "#F0F0F8";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.color = "rgba(240,240,248,0.75)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              ← Back to Home
            </a>
            <a
              href="/#lessons"
              style={{
                padding: "9px 20px",
                borderRadius: "6px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                background: "#9D56FF",
                color: "#0f0f12",
                textDecoration: "none",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#b07aff";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(157,86,255,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#9D56FF";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Browse Lessons →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}