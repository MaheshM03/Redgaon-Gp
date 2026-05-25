
import React from "react";

import { Link } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function BuildingPermitCertificate() {

  const { t } = useTranslator();

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

        .permit-root{
          min-height:100vh;

          background:#f8fafc;

          font-family:'Inter',sans-serif;

          color:#1e293b;
        }

        /* HERO */

        .permit-hero{
          background:
            linear-gradient(
              180deg,
              #eff6ff 0%,
              #f8fafc 100%
            );

          padding:80px 20px 55px;

          position:relative;

          overflow:hidden;

          text-align:center;
        }

        .permit-hero::before{
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

        .permit-hero::after{
          content:"";

          position:absolute;

          width:240px;
          height:240px;

          background:
            rgba(37,99,235,0.05);

          border-radius:50%;

          bottom:-100px;
          left:-80px;
        }

        .permit-hero-inner{
          position:relative;

          z-index:2;

          max-width:720px;

          margin:auto;
        }

        .permit-badge{
          display:inline-flex;

          align-items:center;

          justify-content:center;

          background:#dbeafe;

          border:1px solid #bfdbfe;

          color:#2563eb;

          padding:6px 16px;

          border-radius:999px;

          font-size:11px;

          font-weight:700;

          letter-spacing:0.08em;

          text-transform:uppercase;

          margin-bottom:18px;
        }

        .permit-title{
          font-size:
            clamp(30px,5vw,44px);

          font-weight:800;

          line-height:1.2;

          color:#0f172a;

          margin-bottom:12px;
        }

        .permit-subtitle{
          color:#475569;

          font-size:15px;

          line-height:1.9;

          max-width:620px;

          margin:auto;
        }

        .permit-home-btn{
          display:inline-flex;

          align-items:center;

          justify-content:center;

          gap:8px;

          margin-top:24px;

          background:#2563eb;

          color:white;

          padding:11px 18px;

          border-radius:12px;

          text-decoration:none;

          font-size:14px;

          font-weight:600;

          transition:0.2s ease;
        }

        .permit-home-btn:hover{
          background:#1d4ed8;
        }

        /* CONTAINER */

        .permit-container{
          max-width:900px;

          margin:auto;

          padding:34px 16px 60px;
        }

        /* CARD */

        .permit-card{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:18px;

          padding:26px;

          margin-bottom:22px;

          box-shadow:
            0 4px 20px rgba(15,23,42,0.04);
        }

        .permit-card-title{
          font-size:20px;

          font-weight:700;

          color:#0f172a;

          margin-bottom:12px;
        }

        .permit-card-desc{
          color:#475569;

          font-size:14px;

          line-height:1.9;
        }

        /* SECTION TITLE */

        .permit-section-title{
          font-size:16px;

          font-weight:700;

          color:#0f172a;

          margin-bottom:14px;

          margin-top:18px;
        }

        /* FEE */

        .permit-fee{
          background:#eff6ff;

          border:1px solid #bfdbfe;

          color:#2563eb;

          padding:12px 14px;

          border-radius:12px;

          font-size:14px;

          font-weight:600;

          margin-bottom:18px;
        }

        /* LIST */

        .permit-list{
          padding-left:18px;

          color:#475569;
        }

        .permit-list li{
          margin-bottom:10px;

          line-height:1.8;

          font-size:14px;
        }

        /* TIMELINE */

        .permit-timeline{
          background:#f8fafc;

          border:1px solid #e2e8f0;

          padding:14px;

          border-radius:12px;

          font-size:14px;

          color:#334155;

          font-weight:600;
        }

        /* APPLY */

        .permit-apply-card{
          background:
            linear-gradient(
              135deg,
              #2563eb,
              #3b82f6
            );

          color:white;

          text-align:center;

          border-radius:20px;

          padding:30px 24px;
        }

        .permit-apply-title{
          font-size:22px;

          font-weight:700;

          margin-bottom:12px;
        }

        .permit-apply-desc{
          font-size:14px;

          line-height:1.8;

          opacity:0.95;

          margin-bottom:22px;
        }

        .permit-apply-btn{
          display:inline-flex;

          align-items:center;

          justify-content:center;

          background:white;

          color:#2563eb;

          padding:12px 20px;

          border-radius:12px;

          text-decoration:none;

          font-size:14px;

          font-weight:700;

          transition:0.2s ease;
        }

        .permit-apply-btn:hover{
          transform:translateY(-2px);
        }

        @media(max-width:768px){

          .permit-hero{
            padding:65px 16px 45px;
          }

          .permit-title{
            font-size:34px;
          }

          .permit-container{
            padding:28px 14px 45px;
          }

          .permit-card{
            padding:22px;
          }
        }

        @media(max-width:480px){

          .permit-hero{
            padding:55px 14px 40px;
          }

          .permit-title{
            font-size:28px;
          }

          .permit-home-btn{
            width:100%;
          }

          .permit-container{
            padding:22px 12px 38px;
          }

          .permit-card{
            padding:18px;
          }

          .permit-apply-btn{
            width:100%;
          }
        }

      `}</style>

      <div className="permit-root">

        {/* HERO */}

        <div className="permit-hero">

          <div className="permit-hero-inner">

            <div className="permit-badge">
              {t("permit.badge")}
            </div>

            <h1 className="permit-title">
              {t("permit.title")}
            </h1>

            <p className="permit-subtitle">
              {t("permit.subtitle")}
            </p>

            <Link
              to="/"
              className="permit-home-btn"
            >
              ← {t("permit.back")}
            </Link>

          </div>

        </div>

        {/* CONTENT */}

        <div className="permit-container">

          {/* INFO CARD */}

          <div className="permit-card">

            <h2 className="permit-card-title">
              {t("permit.details")}
            </h2>

            <div className="permit-fee">
              💰 {t("permit.fee")}
            </div>

            {/* DOCUMENTS */}

            <h3 className="permit-section-title">
              {t("permit.documents")}
            </h3>

            <ul className="permit-list">

              <li>
                {t("permit.doc1")}
              </li>

              <li>
                {t("permit.doc2")}
              </li>

              <li>
                {t("permit.doc3")}
              </li>

              <li>
                {t("permit.doc4")}
              </li>

            </ul>

            {/* PROCESS */}

            <h3 className="permit-section-title">
              {t("permit.process")}
            </h3>

            <ul className="permit-list">

              <li>
                {t("permit.step1")}
              </li>

              <li>
                {t("permit.step2")}
              </li>

              <li>
                {t("permit.step3")}
              </li>

              <li>
                {t("permit.step4")}
              </li>

              <li>
                {t("permit.step5")}
              </li>

            </ul>

            {/* TIMELINE */}

            <h3 className="permit-section-title">
              {t("permit.timeline")}
            </h3>

            <div className="permit-timeline">
              {t("permit.timelineValue")}
            </div>

          </div>

          {/* APPLY CARD */}

          <div className="permit-apply-card">

            <h2 className="permit-apply-title">
              {t("permit.applyTitle")}
            </h2>

            <p className="permit-apply-desc">
              {t("permit.applyDesc")}
            </p>

            <Link
              to="/building-permit-apply"
              className="permit-apply-btn"
            >
              {t("permit.apply")}
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}