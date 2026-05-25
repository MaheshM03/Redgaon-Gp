import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext.js';
import { NewsProvider } from './context/NewsContext.js';
import { GrievanceProvider } from './context/GrievanceContext.js';
import { CertificateProvider } from './context/CertificateContext.js';

import Home from './pages/Home.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Schemes from './pages/Schemes.jsx';

import AdminCommittee from './components/Sections/AdminCommittee.jsx';
import CitizenPortal from './components/Sections/CitizenPortal.jsx';
import SmartVillage from './components/Sections/SmartVillage.jsx';
import GrievanceSection from './components/Sections/GrievanceSection.jsx';
import RighttoInformation from './components/Sections/RighttoInformation.jsx';
import Activity from './components/Sections/Activity.jsx';
import AboutUs from './components/Sections/AboutUs.jsx';
import DigitalLibrary from './components/Sections/DigitalLibrary.jsx';

import BirthCertificate from './certificates/BirthCertificate.jsx';
import BirthCertificateForm from './certificates/BirthCertificateForm.jsx';

import DeathCertificate from './certificates/DeathCertificate.jsx';
import DeathCertificateForm from './certificates/DeathCertificateForm.jsx';

import ResidenceCertificate from './certificates/ResidenceCertificate.jsx';
import ResidenceCertificateForm from './certificates/ResidenceCertificateForm.jsx';

import MarriageCertificate from './certificates/MarriageCertificate.jsx'
import BuildingPermitCertificate from './certificates/BuildingPermitCertificate.jsx';

// import BusinessCertificate from './certificates/BusinessCertificate.jsx';
import PropertyCard from './certificates/PropertyCard.jsx';
import PropertyCertificate from './certificates/PropertyCertificate.jsx';

import BusinessTradeLicense from './certificates/BusinessTradeLicense.jsx';
import BusinessTradeLicenseForm from './certificates/BusinessTradeLicenseForm.jsx';


import './App.css';
import BuildingPermitCertificateForm from './certificates/BuildingPermitCertificateForm.jsx';
import VHNWSC from './components/othercommittees/VHNWSC.jsx';
import MarriageCertificateForm from './certificates/MarriageCertificateForm.jsx';

import AllNews from './components/Sections/AllNews.jsx';
import { useNews } from './context/NewsContext.js';
import VWSSC from './components/othercommittees/VWSSC.jsx';
import Declaration from './pages/Declaration.jsx';
import VCPC from './components/othercommittees/VCPC.jsx'; 
import BMC from './components/othercommittees/BMC.jsx'; 


function AllNewsPage() {
  const { news, loading } = useNews();
  return <AllNews newsList={loading ? [] : news} />;
}





function App() {
  return (
    <LanguageProvider>
      <NewsProvider>
        <GrievanceProvider>
          <CertificateProvider>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route
                path="/admin-committee"
                element={<AdminCommittee />}
              />

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




              <Route

                path="/citizen-portal"
                element={<CitizenPortal />}
              />

              <Route
                path="/smart-village"
                element={<SmartVillage />}
              />

              <Route
                path="/rti"
                element={<RighttoInformation />}
              />

              <Route
                path="/grievance"
                element={<GrievanceSection />}
              />

              <Route
                path="/activity"
                element={<Activity />}
              />

              <Route
                path="/aboutus"
                element={<AboutUs />}
              />

              <Route
                path="/schemes"
                element={<Schemes />}
              />

              <Route
                path="/digital-library"
                element={<DigitalLibrary />}
              />

              <Route
                path="/declaration"
                element={<Declaration />}
              />


              <Route
                path="/admin"
                element={<AdminPanel />}
              />

              <Route
                path="/admin-login"
                element={<AdminLogin />}
              />

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
              <Route
                path="/marriage"
                element={<MarriageCertificate />}
              />

            

              <Route
                path="/marriage-apply"
                element ={<MarriageCertificateForm />}
              />

              <Route
                path="/building-permit"
                element={<BuildingPermitCertificate />}
              />


              {/* <Route
                path="/building-permit-apply"
                element={<BuildingPermitCertificateForm />}
              /> */}

              {/* <Route
                path="/business"
                element={<BusinessCertificate />}
              /> */}

              <Route
                path="/allnews"
                element={<AllNewsPage />}
              />

              <Route
                path="/property-card"
                element={<PropertyCard />}
              />

              <Route
                path="/property-certificate"
                element={<PropertyCertificate />}
              />

              {/* <Route
                path="/property-apply"
                element={<PropertyCertificateForm />}
              /> */}

              <Route
                path="/business-trade-license"
                element={<BusinessTradeLicense />}
              />

              <Route
                path="/business-trade-license-apply"
                element={<BusinessTradeLicenseForm />}
              />

              <Route
                path="/building-permit-apply"
                element={<BuildingPermitCertificateForm />}
              />



              <Route
                path="*"
                element={
                  <div
                    style={{
                      padding: '20px',
                      textAlign: 'center'
                    }}
                  >
                    <h1>404 - Page Not Found</h1>

                    <a href="#/">
                      Go back to Home
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