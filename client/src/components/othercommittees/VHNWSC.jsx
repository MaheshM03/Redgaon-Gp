import React from "react";

import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";

import { useTranslator } from "../../context/LanguageContext";



const members = [

  {
    id: 1,

    name:
      "Mr. Yadav Kashinath Garud",

    nameMr:
      "श्री. यादव काशिनाथ गरुड",

    role:
      "Sarpanch",

    roleMr:
      "सरपंच",

    mobile:
      "9270572674",

    tier:
      "senior",

    img:
      "/श्री यादव काशिनाथ गरुड.jpeg",
  },

  {
    id: 2,

    name:
      "Mrs. Sunita Annasaheb Kale",

    nameMr:
      "सौ. सुनिता अण्णासाहेब काळे",

    role:
      "Deputy Sarpanch",

    roleMr:
      "उप सरपंच",

    mobile:
      "9423078435",

    tier:
      "senior",

    img:
      "/सौ सुनिता अण्णासाहेब काळे.jpeg",
  },

  {
    id: 3,

    name:
      "Mr. Sanjay Dagu Kale",

    nameMr:
      "श्री. संजय दगू काळे",

    role:
      "Member",

    roleMr:
      "सदस्य",

    mobile:
      "9552224456",

    tier:
      "member",

    img:
      "/श्री संजय दगू काळे.jpeg",
  },

  {
    id: 4,

    name:
      "Mrs. Kusum Sanjay Kale",

    nameMr:
      "सौ. कुसुम संजय काळे",

    role:
      "Member",

    roleMr:
      "सदस्या",

    mobile:
      "9689455720",

    tier:
      "member",

    img:
      "/सौ कुसुम संजय काळे.jpeg",
  },

  {
    id: 5,

    name:
      "Mrs. Sheetal Ganesh Aher",

    nameMr:
      "सौ. शीतल गणेश अहेर",

    role:
      "Member",

    roleMr:
      "सदस्या",

    mobile:
      "9604194528",

    tier:
      "member",

    img:
      "/सौ शीतल गणेश आहेर.jpeg",
  },

  {
    id: 6,

    name:
      "Mrs. Umakant Shriram Kale",

    nameMr:
      "कु. उमाकांत श्रीराम काळे",

    role:
      "Member",

    roleMr:
      "सदस्या",

    mobile:
      "7517497815",

    tier:
      "member",

    img:
      "/कु उमाकांत श्रीराम काळे.jpeg",
  },

  {
    id: 7,

    name:
      "Mr. Ganesh Machhindra Thackeray",

    nameMr:
      "श्री. गणेश मच्छिंद्र ठाकरे",

    role:
      "Member",

    roleMr:
      "सदस्य",

    mobile:
      "9822479345",

    tier:
      "member",

    img:
      "/श्री गणेश मच्छिंद्र ठाकरे.jpeg",
  },

  {
    id: 8,

    name:
      "Mrs. Rupali Santosh Kale",

    nameMr:
      "कु. रुपाली संतोष काळे",

    role:
      "Member",

    roleMr:
      "सदस्या",

    mobile:
      "8767428964",

    tier:
      "member",

    img:
      "/कु रुपाली संतोष काळे.jpeg",
  },

  {
    id: 9,

    name:
      "Mr. Sachin Trambak Sanap",

    nameMr:
      "श्री. सचिन त्रंबक सानप",

    role:
      "Gram Panchayat Officer",

    roleMr:
      "ग्रामपंचायत अधिकारी",

    mobile:
      "9860582261",

    tier:
      "officer",

    img:
      "/default-user.png",
  },

  {
    id: 10,

    name:
      "Mr. Annasaheb Nivrutti Kale",

    nameMr:
      "श्री. अण्णासाहेब निवृत्ती काळे",

    role:
      "Computer Operator",

    roleMr:
      "संगणक परिचालक",

    mobile:
      "9423078435",

    tier:
      "staff",

    img:
      "/श्री अण्णासाहेब निवृत्ती काळे.jpeg",
  },

];



