import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function DeathCertificate() {

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

        .birth-root{
          min-height:100vh;

          background:#f8fafc;

          font-family:'Inter',sans-serif;

          color:#1e293b;
        }

        .birth-hero{
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

        .birth-hero::before{
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

        .birth-hero::after{
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

        .birth-hero-inner{
          position:relative;

          z-index:2;

          max-width:720px;

          margin:auto;
        }

        .birth-badge{
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

        .birth-title{
          font-size:
            clamp(30px,5vw,44px);

          font-weight:800;

          line-height:1.2;

          color:#0f172a;

          margin-bottom:12px;
        }

        .birth-subtitle{
          color:#475569;

          font-size:15px;

          line-height:1.9;

          max-width:620px;

          margin:auto;
        }

        .birth-home-btn{
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

        .birth-home-btn:hover{
          background:#1d4ed8;
        }

        .birth-container{
          max-width:900px;

          margin:auto;

          padding:34px 16px 60px;
        }

        .birth-card{
          background:#ffffff;

          border:1px solid #e2e8f0;

          border-radius:18px;

          padding:26px;

          margin-bottom:22px;

          box-shadow:
            0 4px 20px rgba(15,23,42,0.04);
        }

        .birth-card-title{
          font-size:20px;

          font-weight:700;

          color:#0f172a;

          margin-bottom:12px;
        }

        .birth-section-title{
          font-size:16px;

          font-weight:700;

          color:#0f172a;

          margin-bottom:14px;

          margin-top:18px;
        }

        .birth-fee{
          background:#eff6ff;

          border:1px solid #bfdbfe;

          color:#2563eb;

          padding:12px 14px;

          border-radius:12px;

          font-size:14px;

          font-weight:600;

          margin-bottom:18px;
        }

        .birth-list{
          padding-left:18px;

          color:#475569;
        }

        .birth-list li{
          margin-bottom:10px;

          line-height:1.8;

          font-size:14px;
        }

        .birth-timeline{
          background:#f8fafc;

          border:1px solid #e2e8f0;

          padding:14px;

          border-radius:12px;

          font-size:14px;

          color:#334155;

          font-weight:600;
        }

        .birth-apply-card{
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

        .birth-apply-title{
          font-size:22px;

          font-weight:700;

          margin-bottom:12px;
        }

        .birth-apply-desc{
          font-size:14px;

          line-height:1.8;

          opacity:0.95;

          margin-bottom:22px;
        }

        .birth-apply-btn{
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
        }

        @media(max-width:768px){

          .birth-title{
            font-size:34px;
          }

          .birth-container{
            padding:28px 14px 45px;
          }

          .birth-card{
            padding:22px;
          }
        }

        @media(max-width:480px){

          .birth-hero{
            padding:55px 14px 40px;
          }

          .birth-title{
            font-size:28px;
          }

          .birth-home-btn{
            width:100%;
          }

          .birth-card{
            padding:18px;
          }

          .birth-apply-btn{
            width:100%;
          }
        }
      `}</style>

      <div className="birth-root">

        <div className="birth-hero">

          <div className="birth-hero-inner">

            <div className="birth-badge">
              {t("death.title")}
            </div>

            <h1 className="birth-title">
              {t("death.title")}
            </h1>

            <p className="birth-subtitle">
              {t("death.card.desc")}
            </p>

            <Link
              to="/"
              className="birth-home-btn"
            >
              ← {t("death.backHome")}
            </Link>

          </div>

        </div>

        <div className="birth-container">

          <div className="birth-card">

            <h2 className="birth-card-title">
              {t("death.details.title")}
            </h2>

            <div className="birth-fee">
              💰 {t("death.fee")}
            </div>

            <h3 className="birth-section-title">
              {t("death.documents")}
            </h3>

            <ul className="birth-list">

              <li>{t("death.doc1")}</li>
              <li>{t("death.doc2")}</li>
              <li>{t("death.doc3")}</li>

            </ul>

            <h3 className="birth-section-title">
              {t("death.process")}
            </h3>

            <ul className="birth-list">

              <li>{t("death.step1")}</li>
              <li>{t("death.step2")}</li>
              <li>{t("death.step3")}</li>
              <li>{t("death.step4")}</li>

            </ul>

            <h3 className="birth-section-title">
              {t("death.timeline")}
            </h3>

            <div className="birth-timeline">
              {t("death.timelineValue")}
            </div>

          </div>

          <div className="birth-apply-card">

            <h2 className="birth-apply-title">
              {t("death.ready")}
            </h2>

            <p className="birth-apply-desc">
              Apply online quickly and easily through Gram Panchayat services.
            </p>

            <Link
              to="/death-apply"
              className="birth-apply-btn"
            >
              {t("death.apply")}
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}