import React from "react";

import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";

import { useTranslator } from "../../context/LanguageContext";

const BMC = () => {
  const {
    t,
    currentLanguage,
  } = useTranslator();

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
    "/श्री सचिन त्रम्बक सानप.jpeg",
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
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            font-family:"Poppins",sans-serif;
            background:#f4f9f4;
          }

          .bmc-section{
            width:100%;
            overflow:hidden;
            background:#f4f9f4;
          }

          /* HERO SECTION */

          .bmc-hero{
            width:100%;
            min-height:400px;
            background:
              linear-gradient(
                rgba(16,94,55,0.9),
                rgba(16,94,55,0.9)
              ),
              url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop");
            background-size:cover;
            background-position:center;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            padding:50px 20px;
            border-bottom-left-radius:90px;
            border-bottom-right-radius:90px;
            position:relative;
          }

          .bmc-content{
            max-width:950px;
            color:#fff;
            z-index:2;
          }

          .bmc-icon{
            width:95px;
            height:95px;
            margin:auto;
            margin-bottom:24px;
            background:#22c55e;
            border-radius:24px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:42px;
            transform:rotate(-10deg);
            box-shadow:0 12px 28px rgba(0,0,0,0.25);
          }

          .bmc-content h1{
            font-size:48px;
            font-weight:700;
            line-height:1.3;
            margin-bottom:20px;
          }

          .bmc-content p{
            font-size:17px;
            line-height:1.9;
            color:#e5ffe5;
          }

          /* MAIN SECTION */

          .bmc-container{
            max-width:1200px;
            margin:auto;
            padding:90px 20px;
          }

          .section-title{
            text-align:center;
            margin-bottom:60px;
          }

          .section-title h2{
            font-size:38px;
            color:#14532d;
            margin-bottom:14px;
          }

          .title-line{
            width:90px;
            height:5px;
            background:#22c55e;
            margin:auto;
            border-radius:20px;
          }

          /* GRID */

          .bmc-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
            gap:30px;
          }

          /* CARD */

          .bmc-card{
            background:#fff;
            border-radius:24px;
            padding:35px 25px;
            text-align:center;
            position:relative;
            overflow:hidden;
            transition:0.4s ease;
            box-shadow:0 10px 25px rgba(0,0,0,0.08);
          }

          .bmc-card::before{
            content:"";
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:6px;
            background:linear-gradient(
              to right,
              #22c55e,
              #15803d
            );
          }

          .bmc-card:hover{
            transform:translateY(-10px);
            box-shadow:0 18px 40px rgba(21,128,61,0.2);
          }

          .bmc-img{
            width:120px;
            height:120px;
            margin:auto;
            margin-bottom:22px;
            border-radius:50%;
            overflow:hidden;
            border:5px solid #dcfce7;
          }

          .bmc-img img{
            width:100%;
            height:100%;
            object-fit:cover;
          }

          .bmc-card h3{
            font-size:20px;
            color:#14532d;
            margin-bottom:12px;
            line-height:1.5;
          }

          .bmc-role{
            display:inline-block;
            padding:8px 20px;
            background:#dcfce7;
            color:#15803d;
            border-radius:30px;
            font-size:14px;
            font-weight:600;
          }

          /* RESPONSIVE */

          @media(max-width:768px){

            .bmc-hero{
              border-bottom-left-radius:45px;
              border-bottom-right-radius:45px;
            }

            .bmc-content h1{
              font-size:32px;
            }

            .bmc-content p{
              font-size:15px;
            }

            .section-title h2{
              font-size:30px;
            }
          }

          @media(max-width:480px){

            .bmc-content h1{
              font-size:25px;
            }

            .bmc-grid{
              grid-template-columns:1fr;
            }
          }
        `}
      </style>

      <section className="bmc-section">

        {/* HERO */}

        <div className="bmc-hero">

          <div className="bmc-content">

            <div className="bmc-icon">
              🌿
            </div>

            <h1>
              Biodiversity Management Committee
            </h1>

            <p>
              Redgaon Gram Panchayat's dedicated committee for 
              environmental protection. This committee works for 
              the conservation of biodiversity, protection of local 
              species, and sustainable use of nature. This committee 
              plays an important role in maintaining the ecological 
              balance of the village and implementing environmentally 
              friendly activities.
            </p>

          </div>

        </div>

        {/* MEMBERS */}

        <div className="bmc-container">

          <div className="section-title">
            <h2>समिती सदस्य</h2>
            <div className="title-line"></div>
          </div>

          <div className="bmc-grid">

            {members.map((member) => (
              <div className="bmc-card" key={member.id}>

                <div className="bmc-img">
                  <img
                    src={member.img}
                    alt={currentLanguage === "mr" ? member.nameMr : member.name}
                  />
                </div>

                <h3>
                  {currentLanguage === "mr" ? member.nameMr : member.name}
                </h3>

                <div className="bmc-role">
                  {currentLanguage === "mr" ? member.roleMr : member.role}
                </div>

                <p style={{ color: "#475569", fontSize: "14px", marginTop: "10px" }}>
                  📞 {member.mobile}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
      <Footer/>
    </>
  );
};

export default BMC;