const VHNWSC = () => {

  const {
    t,
    currentLanguage,
  } = useTranslator();

  return (
    <>
      <Navbar />

      <section className="vhnwsc-section">


        {/* HERO */}

        <div className="vhnwsc-banner">

          <div className="overlay"></div>

          <div className="banner-content">

            <div className="logo-box">
              {t("vhnwsc.logo")}
            </div>

            <h1>
              {t("vhnwsc.title")}
            </h1>

            <p>
              {t("vhnwsc.subtitle")}
            </p>

          </div>

          <div className="shape shape1"></div>

          <div className="shape shape2"></div>

        </div>


        {/* MEMBERS */}

        <div className="vhnwsc-container">

          <div className="section-title">

            <h2>
              {t("vhnwsc.members")}
            </h2>

            <div className="title-line"></div>

          </div>


          {/* GRID */}

          <div className="member-grid">

            {members.map((member) => (

              <div
                className="member-card"
                key={member.id}
              >

                {/* IMAGE */}

                <div className="member-img">

                  <img
                    src={member.img}
                    alt={member.name}
                  />

                </div>


                {/* NAME */}

                <h3>

                  {currentLanguage === "mr"
                    ? member.nameMr
                    : member.name}

                </h3>


                {/* ROLE */}

                <span>

                  {currentLanguage === "mr"
                    ? member.roleMr
                    : member.role}

                </span>


                {/* MOBILE */}

                <p className="mobile-number">

                  📞 {member.mobile}

                </p>

              </div>

            ))}

          </div>

        </div>


        {/* CSS */}

        <style>
          {`*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  overflow-x:hidden;

  background:#f8fafc;

  font-family:
    "Inter",
    "Poppins",
    sans-serif;
}

/* ================= SECTION ================= */

.vhnwsc-section{
  width:100%;

  background:#f8fafc;

  overflow:hidden;
}

/* ================= HERO ================= */

.vhnwsc-banner{
  position:relative;

  width:100%;

  min-height:300px;

  background:
    linear-gradient(
      rgba(91,33,182,0.88),
      rgba(76,29,149,0.88)
    ),
    url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop")
    center/cover no-repeat;

  display:flex;

  align-items:center;

  justify-content:center;

  text-align:center;

  padding:50px 20px 40px;

  overflow:hidden;
}

/* OVERLAY */

.overlay{
  position:absolute;

  inset:0;

  background:
    radial-gradient(
      circle at top right,
      rgba(255,255,255,0.08),
      transparent 40%
    );
}

/* GLOW EFFECT */

.vhnwsc-banner::before{
  content:"";

  position:absolute;

  width:220px;
  height:220px;

  top:-100px;
  right:-80px;

  border-radius:50%;

  background:
    rgba(255,255,255,0.08);

  filter:blur(10px);
}

.vhnwsc-banner::after{
  content:"";

  position:absolute;

  width:180px;
  height:180px;

  bottom:-80px;
  left:-60px;

  border-radius:50%;

  background:
    rgba(255,255,255,0.06);

  filter:blur(10px);
}

/* HERO CONTENT */

.banner-content{
  position:relative;

  z-index:2;

  max-width:820px;

  margin:auto;

  animation:
    fadeUp 0.8s ease;
}

/* ICON */

.logo-box{
  width:64px;
  height:64px;

  margin:0 auto 16px;

  background:#ffffff;

  color:#6d28d9;

  font-size:16px;

  font-weight:700;

  border-radius:16px;

  display:flex;

  align-items:center;

  justify-content:center;

  box-shadow:
    0 4px 14px rgba(0,0,0,0.12);

  animation:
    floatIcon 3s ease-in-out infinite;
}

/* HERO TITLE */

.banner-content h1{
  color:#ffffff;

  font-size:
    clamp(28px,5vw,42px);

  line-height:1.35;

  font-weight:800;

  margin-bottom:14px;
}

/* HERO TEXT */

.banner-content p{
  color:#f3f4f6;

  font-size:15px;

  line-height:1.8;

  max-width:700px;

  margin:auto;
}

/* SHAPES */

.shape{
  position:absolute;

  border-radius:50%;

  background:
    rgba(255,255,255,0.08);
}

.shape1{
  width:140px;
  height:140px;

  top:-50px;
  left:-40px;
}

.shape2{
  width:180px;
  height:180px;

  bottom:-70px;
  right:-60px;
}

/* ================= CONTAINER ================= */

.vhnwsc-container{
  max-width:1200px;

  margin:auto;

  padding:45px 20px;
}

/* ================= TITLE ================= */

.section-title{
  text-align:center;

  margin-bottom:36px;
}

.section-title h2{
  font-size:
    clamp(26px,4vw,36px);

  color:#111827;

  font-weight:800;

  margin-bottom:10px;
}

.title-line{
  width:65px;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #7c3aed,
      #a855f7
    );

  margin:auto;

  border-radius:999px;
}

/* ================= GRID ================= */

.member-grid{
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(240px,1fr));

  gap:20px;
}

/* ================= CARD ================= */

.member-card{
  position:relative;

  background:#ffffff;

  border:1px solid #e5e7eb;

  border-radius:20px;

  padding:24px 18px;

  text-align:center;

  overflow:hidden;

  transition:0.25s ease;

  box-shadow:
    0 4px 14px rgba(15,23,42,0.05);

  animation:
    fadeUp 0.7s ease;
}

/* TOP BORDER */

.member-card::before{
  content:"";

  position:absolute;

  top:0;
  left:0;

  width:100%;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #7c3aed,
      #a855f7
    );

  opacity:0;

  transition:0.3s ease;
}

.member-card:hover::before{
  opacity:1;
}

/* HOVER */

.member-card:hover{
  transform:
    translateY(-4px);

  box-shadow:
    0 8px 20px rgba(124,58,237,0.10);
}

/* IMAGE */

.member-img{
  width:95px;
  height:95px;

  margin:auto;

  border-radius:50%;

  overflow:hidden;

  border:4px solid #ede9fe;

  margin-bottom:18px;

  background:#f3f4f6;
}

.member-img img{
  width:100%;
  height:100%;

  object-fit:cover;

  transition:
    transform 0.4s ease;
}

.member-card:hover .member-img img{
  transform:scale(1.05);
}

/* NAME */

.member-card h3{
  font-size:17px;

  color:#111827;

  margin-bottom:12px;

  line-height:1.6;

  font-weight:700;
}

/* ROLE */

.member-card span{
  display:inline-block;

  padding:7px 16px;

  background:#f3e8ff;

  color:#7c3aed;

  border-radius:999px;

  font-size:13px;

  font-weight:600;

  margin-bottom:12px;
}

/* MOBILE */

.mobile-number{
  color:#64748b;

  font-size:14px;

  margin-top:10px;
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUp{

  from{
    opacity:0;

    transform:
      translateY(25px);
  }

  to{
    opacity:1;

    transform:
      translateY(0);
  }
}

@keyframes floatIcon{

  0%{
    transform:
      translateY(0px);
  }

  50%{
    transform:
      translateY(-5px);
  }

  100%{
    transform:
      translateY(0px);
  }
}

/* ================= TABLET ================= */

@media(max-width:768px){

  .vhnwsc-banner{
    min-height:auto;

    padding:42px 18px 34px;
  }

  .banner-content h1{
    font-size:30px;

    line-height:1.4;
  }

  .banner-content p{
    font-size:14px;
  }

  .vhnwsc-container{
    padding:38px 16px;
  }

  .member-grid{
    grid-template-columns:
      repeat(2,1fr);

    gap:18px;
  }

  .shape1,
  .shape2{
    display:none;
  }
}

/* ================= MOBILE ================= */

@media(max-width:480px){

  .vhnwsc-banner{
    padding:36px 14px 28px;
  }

  .logo-box{
    width:56px;
    height:56px;

    font-size:14px;

    border-radius:14px;

    margin-bottom:14px;
  }

  .banner-content h1{
    font-size:24px;

    line-height:1.45;

    margin-bottom:12px;
  }

  .banner-content p{
    font-size:13px;

    line-height:1.8;
  }

  .vhnwsc-container{
    padding:30px 12px;
  }

  .section-title{
    margin-bottom:28px;
  }

  .section-title h2{
    font-size:28px;
  }

  .member-grid{
    grid-template-columns:1fr;

    gap:16px;
  }

  .member-card{
    padding:22px 18px;

    border-radius:18px;
  }

  .member-img{
    width:88px;
    height:88px;

    margin-bottom:16px;
  }

  .member-card h3{
    font-size:16px;

    margin-bottom:10px;
  }

  .member-card span{
    font-size:12px;

    padding:7px 14px;
  }

  .mobile-number{
    font-size:13px;
  }

  .member-card:hover{
    transform:none;
  }

  .member-card:hover .member-img img{
    transform:none;
  }
} `}
        </style>

      </section>

      <Footer />
    </>
  );
};

export default VHNWSC;