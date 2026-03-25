import React, { useState } from "react";

// ── Quiz Modal ──────────────────────────────────────────────────────────────
function QuizModal({ questions, answerKey, onClose }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const isLast = current === total - 1;

  const handleSelect = (opt) => {
    if (finished) return;
    setSelected((prev) => ({ ...prev, [current]: opt }));
  };

  const handleNext = () => {
    if (isLast) setFinished(true);
    else setCurrent((c) => c + 1);
  };

  const handlePrev = () => setCurrent((c) => c - 1);

  const score = finished
    ? questions.reduce((acc, _, i) => {
        const letter = answerKey[i];
        return selected[i] === letter ? acc + 1 : acc;
      }, 0)
    : 0;

  const optionLabel = ["A", "B", "C", "D"];
  const isTrueFalse = q?.options?.length === 2 &&
    q.options[0].toLowerCase() === "true" && q.options[1].toLowerCase() === "false";

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99999,
      background: "rgba(0,0,0,0.82)", backdropFilter: "blur(10px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: "24px",
    }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "#1a1a22", border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "14px", width: "100%", maxWidth: "580px",
        maxHeight: "90vh", overflowY: "auto",
        boxShadow: "0 0 60px rgba(157,86,255,0.2)",
      }}>
        {/* Modal header */}
        <div style={{
          padding: "18px 22px", borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "linear-gradient(135deg, rgba(157,86,255,0.15), transparent)",
        }}>
          <div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9D56FF" }}>
              Quiz
            </span>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "16px", color: "#F0F0F8", marginTop: "2px" }}>
              {finished ? "Results" : `Question ${current + 1} of ${total}`}
            </h3>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "6px", color: "rgba(240,240,248,0.7)", padding: "6px 10px",
            cursor: "pointer", fontSize: "14px",
          }}>✕</button>
        </div>

        {/* Progress bar */}
        {!finished && (
          <div style={{ height: "3px", background: "rgba(255,255,255,0.06)" }}>
            <div style={{
              height: "100%", borderRadius: "3px",
              background: "linear-gradient(90deg, #9D56FF, #F472B6)",
              width: `${((current + 1) / total) * 100}%`,
              transition: "width 0.3s ease",
            }} />
          </div>
        )}

        <div style={{ padding: "24px 22px" }}>
          {!finished ? (
            <>
              {/* Question */}
              <p style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px",
                color: "#F0F0F8", lineHeight: 1.5, marginBottom: "20px",
              }}>{current + 1}. {q.question}</p>

              {/* Options */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                {q.options.map((opt, i) => {
                  const label = isTrueFalse ? opt : optionLabel[i];
                  const isChosen = selected[current] === label;
                  return (
                    <button key={i} onClick={() => handleSelect(label)} style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "12px 14px", borderRadius: "8px", cursor: "pointer",
                      textAlign: "left", border: `1px solid ${isChosen ? "rgba(157,86,255,0.6)" : "rgba(255,255,255,0.1)"}`,
                      background: isChosen ? "rgba(157,86,255,0.18)" : "rgba(255,255,255,0.03)",
                      transition: "all 0.15s",
                    }}
                      onMouseEnter={e => { if (!isChosen) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                      onMouseLeave={e => { if (!isChosen) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                    >
                      <span style={{
                        flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: 600,
                        background: isChosen ? "#9D56FF" : "rgba(255,255,255,0.08)",
                        color: isChosen ? "white" : "rgba(240,240,248,0.6)",
                        border: `1px solid ${isChosen ? "#9D56FF" : "rgba(255,255,255,0.12)"}`,
                      }}>{label}</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: isChosen ? "#F0F0F8" : "rgba(240,240,248,0.72)", lineHeight: 1.5 }}>
                        {isTrueFalse ? opt : opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Nav buttons */}
              <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>
                <button onClick={handlePrev} disabled={current === 0} style={{
                  padding: "9px 18px", borderRadius: "6px", cursor: current === 0 ? "not-allowed" : "pointer",
                  fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.04em",
                  background: "transparent", border: "1px solid rgba(255,255,255,0.12)",
                  color: current === 0 ? "rgba(240,240,248,0.25)" : "rgba(240,240,248,0.7)",
                }}>← Prev</button>
                <button onClick={handleNext} disabled={!selected[current]} style={{
                  padding: "9px 22px", borderRadius: "6px",
                  cursor: selected[current] ? "pointer" : "not-allowed",
                  fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em",
                  background: selected[current] ? (isLast ? "#F472B6" : "#9D56FF") : "rgba(255,255,255,0.07)",
                  border: "none", color: selected[current] ? "#0f0f12" : "rgba(240,240,248,0.3)",
                  transition: "all 0.18s",
                }}>{isLast ? "Finish Quiz" : "Next →"}</button>
              </div>
            </>
          ) : (
            /* Results screen */
            <>
              {/* Score */}
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "rgba(157,86,255,0.15)", border: "2px solid rgba(157,86,255,0.4)",
                  marginBottom: "12px",
                }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem",
                    background: "linear-gradient(135deg, #9D56FF, #F472B6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>{score}/{total}</span>
                </div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "18px", color: "#F0F0F8" }}>
                  {score === total ? "Perfect Score! 🎉" : score >= total * 0.7 ? "Great Job! 👍" : score >= total * 0.5 ? "Keep Studying! 📚" : "Need More Practice 💪"}
                </p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.5)", marginTop: "4px" }}>
                  {Math.round((score / total) * 100)}% correct
                </p>
              </div>

              {/* Answer key table */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,240,248,0.4)", marginBottom: "12px" }}>
                  Answer Key
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
                  {questions.map((q, i) => {
                    const correct = answerKey[i];
                    const userAns = selected[i];
                    const isRight = userAns === correct;
                    return (
                      <div key={i} style={{
                        padding: "8px 4px", borderRadius: "6px", textAlign: "center",
                        background: isRight ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)",
                        border: `1px solid ${isRight ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                      }}>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(240,240,248,0.5)" }}>Q{i + 1}</div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "13px", color: isRight ? "#4ade80" : "#f87171" }}>
                          {correct}
                        </div>
                        {!isRight && (
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(239,68,68,0.7)" }}>({userAns || "—"})</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => { setCurrent(0); setSelected({}); setFinished(false); }} style={{
                  flex: 1, padding: "10px", borderRadius: "6px", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 600,
                  background: "rgba(157,86,255,0.15)", border: "1px solid rgba(157,86,255,0.4)", color: "#c4a0ff",
                }}>Retake Quiz</button>
                <button onClick={onClose} style={{
                  flex: 1, padding: "10px", borderRadius: "6px", cursor: "pointer",
                  fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 600,
                  background: "#F472B6", border: "none", color: "#0f0f12",
                }}>Close</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Lesson Page Shell ────────────────────────────────────────────────────────
export default function LessonPage({
  lessonId,
  lessonTitle,
  lessonShortTitle,
  lessonIcon,
  youtubeUrl,        // paste YouTube embed URL here
  googleSlidesUrl,   // paste Google Slides embed URL here
  sections,          // array of { heading, body (string or string[]) }
  tableData,         // optional: { headers: [], rows: [] }
  questions,         // quiz questions array
  answerKey,         // array of answer letters
  color,             // "purple" | "pink" | "cream"
}) {
  const [quizOpen, setQuizOpen] = useState(false);

  const pal = {
    purple: { primary: "#9D56FF", secondary: "#c4a0ff", bg: "rgba(157,86,255,0.15)", border: "rgba(157,86,255,0.35)", glow: "rgba(157,86,255,0.2)" },
    pink:   { primary: "#F472B6", secondary: "#f9a8d4", bg: "rgba(244,114,182,0.13)", border: "rgba(244,114,182,0.35)", glow: "rgba(244,114,182,0.15)" },
    cream:  { primary: "#FEF3C7", secondary: "#fde68a", bg: "rgba(254,243,199,0.1)",  border: "rgba(254,243,199,0.3)",  glow: "rgba(254,243,199,0.1)"  },
  }[color || "purple"];

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f12" }}>
      {quizOpen && (
        <QuizModal questions={questions} answerKey={answerKey} onClose={() => setQuizOpen(false)} />
      )}

      {/* Hero banner */}
      <div style={{
        paddingTop: "62px",
        background: `linear-gradient(160deg, ${pal.bg} 0%, transparent 60%)`,
        borderBottom: "1px solid rgba(255,255,255,0.09)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "500px", height: "300px", pointerEvents: "none",
          background: `radial-gradient(ellipse, ${pal.glow} 0%, transparent 70%)`,
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 28px 40px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <a href="/" style={{
              fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.06em",
              color: "rgba(240,240,248,0.45)", display: "flex", alignItems: "center", gap: "5px",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#F0F0F8"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(240,240,248,0.45)"}
            >← Home</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>/</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: pal.secondary }}>Lesson {lessonId}</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
            <div style={{
              width: "64px", height: "64px", flexShrink: 0, borderRadius: "14px",
              background: pal.bg, border: `1px solid ${pal.border}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px",
            }}>{lessonIcon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "2px 10px", borderRadius: "999px",
                  border: `1px solid ${pal.border}`, background: pal.bg, color: pal.secondary,
                }}>Lesson {String(lessonId).padStart(2, "0")}</span>
              </div>
              <h1 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "#F0F0F8",
                fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.05,
                marginBottom: "12px",
              }}>{lessonTitle}</h1>
              <button onClick={() => setQuizOpen(true)} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "10px 20px", borderRadius: "6px", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em",
                background: pal.primary, border: "none", color: "#0f0f12",
                transition: "all 0.18s",
                boxShadow: `0 0 20px ${pal.glow}`,
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >📝 Take Quiz ({questions.length} items)</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "32px", alignItems: "start" }}>

          {/* Left: lesson content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {sections.map((section, idx) => (
              <div key={idx} style={{
                background: "#1a1a22", border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "10px", overflow: "hidden",
              }}>
                {section.heading && (
                  <div style={{
                    padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)",
                    background: `linear-gradient(135deg, ${pal.bg}, transparent)`,
                    display: "flex", alignItems: "center", gap: "10px",
                  }}>
                    <div style={{ width: "3px", height: "16px", borderRadius: "2px", background: pal.primary, flexShrink: 0 }} />
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F0F0F8", letterSpacing: "-0.01em" }}>
                      {section.heading}
                    </h2>
                  </div>
                )}
                <div style={{ padding: "18px 20px" }}>
                  {Array.isArray(section.body) ? (
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {section.body.map((item, j) => (
                        <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <span style={{ color: pal.primary, flexShrink: 0, marginTop: "2px", fontSize: "12px" }}>▸</span>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.78)", lineHeight: 1.7 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "rgba(240,240,248,0.78)", lineHeight: 1.8 }}>{section.body}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Optional table */}
            {tableData && (
              <div style={{ background: "#1a1a22", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)", background: `linear-gradient(135deg, ${pal.bg}, transparent)`, display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "3px", height: "16px", borderRadius: "2px", background: pal.primary }} />
                  <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F0F0F8" }}>Reference Table</h2>
                </div>
                <div style={{ overflowX: "auto", padding: "16px 20px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {tableData.headers.map((h, i) => (
                          <th key={i} style={{ padding: "8px 12px", textAlign: "left", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: pal.secondary, borderBottom: `1px solid ${pal.border}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                          {row.map((cell, j) => (
                            <td key={j} style={{ padding: "9px 12px", fontFamily: "'DM Mono', monospace", fontSize: "12px", color: j === 0 ? pal.secondary : "rgba(240,240,248,0.72)", verticalAlign: "top" }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Right: YouTube + Google Slides embeds */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "80px" }}>

            {/* YouTube */}
            <div style={{ background: "#1a1a22", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "14px" }}>▶</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(240,240,248,0.7)" }}>YouTube Video</span>
              </div>
              {youtubeUrl ? (
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={youtubeUrl}
                    title="Lesson Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </div>
              ) : (
                <div style={{
                  aspectRatio: "16/9", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "8px",
                }}>
                  <span style={{ fontSize: "28px", opacity: 0.4 }}>▶</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.3)" }}>YouTube link not set</span>
                </div>
              )}
            </div>

            {/* Google Slides */}
            <div style={{ background: "#1a1a22", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "14px" }}>📊</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.06em", color: "rgba(240,240,248,0.7)" }}>Google Slides</span>
              </div>
              {googleSlidesUrl ? (
                <div style={{ position: "relative", paddingBottom: "75%", height: 0 }}>
                  <iframe
                    src={googleSlidesUrl}
                    title="Lesson Slides"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  />
                </div>
              ) : (
                <div style={{
                  aspectRatio: "4/3", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "8px",
                }}>
                  <span style={{ fontSize: "28px", opacity: 0.4 }}>📊</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.3)" }}>Google Slides link not set</span>
                </div>
              )}
            </div>

            {/* Quiz CTA card */}
            <div style={{
              background: pal.bg, border: `1px solid ${pal.border}`,
              borderRadius: "10px", padding: "20px", textAlign: "center",
            }}>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F0F0F8", marginBottom: "6px" }}>
                Ready to Test Yourself?
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "rgba(240,240,248,0.55)", marginBottom: "14px", lineHeight: 1.6 }}>
                {questions.length}-item quiz with instant answer key reveal.
              </p>
              <button onClick={() => setQuizOpen(true)} style={{
                width: "100%", padding: "10px", borderRadius: "6px", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em",
                background: pal.primary, border: "none", color: "#0f0f12", transition: "opacity 0.18s",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >📝 Start Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}