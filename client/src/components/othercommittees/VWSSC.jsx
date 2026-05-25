import React from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";

const VWSSC = () => {
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

  return (
    <>
    <Navbar/>
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

.vwssc-section{
  width:100%;

  background:#f8fafc;

  overflow:hidden;
}

/* ================= HERO ================= */

.vwssc-hero{
  position:relative;

  width:100%;

  min-height:300px;

  background:
    linear-gradient(
      rgba(0,115,92,0.88),
      rgba(0,115,92,0.88)
    ),
    url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop");

  background-size:cover;

  background-position:center;

  display:flex;

  align-items:center;

  justify-content:center;

  text-align:center;

  padding:50px 20px 40px;

  overflow:hidden;
}

/* HERO EFFECT */

.vwssc-hero::before{
  content:"";

  position:absolute;

  width:220px;
  height:220px;

  top:-100px;
  right:-70px;

  border-radius:50%;

  background:
    rgba(255,255,255,0.08);

  filter:blur(10px);
}

.vwssc-hero::after{
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

.vwssc-hero-content{
  position:relative;

  z-index:2;

  max-width:800px;

  margin:auto;

  animation:
    fadeUp 0.8s ease;
}

/* BADGE */

.vwssc-badge{
  width:64px;
  height:64px;

  margin:auto;

  margin-bottom:16px;

  background:#ffffff;

  color:#00735c;

  border-radius:16px;

  display:flex;

  align-items:center;

  justify-content:center;

  font-size:28px;

  box-shadow:
    0 4px 14px rgba(0,0,0,0.12);

  animation:
    floatIcon 3s ease-in-out infinite;
}

/* HERO TITLE */

.vwssc-hero h1{
  font-size:
    clamp(28px,5vw,42px);

  color:#ffffff;

  margin-bottom:14px;

  line-height:1.35;

  font-weight:800;
}

/* HERO TEXT */

.vwssc-hero p{
  font-size:15px;

  line-height:1.8;

  color:#f3f4f6;

  max-width:680px;

  margin:auto;
}

/* ================= CONTAINER ================= */

.vwssc-container{
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

  margin-bottom:10px;

  font-weight:800;
}

.title-line{
  width:65px;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #00b894,
      #00735c
    );

  margin:auto;

  border-radius:999px;
}

/* ================= GRID ================= */

.vwssc-grid{
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(240px,1fr));

  gap:20px;
}

/* ================= CARD ================= */

.vwssc-card{
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

.vwssc-card::before{
  content:"";

  position:absolute;

  top:0;
  left:0;

  width:100%;
  height:4px;

  background:
    linear-gradient(
      90deg,
      #00b894,
      #00735c
    );

  opacity:0;

  transition:0.3s ease;
}

.vwssc-card:hover::before{
  opacity:1;
}

/* HOVER */

.vwssc-card:hover{
  transform:
    translateY(-4px);

  box-shadow:
    0 8px 20px rgba(0,115,92,0.10);
}

/* IMAGE */

.vwssc-img{
  width:95px;
  height:95px;

  border-radius:50%;

  overflow:hidden;

  margin:auto;

  margin-bottom:18px;

  border:4px solid #dff7f1;

  background:#f1f5f9;
}

.vwssc-img img{
  width:100%;
  height:100%;

  object-fit:cover;

  transition:
    transform 0.4s ease;
}

.vwssc-card:hover .vwssc-img img{
  transform:scale(1.05);
}

/* NAME */

.vwssc-card h3{
  font-size:17px;

  color:#111827;

  margin-bottom:12px;

  line-height:1.6;

  font-weight:700;
}

/* ROLE */

.vwssc-role{
  display:inline-block;

  padding:7px 16px;

  background:#dff7f1;

  color:#00735c;

  border-radius:999px;

  font-size:13px;

  font-weight:600;
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

  .vwssc-hero{
    min-height:auto;

    padding:42px 18px 34px;
  }

  .vwssc-hero h1{
    font-size:30px;

    line-height:1.4;
  }

  .vwssc-hero p{
    font-size:14px;
  }

  .vwssc-container{
    padding:38px 16px;
  }

  .vwssc-grid{
    grid-template-columns:
      repeat(2,1fr);

    gap:18px;
  }
}

/* ================= MOBILE ================= */

@media(max-width:480px){

  .vwssc-hero{
    padding:36px 14px 28px;
  }

  .vwssc-badge{
    width:56px;
    height:56px;

    font-size:24px;

    border-radius:14px;

    margin-bottom:14px;
  }

  .vwssc-hero h1{
    font-size:24px;

    line-height:1.45;

    margin-bottom:12px;
  }

  .vwssc-hero p{
    font-size:13px;

    line-height:1.8;
  }

  .vwssc-container{
    padding:30px 12px;
  }

  .section-title{
    margin-bottom:28px;
  }

  .section-title h2{
    font-size:28px;
  }

  .vwssc-grid{
    grid-template-columns:1fr;

    gap:16px;
  }

  .vwssc-card{
    padding:22px 18px;

    border-radius:18px;
  }

  .vwssc-img{
    width:88px;
    height:88px;

    margin-bottom:16px;
  }

  .vwssc-card h3{
    font-size:16px;

    margin-bottom:10px;
  }

  .vwssc-role{
    font-size:12px;

    padding:7px 14px;
  }

  .vwssc-card:hover{
    transform:none;
  }

  .vwssc-card:hover .vwssc-img img{
    transform:none;
  }
}`}
      </style>

      <section className="vwssc-section">

        {/* HERO */}

        <div className="vwssc-hero">

          <div className="vwssc-hero-content">

            <div className="vwssc-badge">
              💧
            </div>

            <h1>
              Village Water Supply and Sanitation Committee
            </h1>

            <p>
              गावातील पाणी पुरवठा, स्वच्छता आणि आरोग्य 
              व्यवस्थापनासाठी कार्यरत समिती
            </p>

          </div>

        </div>

        {/* MEMBERS */}

        <div className="vwssc-container">

          <div className="section-title">
            <h2>समिती सदस्य</h2>
            <div className="title-line"></div>
          </div>

          <div className="vwssc-grid">

            {members.map((member) => (
              <div className="vwssc-card" key={member.id}>

                <div className="vwssc-img">
                  <img src={member.image} alt={member.name} />
                </div>

                <h3>{member.name}</h3>

                <div className="vwssc-role">
                  {member.role}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
      <Footer/>
    </>
  );
};

export default VWSSC;