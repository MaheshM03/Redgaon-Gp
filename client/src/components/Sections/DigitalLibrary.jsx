import React from "react";
import {
  BookOpen,
  PlayCircle,
  Video,
  Newspaper,
  Download,
} from "lucide-react";
import { useTranslator } from "../../context/LanguageContext.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const youtubeChannels = [
  {
    name: "Study IQ",
    logo: "/logos/studyiq.png",
  },

  {
    name: "Vision IAS",
    logo: "/logos/visionias.png",
  },

  {
    name: "Unacademy",
    logo: "/logos/unacademy.png",
  },

  {
    name: "Forum IAS",
    logo: "/logos/forumias.png",
  },

  {
    name: "Vajiram",
    logo: "/logos/vajiram.png",
  },

  {
    name: "Rau's IAS",
    logo: "/logos/rausias.png",
  },
];

const newspapers = [
  {
    name: "The Hindu",
    logo: "/papers/hindu.png",
  },

  {
    name: "Indian Express",
    logo: "/papers/express.png",
  },

  {
    name: "Loksatta",
    logo: "/papers/loksatta.png",
  },

  {
    name: "Maharashtra Times",
    logo: "/papers/mt.png",
  },
];

const upscBooks = [
  {
    title: "Indian Polity",
    // pdf: "/pdfs/indian-polity.pdf",
    thumbnail: "/thumbnails/polity.jpg",
  },

  {
    title: "History",
    // pdf: "/pdfs/history.pdf",
    thumbnail: "/thumbnails/history.jpg",
  },

  {
    title: "Geography",
    // pdf: "/pdfs/geography.pdf",
    thumbnail: "/thumbnails/geography.jpg",
  },

  {
    title: "Economics",
    // pdf: "/pdfs/economics.pdf",
    thumbnail: "/thumbnails/economics.jpg",
  },

  {
    title: "Science",
    // pdf: "/pdfs/science.pdf",
    thumbnail: "/thumbnails/science.jpg",
  },

  {
    title: "Environment",
    // pdf: "/pdfs/environment.pdf",
    thumbnail: "/thumbnails/environment.jpg",
  },
];

