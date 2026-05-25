import React from "react";

import { useTranslator } from "../../context/LanguageContext";

import Navbar from "./Navbar";
import Footer from "./Footer";

const AllNews = ({ newsList }) => {

  const { t } = useTranslator();

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

          .all-news-container{
            width:100%;
            min-height:100vh;
            background:#f1f5f9;
            padding:40px 20px;
            font-family:Arial, sans-serif;
          }

          /* =========================
             HEADER
          ========================= */

          .all-news-header{
            text-align:center;
            margin-bottom:40px;
          }

          .all-news-header h1{
            font-size:42px;
            color:#0f172a;
            margin-bottom:10px;
          }

          .all-news-header p{
            color:#64748b;
            font-size:16px;
          }

          /* =========================
             GRID
          ========================= */

          .all-news-grid{
            width:100%;
            display:grid;
            grid-template-columns:
              repeat(auto-fit,minmax(330px,1fr));

            gap:30px;
          }

          /* =========================
             CARD
          ========================= */

          .all-news-card{
            background:white;
            border-radius:20px;
            overflow:hidden;
            box-shadow:
              0 5px 20px rgba(0,0,0,0.08);

            transition:0.3s;
          }

          .all-news-card:hover{
            transform:translateY(-6px);
          }

          /* =========================
             IMAGE
          ========================= */

          .all-news-image{
            width:100%;
            height:240px;
            object-fit:cover;
          }

          /* =========================
             CONTENT
          ========================= */

          .all-news-content{
            padding:22px;
          }

          .all-news-date{
            display:inline-block;
            margin-bottom:12px;
            color:#2563eb;
            font-size:14px;
            font-weight:600;
          }

          .all-news-content h2{
            font-size:24px;
            color:#0f172a;
            margin-bottom:14px;
          }

          .all-news-content p{
            color:#475569;
            line-height:1.7;
            font-size:15px;
          }

          /* =========================
             EMPTY
          ========================= */

          .empty-news{
            width:100%;
            text-align:center;
            padding:80px 20px;
            background:white;
            border-radius:20px;
            box-shadow:
              0 5px 20px rgba(0,0,0,0.08);
          }

          .empty-news h2{
            color:#0f172a;
            margin-bottom:10px;
          }

          .empty-news p{
            color:#64748b;
          }

          /* =========================
             RESPONSIVE
          ========================= */

          @media(max-width:768px){

            .all-news-header h1{
              font-size:30px;
            }

            .all-news-grid{
              grid-template-columns:1fr;
            }

          }

        `}
      </style>

      <div className="all-news-container">

        {/* HEADER */}

        <div className="all-news-header">

          <h1>
            {t("allNews.title")}
          </h1>

          <p>
            {t("allNews.subtitle")}
          </p>

        </div>


        {/* NEWS GRID */}

        {newsList &&
        newsList.length > 0 ? (

          <div className="all-news-grid">

            {newsList.map((news) => (

              <div
                className="all-news-card"
                key={news.id || news._id}
              >

                {/* IMAGE */}

                {news.image && (

                  <img
                    src={news.image || news.imageUrl}
                    alt={news.title}
                    className="all-news-image"
                  />

                )}


                {/* CONTENT */}

                <div className="all-news-content">

                  <span className="all-news-date">
                    {news.date}
                  </span>

                  <h2>
                    {news.title}
                  </h2>

                  <p>
                    {news.description || news.excerpt || news.content}
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="empty-news">

            <h2>
              {t("allNews.emptyTitle")}
            </h2>

            <p>
              {t("allNews.emptyDesc")}
            </p>

          </div>

        )}

      </div>

      <Footer />
    </>
  );
};

export default AllNews;