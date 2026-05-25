import React from "react";

import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";

import { useTranslator } from "../../context/LanguageContext";

const VCPC = () => {

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

      roleKey:
        "vcpc.sarpanch",

      mobile:
        "9270572674",

      img:
        "/श्री यादव काशिनाथ गरुड.jpeg",
    },

    {
      id: 2,

      name:
        "Mrs. Sunita Annasaheb Kale",

      nameMr:
        "सौ. सुनिता अण्णासाहेब काळे",

      roleKey:
        "vcpc.deputySarpanch",

      mobile:
        "9423078435",

      img:
        "/सौ सुनिता अण्णासाहेब काळे.jpeg",
    },

    {
      id: 3,

      name:
        "Mr. Sanjay Dagu Kale",

      nameMr:
        "श्री. संजय दगू काळे",

      roleKey:
        "vcpc.member",

      mobile:
        "9552224456",

      img:
        "/श्री संजय दगू काळे.jpeg",
    },

    {
      id: 4,

      name:
        "Mrs. Kusum Sanjay Kale",

      nameMr:
        "सौ. कुसुम संजय काळे",

      roleKey:
        "vcpc.memberFemale",

      mobile:
        "9689455720",

      img:
        "/सौ कुसुम संजय काळे.jpeg",
    },

    {
      id: 5,

      name:
        "Mrs. Sheetal Ganesh Aher",

      nameMr:
        "सौ. शीतल गणेश अहेर",

      roleKey:
        "vcpc.memberFemale",

      mobile:
        "9604194528",

      img:
        "/सौ शीतल गणेश आहेर.jpeg",
    },

    {
      id: 6,

      name:
        "Mrs. Umakant Shriram Kale",

      nameMr:
        "कु. उमाकांत श्रीराम काळे",

      roleKey:
        "vcpc.memberFemale",

      mobile:
        "7517497815",

      img:
        "/कु उमाकांत श्रीराम काळे.jpeg",
    },

    {
      id: 7,

      name:
        "Mr. Ganesh Machhindra Thackeray",

      nameMr:
        "श्री. गणेश मच्छिंद्र ठाकरे",

      roleKey:
        "vcpc.member",

      mobile:
        "9822479345",

      img:
        "/श्री गणेश मच्छिंद्र ठाकरे.jpeg",
    },

    {
      id: 8,

      name:
        "Mrs. Rupali Santosh Kale",

      nameMr:
        "कु. रुपाली संतोष काळे",

      roleKey:
        "vcpc.memberFemale",

      mobile:
        "8767428964",

      img:
        "/कु रुपाली संतोष काळे.jpeg",
    },

    {
      id: 9,

      name:
        "Mr. Sachin Trambak Sanap",

      nameMr:
        "श्री. सचिन त्रंबक सानप",

      roleKey:
        "vcpc.officer",

      mobile:
        "9860582261",

      img:
        "/श्री सचिन त्रम्बक सानप.jpeg",
    },

    {
      id: 10,

      name:
        "Mr. Annasaheb Nivrutti Kale",

      nameMr:
        "श्री. अण्णासाहेब निवृत्ती काळे",

      roleKey:
        "vcpc.operator",

      mobile:
        "9423078435",

      img:
        "/श्री अण्णासाहेब निवृत्ती काळे.jpeg",
    },

  ];

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
  background:#f5f7fb;
  font-family:"Poppins",sans-serif;
}

.vcpc-section{
  width:100%;
  overflow:hidden;
  background:#f5f7fb;
}

/* HERO SECTION */

.vcpc-hero{
  width:100%;
  min-height:420px;

  background:
    linear-gradient(
      rgba(79,70,229,0.92),
      rgba(67,56,202,0.92)
    ),
    url("https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop");

  background-size:cover;
  background-position:center;

  display:flex;
  align-items:center;
  justify-content:center;

  text-align:center;

  padding:60px 20px;

  border-bottom-left-radius:90px;
  border-bottom-right-radius:90px;

  position:relative;
}

.vcpc-content{
  max-width:950px;

  color:#fff;

  z-index:2;
}

.vcpc-icon{
  width:95px;
  height:95px;

  margin:auto;
  margin-bottom:24px;

  background:#fff;

  color:#4f46e5;

  border-radius:24px;

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:42px;

  transform:rotate(-10deg);

  box-shadow:
    0 12px 28px rgba(0,0,0,0.25);
}

.vcpc-content h1{
  font-size:48px;

  font-weight:700;

  margin-bottom:18px;

  line-height:1.3;
}

.vcpc-content p{
  font-size:17px;

  line-height:1.9;

  color:#e0e7ff;
}

