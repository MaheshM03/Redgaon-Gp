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
  // MERGE STATIC + DATABASE DATA
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

      {/* ========================================= */}
      {/* CSS */}
      {/* ========================================= */}

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

        /* HERO SECTION */

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

          box-shadow:
            0 12px 35px rgba(0,0,0,0.3);
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

        /* MAIN CONTAINER */

        .declaration-container{

          max-width:1250px;

          margin:auto;

          padding:80px 20px;
        }

        /* SEARCH BOX */

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

          position:relative;

          overflow:hidden;

          border:1px solid #e5e7eb;

          transition:0.4s ease;

          box-shadow:
            0 10px 25px rgba(0,0,0,0.08);
        }

        .declaration-card::before{

          content:"";

          position:absolute;

          top:0;

          left:0;

          width:100%;

          height:6px;

          background:
            linear-gradient(
              to right,
              #2563eb,
              #1d4ed8
            );
        }

        .declaration-card:hover{

          transform:
            translateY(-10px);

          box-shadow:
            0 20px 45px
            rgba(37,99,235,0.18);
        }

        /* TOP SECTION */

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

        .btn-group{
          width:100%;
        }

        .download-btn{

          width:100%;

          display:block;

          padding:14px 20px;

          border:none;

          border-radius:40px;

          text-decoration:none;

          text-align:center;

          font-size:14px;

          font-weight:600;

          transition:0.3s ease;

          background:
            linear-gradient(
              to right,
              #111827,
              #1f2937
            );

          color:#fff;
        }

        .download-btn:hover{

          transform:translateY(-4px);

          opacity:0.92;
        }

        /* LOADING */

        .loading{

          text-align:center;

          padding:80px 20px;

          font-size:24px;

          font-weight:600;

          color:#2563eb;
        }

        /* EMPTY */

        .empty-data{

          text-align:center;

          padding:80px 20px;

          color:#6b7280;

          font-size:20px;
        }

        /* MOBILE */

        @media(max-width:768px){

          .declaration-hero{

            min-height:280px;

            border-bottom-left-radius:40px;

            border-bottom-right-radius:40px;
          }

          .hero-content h1{
            font-size:34px;
          }

          .hero-content p{
            font-size:14px;
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

          .pdf-top{
            flex-direction:column;
            gap:10px;
            align-items:flex-start;
          }
        }

        `}

      </style>

      {/* ========================================= */}
      {/* MAIN SECTION */}
      {/* ========================================= */}

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

        {/* MAIN CONTAINER */}

        <div className="declaration-container">

          {/* SEARCH */}

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

          {/* LOADING */}

          {loading ? (

            <div className="loading">

              Loading Documents...

            </div>

          ) : filteredDeclarations.length > 0 ? (

            <div className="declaration-grid">

              {filteredDeclarations.map(
                (item, index) => (

                  <div
                    className="declaration-card"
                    key={item._id}
                  >

                    {/* TOP */}

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

                    {/* ICON */}

                    <div className="pdf-icon">
                      📑
                    </div>

                    {/* TITLE */}

                    <h3>
                      {item.title}
                    </h3>

                    {/* DATE */}

                    <div className="declaration-date">

                      {item.date}

                    </div>

                    {/* DOWNLOAD BUTTON */}

                    <div className="btn-group">

                      <a
                        href={item.pdf}
                        download
                        className="download-btn"
                      >

                        Download PDF

                      </a>

                    </div>

                  </div>
                )
              )}

            </div>

          ) : (

            <div className="empty-data">

              No Declaration Found

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Declaration;