import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

// =========================================
// CONTEXT PROVIDERS
// =========================================

import { LanguageProvider } from "./context/LanguageContext.js";

import { NewsProvider } from "./context/NewsContext.js";

import { GrievanceProvider } from "./context/GrievanceContext.js";

import { CertificateProvider } from "./context/CertificateContext.js";

// =========================================
// PAGES
// =========================================

import Home from "./pages/Home.jsx";

import AdminPanel from "./pages/AdminPanel.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";

import Schemes from "./pages/Schemes.jsx";

import Declaration from "./pages/Declaration.jsx";

import PdfViewer from "./pages/PdfViewer.jsx";

// =========================================
// SECTIONS
// =========================================

import AdminCommittee from "./components/Sections/AdminCommittee.jsx";

import CitizenPortal from "./components/Sections/CitizenPortal.jsx";

import SmartVillage from "./components/Sections/SmartVillage.jsx";

import GrievanceSection from "./components/Sections/GrievanceSection.jsx";

import RighttoInformation from "./components/Sections/RighttoInformation.jsx";

import Activity from "./components/Sections/Activity.jsx";

import AboutUs from "./components/Sections/AboutUs.jsx";

import DigitalLibrary from "./components/Sections/DigitalLibrary.jsx";

import AllNews from "./components/Sections/AllNews.jsx";

// =========================================
// OTHER COMMITTEES
// =========================================

import VHNWSC from "./components/othercommittees/VHNWSC.jsx";

import VWSSC from "./components/othercommittees/VWSSC.jsx";

import VCPC from "./components/othercommittees/VCPC.jsx";

import BMC from "./components/othercommittees/BMC.jsx";

// =========================================
// CERTIFICATES
// =========================================

import BirthCertificate from "./certificates/BirthCertificate.jsx";

import BirthCertificateForm from "./certificates/BirthCertificateForm.jsx";

import DeathCertificate from "./certificates/DeathCertificate.jsx";

import DeathCertificateForm from "./certificates/DeathCertificateForm.jsx";

import ResidenceCertificate from "./certificates/ResidenceCertificate.jsx";

import ResidenceCertificateForm from "./certificates/ResidenceCertificateForm.jsx";

import MarriageCertificate from "./certificates/MarriageCertificate.jsx";

import MarriageCertificateForm from "./certificates/MarriageCertificateForm.jsx";

import BuildingPermitCertificate from "./certificates/BuildingPermitCertificate.jsx";

import BuildingPermitCertificateForm from "./certificates/BuildingPermitCertificateForm.jsx";

import PropertyCard from "./certificates/PropertyCard.jsx";

import PropertyCertificate from "./certificates/PropertyCertificate.jsx";

import BusinessTradeLicense from "./certificates/BusinessTradeLicense.jsx";

import BusinessTradeLicenseForm from "./certificates/BusinessTradeLicenseForm.jsx";

// =========================================
// NEWS CONTEXT
// =========================================

import { useNews } from "./context/NewsContext.js";

// =========================================
// ALL NEWS PAGE
// =========================================

function AllNewsPage() {

  const { news, loading } = useNews();

  return (

    <AllNews
      newsList={loading ? [] : news}
    />

  );
}

// =========================================
// MAIN APP
// =========================================

