import React, { useState } from "react";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

/* ================= DATA ================= */

const schemesData = [
  {
    category: "अर्थ सहाय्य",

    title:
      "१. विशेष अर्थ सहाय्य योजना",

    cards: [
      {
        title:
          "संजय गांधी योजना",

        color: "#8e44ad",

        data: [
          "₹1500 मदत",
          "वृद्ध लाभ",
          "आधार आवश्यक",
        ],
      },

      {
        title:
          "श्रावण बाळ योजना",

        color: "#9b59b6",

        data: [
          "ज्येष्ठ नागरिक",
          "₹1500",
          "ओळखपत्र",
        ],
      },

      {
        title:
          "राष्ट्रीय वृद्ध योजना",

        color: "#8e44ad",

        data: [
          "BPL",
          "वृद्ध लाभ",
          "आधार",
        ],
      },
    ],
  },

  {
    category: "आवास",

    title: "२. आवास योजना",

    cards: [
      {
        title: "PMAY-G",

        color: "#3498db",

        data: [
          "₹1.2 लाख",
          "ग्रामीण घर",
        ],
      },

      {
        title: "शहरी आवास",

        color: "#2980b9",

        data: [
          "₹2.5 लाख",
          "शहरी",
        ],
      },

      {
        title:
          "आदिवासी आवास",

        color: "#3498db",

        data: [
          "₹1.2 लाख",
          "ST लाभ",
        ],
      },
    ],
  },

  {
    category: "आरोग्य",

    title: "३. आरोग्य योजना",

    cards: [
      {
        title: "PMJAY",

        color: "#e74c3c",

        data: [
          "₹5 लाख",
          "फ्री उपचार",
        ],
      },
    ],
  },

  {
    category: "कृषी",

    title: "४. कृषी योजना",

    cards: [
      {
        title: "पीक विमा",

        color: "#27ae60",

        data: [
          "विमा",
          "नुकसान भरपाई",
        ],
      },

      {
        title: "PM-KISAN",

        color: "#2ecc71",

        data: [
          "₹6000",
          "DBT",
        ],
      },

      {
        title: "महाडीबीटी",

        color: "#27ae60",

        data: [
          "अनुदान",
          "शेतकरी",
        ],
      },
    ],
  },

  {
    category: "पशुपालन",

    title:
      "५. पशुपालन योजना",

    cards: [
      {
        title: "दुध योजना",

        color: "#6d4c41",

        data: [
          "अनुदान",
          "जनावर",
        ],
      },

      {
        title: "शेळी योजना",

        color: "#795548",

        data: [
          "शेळी",
          "अनुदान",
        ],
      },
    ],
  },

  {
    category: "ऊर्जा",

    title: "६. ऊर्जा योजना",

    cards: [
      {
        title: "सोलर योजना",

        color: "#f39c12",

        data: [
          "सौर पंप",
          "अनुदान",
        ],
      },
    ],
  },

  {
    category: "महिला व बाल",

    title:
      "७. महिला व बाल",

    cards: [
      {
        title: "माझी लाडकी",

        color: "#e91e63",

        data: [
          "महिला",
          "₹1500",
        ],
      },

      {
        title:
          "मातृत्व योजना",

        color: "#d81b60",

        data: [
          "गर्भवती",
          "अनुदान",
        ],
      },
    ],
  },

  {
    category: "रोजगार",

    title:
      "८. रोजगार योजना",

    cards: [
      {
        title: "मनरेगा",

        color: "#f57c00",

        data: [
          "100 दिवस काम",
          "रोजगार",
        ],
      },
    ],
  },
];

/* ================= CATEGORIES ================= */

const categories = [
  "सर्व योजना",

  "अर्थ सहाय्य",

  "आवास",

  "आरोग्य",

  "कृषी",

  "पशुपालन",

  "ऊर्जा",

  "महिला व बाल",

  "रोजगार",
];

/* ================= HERO ================= */