const mpscBooks = [
  {
    title: "10th Geography NEW",
    // pdf: "/mpsc/10th-geography-NEW.pdf",
    thumbnail: "/Thumbnail/10th-geography-NEW.jfif",
  },

  {
    title: "11 वी पर्यावरण 1",
    // pdf: "/mpsc/11-वी-पर्यावरण-1.pdf",
  },

  {
    title: "11th Economics NEW",
    // pdf: "/mpsc/11th-Economics-NEW.pdf",
    thumbnail: "/Thumbnail/11th-Economics-NEW.jfif",
  },

  {
    title: "11th Geography NEW",
    // pdf: "/mpsc/11th-Geography-NEW.pdf",
    thumbnail: "/Thumbnail/11th-Geography-NEW.jfif",
  },

  {
    title: "11th History NEW",
    // pdf: "/mpsc/11th-History-NEW.pdf",
    thumbnail: "/Thumbnail/11th-History-NEW.jfif",
  },

  {
    title: "11वी राज्यशास्त्र",
    // pdf: "/mpsc/11वी-राज्यशास्त्र.pdf",
    thumbnail: "/Thumbnail/11वी-राज्यशास्त्र.jfif",
  },

  {
    title: "12-वी पर्यावरण",
    // pdf: "/mpsc/12-वी-पर्यावरण.pdf",
    thumbnail: "/Thumbnail/12-वी-पर्यावरण.jfif",
  },

  {
    title: "12-वी राज्यशास्त्र",
    // pdf: "/mpsc/12-वी-राज्यशास्त्र-.pdf",
    thumbnail: "/Thumbnail/12-वी-राज्यशास्त्र-.jfif",
  },

  {
    title: "12th Economics NEW",
    // pdf: "/mpsc/12th-Economics-NEW.pdf",
    thumbnail: "/Thumbnail/12th-Economics-NEW.jfif",
  },

  {
    title: "12th Geography NEW",
    // pdf: "/mpsc/12th-Geography-NEW.pdf",
    thumbnail: "/Thumbnail/12th-Geography-NEW.jfif",
  },

  {
    title: "12th History NEW",
    // pdf: "/mpsc/12th-History-NEW.pdf",
    thumbnail: "/Thumbnail/12th-History-NEW.jfif",
  },

  {
    title: "9th History and Polity NEW",
    // pdf: "/mpsc/9th-History-and-Polity-9th-NEW.pdf",
    thumbnail: "/Thumbnail/9th-History-and-Polity-9th-NEW.jfif",
  },

  {
    title: "Abhijeet Rathod All Geography",
    // pdf: "/mpsc/Abhijeet-Rathod-All-Geography.pdf",
    thumbnail: "/Thumbnail/Abhijeet-Rathod-All-Geography.jfif",
  },

  {
    title: "MH Bhugol Vishal Londhe",
    // pdf: "/mpsc/MH-Bhugol-Vishal-londhe.pdf",
    thumbnail: "/Thumbnail/MH-Bhugol-Vishal-londhe.jfif",
  },

  {
    title: "Rajya Vyavstha",
    // pdf: "/mpsc/Rajya_Vyavstha.pdf",
    thumbnail: "/Thumbnail/Rajya_Vyavstha.jfif",
  },

  {
    title: "इयत्ता १० इतिहास",
    // pdf: "/mpsc/इयत्ता-१०-इतिहास.pdf",
    thumbnail: "/Thumbnail/इयत्ता-१०-इतिहास.jfif",
  },

  {
    title: "इयत्ता ५ इतिहास",
    // pdf: "/mpsc/इयत्ता-५-इतिहास.pdf",
    thumbnail: "/Thumbnail/इयत्ता-५-इतिहास.jfif",
  },

  {
    title: "इयत्ता ५ भुगोल",
    // pdf: "/mpsc/इयत्ता-५-भुगोल.pdf",
    thumbnail: "/Thumbnail/इयत्ता-५-भुगोल.jfif",
  },

  {
    title: "इयत्ता ५ विज्ञान",
    // pdf: "/mpsc/इयत्ता-५-विज्ञान.pdf",
    thumbnail: "/Thumbnail/इयत्ता-५-विज्ञान.jfif",
  },

  {
    title: "इयत्ता ६ इतिहास",
    // pdf: "/mpsc/इयत्ता-६-इतिहास.pdf",
  },

  {
    title: "इयत्ता ६ भुगोल",
    // pdf: "/mpsc/इयत्ता-६-भुगोल.pdf",
  },

  {
    title: "इयत्ता ६ विज्ञान",
    // pdf: "/mpsc/इयत्ता-६-विज्ञान.pdf",
    thumbnail: "/Thumbnail/इयत्ता-६-विज्ञान.jfif",
  },

  {
    title: "इयत्ता ७ इतिहास",
    // pdf: "/mpsc/इयत्ता-७-इतिहास.pdf",
    thumbnail: "/Thumbnail/इयत्ता-७-इतिहास.jfif",
  },

  {
    title: "इयत्ता ७ भुगोल",
    // pdf: "/mpsc/इयत्ता-७-भुगोल.pdf",
    thumbnail: "/Thumbnail/इयत्ता-७-भुगोल.jfif",
  },

  {
    title: "इयत्ता ७ विज्ञान",
    // pdf: "/mpsc/इयत्ता-७-विज्ञान.pdf",
    thumbnail: "/Thumbnail/इयत्ता-७-विज्ञान.jfif",
  },

  {
    title: "इयत्ता ८ इतिहास",
    // pdf: "/mpsc/इयत्ता-८-इतिहास.pdf",
    thumbnail: "/Thumbnail/इयत्ता-८-इतिहास.jfif",
  },

  {
    title: "इयत्ता ८ भुगोल",
    // pdf: "/mpsc/इयत्ता-८-भुगोल.pdf",  
    thumbnail: "/Thumbnail/इयत्ता-८-भुगोल.jfif",
  },

  {
    title: "इयत्ता ८ विज्ञान",
    // pdf: "/mpsc/इयत्ता-८-विज्ञान.pdf",
    thumbnail: "/Thumbnail/इयत्ता-८-विज्ञान.jfif",
  },

  {
    title: "इयत्ता ९ भुगोल",
    pdf: "/mpsc/इयत्ता-९-भुगोल.pdf",
    thumbnail: "/Thumbnail/इयत्ता-९-भुगोल.jfif",
  },

  {
    title: "इयत्ता ९ विज्ञान",
    // pdf: "/mpsc/इयत्ता-९-विज्ञान.pdf",
    thumbnail: "/Thumbnail/इयत्ता-९-विज्ञान.jfif",
  },

  {
    title: "६ वी नागरिक शास्त्र",
    // pdf: "/mpsc/६-वी-नागरिक-शास्त्र.pdf",
    thumbnail: "/Thumbnail/६-वी-नागरिक-शास्त्र.jfif",
  },

  {
    title: "७ वी आपले संविधान",
    // pdf: "/mpsc/७-वी-आपले-संविधान.pdf",
    thumbnail: "/Thumbnail/७-वी-आपले-संविधान.jfif",
  },

  {
    title: "८ वी नागरिक शास्त्र आणि प्रशासन",
    // pdf: "/mpsc/८_वी_नागरिक_शास्त्र_आणि_प्रशासन.pdf",
    thumbnail: "/Thumbnail/८_वी_नागरिक_शास्त्र_आणि_प्रशासन.jfif",
  },
];

