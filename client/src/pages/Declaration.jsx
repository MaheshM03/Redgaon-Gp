import React, { useEffect, useState } from "react";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

const Declaration = () => {

  // =========================================
  // STATES
  // =========================================

  const [declarations, setDeclarations] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  // =========================================
  // API URL
  // =========================================

  const API_BASE =
    process.env.REACT_APP_API_URL ||
    "https://grampanchyat1.onrender.com";

  // =========================================
  // FETCH DECLARATIONS
  // =========================================

  useEffect(() => {

    fetchDeclarations();

  }, []);

  const fetchDeclarations = async () => {

    try {

      setLoading(true);

      const response = await fetch(
        `${API_BASE}/api/declarations`
      );

      if (!response.ok) {

        throw new Error(
          `HTTP Error : ${response.status}`
        );
      }

      const data = await response.json();

      setDeclarations(data.data || []);

    } catch (error) {

      console.error(
        "Fetch Error :",
        error
      );

    } finally {

      setLoading(false);
    }
  };

  // =========================================
  // DOWNLOAD FUNCTION
  // =========================================

  const handleDownload = async (
    pdfUrl,
    fileName
  ) => {

    try {

      const response =
        await fetch(pdfUrl);

      const blob =
        await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = url;

      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

    } catch (error) {

      console.error(
        "Download failed:",
        error
      );
    }
  };

  // =========================================
  // STATIC PDF FILES
  // =========================================

  const declarationStaticFiles = [

    {
      title:
        "कोणत्याही योजनेचा लाभ न घेतल्याचे स्वयंघोषणापत्र",

      file:
        "कोणत्याही योजनेचा लाभ न घेतल्याचे स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "विधवा असल्याबाबत स्वयंघोषणापत्र",

      file:
        "विधवा असल्याबाबत स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "रहिवाशी स्वयंघोषणापत्र",

      file:
        "रहिवाशी स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "वीज जोडणी स्वयंघोषणापत्र",

      file:
        "वीज जोडणी स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "परित्यक्त्या असल्याबाबत स्वयंघोषणापत्र",

      file:
        "परित्यक्त्या असल्याबाबत स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "शौचालय असल्याबाबत स्वयंघोषणापत्र",

      file:
        "शौचालय असल्याबाबत स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "विभक्त कुटुंब असल्यास स्वयंघोषणापत्र",

      file:
        "विभक्त कुटुंब असल्यास स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "हयात असल्याबाबत स्वयंघोषणापत्र",

      file:
        "हयात असल्याबाबत स्वयंघोषणापत्र.pdf",
    },

    {
      title:
        "वयाबाबत स्वयंघोषणापत्र",

      file:
        "वयाबाबत स्वयंघोषणापत्र.pdf",
    },

  ];

  // =========================================
  // BUILD STATIC DECLARATIONS
  // =========================================

  const buildStaticDeclarations = () => {

    const today = new Date();

    return declarationStaticFiles.map(
      (item, index) => ({

        _id: `static-${index}`,

        title: item.title,

        category: "Declaration",

        date:
          today.toLocaleDateString(),

        pdf:
          `/Declaration/${encodeURIComponent(item.file)}`,
      })
    );
  };

  // =========================================
  // MERGE DATA
  // =========================================

  const publicDeclarations =
    buildStaticDeclarations();

  const mergedDeclarations = [

    ...(Array.isArray(declarations)
      ? declarations
      : []),

    ...publicDeclarations,
  ];

  // =========================================
  // REMOVE DUPLICATES
  // =========================================

  const dedupedDeclarations =
    mergedDeclarations.filter(
      (item, idx, arr) => {

        return (

          arr.findIndex(
            (x) =>
              (x?.pdf || x?._id) ===
              (item?.pdf || item?._id)
          ) === idx
        );
      }
    );

  // =========================================
  // SEARCH FILTER
  // =========================================

  const filteredDeclarations =
    dedupedDeclarations.filter(
      (item) =>
        item.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <>

      <Navbar />

      <style>

        {`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:"Poppins",sans-serif;
          background:#f4f7fb;
        }

        .declaration-section{
          width:100%;
          min-height:100vh;
          background:#f4f7fb;
        }

        /* HERO */

        .declaration-hero{

          width:100%;

          min-height:340px;

          background:
            linear-gradient(
              rgba(17,24,39,0.88),
              rgba(17,24,39,0.88)
            ),

            url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop");

          background-size:cover;

          background-position:center;

          display:flex;

          align-items:center;

          justify-content:center;

          text-align:center;

          padding:40px 20px;

          border-bottom-left-radius:70px;

          border-bottom-right-radius:70px;
        }

        .hero-content{
          max-width:850px;
          color:#fff;
        }

        .hero-icon{

          width:100px;
          height:100px;

          margin:auto;

          margin-bottom:25px;

          border-radius:25px;

          background:
            linear-gradient(
              to right,
              #2563eb,
              #1d4ed8
            );

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:45px;
        }

        .hero-content h1{

          font-size:50px;

          font-weight:700;

          margin-bottom:18px;
        }

        .hero-content p{

          font-size:17px;

          line-height:1.8;

          color:#e5e7eb;
        }

        /* MAIN */

        .declaration-container{

          max-width:1250px;

          margin:auto;

          padding:80px 20px;
        }

        /* SEARCH */

        .search-box{

          width:100%;

          max-width:550px;

          margin:0 auto 60px;

          position:relative;
        }

        .search-icon{

          position:absolute;

          top:50%;

          left:20px;

          transform:translateY(-50%);

          font-size:18px;

          color:#6b7280;
        }

        .search-box input{

          width:100%;

          padding:
            18px 24px 18px 55px;

          border:none;

          outline:none;

          border-radius:50px;

          background:#fff;

          font-size:15px;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.08);
        }

        /* GRID */

        .declaration-grid{

          display:grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(320px,1fr)
            );

          gap:30px;
        }

        /* CARD */

        .declaration-card{

          background:#fff;

          border-radius:28px;

          padding:30px;

          border:1px solid #e5e7eb;

          transition:0.4s ease;

          box-shadow:
            0 10px 25px rgba(0,0,0,0.08);
        }

        .declaration-card:hover{

          transform:
            translateY(-10px);

          box-shadow:
            0 20px 45px
            rgba(37,99,235,0.18);
        }

        /* TOP */

        .pdf-top{

          display:flex;

          justify-content:space-between;

          align-items:center;

          margin-bottom:18px;
        }

        .pdf-number{

          background:#2563eb;

          color:#fff;

          padding:7px 15px;

          border-radius:30px;

          font-size:13px;

          font-weight:600;
        }

        .pdf-category{

          background:#eff6ff;

          color:#2563eb;

          padding:7px 15px;

          border-radius:30px;

          font-size:12px;

          font-weight:600;
        }

        /* ICON */

        .pdf-icon{

          width:80px;

          height:80px;

          border-radius:20px;

          background:#eff6ff;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:40px;

          margin-bottom:25px;
        }

        /* TITLE */

        .declaration-card h3{

          font-size:21px;

          color:#111827;

          line-height:1.7;

          margin-bottom:18px;
        }

        /* DATE */

        .declaration-date{

          display:inline-block;

          padding:8px 18px;

          background:#f3f4f6;

          color:#374151;

          border-radius:30px;

          font-size:13px;

          font-weight:600;

          margin-bottom:24px;
        }

        /* BUTTON */

        .download-btn{

          width:100%;

          display:flex;

          align-items:center;

          justify-content:center;

          cursor:pointer;

          padding:14px 20px;

          border:none;

          border-radius:40px;

          font-size:14px;

          font-weight:600;

          background:
            linear-gradient(
              to right,
              #111827,
              #1f2937
            );

          color:#fff;

          transition:0.3s ease;
        }

        .download-btn:hover{

          transform:translateY(-4px);

          opacity:0.92;
        }

        /* PORTALS */

        .portal-section{

          width:100%;

          padding:20px 20px 100px;

          background:#f4f7fb;
        }

        .portal-container{

          max-width:1250px;

          margin:auto;
        }

        .portal-heading{

          text-align:center;

          margin-bottom:50px;
        }

        .portal-heading h2{

          font-size:40px;

          color:#111827;

          margin-bottom:15px;
        }

        .portal-heading p{

          color:#6b7280;

          font-size:16px;

          line-height:1.8;
        }

        .portal-grid{

          display:grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(250px,1fr)
            );

          gap:25px;
        }

        .portal-card{

          background:#fff;

          padding:35px 25px;

          border-radius:24px;

          text-decoration:none;

          transition:0.4s ease;

          text-align:center;

          border:1px solid #e5e7eb;
        }

        .portal-card:hover{

          transform:
            translateY(-10px);
        }

        .portal-icon{

          width:80px;

          height:80px;

          margin:auto;

          margin-bottom:20px;

          border-radius:22px;

          background:
            linear-gradient(
              to right,
              #2563eb,
              #1d4ed8
            );

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:38px;

          color:#fff;
        }

        .portal-card h3{

          color:#111827;

          font-size:22px;

          margin-bottom:12px;
        }

        .portal-card p{

          color:#6b7280;

          font-size:15px;

          line-height:1.7;
        }

        /* MOBILE */

        @media(max-width:768px){

          .hero-content h1{
            font-size:34px;
          }

          .declaration-container{
            padding:60px 15px;
          }
        }

        @media(max-width:480px){

          .hero-content h1{
            font-size:28px;
          }

          .declaration-grid{
            grid-template-columns:1fr;
          }

          .declaration-card{
            padding:25px;
          }
        }

        `}

      </style>

      <section className="declaration-section">

        {/* HERO */}

        <div className="declaration-hero">

          <div className="hero-content">

            <div className="hero-icon">
              📄
            </div>

            <h1>
              Declaration Documents
            </h1>

            <p>

              ग्रामपंचायत संबंधित सर्व
              घोषणा आणि PDF दस्तऐवज
              येथे उपलब्ध आहेत.

            </p>

          </div>

        </div>

        {/* MAIN */}

        <div className="declaration-container">

          <div className="search-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search declaration..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="declaration-grid">

            {filteredDeclarations.map(
              (item, index) => (

                <div
                  className="declaration-card"
                  key={item._id}
                >

                  <div className="pdf-top">

                    <span className="pdf-number">

                      #
                      {String(
                        index + 1
                      ).padStart(2, "0")}

                    </span>

                    <span className="pdf-category">

                      {item.category}

                    </span>

                  </div>

                  <div className="pdf-icon">
                    📑
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="declaration-date">

                    {item.date}

                  </div>

                  <button
                    className="download-btn"
                    onClick={() =>
                      handleDownload(
                        item.pdf,
                        item.title + ".pdf"
                      )
                    }
                  >

                    Download PDF

                  </button>

                </div>
              )
            )}

          </div>

        </div>

        {/* PORTALS */}

        <section className="portal-section">

          <div className="portal-container">

            <div className="portal-heading">

              <h2>
                Various Government Portals
              </h2>

              <p>

                शासनाच्या विविध अधिकृत
                पोर्टल्ससाठी खालील लिंकचा
                वापर करा.

              </p>

            </div>

            <div className="portal-grid">

  {/* 1 */}

  <a
    href="https://gr.maharashtra.gov.in/1145/Government-Resolutions"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      📜
    </div>

    <h3>
      शासन निर्णय
    </h3>

    <p>
      महाराष्ट्र शासनाचे विविध शासन निर्णय
      पाहण्यासाठी इथे click करा.
    </p>

  </a>

  {/* 2 */}

  <a
    href="https://maharashtra.gov.in/Site/ViewPDFList?doctype=R/m8/CavzsOmBKuREE9kWgvI09nVvwQImYMEm1tPfTwRcIKkAeQzS1L5_1VU1b8Nt26E0_bWmVDE26DJBQMJznfvpERSjMkTAmFBZN2sogc="
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🏛️
    </div>

    <h3>
      मंत्रिमंडळ निर्णय
    </h3>

    <p>
      मंत्रिमंडळ निर्णय पाहण्यासाठी
      इथे click करा.
    </p>

  </a>

  {/* 3 */}

  <a
    href="https://maharashtra.gov.in/home/index"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🌐
    </div>

    <h3>
      महाराष्ट्र शासन
    </h3>

    <p>
      महाराष्ट्र शासनाचे अधिकृत संकेतस्थळ
    </p>

  </a>

  {/* 4 */}

  <a
    href="https://nashik.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🏙️
    </div>

    <h3>
      नाशिक जिल्हा
    </h3>

    <p>
      नाशिक जिल्ह्याचे अधिकृत संकेतस्थळ
    </p>

  </a>

  {/* 5 */}

  <a
    href="https://egramswaraj.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🖥️
    </div>

    <h3>
      eGramSwaraj
    </h3>

    <p>
      eGramSwaraj Portal
    </p>

  </a>

  {/* 6 */}

  <a
    href="https://aaplesarkar.mahaonline.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      📋
    </div>

    <h3>
      आपले सरकार
    </h3>

    <p>
      आपले सरकार पोर्टल
    </p>

  </a>

  {/* 7 */}

  <a
    href="https://uidai.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🪪
    </div>

    <h3>
      आधार
    </h3>

    <p>
      UIDAI आधार सेवा
    </p>

  </a>

  {/* 8 */}

  <a
    href="https://mahabhumi.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🌾
    </div>

    <h3>
      डिजिटल ७/१२
    </h3>

    <p>
      महाभूमी डिजिटल जमीन नोंद
    </p>

  </a>

  {/* 9 */}

  <a
    href="https://divyangsahayak.maharashtra.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      ♿
    </div>

    <h3>
      दिव्यांग सहाय्यक
    </h3>

    <p>
      दिव्यांग सहाय्यक पोर्टल
    </p>

  </a>

  {/* 10 */}

  <a
    href="https://voters.eci.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🗳️
    </div>

    <h3>
      मतदाता सेवा
    </h3>

    <p>
      मतदाता सेवा पोर्टल
    </p>

  </a>

  {/* 11 */}

  <a
    href="https://grammanchitra.gov.in/gm4MVC"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🗺️
    </div>

    <h3>
      ग्राम मानचित्र
    </h3>

    <p>
      ग्राम मानचित्र पोर्टल
    </p>

  </a>

  {/* 12 */}

  <a
    href="https://www.digilocker.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🔐
    </div>

    <h3>
      DigiLocker
    </h3>

    <p>
      DigiLocker सेवा
    </p>

  </a>

  {/* 13 */}

  <a
    href="https://meetingonline.gov.in/homepage"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      📑
    </div>

    <h3>
      पंचायत निर्णय
    </h3>

    <p>
      पंचायत निर्णय पोर्टल
    </p>

  </a>

  {/* 14 */}

  <a
    href="https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      👷
    </div>

    <h3>
      रोजगार हमी योजना
    </h3>

    <p>
      महात्मा गांधी रोजगार हमी योजना
    </p>

  </a>

  {/* 15 */}

  <a
    href="https://mgmd.gov.in/explore"
    target="_blank"
    rel="noopener noreferrer"
    className="portal-card"
  >

    <div className="portal-icon">
      🏡
    </div>

    <h3>
      मेरा गाव मेरी धरोहर
    </h3>

    <p>
      मेरा गाव मेरी धरोहर पोर्टल
    </p>

  </a>

</div>

          </div>

        </section>

      </section>

      <Footer />

    </>
  );
};

export default Declaration;