function Hero({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="sc-hero">

      <div className="sc-hero-inner">

        <div className="sc-badge">
          Maharashtra Government
        </div>

        <h1 className="sc-title">
          ग्रामपंचायत योजना माहिती पोर्टल
        </h1>

        <p className="sc-subtitle">
          महाराष्ट्र शासनाच्या विविध योजनांची संपूर्ण माहिती
        </p>

        {/* STATS */}

        <div className="sc-stats">

          <div className="sc-stat-card">
            <h2>50+</h2>

            <p>योजना</p>
          </div>

          <div className="sc-stat-card">
            <h2>8</h2>

            <p>विभाग</p>
          </div>

          <div className="sc-stat-card">
            <h2>24×7</h2>

            <p>ऑनलाइन</p>
          </div>

        </div>

        {/* SEARCH */}

        <div className="sc-search-wrap">

          <div className="sc-search">

            <span>🔍</span>

            <input
              placeholder="योजना शोधा..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />

          </div>

        </div>

      </div>

    </div>
  );
}

/* ================= TABS ================= */

function Tabs({
  active,
  setActive,
}) {
  return (
    <div className="sc-tabs">

      {categories.map((c, i) => (

        <button
          key={i}
          onClick={() =>
            setActive(c)
          }
          className={
            active === c
              ? "sc-tab active"
              : "sc-tab"
          }
        >
          {c}
        </button>

      ))}

    </div>
  );
}

/* ================= CARD ================= */

function Card({
  title,
  color,
  data,
}) {
  return (
    <div className="sc-card">

      <div
        className="sc-card-top"
        style={{
          background: color,
        }}
      >
        {title}
      </div>

      <div className="sc-card-body">

        {data.map((d, i) => (

          <div
            key={i}
            className="sc-point"
          >
            • {d}
          </div>

        ))}

      </div>

      <div className="sc-card-footer">

        <a
          href="https://cscservices.mahaonline.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="sc-link"
        >
          mahaonline.gov.in
        </a>

      </div>

    </div>
  );
}

/* ================= SECTION ================= */

function Section({
  title,
  children,
}) {
  return (
    <div className="sc-section">

      <div className="sc-section-title">
        {title}
      </div>

      <div className="sc-grid">
        {children}
      </div>

    </div>
  );
}

/* ================= MAIN ================= */