export default function DigitalLibrary() {
  const { t } = useTranslator();

  return (


    <>
    <Navbar/>
    <div className="dl-root">

      {/* HERO SECTION */}

      <section className="dl-hero">
    
        <div className="dl-overlay"></div>

        <div className="dl-hero-content">

          <div className="dl-icon-wrap">

            <BookOpen size={60} />

          </div>

          <h1 className="dl-title">{t("digitalLibrary.hero.title")}</h1>

          <p className="dl-subtitle">{t("digitalLibrary.hero.subtitle")}</p>


        </div>

        <div className="dl-wave"></div>

      </section>

      {/* VIDEOS */}

      <section className="dl-section">
          <h2 className="dl-heading">{t("digitalLibrary.videos.title")}</h2>


        <div className="dl-video-grid">

          <div className="dl-video-card">

            <img
              src="/videos/video1.jpg"
              alt=""
              className="dl-video-image"
            />

            <div className="dl-play">

              <PlayCircle size={60} />

            </div>

            <h4>{t("digitalLibrary.video1.title")}</h4>

          </div>

          <div className="dl-video-card">

            <img
              src="/videos/video2.jpg"
              alt=""
              className="dl-video-image"
            />

            <div className="dl-play">

              <PlayCircle size={60} />

            </div>

            <h4>{t("digitalLibrary.video2.title")}</h4>

          </div>

        </div>

      </section>

      {/* YOUTUBE CHANNELS */}

      <section className="dl-section gray">

        <div className="dl-title-row">

          <Video size={34} />

          <h2>{t("digitalLibrary.youtube.title")}</h2>

        </div>

        <div className="dl-logo-grid">

          {youtubeChannels.map(
            (channel, index) => (

              <div
                key={index}
                className="dl-logo-card"
              >

                <img
                  src={channel.logo}
                  alt=""
                />

              </div>
            )
          )}

        </div>

      </section>

      {/* NEWSPAPERS */}

      <section className="dl-section">

        <div className="dl-title-row">

          <Newspaper size={34} />

          <h2>{t("digitalLibrary.newspapers.title")}</h2>

        </div>

        <div className="dl-logo-grid">

          {newspapers.map(
            (paper, index) => (

              <div
                key={index}
                className="dl-logo-card"
              >

                <img
                  src={paper.logo}
                  alt=""
                />

              </div>
            )
          )}

        </div>

      </section>

      {/* UPSC BOOKS */}

      <section className="dl-section gray">
        <h2 className="dl-heading">{t("digitalLibrary.upscBooks.title")}</h2>

        <div className="dl-books-grid">

          {upscBooks.map(
            (book, index) => (

              <div
                className="dl-book-card"
                key={index}
              >

                <img
                  src={book.thumbnail}
                  alt=""
                  className="dl-book-image"
                />

                <div className="dl-book-overlay">

                  <h3 className="dl-book-title">
                    {book.title}
                  </h3>

                 <button
  className="dl-btn"
  onClick={() => window.open(book.pdf, "_blank")}
>
  <Download size={16} />
  {t("digitalLibrary.openPdf")}
</button>

                </div>

              </div>
            )
          )}

        </div>

      </section>

      {/* MPSC BOOKS */}

      <section className="dl-section">
        <h2 className="dl-heading">{t("digitalLibrary.mpscBooks.title")}</h2>

        <div className="dl-books-grid">

          {mpscBooks.map(
            (book, index) => (

              <div
                className="dl-book-card"
                key={index}
              >

                {book.thumbnail ? (
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="dl-book-image"
                  />
                ) : (
                  <div className="dl-book-placeholder">
                    <BookOpen size={48} />
                  </div>
                )}

                <div className="dl-book-overlay">

                  <h3 className="dl-book-title">
                    {book.title}
                  </h3>

                  <button
  className="dl-btn"
  onClick={() => window.open(book.pdf, "_blank")}
>
  <Download size={16} />
  {t("digitalLibrary.openPdf")}
</button>

                </div>

              </div>
            )
          )}

        </div>
       
      </section>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,
body{
  overflow-x:hidden;

  background:#f8fafc;

  font-family:
    'Inter',
    sans-serif;
}

/* ROOT */

.dl-root{
  min-height:100vh;

  background:#f8fafc;
}

/* HERO */

.dl-hero{
  position:relative;

  padding:40px 20px 30px;

  background:
    linear-gradient(
      180deg,
      #eff6ff 0%,
      #f8fafc 100%
    );

  text-align:center;

  overflow:hidden;
}

/* HERO GLOW EFFECTS */

.dl-hero::before{
  content:"";

  position:absolute;

  width:280px;
  height:280px;

  background:
    rgba(37,99,235,0.08);

  border-radius:50%;

  top:-120px;
  right:-100px;

  filter:blur(20px);
}

.dl-hero::after{
  content:"";

  position:absolute;

  width:220px;
  height:220px;

  background:
    rgba(59,130,246,0.06);

  border-radius:50%;

  bottom:-100px;
  left:-80px;

  filter:blur(20px);
}

.dl-overlay{
  position:absolute;

  inset:0;

  background:
    radial-gradient(
      circle at top right,
      rgba(37,99,235,0.08),
      transparent 45%
    );
}

.dl-hero-content{
  position:relative;

  z-index:2;

  max-width:700px;

  margin:auto;

  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:center;

  animation:
    fadeUp 0.8s ease;
}

/* ICON */

.dl-icon-wrap{
  width:64px;
  height:64px;

  margin-bottom:16px;

  border-radius:16px;

  background:#2563eb;

  color:#ffffff;

  display:flex;

  justify-content:center;

  align-items:center;

  box-shadow:
    0 6px 18px rgba(37,99,235,0.14);

  animation:
    floatIcon 3s ease-in-out infinite;
}

/* TITLE */

.dl-title{
  position:relative;

  display:inline-block;

  font-size:
    clamp(28px,4vw,44px);

  font-weight:800;

  color:#0f172a;

  line-height:1.15;

  text-align:center;

  margin-bottom:18px;

  letter-spacing:-0.5px;
}

.dl-title::after{
  content:"";

  position:absolute;

  left:50%;
  bottom:-10px;

  transform:
    translateX(-50%);

  width:80px;
  height:4px;

  border-radius:999px;

  background:
    linear-gradient(
      90deg,
      #2563eb,
      #60a5fa
    );
}

/* SUBTITLE */

.dl-subtitle{
  font-size:14px;

  color:#475569;

  line-height:1.7;

  text-align:center;

  max-width:620px;

  margin:auto;
}

/* SECTION */

.dl-section{
  padding:42px 20px;
}

.gray{
  background:#f1f5f9;

  position:relative;

  overflow:hidden;
}

.gray::before{
  content:"";

  position:absolute;

  top:-80px;
  right:-80px;

  width:180px;
  height:180px;

  background:
    rgba(37,99,235,0.04);

  border-radius:50%;
}

/* HEADINGS */

.dl-heading{
  position:relative;

  text-align:center;

  font-size:
    clamp(24px,4vw,38px);

  font-weight:800;

  color:#0f172a;

  margin-bottom:34px;

  line-height:1.2;

  animation:
    fadeIn 1s ease;
}

.dl-heading::after{
  content:"";

  display:block;

  width:70px;
  height:4px;

  margin:12px auto 0;

  border-radius:999px;

  background:
    linear-gradient(
      90deg,
      #2563eb,
      #60a5fa
    );
}

.dl-title-row{
  display:flex;

  justify-content:center;

  align-items:center;

  gap:10px;

  margin-bottom:26px;

  color:#0f172a;

  animation:
    fadeIn 1s ease;
}

.dl-title-row h2{
  font-size:
    clamp(24px,4vw,32px);

  font-weight:800;
}

/* VIDEO GRID */

.dl-video-grid{
  max-width:1100px;

  margin:auto;

  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(280px,1fr));

  gap:20px;

  align-items:start;
}

.dl-video-card{
  position:relative;

  background:
    rgba(255,255,255,0.92);

  backdrop-filter:blur(10px);

  border:1px solid #e2e8f0;

  border-radius:16px;

  overflow:hidden;

  transition:0.25s ease;

  box-shadow:
    0 3px 14px rgba(15,23,42,0.04);

  animation:
    scaleIn 0.5s ease;
}

.dl-video-card::before{
  content:"";

  position:absolute;

  top:0;
  left:0;

  width:100%;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #2563eb,
      #60a5fa
    );

  opacity:0;

  transition:0.3s ease;
}

