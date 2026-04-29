"use client";

import React from "react";

const catItems = [
  {
    letter: "C",
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="22" height="28" rx="3" stroke="#2563EB" strokeWidth="2" fill="none" />
        <line x1="15" y1="22" x2="27" y2="22" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="27" x2="27" y2="27" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="32" x2="22" y2="32" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="18" r="8" stroke="#2563EB" strokeWidth="2" fill="none" />
        <line x1="36" y1="14" x2="36" y2="18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="18" x2="39" y2="21" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="33" y1="10" x2="33" y2="8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="39" y1="10" x2="39" y2="8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    letter: "A",
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="28" height="20" rx="3" stroke="#2563EB" strokeWidth="2" fill="none" />
        <circle cx="34" cy="32" r="9" stroke="#2563EB" strokeWidth="2" fill="none" />
        <path d="M30 32 L33 35 L38 29" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="10" r="2" fill="#2563EB" />
        <circle cx="19" cy="10" r="2" fill="#2563EB" />
        <circle cx="25" cy="10" r="2" fill="#2563EB" />
        <line x1="13" y1="20" x2="22" y2="20" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="25" x2="18" y2="25" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    letter: "T",
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="26" r="10" stroke="#2563EB" strokeWidth="2" fill="none" />
        <circle cx="22" cy="26" r="4" stroke="#2563EB" strokeWidth="2" fill="none" />
        <line x1="22" y1="12" x2="22" y2="16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="36" x2="22" y2="40" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="26" x2="12" y2="26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="26" x2="36" y2="26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="37" cy="18" r="7" stroke="#2563EB" strokeWidth="2" fill="none" />
        <circle cx="37" cy="18" r="3" stroke="#2563EB" strokeWidth="1.5" fill="none" />
        <line x1="37" y1="8" x2="37" y2="11" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="37" y1="25" x2="37" y2="28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="27" y1="18" x2="30" y2="18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="44" y1="18" x2="47" y2="18" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function HorizontalConnector() {
  return (
    <div className="cat-hconnector">
      <svg viewBox="0 0 80 220" width="80" height="220" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        <path d="M 0 55 C 40 55, 40 165, 80 165" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="55" r="5" fill="#2563EB" />
        <circle cx="80" cy="165" r="5" fill="#2563EB" />
      </svg>
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="cat-vconnector">
      <svg viewBox="0 0 120 80" width="120" height="80" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
        <path d="M 30 0 C 30 40, 90 40, 90 80" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="0" r="5" fill="#2563EB" />
        <circle cx="90" cy="80" r="5" fill="#2563EB" />
      </svg>
    </div>
  );
}

export default function CatFramework() {
  return (
    <>
      <style>{`
        .cat-section {
          background: linear-gradient(135deg, #eef4ff 0%, #f0f7ff 50%, #e8f0fe 100%);
          min-height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px 80px;
          font-family: 'Segoe UI', system-ui, sans-serif;
          box-sizing: border-box;
          width: 100%;
        }

        .cat-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .cat-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 12px;
          letter-spacing: -0.5px;
        }

        .cat-title-accent { color: #2563EB; }

        .cat-subtitle {
          font-size: 1.05rem;
          color: #555;
          margin: 0;
        }

        .cat-subtitle-accent {
          color: #2563EB;
          font-weight: 600;
        }

        .cat-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          max-width: 980px;
          width: 100%;
        }

        .cat-card-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 2.5px solid #2563EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(6px);
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.08);
          padding: 28px;
          gap: 12px;
          transition: box-shadow 0.2s, transform 0.2s;
          cursor: default;
          box-sizing: border-box;
        }

        .cat-circle:hover {
          box-shadow: 0 8px 40px rgba(37, 99, 235, 0.18);
          transform: translateY(-4px);
        }

        .cat-circle-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .cat-circle-desc {
          font-size: 0.875rem;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }

        /* Horizontal connector — visible on md+ */
        .cat-hconnector {
          width: 80px;
          height: 220px;
          flex-shrink: 0;
          margin-left: -30px;
          margin-right: -30px;
          z-index: 2;
          display: block;
        }

        /* Vertical connector — hidden on md+ */
        .cat-vconnector {
          display: none;
          width: 120px;
          height: 80px;
          margin: 0 auto;
        }

        /* ── Tablet (≤860px): shrink circles slightly ── */
        @media (max-width: 860px) {
          .cat-circle {
            width: 175px;
            height: 175px;
            padding: 20px;
            gap: 10px;
          }
          .cat-circle-title { font-size: 1.05rem; }
          .cat-circle-desc  { font-size: 0.78rem; }

          .cat-hconnector {
            width: 56px;
            height: 175px;
            margin-left: -20px;
            margin-right: -20px;
          }

          .cat-header { margin-bottom: 40px; }
        }

        /* ── Mobile (≤600px): stack vertically ── */
        @media (max-width: 600px) {
          .cat-section { padding: 48px 16px 64px; }
          .cat-header  { margin-bottom: 36px; }

          .cat-row {
            flex-direction: column;
            align-items: center;
          }

          .cat-card-wrap { width: 100%; }

          .cat-circle {
            width: 200px;
            height: 200px;
            padding: 24px;
          }
          .cat-circle-title { font-size: 1.15rem; }
          .cat-circle-desc  { font-size: 0.85rem; }

          /* swap connectors */
          .cat-hconnector { display: none; }
          .cat-vconnector { display: block; }
        }

        /* ── Very small screens (≤380px) ── */
        @media (max-width: 380px) {
          .cat-circle { width: 165px; height: 165px; }
          .cat-circle-title { font-size: 1rem; }
        }
      `}</style>

      <section className="cat-section" id="cat">
        {/* Header */}
        <div className="cat-header">
          <h2 className="cat-title">
            The <span className="cat-title-accent">CAT Framework</span>
          </h2>
          <p className="cat-subtitle">
            Our Proven Approach to{" "}
            <span className="cat-subtitle-accent">Learning Excellence</span>
          </p>
        </div>

        {/* Cards Row */}
        <div className="cat-row">
          {catItems.map((item, index) => (
            <React.Fragment key={item.letter}>
              <div className="cat-card-wrap">
                <div className="cat-circle">
                  <div>{item.icon}</div>
                  <h3 className="cat-circle-title">{item.title}</h3>
                  <p className="cat-circle-desc">{item.description}</p>
                </div>
              </div>

              {index < catItems.length - 1 && (
                <>
                  <HorizontalConnector />
                  <VerticalConnector />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}