export default function Schemes() {

  const [active, setActive] =
    useState("सर्व योजना");

  const [
    searchTerm,
    setSearchTerm,
  ] = useState("");

  /* FILTER */

  const filteredSchemes =
    schemesData
      .filter(
        (section) =>
          active ===
            "सर्व योजना" ||
          section.category ===
            active
      )

      .map((section) => ({
        ...section,

        cards:
          section.cards.filter(
            (card) => {

              const matches =
                searchTerm === "" ||

                card.title
                  .toLowerCase()
                  .includes(
                    searchTerm.toLowerCase()
                  ) ||

                card.data.some(
                  (d) =>
                    d
                      .toLowerCase()
                      .includes(
                        searchTerm.toLowerCase()
                      )
                );

              return matches;
            }
          ),
      }))

      .filter(
        (section) =>
          section.cards.length > 0
      );

  return (
    <>
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow-x:hidden;
        }

        .sc-page{
          background:#f8fafc;

          min-height:100vh;

          font-family:
            'Inter',
            sans-serif;
        }

        /* HERO */

        .sc-hero{
          background:
            linear-gradient(
              180deg,
              #eff6ff 0%,
              #f8fafc 100%
            );

          padding:
            70px 20px 50px;

          text-align:center;

          position:relative;

          overflow:hidden;
        }

        .sc-hero::before{
          content:"";

          position:absolute;

          width:260px;
          height:260px;

          background:
            rgba(59,130,246,0.08);

          border-radius:50%;

          top:-120px;
          right:-100px;
        }

        .sc-hero-inner{
          position:relative;

          z-index:2;

          max-width:850px;

          margin:auto;
        }

        .sc-badge{
          display:inline-flex;

          align-items:center;

          justify-content:center;

          background:#dbeafe;

          border:1px solid #bfdbfe;

          color:#2563eb;

          padding:6px 14px;

          border-radius:999px;

          font-size:11px;

          font-weight:700;

          margin-bottom:18px;
        }

        .sc-title{
          font-size:
            clamp(28px,5vw,42px);

          font-weight:800;

          color:#0f172a;

          line-height:1.2;

          margin-bottom:12px;
        }

        .sc-subtitle{
          color:#475569;

          font-size:14px;

          line-height:1.8;

          max-width:620px;

          margin:auto;
        }

        /* STATS */

        .sc-stats{
          display:flex;

          justify-content:center;

          flex-wrap:wrap;

          gap:14px;

          margin-top:28px;
        }

        .sc-stat-card{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:14px;

          padding:16px 20px;

          min-width:120px;
        }

        .sc-stat-card h2{
          color:#2563eb;

          font-size:24px;

          font-weight:800;

          margin-bottom:4px;
        }

        .sc-stat-card p{
          font-size:12px;

          color:#64748b;
        }

        /* SEARCH */

        .sc-search-wrap{
          display:flex;

          justify-content:center;

          margin-top:26px;
        }

        .sc-search{
          width:100%;

          max-width:480px;

          background:#ffffff;

          border:1px solid #dbe2ea;

          border-radius:14px;

          padding:12px 16px;

          display:flex;

          align-items:center;

          gap:10px;
        }

        .sc-search input{
          width:100%;

          border:none;

          outline:none;

          font-size:14px;
        }

        /* TABS */

        .sc-tabs{
          display:flex;

          overflow-x:auto;

          gap:10px;

          padding:18px 16px;

          background:#ffffff;

          border-bottom:
            1px solid #e2e8f0;
        }

        .sc-tab{
          white-space:nowrap;

          border:none;

          padding:10px 16px;

          border-radius:999px;

          background:#e2e8f0;

          color:#334155;

          font-size:13px;

          font-weight:600;

          cursor:pointer;
        }

        .sc-tab.active{
          background:#2563eb;

          color:#ffffff;
        }

        /* SECTION */

        .sc-section{
          max-width:1200px;

          margin:auto;

          padding:24px 16px;
        }

        .sc-section-title{
          background:#1e293b;

          color:#ffffff;

          padding:12px 16px;

          border-radius:12px;

          font-size:14px;

          font-weight:700;

          margin-bottom:18px;
        }

        /* GRID */

        .sc-grid{
          display:grid;

          grid-template-columns:
            repeat(auto-fit,minmax(260px,1fr));

          gap:18px;
        }

        /* CARD */

        .sc-card{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:18px;

          overflow:hidden;

          transition:0.2s ease;

          box-shadow:
            0 4px 20px rgba(15,23,42,0.04);
        }

        .sc-card:hover{
          transform:
            translateY(-4px);
        }

        .sc-card-top{
          padding:14px 16px;

          color:#ffffff;

          font-size:15px;

          font-weight:700;
        }

        .sc-card-body{
          padding:16px;
        }

        .sc-point{
          font-size:13px;

          color:#475569;

          line-height:1.8;

          margin-bottom:8px;
        }

        .sc-card-footer{
          border-top:
            1px solid #e2e8f0;

          padding:12px 16px;
        }

        .sc-link{
          color:#2563eb;

          text-decoration:none;

          font-size:13px;

          font-weight:600;
        }

        /* MOBILE */

        @media(max-width:480px){

          .sc-hero{
            padding:
              55px 14px 40px;
          }

          .sc-title{
            font-size:28px;

            line-height:1.3;
          }

          .sc-subtitle{
            font-size:13px;
          }

          .sc-stat-card{
            min-width:95px;

            padding:14px;
          }

          .sc-stat-card h2{
            font-size:20px;
          }

          .sc-tabs{
            padding:14px 12px;
          }

          .sc-tab{
            font-size:12px;

            padding:9px 14px;
          }

          .sc-section{
            padding:18px 12px;
          }

          .sc-grid{
            grid-template-columns:1fr;
          }

          .sc-card-top{
            font-size:14px;
          }

          .sc-point{
            font-size:12px;
          }
        }
      `}</style>

      <div className="sc-page">

        <Hero
          searchTerm={searchTerm}
          setSearchTerm={
            setSearchTerm
          }
        />

        <Tabs
          active={active}
          setActive={setActive}
        />

        {filteredSchemes.length ===
        0 ? (

          <div
            style={{
              textAlign: "center",
              padding: "50px 20px",
              color: "#64748b",
            }}
          >
            <h3
              style={{
                marginBottom: 8,
              }}
            >
              कोणतीही योजना सापडली नाही
            </h3>

            <p>
              वेगळे शब्द वापरून शोधा
            </p>
          </div>

        ) : (

          filteredSchemes.map(
            (section, i) => (

              <Section
                key={i}
                title={
                  section.title
                }
              >

                {section.cards.map(
                  (card, j) => (

                    <Card
                      key={j}
                      title={
                        card.title
                      }
                      color={
                        card.color
                      }
                      data={
                        card.data
                      }
                    />

                  )
                )}

              </Section>

            )
          )

        )}

      </div>

      <Footer />
    </>
  );
}