.dl-video-card:hover::before{
  opacity:1;
}

.dl-video-card:hover{
  transform:
    translateY(-5px);

  box-shadow:
    0 10px 24px rgba(15,23,42,0.08);
}

.dl-video-image{
  width:100%;

  height:200px;

  object-fit:cover;

  transition:
    transform 0.4s ease;
}

.dl-video-card:hover .dl-video-image{
  transform:scale(1.05);
}

.dl-play{
  position:absolute;

  top:50%;
  left:50%;

  transform:
    translate(-50%,-50%);

  width:60px;
  height:60px;

  border-radius:50%;

  background:
    rgba(0,0,0,0.45);

  display:flex;

  justify-content:center;

  align-items:center;

  color:#ffffff;
}

.dl-video-card h4{
  padding:16px;

  text-align:center;

  font-size:15px;

  font-weight:700;

  color:#0f172a;
}

/* LOGO GRID */

.dl-logo-grid{
  max-width:1100px;

  margin:auto;

  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(150px,1fr));

  gap:18px;
}

.dl-logo-card{
  background:
    linear-gradient(
      180deg,
      #ffffff,
      #f8fafc
    );

  backdrop-filter:blur(10px);

  border:1px solid #e2e8f0;

  border-radius:16px;

  height:100px;

  display:flex;

  justify-content:center;

  align-items:center;

  transition:0.25s ease;

  box-shadow:
    0 3px 14px rgba(15,23,42,0.04);

  animation:
    fadeIn 0.8s ease;
}

