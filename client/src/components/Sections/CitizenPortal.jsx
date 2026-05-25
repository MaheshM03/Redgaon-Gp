import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslator } from "../../context/LanguageContext.js";

const services = [
  {
    no: 1,
    scheme: "Ayushman Bharat Yojana",
    dept: "Health Department",
    service: "Beneficiary Registration",
    portal: "PMJAY",
    website: "beneficiary.nha.gov.in",
  },
  {
    no: 2,
    scheme: "Ayushman Bharat Yojana",
    dept: "Health Department",
    service: "Ayushman Card Print",
    portal: "PMJAY",
    website: "beneficiary.nha.gov.in",
  },
  {
    no: 3,
    scheme: "PM Kisan Maandhan Yojana",
    dept: "Dept. of Agriculture",
    service: "Farmer Registration",
    portal: "PMKMY",
    website: "maandhan.in",
  },
  {
    no: 4,
    scheme: "PM Kisan Maandhan Yojana",
    dept: "Dept. of Agriculture",
    service: "Honorarium",
    portal: "PMKMY",
    website: "maandhan.in",
  },
  {
    no: 5,
    scheme: "Pradhan Mantri Awas Yojana",
    dept: "Housing Department",
    service: "Housing Application",
    portal: "PMAY",
    website: "pmaymis.gov.in",
  },
  {
    no: 6,
    scheme: "Mahatma Gandhi NREGA",
    dept: "Rural Development",
    service: "Job Card Registration",
    portal: "MGNREGA",
    website: "nrega.nic.in",
  },
];

