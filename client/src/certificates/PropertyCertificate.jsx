// ======================================
// src/pages/PropertyCertificate.jsx
// ======================================

import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function PropertyCertificate() {

  const { t } = useTranslator();

  return (
    <>
      <Navbar />

      <div className="property-root">

        <div className="property-hero">

          <h1>
            {t("property.title")}
          </h1>

          <p>
            {t("property.subtitle")}
          </p>

        </div>

        <div className="property-container">

          <div className="property-card">

            <h2>
              {t("property.details")}
            </h2>

            <div className="property-fee">
              💰 {t("property.fee")}
            </div>

            <h3>
              {t("property.documents")}
            </h3>

            <ul>

              <li>
                {t("property.doc1")}
              </li>

              <li>
                {t("property.doc2")}
              </li>

              <li>
                {t("property.doc3")}
              </li>

            </ul>

            <h3>
              {t("property.process")}
            </h3>

            <ul>

              <li>
                {t("property.step1")}
              </li>

              <li>
                {t("property.step2")}
              </li>

              <li>
                {t("property.step3")}
              </li>

              <li>
                {t("property.step4")}
              </li>

            </ul>

            <h3>
              {t("property.timeline")}
            </h3>

            <div>
              {t("property.timelineValue")}
            </div>

          </div>

          <div className="property-apply">

            <h2>
              {t("property.applyTitle")}
            </h2>

            <Link to="/property-apply">
              {t("property.apply")}
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}