.dl-logo-card:hover{
  transform:
    translateY(-4px)
    scale(1.02);

  box-shadow:
    0 8px 20px rgba(15,23,42,0.08);
}

.dl-logo-card img{
  width:auto;

  max-width:80%;

  max-height:60px;

  object-fit:contain;
}

/* BOOK GRID */

.dl-books-grid{
  max-width:1200px;

  margin:auto;

  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

  gap:20px;
}

.dl-book-card{
  position:relative;

  background:
    rgba(255,255,255,0.92);

  backdrop-filter:blur(10px);

  border:1px solid #e2e8f0;

  border-radius:18px;

  overflow:hidden;

  transition:0.25s ease;

  box-shadow:
    0 3px 16px rgba(15,23,42,0.04);

  animation:
    fadeUp 0.6s ease;
}

.dl-book-card::before{
  content:"";

  position:absolute;

  top:0;
  left:0;

  width:100%;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #2563eb,
      #60a5fa
    );

  opacity:0;

  transition:0.3s ease;
}

.dl-book-card:hover::before{
  opacity:1;
}

.dl-book-card:hover{
  transform:
    translateY(-5px);

  box-shadow:
    0 10px 24px rgba(15,23,42,0.08);
}

.dl-book-image,
.dl-book-placeholder{
  width:100%;

  height:230px;

  object-fit:cover;

  transition:
    transform 0.4s ease;
}