/* MAIN CONTAINER */

.vcpc-container{
  max-width:1300px;

  margin:auto;

  padding:90px 20px;
}

/* SECTION TITLE */

.section-title{
  text-align:center;

  margin-bottom:60px;
}

.section-title h2{
  font-size:38px;

  color:#111827;

  margin-bottom:14px;
}

.title-line{
  width:90px;
  height:5px;

  background:#4f46e5;

  margin:auto;

  border-radius:20px;
}

/* GRID */

.vcpc-grid{
  display:grid;

  grid-template-columns:
    repeat(auto-fit,minmax(260px,1fr));

  gap:30px;
}

/* CARD */

.vcpc-card{
  background:#fff;

  border-radius:28px;

  padding:35px 25px;

  text-align:center;

  position:relative;

  overflow:hidden;

  transition:0.4s ease;

  box-shadow:
    0 10px 25px rgba(0,0,0,0.08);
}

.vcpc-card::before{
  content:"";

  position:absolute;

  top:0;
  left:0;

  width:100%;
  height:6px;

  background:
    linear-gradient(
      to right,
      #6366f1,
      #4f46e5
    );
}

.vcpc-card:hover{
  transform:translateY(-12px);

  box-shadow:
    0 18px 45px rgba(79,70,229,0.2);
}

/* IMAGE */

.vcpc-img{
  width:130px;
  height:130px;

  margin:auto;
  margin-bottom:22px;

  border-radius:50%;

  overflow:hidden;

  border:5px solid #e0e7ff;

  box-shadow:
    0 8px 20px rgba(0,0,0,0.08);
}

.vcpc-img img{
  width:100%;
  height:100%;

  object-fit:cover;

  transition:0.4s ease;
}

.vcpc-card:hover .vcpc-img img{
  transform:scale(1.08);
}

/* NAME */

.vcpc-card h3{
  font-size:20px;

  color:#111827;

  margin-bottom:14px;

  line-height:1.6;

  min-height:65px;
}

/* ROLE */

.vcpc-role{
  display:inline-block;

  padding:8px 22px;

  background:#eef2ff;

  color:#4f46e5;

  border-radius:30px;

  font-size:14px;

  font-weight:600;

  margin-bottom:12px;
}

/* MOBILE */

.vcpc-mobile{
  margin-top:12px;

  color:#475569;

  font-size:15px;

  font-weight:500;
}

/* RESPONSIVE */

@media(max-width:992px){

  .vcpc-content h1{
    font-size:40px;
  }

  .vcpc-grid{
    grid-template-columns:
      repeat(auto-fit,minmax(240px,1fr));
  }
}

@media(max-width:768px){

  .vcpc-hero{
    min-height:360px;

    border-bottom-left-radius:45px;
    border-bottom-right-radius:45px;
  }

  .vcpc-content h1{
    font-size:30px;
  }

  .vcpc-content p{
    font-size:15px;
  }

  .section-title h2{
    font-size:30px;
  }

  .vcpc-grid{
    gap:22px;
  }
}

@media(max-width:480px){

  .vcpc-content h1{
    font-size:24px;
  }

  .vcpc-content p{
    font-size:14px;
  }

  .vcpc-grid{
    grid-template-columns:1fr;
  }

  .vcpc-card{
    padding:30px 20px;
  }

  .vcpc-img{
    width:115px;
    height:115px;
  }

  .vcpc-card h3{
    font-size:18px;
  }
}
        `}
      </style>

      <section className="vcpc-section">

        {/* HERO */}

        <div className="vcpc-hero">

          <div className="vcpc-content">

            <div className="vcpc-icon">
              👶
            </div>

            <h1>
              {t("vcpc.title")}
            </h1>

            <p>
              {t("vcpc.subtitle")}
            </p>

          </div>

        </div>

        {/* MEMBERS */}

        <div className="vcpc-container">

          <div className="section-title">

            <h2>
              {t("vcpc.members")}
            </h2>

            <div className="title-line"></div>

          </div>

          <div className="vcpc-grid">

            {members.map((member) => (

              <div
                className="vcpc-card"
                key={member.id}
              >

                <div className="vcpc-img">

                  <img
                    src={member.img}
                    alt={
                      currentLanguage === "mr"
                        ? member.nameMr
                        : member.name
                    }
                  />

                </div>

                <h3>
                  {currentLanguage === "mr"
                    ? member.nameMr
                    : member.name}
                </h3>

                <div className="vcpc-role">
                  {t(member.roleKey)}
                </div>

                <p className="vcpc-mobile">
                  📞 {member.mobile}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default VCPC;