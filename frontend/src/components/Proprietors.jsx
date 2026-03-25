import React from "react";
import { useNavigate } from "react-router-dom";

export default function Proprietors() {
  const navigate = useNavigate();

  const handleViewProprietors = () => {
    navigate("/proprietors");
  };

  return (
    <section id="proprietors" style={{
      padding: "80px 28px",
      background: "linear-gradient(135deg, rgba(157,86,255,0.12) 0%, rgba(244,114,182,0.08) 100%)",
      borderTop: "1px solid rgba(157,86,255,0.2)",
      borderBottom: "1px solid rgba(244,114,182,0.15)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "40px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Meet the Team</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)", color: "#F0F0F8", 
            letterSpacing: "-0.03em", lineHeight: 1.05,
            marginBottom: "16px"
          }}>
            Project{" "}
            <span style={{ background: "linear-gradient(135deg, #9D56FF, #F472B6)", 
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Proprietors
            </span>
          </h2>
          <p style={{ 
            fontFamily: "'DM Mono', monospace", 
            fontSize: "14px", 
            color: "rgba(240,240,248,0.65)", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: 1.75
          }}>
            The dedicated individuals behind this comprehensive learning resource
          </p>
        </div>
        
        <button
          onClick={handleViewProprietors}
          style={{
            background: "linear-gradient(135deg, #9D56FF, #F472B6)",
            border: "none",
            padding: "14px 32px",
            borderRadius: "40px",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#0f0f12",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 4px 15px rgba(157,86,255,0.3)",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(157,86,255,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(157,86,255,0.3)";
          }}
        >
          View All Proprietors
          <span style={{ fontSize: "18px" }}>→</span>
        </button>
      </div>
    </section>
  );
}