.dl-book-placeholder{
  display:flex;
  justify-content:center;
  align-items:center;
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  color:#2563eb;
}

.dl-book-card:hover .dl-book-image,
.dl-book-card:hover .dl-book-placeholder{
  transform:scale(1.05);
}

.dl-book-overlay{
  padding:16px;

  display:flex;

  flex-direction:column;

  align-items:center;

  background:#ffffff;
}

.dl-book-title{
  font-size:15px;

  font-weight:700;

  color:#0f172a;

  text-align:center;

  margin-bottom:14px;

  line-height:1.5;
}

/* BUTTON */

.dl-btn{
  position:relative;

  overflow:hidden;

  width:100%;

  display:flex;

  justify-content:center;

  align-items:center;

  gap:8px;

  background:#2563eb;

  color:#ffffff;

  text-decoration:none;

  border:none;

  padding:11px 16px;

  border-radius:10px;

  font-size:13px;

  font-weight:700;

  transition:all 0.25s ease;
}

.dl-btn::before{
  content:"";

  position:absolute;

  top:0;
  left:-120%;

  width:100%;
  height:100%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.25),
      transparent
    );

  transition:0.5s;
}

.dl-btn:hover::before{
  left:120%;
}

.dl-btn:hover{
  background:#1d4ed8;

  transform:
    translateY(-2px);
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUp{

  from{
    opacity:0;

    transform:
      translateY(30px);
  }

  to{
    opacity:1;

    transform:
      translateY(0);
  }
}

@keyframes fadeIn{

  from{
    opacity:0;
  }

  to{
    opacity:1;
  }
}

@keyframes floatIcon{

  0%{
    transform:
      translateY(0px);
  }

  50%{
    transform:
      translateY(-6px);
  }

  100%{
    transform:
      translateY(0px);
  }
}

@keyframes scaleIn{

  from{
    opacity:0;

    transform:
      scale(0.92);
  }

  to{
    opacity:1;

    transform:
      scale(1);
  }
}

/* TABLET */

@media(max-width:768px){

  .dl-hero{
    padding:34px 16px 28px;
  }

  .dl-title{
    font-size:34px;
  }

  .dl-subtitle{
    font-size:14px;

    line-height:1.8;
  }

  .dl-section{
    padding:38px 16px;
  }

  .dl-books-grid{
    grid-template-columns:
      repeat(2,1fr);
  }

  .dl-video-image{
    height:190px;
  }
}

/* MOBILE */

@media(max-width:480px){

  .dl-hero{
    padding:34px 14px 24px;
  }

  .dl-hero-content{
    max-width:100%;
  }

  .dl-icon-wrap{
    width:54px;
    height:54px;

    border-radius:14px;

    margin-bottom:14px;
  }

  .dl-title{
    font-size:26px;

    line-height:1.25;

    margin-bottom:14px;
  }

  .dl-title::after{
    width:60px;

    height:3px;
  }

  .dl-subtitle{
    font-size:13px;

    line-height:1.7;

    padding:0 4px;
  }

  .dl-section{
    padding:34px 14px;
  }

  .dl-heading{
    margin-bottom:22px;

    font-size:30px;
  }

  .dl-heading::after{
    width:50px;

    height:3px;
  }

  .dl-title-row{
    margin-bottom:22px;
  }

  .dl-video-grid,
  .dl-books-grid{
    grid-template-columns:1fr;
  }

  .dl-video-image{
    height:190px;
  }

  .dl-play{
    width:54px;
    height:54px;
  }

  .dl-logo-grid{
    grid-template-columns:
      repeat(2,1fr);

    gap:12px;
  }

  .dl-logo-card{
    height:84px;
  }

  .dl-book-image{
    height:210px;
  }

  .dl-book-title{
    font-size:14px;
  }

  .dl-btn{
    font-size:12px;
  }

  .dl-video-card:hover .dl-video-image,
  .dl-book-card:hover .dl-book-image{
    transform:none;
  }

  .dl-video-card:hover,
  .dl-book-card:hover,
  .dl-logo-card:hover{
    transform:none;
  }
}`}</style>

    </div>
    <Footer/>
    </>
  );
}