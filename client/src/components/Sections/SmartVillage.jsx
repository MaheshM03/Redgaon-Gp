import React from "react";
import { useTranslator } from "../../context/LanguageContext.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const pillars = [
  {
    titleKey:
      "smartvillage.pillar.water.title",

    descKey:
      "smartvillage.pillar.water.desc",

    color: "#0891b2",
  },

  {
    titleKey:
      "smartvillage.pillar.admin.title",

    descKey:
      "smartvillage.pillar.admin.desc",

    color: "#7c3aed",
  },

  {
    titleKey:
      "smartvillage.pillar.energy.title",

    descKey:
      "smartvillage.pillar.energy.desc",

    color: "#d97706",
  },

  {
    titleKey:
      "smartvillage.pillar.education.title",

    descKey:
      "smartvillage.pillar.education.desc",

    color: "#dc2626",
  },

  {
    titleKey:
      "smartvillage.pillar.accountability.title",

    descKey:
      "smartvillage.pillar.accountability.desc",

    color: "#16a34a",
  },
];

function PillarCard({ pillar, index }) {
  const { t } = useTranslator();

  return (
    <div className="sv-pillar-card">
      <div
        className="sv-pillar-top-bar"
        style={{
          background: pillar.color,
        }}
      />

      <div
        className="sv-pillar-num"
        style={{
          color: pillar.color,
        }}
      >
        0{index + 1}
      </div>

      <h3 className="sv-pillar-title">
        {t(pillar.titleKey)}
      </h3>

      <p className="sv-pillar-meta">
        ग्रामपंचायत रेडगाव खु
      </p>

      <div className="sv-pillar-divider" />

      <p className="sv-pillar-desc">
        {t(pillar.descKey)}
      </p>

      <button
        className="sv-pillar-btn"
        style={{
          background: pillar.color,
        }}
      >
        {t("smartvillage.pillar.btn")}
      </button>
    </div>
  );
}

