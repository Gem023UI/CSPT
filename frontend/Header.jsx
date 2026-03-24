import React from "react";

export default function Header({ onOpenDrawer }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{
        background: "rgba(253, 248, 240, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "2px solid rgba(13, 59, 78, 0.12)",
        boxShadow: "0 4px 20px rgba(13,59,78,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hamburger + Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDrawer}
            aria-label="Open navigation drawer"
            className="clay-btn bg-navy text-cream px-3 py-2 flex flex-col gap-1 hover:bg-opacity-80"
            style={{ background: "#0d3b4e", color: "#F4E2B7", borderColor: "rgba(244,226,183,0.3)" }}
          >
            <span className="block w-5 h-0.5 bg-current rounded-full" />
            <span className="block w-4 h-0.5 bg-current rounded-full" />
            <span className="block w-5 h-0.5 bg-current rounded-full" />
          </button>

          <div className="flex items-center gap-2">
            <div
              className="clay-btn px-3 py-1.5 text-xs font-bold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #FCB819, #F27800)",
                color: "white",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              BSIT-S3A
            </div>
            <span
              className="font-bold text-sm hidden sm:block"
              style={{ color: "#0d3b4e", letterSpacing: "-0.01em" }}
            >
              Computer System &amp; Platform Technologies
            </span>
            <span
              className="font-bold text-sm sm:hidden"
              style={{ color: "#0d3b4e" }}
            >
              CSPT
            </span>
          </div>
        </div>

        {/* Right: Nav links */}
        <nav className="flex items-center gap-2">
          <a
            href="#ppt-compilation"
            className="clay-btn px-4 py-2 text-sm font-semibold"
            style={{
              background: "rgba(13,59,78,0.08)",
              color: "#0d3b4e",
              border: "2px solid rgba(13,59,78,0.18)",
            }}
          >
            PPT Compilation
          </a>
          <a
            href="#proprietors"
            className="clay-btn px-4 py-2 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #D43828, #F27800)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            Proprietors
          </a>
        </nav>
      </div>
    </header>
  );
}
