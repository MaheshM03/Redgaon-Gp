// ======================================
// src/pages/PropertyCard.jsx
// ======================================

import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function PropertyCard() {

  const { t } = useTranslator();

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
        }}
      >

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
            }}
          >
            {t("propertyCard.title")}
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#475569",
            }}
          >
            {t("propertyCard.subtitle")}
          </p>

        </div>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            padding: "40px 16px",
          }}
        >

          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "28px",
              border:
                "1px solid #e2e8f0",
            }}
          >

            <h2
              style={{
                marginBottom: "16px",
              }}
            >
              {t("propertyCard.details")}
            </h2>

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
              💰 {t("propertyCard.fee")}
            </div>

            <h3>
              {t("propertyCard.documents")}
            </h3>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "2",
                color: "#475569",
              }}
            >

              <li>
                {t("propertyCard.doc1")}
              </li>

              <li>
                {t("propertyCard.doc2")}
              </li>

              <li>
                {t("propertyCard.doc3")}
              </li>

              <li>
                {t("propertyCard.doc4")}
              </li>

            </ul>

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              {t("propertyCard.process")}
            </h3>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: "2",
                color: "#475569",
              }}
            >

              <li>
                {t("propertyCard.step1")}
              </li>

              <li>
                {t("propertyCard.step2")}
              </li>

              <li>
                {t("propertyCard.step3")}
              </li>

              <li>
                {t("propertyCard.step4")}
              </li>

            </ul>

            <h3
              style={{
                marginTop: "20px",
              }}
            >
              {t("propertyCard.timeline")}
            </h3>

            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "12px",
                marginTop: "10px",
              }}
            >
              {t("propertyCard.timelineValue")}
            </div>

          </div>

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
                marginBottom: "12px",
              }}
            >
              {t("propertyCard.applyTitle")}
            </h2>

            <Link
              to="/property-card-apply"
              style={{
                display: "inline-block",
                marginTop: "16px",
                background: "white",
                color: "#2563eb",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              {t("propertyCard.apply")}
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}