function App() {

  return (

    <LanguageProvider>

      <NewsProvider>

        <GrievanceProvider>

          <CertificateProvider>

            <Routes>

              {/* ========================================= */}
              {/* HOME */}
              {/* ========================================= */}

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/home"
                element={<Home />}
              />

              {/* ========================================= */}
              {/* ADMIN */}
              {/* ========================================= */}

              <Route
                path="/admin"
                element={<AdminPanel />}
              />

              <Route
                path="/admin-login"
                element={<AdminLogin />}
              />

              {/* ========================================= */}
              {/* ADMIN COMMITTEE */}
              {/* ========================================= */}

              <Route
                path="/admin-committee"
                element={<AdminCommittee />}
              />

              {/* ========================================= */}
              {/* OTHER COMMITTEES */}
              {/* ========================================= */}

              <Route
                path="/other-committees/vhnwsc"
                element={<VHNWSC />}
              />

              <Route
                path="/other-committees/vwssc"
                element={<VWSSC />}
              />

              <Route
                path="/other-committees/vcpc"
                element={<VCPC />}
              />

              <Route
                path="/other-committees/bmc"
                element={<BMC />}
              />

              {/* ========================================= */}
              {/* PDF VIEWER */}
              {/* ========================================= */}

              <Route
                path="/pdf-viewer"
                element={<PdfViewer />}
              />

              {/* ========================================= */}
              {/* CITIZEN PORTAL */}
              {/* ========================================= */}

              <Route
                path="/citizen-portal"
                element={<CitizenPortal />}
              />

              {/* ========================================= */}
              {/* SMART VILLAGE */}
              {/* ========================================= */}

              <Route
                path="/smart-village"
                element={<SmartVillage />}
              />

              {/* ========================================= */}
              {/* RTI */}
              {/* ========================================= */}

              <Route
                path="/rti"
                element={<RighttoInformation />}
              />

              {/* ========================================= */}
              {/* GRIEVANCE */}
              {/* ========================================= */}

              <Route
                path="/grievance"
                element={<GrievanceSection />}
              />

              {/* ========================================= */}
              {/* ACTIVITY */}
              {/* ========================================= */}

              <Route
                path="/activity"
                element={<Activity />}
              />

              {/* ========================================= */}
              {/* ABOUT */}
              {/* ========================================= */}

              <Route
                path="/aboutus"
                element={<AboutUs />}
              />

              {/* ========================================= */}
              {/* SCHEMES */}
              {/* ========================================= */}

              <Route
                path="/schemes"
                element={<Schemes />}
              />

              {/* ========================================= */}
              {/* DIGITAL LIBRARY */}
              {/* ========================================= */}

              <Route
                path="/digital-library"
                element={<DigitalLibrary />}
              />

              {/* ========================================= */}
              {/* DECLARATION */}
              {/* ========================================= */}

              <Route
                path="/declaration"
                element={<Declaration />}
              />

              {/* ========================================= */}
              {/* BIRTH CERTIFICATE */}
              {/* ========================================= */}

              <Route
                path="/birth"
                element={<BirthCertificate />}
              />

              <Route
                path="/birth-certificate"
                element={<BirthCertificate />}
              />

              <Route
                path="/birth-apply"
                element={<BirthCertificateForm />}
              />

              {/* ========================================= */}
              {/* DEATH CERTIFICATE */}
              {/* ========================================= */}

              <Route
                path="/death"
                element={<DeathCertificate />}
              />

              <Route
                path="/death-certificate"
                element={<DeathCertificate />}
              />

              <Route
                path="/death-apply"
                element={<DeathCertificateForm />}
              />

              {/* ========================================= */}
              {/* RESIDENCE CERTIFICATE */}
              {/* ========================================= */}

              <Route
                path="/residence"
                element={<ResidenceCertificate />}
              />

              <Route
                path="/residence-certificate"
                element={<ResidenceCertificate />}
              />

              <Route
                path="/residence-apply"
                element={<ResidenceCertificateForm />}
              />

              {/* ========================================= */}
              {/* MARRIAGE CERTIFICATE */}
              {/* ========================================= */}

              <Route
                path="/marriage"
                element={<MarriageCertificate />}
              />

              <Route
                path="/marriage-apply"
                element={<MarriageCertificateForm />}
              />

              {/* ========================================= */}
              {/* BUILDING PERMIT */}
              {/* ========================================= */}

              <Route
                path="/building-permit"
                element={<BuildingPermitCertificate />}
              />

              <Route
                path="/building-permit-apply"
                element={<BuildingPermitCertificateForm />}
              />

              {/* ========================================= */}
              {/* PROPERTY */}
              {/* ========================================= */}

              <Route
                path="/property-card"
                element={<PropertyCard />}
              />

              <Route
                path="/property-certificate"
                element={<PropertyCertificate />}
              />

              {/* ========================================= */}
              {/* BUSINESS LICENSE */}
              {/* ========================================= */}

              <Route
                path="/business-trade-license"
                element={<BusinessTradeLicense />}
              />

              <Route
                path="/business-trade-license-apply"
                element={<BusinessTradeLicenseForm />}
              />

              {/* ========================================= */}
              {/* ALL NEWS */}
              {/* ========================================= */}

              <Route
                path="/allnews"
                element={<AllNewsPage />}
              />

              {/* ========================================= */}
              {/* 404 */}
              {/* ========================================= */}

              <Route
                path="*"
                element={

                  <div
                    style={{
                      padding: "40px",
                      textAlign: "center",
                      fontFamily: "Poppins",
                    }}
                  >

                    <h1
                      style={{
                        fontSize: "42px",
                        marginBottom: "20px",
                        color: "#111827",
                      }}
                    >
                      404
                    </h1>

                    <p
                      style={{
                        fontSize: "18px",
                        marginBottom: "20px",
                        color: "#6b7280",
                      }}
                    >
                      Page Not Found
                    </p>

                    <a
                      href="#/"
                      style={{
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      Go Back Home
                    </a>

                  </div>
                }
              />

            </Routes>

          </CertificateProvider>

        </GrievanceProvider>

      </NewsProvider>

    </LanguageProvider>
  );
}

export default App;