export default function SmartVillage() {
  const { t } = useTranslator();

  return (
    <section className="sv-root">
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *,
        *::before,
        *::after{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        body{
          overflow-x:hidden;
        }

        .sv-root{
          font-family:
            'Inter',
            'Noto Sans Devanagari',
            sans-serif;

          background:#f8fafc;

          min-height:100vh;
        }

        /* HERO */
        .sv-hero{
          background:
            linear-gradient(
              180deg,
              #eff6ff 0%,
              #f8fafc 100%
            );

          padding:
            90px 20px 70px;

          position:relative;

          overflow:hidden;

          text-align:center;
        }

        .sv-hero::before{
          content:"";

          position:absolute;

          top:-90px;
          right:-90px;

          width:260px;
          height:260px;

          background:
            rgba(59,130,246,0.08);

          border-radius:50%;
        }

        .sv-hero::after{
          content:"";

          position:absolute;

          bottom:-100px;
          left:-100px;

          width:280px;
          height:280px;

          background:
            rgba(37,99,235,0.05);

          border-radius:50%;
        }

        .sv-hero-inner{
          max-width:760px;

          margin:0 auto;

          position:relative;

          z-index:2;

          display:flex;

          flex-direction:column;

          align-items:center;

          justify-content:center;

          text-align:center;
        }

        .sv-hero-text{
          width:100%;

          display:flex;

          flex-direction:column;

          align-items:center;

          justify-content:center;

          text-align:center;
        }

        .sv-hero-badge{
          display:inline-flex;

          align-items:center;

          justify-content:center;

          background:#dbeafe;

          border:1px solid #bfdbfe;

          color:#2563eb;

          font-size:11px;

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          padding:6px 16px;

          border-radius:999px;

          margin-bottom:18px;
        }

        .sv-hero h1{
          color:#0f172a;

          font-size:
            clamp(30px,5vw,46px);

          font-weight:800;

          line-height:1.2;

          margin-bottom:16px;

          letter-spacing:-0.03em;

          text-align:center;

          max-width:680px;
        }

        .sv-hero h1 span{
          color:#2563eb;
        }

        .sv-hero-p{
          color:#475569;

          font-size:15px;

          line-height:1.9;

          max-width:620px;

          margin:0 auto 26px;

          text-align:center;
        }

        /* BUTTON */
        .sv-btn-row{
          display:flex;

          justify-content:center;

          width:100%;
        }

        .sv-btn-primary{
          background:#2563eb;

          color:#ffffff;

          border:none;

          border-radius:12px;

          padding:12px 24px;

          font-size:14px;

          font-weight:700;

          cursor:pointer;

          transition:0.2s ease;
        }

        .sv-btn-primary:hover{
          background:#1d4ed8;
        }

        /* STATS */
        .sv-stats-bar{
          display:grid;

          grid-template-columns:
            repeat(4,1fr);

          gap:16px;

          max-width:1000px;

          margin:45px auto 0;

          position:relative;

          z-index:2;
        }

        .sv-stat{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:16px;

          padding:22px 16px;

          text-align:center;
        }

        .sv-stat-num{
          display:block;

          font-size:
            clamp(22px,4vw,32px);

          font-weight:800;

          color:#2563eb;

          margin-bottom:6px;
        }

        .sv-stat-label{
          font-size:12px;

          color:#64748b;

          line-height:1.6;
        }

        /* SECTION */
        .sv-pillars-section{
          max-width:1100px;

          margin:0 auto;

          padding:
            60px 20px 80px;
        }

        .sv-section-eyebrow{
          text-align:center;

          font-size:11px;

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          color:#2563eb;

          margin-bottom:10px;
        }

        .sv-section-title{
          text-align:center;

          font-size:
            clamp(26px,4vw,38px);

          font-weight:800;

          color:#0f172a;

          margin-bottom:14px;

          line-height:1.3;
        }

        .sv-section-sub{
          text-align:center;

          color:#64748b;

          font-size:15px;

          line-height:1.9;

          max-width:620px;

          margin:0 auto 42px;
        }

        /* GRID */
        .sv-pillar-grid{
          display:grid;

          grid-template-columns:
            repeat(auto-fit,minmax(250px,1fr));

          gap:20px;
        }

        /* CARD */
        .sv-pillar-card{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:18px;

          padding:24px;

          transition:0.2s ease;

          display:flex;

          flex-direction:column;

          justify-content:space-between;

          height:100%;
        }

        .sv-pillar-card:hover{
          transform:translateY(-4px);

          box-shadow:
            0 10px 24px rgba(0,0,0,0.06);
        }

        .sv-pillar-top-bar{
          height:4px;

          border-radius:999px;

          margin-bottom:18px;
        }

        .sv-pillar-num{
          font-size:11px;

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          margin-bottom:8px;
        }

        .sv-pillar-title{
          font-size:20px;

          font-weight:700;

          color:#0f172a;

          line-height:1.5;

          margin-bottom:8px;

          text-align:left;
        }

        .sv-pillar-meta{
          font-size:12px;

          color:#94a3b8;

          margin-bottom:14px;

          text-align:left;
        }

        .sv-pillar-divider{
          height:1px;

          background:#e2e8f0;

          margin-bottom:14px;
        }

        .sv-pillar-desc{
          font-size:14px;

          color:#475569;

          line-height:1.8;

          margin-bottom:20px;

          flex:1;

          text-align:left;
        }

        .sv-pillar-btn{
          align-self:flex-start;

          padding:10px 18px;

          border:none;

          border-radius:10px;

          color:#ffffff;

          font-size:13px;

          font-weight:700;

          cursor:pointer;
        }

        /* TABLET */
        @media(max-width:768px){

          .sv-hero{
            padding:70px 16px 55px;
          }

          .sv-hero h1{
            font-size:36px;

            line-height:1.25;
          }

          .sv-hero-p{
            font-size:14px;

            line-height:1.8;

            max-width:100%;
          }

          .sv-section-sub{
            font-size:14px;

            line-height:1.8;
          }

          .sv-stats-bar{
            grid-template-columns:
              repeat(2,1fr);

            gap:12px;
          }

          .sv-pillar-grid{
            grid-template-columns:
              1fr 1fr;

            gap:16px;
          }
        }

        /* MOBILE */
        @media(max-width:480px){

          .sv-hero{
            padding:60px 14px 45px;
          }

          .sv-hero-inner,
          .sv-hero-text{
            text-align:center;
          }

          .sv-hero h1{
            font-size:30px;

            line-height:1.3;

            margin-bottom:14px;
          }

          .sv-hero-p{
            font-size:13px;

            line-height:1.9;

            max-width:100%;
          }

          .sv-btn-row{
            width:100%;
          }

          .sv-btn-primary{
            width:100%;
          }

          .sv-stats-bar{
            grid-template-columns:1fr 1fr;

            gap:10px;
          }

          .sv-stat{
            padding:16px 10px;
          }

          .sv-stat-num{
            font-size:22px;
          }

          .sv-stat-label{
            font-size:11px;

            line-height:1.5;
          }

          .sv-section-title{
            font-size:28px;

            line-height:1.3;
          }

          .sv-section-sub{
            font-size:13px;

            line-height:1.8;

            margin-bottom:32px;
          }

          .sv-pillar-grid{
            grid-template-columns:1fr;
          }

          .sv-pillar-card{
            padding:18px;
          }

          .sv-pillar-title{
            font-size:18px;
          }

          .sv-pillar-desc{
            font-size:13px;

            line-height:1.8;
          }

          .sv-pillar-btn{
            width:100%;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="sv-hero">
        <div className="sv-hero-inner">

          <div className="sv-hero-text">

            <div className="sv-hero-badge">
              {t("smartvillage.badge")}
            </div>

            <h1>
              {t("smartvillage.hero.title")}
              <br />

              <span>
                {t("smartvillage.hero.subtitle")}
              </span>
            </h1>

            <p className="sv-hero-p">
              {t("smartvillage.hero.desc")}
            </p>

            <div className="sv-btn-row">
              <button className="sv-btn-primary">
                {t(
                  "smartvillage.btn.learnMore"
                )}
              </button>
            </div>

          </div>
        </div>

        {/* STATS */}
        <div className="sv-stats-bar">

          <div className="sv-stat">
            <span className="sv-stat-num">
              5
            </span>

            <div className="sv-stat-label">
              {t(
                "smartvillage.stats.pillars"
              )}
            </div>
          </div>

          <div className="sv-stat">
            <span className="sv-stat-num">
              100%
            </span>

            <div className="sv-stat-label">
              {t(
                "smartvillage.stats.digital"
              )}
            </div>
          </div>

          <div className="sv-stat">
            <span className="sv-stat-num">
              24×7
            </span>

            <div className="sv-stat-label">
              {t(
                "smartvillage.stats.participation"
              )}
            </div>
          </div>

          <div className="sv-stat">
            <span
              className="sv-stat-num"
              style={{
                textTransform:
                  "capitalize",
              }}
            >
              {t(
                "smartvillage.stats.village"
              )}
            </span>

            <div className="sv-stat-label">
            </div>
          </div>

        </div>
      </div>

      {/* PILLARS */}
      <div className="sv-pillars-section">

        <div className="sv-section-eyebrow">
          {t(
            "smartvillage.section.eyebrow"
          )}
        </div>

        <h2 className="sv-section-title">
          {t(
            "smartvillage.section.title"
          )}
        </h2>

        <p className="sv-section-sub">
          {t(
            "smartvillage.section.desc"
          )}
        </p>

        <div className="sv-pillar-grid">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              index={index}
            />
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}