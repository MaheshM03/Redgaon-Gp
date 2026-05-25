import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function MarriageCertificate() {

  const { t } = useTranslator();

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
          paddingBottom: "60px",
        }}
      >

        {/* HERO */}

        <div
          style={{
            padding: "80px 20px",
            textAlign: "center",
            background:
              "linear-gradient(180deg,#eff6ff 0%,#f8fafc 100%)",
          }}
        >

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "14px",
            }}
          >
            {t("marriage.title")}
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "#475569",
              lineHeight: "1.8",
            }}
          >
            {t("marriage.subtitle")}
          </p>

        </div>

        {/* CONTENT */}

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            padding: "40px 16px",
          }}
        >

          {/* DETAILS CARD */}

          <div
            style={{
              background: "white",
              padding: "28px",
              borderRadius: "18px",
              border:
                "1px solid #e2e8f0",
            }}
          >

            <h2
              style={{
                fontSize: "22px",
                marginBottom: "18px",
              }}
            >
              {t("marriage.details")}
            </h2>

            {/* FEE */}

            <div
              style={{
                background: "#dbeafe",
                padding: "14px",
                borderRadius: "12px",
                color: "#2563eb",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              💰 {t("marriage.fee")}
            </div>

            {/* DOCUMENTS */}

            <h3>
              {t("marriage.documents")}
            </h3>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "2",
                color: "#475569",
              }}
            >

              <li>
                {t("marriage.doc1")}
              </li>

              <li>
                {t("marriage.doc2")}
              </li>

              <li>
                {t("marriage.doc3")}
              </li>

              <li>
                {t("marriage.doc4")}
              </li>

            </ul>

            {/* PROCESS */}

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              {t("marriage.process")}
            </h3>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "2",
                color: "#475569",
              }}
            >

              <li>
                {t("marriage.step1")}
              </li>

              <li>
                {t("marriage.step2")}
              </li>

              <li>
                {t("marriage.step3")}
              </li>

              <li>
                {t("marriage.step4")}
              </li>

            </ul>

            {/* TIMELINE */}

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              {t("marriage.timeline")}
            </h3>

            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "12px",
                marginTop: "10px",
              }}
            >
              {t("marriage.timelineValue")}
            </div>

          </div>

          {/* APPLY CARD */}

          <div
            style={{
              marginTop: "24px",
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              color: "white",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >

            <h2
              style={{
                fontSize: "24px",
                marginBottom: "12px",
              }}
            >
              {t("marriage.applyTitle")}
            </h2>

            <p>
              {t("marriage.applyDesc")}
            </p>

            <Link
              to="/marriage-apply"
              style={{
                display: "inline-block",
                marginTop: "18px",
                background: "white",
                color: "#2563eb",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              {t("marriage.apply")}
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}