export default function CitizenPortal() {
  const { t } = useTranslator();

  const [selectedQR, setSelectedQR] =
    useState(null);

  return (
    <section className="cp-root">
      <Navbar />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

.cp-root{
  background:#f8fafc;
  min-height:100vh;
  font-family:'Inter',sans-serif;
  color:#1e293b;
}

/* HERO */
.cp-hero{
  background:
    linear-gradient(
      180deg,
      #eff6ff 0%,
      #f8fafc 100%
    );

  padding:90px 20px 70px;

  text-align:center;

  position:relative;

  overflow:hidden;
}

.cp-hero::before{
  content:"";

  position:absolute;

  top:-80px;
  right:-80px;

  width:240px;
  height:240px;

  background:
    rgba(59,130,246,0.08);

  border-radius:50%;
}

.cp-hero::after{
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

.cp-hero-content{
  max-width:720px;

  margin:0 auto;

  position:relative;

  z-index:2;

  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;

  text-align:center;
}

.cp-badge{
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

.cp-title{
  color:#0f172a;

  font-size:
    clamp(30px,5vw,44px);

  font-weight:800;

  line-height:1.2;

  margin-bottom:14px;

  letter-spacing:-0.03em;

  text-align:center;
}

.cp-desc{
  color:#475569;

  line-height:1.9;

  font-size:15px;

  max-width:580px;

  text-align:center;
}

/* MAIN */
.cp-main{
  max-width:1100px;

  margin:-35px auto 0;

  padding:0 16px 50px;

  position:relative;

  z-index:5;
}

/* CARD */
.cp-card{
  background:#ffffff;

  border:1px solid #e2e8f0;

  border-radius:16px;

  margin-bottom:20px;

  overflow:hidden;

  box-shadow:
    0 4px 20px rgba(15,23,42,0.04);
}

/* TAB */
.cp-tab-bar{
  margin-bottom:18px;
}

.cp-tab-btn{
  width:100%;

  padding:15px;

  border:none;

  border-radius:14px;

  background:
    linear-gradient(
      135deg,
      #2563eb,
      #3b82f6
    );

  color:#ffffff;

  font-size:14px;

  font-weight:700;

  cursor:pointer;

  transition:0.3s ease;
}

.cp-tab-btn:hover{
  opacity:0.95;
}

/* TABLE */
.cp-table-wrap{
  overflow-x:auto;
}

table{
  width:100%;

  min-width:700px;

  border-collapse:collapse;
}

th{
  background:#f8fafc;

  color:#334155;

  padding:14px;

  text-align:left;

  font-size:12px;

  font-weight:700;

  border-bottom:1px solid #e2e8f0;
}

td{
  padding:14px;

  border-bottom:1px solid #f1f5f9;

  font-size:13px;

  color:#475569;
}

tr:nth-child(even){
  background:#fafcff;
}

.website-link{
  color:#2563eb;

  text-decoration:none;

  font-weight:600;
}

.website-link:hover{
  text-decoration:underline;
}

/* QR SECTION */
.qr-section{
  display:flex;

  justify-content:center;

  align-items:center;

  gap:30px;

  flex-wrap:wrap;

  padding:30px 20px;
}

/* QR CARD */
.simple-qr-card{
  width:280px;

  background:#ffffff;

  border:1px solid #e2e8f0;

  border-radius:18px;

  padding:24px;

  text-align:center;

  box-shadow:
    0 4px 20px rgba(15,23,42,0.05);

  transition:all 0.3s ease;
}

.simple-qr-card:hover{
  transform:translateY(-5px);

  box-shadow:
    0 10px 25px rgba(15,23,42,0.08);
}

/* QR TITLE */
.simple-qr-title{
  font-size:20px;

  font-weight:700;

  color:#0f172a;

  margin-bottom:20px;
}

/* QR BOX */
.simple-qr-box{
  background:#ffffff;

  border:2px solid #e2e8f0;

  border-radius:14px;

  padding:16px;

  display:flex;

  align-items:center;

  justify-content:center;

  cursor:pointer;

  transition:0.3s ease;
}

.simple-qr-box:hover{
  border-color:#2563eb;
}

/* QR IMAGE */
.simple-qr-image{
  width:200px;

  height:200px;

  object-fit:contain;

  image-rendering:pixelated;
}

/* QR NOTE */
.simple-qr-note{
  margin-top:16px;

  font-size:14px;

  color:#64748b;

  line-height:1.6;
}

/* QR POPUP */
.qr-popup{
  position:fixed;

  inset:0;

  background:rgba(15,23,42,0.75);

  display:flex;

  align-items:center;

  justify-content:center;

  z-index:999;

  padding:20px;
}

.qr-popup-card{
  background:#ffffff;

  border-radius:20px;

  padding:24px;

  position:relative;

  width:100%;

  max-width:400px;

  text-align:center;

  animation:popupScale 0.3s ease;
}

@keyframes popupScale{
  from{
    transform:scale(0.85);
    opacity:0;
  }

  to{
    transform:scale(1);
    opacity:1;
  }
}

.qr-popup-title{
  font-size:24px;

  font-weight:700;

  color:#0f172a;

  margin-bottom:20px;
}

.qr-popup-image{
  width:100%;

  max-width:300px;

  border-radius:14px;
}

.qr-close{
  position:absolute;

  top:10px;
  right:15px;

  background:none;

  border:none;

  font-size:30px;

  cursor:pointer;

  color:#475569;
}

/* TABLET */
@media(max-width:768px){

  .cp-hero{
    padding:70px 16px 55px;
  }

  .cp-main{
    margin-top:-24px;

    padding:0 14px 40px;
  }

  .cp-title{
    font-size:34px;

    line-height:1.25;
  }

  .cp-desc{
    font-size:14px;

    line-height:1.8;
  }

  table{
    min-width:650px;
  }

  .qr-section{
    padding:20px 16px;
  }

  .simple-qr-card{
    width:100%;

    max-width:320px;
  }

  .simple-qr-image{
    width:170px;

    height:170px;
  }
}

/* MOBILE */
@media(max-width:480px){

  .cp-hero{
    padding:60px 14px 45px;
  }

  .cp-title{
    font-size:28px;
  }

  .cp-desc{
    font-size:13px;

    max-width:100%;
  }

  .cp-card{
    border-radius:14px;
  }

  .cp-tab-btn{
    font-size:13px;
  }

  .simple-qr-card{
    padding:20px;
  }

  .simple-qr-title{
    font-size:18px;
  }

  .simple-qr-image{
    width:150px;

    height:150px;
  }

  .simple-qr-note{
    font-size:13px;
  }

  .qr-popup-title{
    font-size:20px;
  }

  td,
  th{
    padding:12px;
  }
}`}</style>

      {/* HERO */}
      <div className="cp-hero">
        <div className="cp-hero-content">

          <div className="cp-badge">
            {t("citizenPortal.hero.badge")}
          </div>

          <h1 className="cp-title">
            {t("citizenPortal.hero.title")}
          </h1>

          <p className="cp-desc">
            {t("citizenPortal.hero.desc")}
          </p>

        </div>
      </div>

      {/* MAIN */}
      <div className="cp-main">

        {/* TAB */}
        <div className="cp-tab-bar">
          <button className="cp-tab-btn">
            {t("citizenPortal.tabs.csc")}
          </button>
        </div>

        {/* TABLE */}
        <div className="cp-card">
          <div className="cp-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{t("citizenPortal.table.cols.no")}</th>

<th>{t("citizenPortal.table.cols.scheme")}</th>

<th>{t("citizenPortal.table.cols.dept")}</th>

<th>{t("citizenPortal.table.cols.service")}</th>

<th>{t("citizenPortal.table.cols.portal")}</th>

<th>{t("citizenPortal.table.cols.website")}</th>
                </tr>
              </thead>

              <tbody>
                {services.map((s, i) => (
                  <tr key={i}>
                    <td>{s.no}</td>
                    <td>{s.scheme}</td>
                    <td>{s.dept}</td>
                    <td>{s.service}</td>
                    <td>{s.portal}</td>

                    <td>
                      <a
                        href={`https://${s.website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="website-link"
                      >
                        {s.website}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QR SECTION */}
      {/* QR SECTION */}
<div className="cp-card">

  <div className="qr-section">

    {/* HOUSE TAX QR */}
    <div className="simple-qr-card">

      <h3 className="simple-qr-title">
        {t("citizenPortal.qr.houseTax")}
      </h3>

      <div
        className="simple-qr-box"
        onClick={() =>
          setSelectedQR("/QR CODE.jpeg")
        }
      >
        <img
          src="/QR CODE.jpeg"
          alt="House Tax QR"
          className="simple-qr-image"
        />
      </div>

      <p className="simple-qr-note">
        {t("citizenPortal.qr.note")}
      </p>

    </div>

    {/* WATER TAX QR */}
    <div className="simple-qr-card">

      <h3 className="simple-qr-title">
        {t("citizenPortal.qr.waterTax")}
      </h3>

      <div
        className="simple-qr-box"
        onClick={() =>
          setSelectedQR("/QR CODE.jpeg")
        }
      >
        <img
          src="/QR CODE.jpeg"
          alt="Water Tax QR"
          className="simple-qr-image"
        />
      </div>

      <p className="simple-qr-note">
        {t("citizenPortal.qr.note")}
      </p>

    </div>

  </div>

</div>
      </div>

      {/* QR POPUP */}
      {selectedQR && (
        <div
          className="qr-popup"
          onClick={() =>
            setSelectedQR(null)
          }
        >
          <div
            className="qr-popup-card"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className="qr-close"
              onClick={() =>
                setSelectedQR(null)
              }
            >
              ×
            </button>

            <h2 className="qr-popup-title">
              Scan QR Code
            </h2>

            <img
              src={selectedQR}
              alt="QR Popup"
              className="qr-popup-image"
            />
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}