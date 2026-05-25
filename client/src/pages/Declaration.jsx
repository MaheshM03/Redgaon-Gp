import React, { useEffect, useState } from "react";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer"

const Declaration = () => {

  const [declarations, setDeclarations] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // =========================================
  // BACKEND API URL
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
        throw new Error(`HTTP Error : ${response.status}`);
      }

      const data = await response.json();

      setDeclarations(data.data || []);

    } catch (error) {

      console.error("Fetch Error :", error);

    } finally {

      setLoading(false);

    }
  };

  // =========================================
  // SEARCH FILTER
  // =========================================

  const publicDeclarationFiles = [
    // Files present in `client/public/Declaration/`
    "कोणत्याही योजनेचा लार् न घेतल्याचे स्वयंघोषणापत.pdf",
    "दिभक्त कुटुांब स्ियांघोषणापत.pdf",
    "पररत्यक्ता असल्याबाबत स्वयांघोषणापत्र.pdf",
    "रदिवासी स्वयांघोषणापत.pdf",
    "वयाबाबत स्वयंघोषणापत्र.pdf",
    "विधवा असल्याचे प्रमाणपत्र.pdf",
    "वीज जोडणी स्वयांघोषणापत.pdf",
    "स्वयंघोषणापत्र.pdf",
    "हयात असल्याबाबत स्वयघां ोषणापत.pdf",
    "िौचालय असल्याबाबत स्वयंघोषणापत.pdf",
  ];

  const publicDeclarations = publicDeclarationFiles.map((filename) => ({
    _id: `public-${filename}`,
    title: filename,
    date: "—",
    pdf: `/Declaration/${filename}`,
  }));

  const mergedDeclarations = [
    ...(Array.isArray(declarations) ? declarations : []),
    ...publicDeclarations,
  ];

  const dedupedDeclarations = mergedDeclarations.filter((item, idx, arr) => {
    const key = item?.pdf || item?._id || String(idx);
    return (
      arr.findIndex((x) => (x?.pdf || x?._id) === (item?.pdf || item?._id)) === idx
    );
  });

  const filteredDeclarations = dedupedDeclarations.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar/>
      <style>
        {`

          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family:"Poppins",sans-serif;
            background:#f5f7fb;
          }

          .declaration-section{
            width:100%;
            min-height:100vh;
            background:#f5f7fb;
          }

          /* HERO SECTION */

          .declaration-hero{
            width:100%;
            min-height:320px;
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
            width:90px;
            height:90px;
            margin:auto;
            margin-bottom:20px;

            background:#2563eb;

            border-radius:22px;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:40px;

            box-shadow:0 12px 30px rgba(0,0,0,0.3);

            transform:rotate(-8deg);
          }

          .hero-content h1{
            font-size:48px;
            font-weight:700;
            margin-bottom:18px;
          }

          .hero-content p{
            font-size:16px;
            line-height:1.8;
            color:#e5e7eb;
          }

          /* MAIN CONTAINER */

          .declaration-container{
            max-width:1200px;
            margin:auto;
            padding:80px 20px;
          }

          /* SEARCH BOX */

          .search-box{
            width:100%;
            max-width:500px;
            margin:0 auto 50px;
          }

          .search-box input{
            width:100%;
            padding:16px 24px;

            border:none;
            outline:none;

            border-radius:50px;

            background:#fff;

            font-size:15px;

            box-shadow:0 8px 25px rgba(0,0,0,0.08);
          }

          /* GRID */

          .declaration-grid{
            display:grid;
            grid-template-columns:
              repeat(auto-fit,minmax(320px,1fr));

            gap:30px;
          }

          /* CARD */

          .declaration-card{
            background:#fff;

            border-radius:24px;

            padding:30px;

            position:relative;

            overflow:hidden;

            transition:0.4s ease;

            box-shadow:0 10px 25px rgba(0,0,0,0.08);
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
            transform:translateY(-10px);

            box-shadow:
              0 18px 40px rgba(37,99,235,0.18);
          }

          .pdf-icon{
            width:75px;
            height:75px;

            border-radius:20px;

            background:#eff6ff;

            color:#2563eb;

            display:flex;
            align-items:center;
            justify-content:center;

            font-size:34px;

            margin-bottom:22px;
          }

          .declaration-card h3{
            font-size:22px;
            color:#111827;
            line-height:1.6;
            margin-bottom:18px;
          }

          .declaration-date{
            display:inline-block;

            padding:8px 18px;

            background:#eff6ff;

            color:#2563eb;

            border-radius:30px;

            font-size:13px;
            font-weight:600;

            margin-bottom:24px;
          }

          /* BUTTONS */

          .btn-group{
            display:flex;
            gap:15px;
            flex-wrap:wrap;
          }

          .view-btn,
          .download-btn{
            flex:1;

            padding:13px 20px;

            border:none;

            border-radius:40px;

            text-decoration:none;

            text-align:center;

            font-size:14px;
            font-weight:600;

            transition:0.3s ease;
          }

          .view-btn{
            background:#2563eb;
            color:#fff;
          }

          .download-btn{
            background:#111827;
            color:#fff;
          }

          .view-btn:hover,
          .download-btn:hover{
            transform:translateY(-4px);
          }

          /* LOADING */

          .loading{
            text-align:center;
            padding:80px 20px;

            font-size:22px;
            font-weight:600;

            color:#2563eb;
          }

          /* EMPTY */

          .empty-data{
            text-align:center;
            padding:80px 20px;

            color:#6b7280;

            font-size:18px;
          }

          /* MOBILE */

          @media(max-width:768px){

            .declaration-hero{
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

            .btn-group{
              flex-direction:column;
            }

            .view-btn,
            .download-btn{
              width:100%;
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
              ग्रामपंचायत संबंधित सर्व घोषणा,
              सूचना आणि PDF दस्तऐवज येथे उपलब्ध आहेत.
            </p>

          </div>

        </div>

        {/* MAIN CONTAINER */}

        <div className="declaration-container">

          {/* SEARCH */}

          <div className="search-box">

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

              {filteredDeclarations.map((item) => (

                <div
                  className="declaration-card"
                  key={item._id}
                >

                  <div className="pdf-icon">
                    📑
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="declaration-date">
                    {item.date}
                  </div>

                  <div className="btn-group">

                    {/* VIEW PDF */}

                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn"
                    >
                      View PDF
                    </a>

                    {/* DOWNLOAD PDF */}

                    <a
                      href={item.pdf}
                      download
                      className="download-btn"
                    >
                      Download
                    </a>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="empty-data">
              No Declaration Found
            </div>

          )}

        </div>

      </section>
     <Footer/>
    </>
  );
};

export default Declaration;