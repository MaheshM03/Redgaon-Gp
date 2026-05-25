import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslator } from "../../context/LanguageContext";

/* ─── helpers ─────────────────────────────────────────────────── */

/** Split a string into <span> words, each animated with a staggered delay */
const AnimatedWords = ({ text = "", baseDelay = 0 }) => (
  <span aria-label={text}>
    {text.split(" ").map((word, i) => (
      <span
        key={i}
        className="word-reveal"
        style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
        aria-hidden="true"
      >
        {word}&nbsp;
      </span>
    ))}
  </span>
);

/** Returns the currently-visible slice of `text` for a typewriter effect */
const useTypewriter = (text = "", startDelay = 400, speed = 42) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted]     = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay]);

  useEffect(() => {
    if (!started || displayed.length >= text.length) return;
    const id = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(id);
  }, [started, displayed, text, speed]);

  return displayed;
};

/* ─── component ───────────────────────────────────────────────── */

const Introduction = () => {
  const { t } = useTranslator();
  const videoRef = useRef(null);

  /* Ken-Burns + slow playback */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const onPlaying = () => { video.playbackRate = 0.85; };
    video.addEventListener("playing", onPlaying);
    return () => video.removeEventListener("playing", onPlaying);
  }, []);

  /* Typewriter for badge */
  const badgeText  = t("intro.badge");
  const typedBadge = useTypewriter(badgeText, 300, 42);

  /* Heading: all-but-last words animate normally; last word gets shimmer */
  const headingFull   = t("intro.heading");
  const headingWords  = headingFull.split(" ");
  const headingMain   = headingWords.slice(0, -1).join(" ");
  const headingAccent = headingWords.slice(-1)[0] ?? "";
  const accentDelay   = 0.7 + headingWords.length * 0.08;

  return (
    <section className="intro-section">

      {/* ── VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="auto"
        className="intro-video"
        aria-hidden="true"
      >
        <source src={encodeURI("/gp video.mp4")} type="video/mp4" />
      </video>

      {/* ── CINEMATIC LAYERS ── */}
      <div className="intro-vignette"        aria-hidden="true" />
      <div className="intro-gradient-bottom" aria-hidden="true" />
      <div className="intro-grain"           aria-hidden="true" />

      {/* ── CONTENT ── */}
      <div className="intro-overlay">
        <div className="intro-container">

          {/* BADGE — typewriter */}
          <span className="intro-badge" aria-label={badgeText}>
            {typedBadge}
            <span className="badge-cursor" aria-hidden="true" />
          </span>

          {/* HEADING — word-by-word clip reveal, last word shimmers */}
          <h1 className="intro-heading" aria-label={headingFull}>
            <AnimatedWords text={headingMain} baseDelay={0.7} />
            {headingAccent && (
              <span
                className="word-reveal heading-accent"
                style={{ animationDelay: `${accentDelay}s` }}
                aria-hidden="true"
              >
                {headingAccent}
              </span>
            )}
          </h1>

          {/* DIVIDER — draws in */}
          <div className="intro-divider" aria-hidden="true" />

          {/* BODY — each paragraph slides up with stagger */}
          {[t("intro.desc1"), t("intro.desc2"), t("intro.desc3")].map((line, i) => (
            <p
              key={i}
              className="intro-text"
              style={{ animationDelay: `${1.45 + i * 0.18}s` }}
            >
              {line}
            </p>
          ))}

          {/* CTA */}
          <Link to="/aboutus" className="intro-link">
            <button className="intro-btn">
              <span>{t("intro.button")}</span>
              <span className="intro-btn-arrow" aria-hidden="true">→</span>
            </button>
          </Link>

        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="intro-scroll-hint" aria-hidden="true">
        <div className="intro-scroll-line" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── SECTION ── */
        .intro-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          isolation: isolate;
        }

        /* ── VIDEO ── */
        .intro-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          z-index: 0;
          animation: kenBurns 18s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes kenBurns {
          from { transform: scale(1.00); }
          to   { transform: scale(1.08); }
        }

        /* ── LAYERS ── */
        .intro-vignette {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,.65) 100%);
        }
        .intro-gradient-bottom {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background: linear-gradient(to bottom, rgba(8,12,24,.30) 0%, rgba(8,12,24,.55) 50%, rgba(8,12,24,.88) 100%);
        }
        .intro-grain {
          position: absolute; inset: 0; z-index: 3; opacity: .04; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          animation: grainShift .5s steps(1) infinite;
        }
        @keyframes grainShift {
          0%  { background-position: 0 0; }
          25% { background-position: -40px -20px; }
          50% { background-position: 20px -40px; }
          75% { background-position: -20px 10px; }
        }

        /* ── OVERLAY ── */
        .intro-overlay {
          position: relative; z-index: 10;
          width: 100%; min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 90px 24px 100px;
        }

        .intro-container {
          max-width: 820px;
          text-align: center;
          color: #fff;
        }

        /* ════════════════════════════════
           TEXT ANIMATIONS
        ════════════════════════════════ */

        /* 1 ── BADGE: drops in from above, then typewriter fills */
        .intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 5px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.85);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: badgeDrop .7s cubic-bezier(.22,1,.36,1) both;
          animation-delay: .1s;
        }
        @keyframes badgeDrop {
          from { opacity: 0; transform: translateY(-16px) scale(.95); }
          to   { opacity: 1; transform: translateY(0)     scale(1); }
        }

        /* blinking cursor */
        .badge-cursor {
          display: inline-block;
          width: 1px; height: .85em;
          background: rgba(255,255,255,.75);
          margin-left: 1px;
          vertical-align: middle;
          animation: blink .8s step-start infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* 2 ── HEADING: every word clips up from below */
        .intro-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 7vw, 72px);
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -.01em;
          color: #fff;
          margin-bottom: 20px;
          text-shadow: 0 2px 40px rgba(0,0,0,.5), 0 1px 3px rgba(0,0,0,.4);
        }

        .word-reveal {
          display: inline-block;
          opacity: 0;
          transform: translateY(14px);
          clip-path: inset(0 0 100% 0);
          animation: wordUp .55s cubic-bezier(.22,1,.36,1) forwards;
          will-change: clip-path, opacity, transform;
        }
        @keyframes wordUp {
          to {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0% 0);
          }
        }

        /* Last heading word: blue-to-white shimmer after it appears */
        .heading-accent {
          background: linear-gradient(90deg, #fff 0%, #93c5fd 35%, #fff 55%, #bfdbfe 80%, #fff 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          /* wordUp runs first, shimmer loops after */
          animation: wordUp .55s cubic-bezier(.22,1,.36,1) forwards, shimmer 3.5s linear 1.8s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* 3 ── DIVIDER: width draws from 0 → 48px */
        .intro-divider {
          width: 0;
          height: 2px;
          background: rgba(255,255,255,.35);
          margin: 0 auto 28px;
          border-radius: 2px;
          animation: dividerGrow .7s ease forwards;
          animation-delay: 1.35s;
        }
        @keyframes dividerGrow { to { width: 48px; } }

        /* 4 ── BODY PARAGRAPHS: translateY + fade, individual delays via inline style */
        .intro-text {
          font-size: 15.5px;
          line-height: 1.85;
          color: rgba(255,255,255,.80);
          margin-bottom: 14px;
          font-weight: 300;
          max-width: 640px;
          margin-left: auto; margin-right: auto;
          text-shadow: 0 1px 12px rgba(0,0,0,.4);

          opacity: 0;
          transform: translateY(22px);
          animation: textReveal .75s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes textReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        /* 5 ── CTA BUTTON */
        .intro-link { text-decoration: none; }
        .intro-btn {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 32px; padding: 14px 30px;
          border: none; border-radius: 8px;
          background: #2563eb; color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600; letter-spacing: .02em;
          cursor: pointer; position: relative; overflow: hidden;
          box-shadow: 0 4px 24px rgba(37,99,235,.50), 0 1px 3px rgba(0,0,0,.3);
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
          opacity: 0; transform: translateY(16px);
          animation: textReveal .7s cubic-bezier(.22,1,.36,1) forwards;
          animation-delay: 1.9s;
        }
        .intro-btn::before {
          content: '';
          position: absolute; top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.22), transparent);
          transform: skewX(-20deg);
          transition: left .5s ease;
        }
        .intro-btn:hover::before { left: 150%; }
        .intro-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(37,99,235,.55), 0 2px 6px rgba(0,0,0,.3);
        }
        .intro-btn:active { transform: translateY(0); }
        .intro-btn-arrow  { font-size: 18px; line-height: 1; transition: transform .2s ease; }
        .intro-btn:hover .intro-btn-arrow { transform: translateX(4px); }

        /* ── SCROLL HINT ── */
        .intro-scroll-hint {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          opacity: 0;
          animation: fadeIn 1.2s ease forwards;
          animation-delay: 2.3s;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        .intro-scroll-line {
          width: 1px; height: 52px;
          background: linear-gradient(to bottom, rgba(255,255,255,.6), rgba(255,255,255,0));
          animation: scrollPulse 2s ease-in-out infinite;
          transform-origin: top;
        }
        @keyframes scrollPulse {
          0%,100% { opacity: .4; transform: scaleY(1); }
          50%      { opacity: 1;  transform: scaleY(1.15); }
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .intro-overlay  { padding: 70px 20px 90px; }
          .intro-heading  { font-size: 42px; }
          .intro-text     { font-size: 15px; }
          .intro-btn      { width: 100%; justify-content: center; }
        }

        /* ── MOBILE ── */
        @media (max-width: 480px) {
          .intro-overlay  { padding: 80px 16px 100px; align-items: flex-end; }
          .intro-heading  { font-size: 32px; margin-bottom: 16px; }
          .intro-text     { font-size: 14px; line-height: 1.8; text-align: left; }
          .intro-badge    { font-size: 10px; }
          .intro-btn      { width: 100%; font-size: 13px; padding: 13px 18px; justify-content: center; }
          .intro-scroll-hint { display: none; }
        }

        /* ── REDUCE MOTION ── */
        @media (prefers-reduced-motion: reduce) {
          .intro-video, .intro-grain { animation: none; }
          .intro-badge, .word-reveal, .intro-divider,
          .intro-text, .intro-btn, .intro-scroll-hint {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
            width: auto;
          }
          .intro-divider { width: 48px; }
          .badge-cursor  { display: none; }
          .heading-accent {
            -webkit-text-fill-color: #93c5fd;
            background: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Introduction;