import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useTranslator } from "../../context/LanguageContext.js";

const membersData = [
  {
    name: "Mr. Yadav Kashinath Garud",
    nameMr: "श्री. यादव काशिनाथ गरुड",
    role: "Sarpanch",
    roleMr: "सरपंच",
    mobile: "9270572674",
    tier: "senior",
    img: "/श्री यादव काशिनाथ गरुड.jpeg",
  },

  {
    name: "Mrs. Sunita Annasaheb Kale",
    nameMr: "सौ. सुनिता अण्णासाहेब काळे",
    role: "Deputy Sarpanch",
    roleMr: "उप सरपंच",
    mobile: "9423078435",
    tier: "senior",
    img: "/सौ सुनिता अण्णासाहेब काळे.jpeg",
  },

  {
    name: "Mr. Sanjay Dagu Kale",
    nameMr: "श्री. संजय दगू काळे",
    role: "Member",
    roleMr: "सदस्य",
    mobile: "9552224456",
    tier: "member",
    img: "/श्री संजय दगू काळे.jpeg",
  },

  {
    name: "Mrs. Kusum Sanjay Kale",
    nameMr: "सौ. कुसुम संजय काळे",
    role: "Member",
    roleMr: "सदस्या",
    mobile: "9689455720",
    tier: "member",
    img: "/सौ कुसुम संजय काळे.jpeg",
  },

  {
    name: "Mrs. Sheetal Ganesh Aher",
    nameMr: "सौ. शीतल गणेश अहेर",
    role: "Member",
    roleMr: "सदस्या",
    mobile: "9604194528",
    tier: "member",
    img: "/सौ शीतल गणेश आहेर.jpeg",
  },

  {
    name: "Mrs. Umakant Shriram Kale",
    nameMr: "कु उमाकांत श्रीराम काळे",
    role: "Member",
    roleMr: "सदस्या",
    mobile: "7517497815",
    tier: "member",
    img: "/कु उमाकांत श्रीराम काळे.jpeg",
  },

  {
    name: "Mr. Ganesh Machhindra Thackeray",
    nameMr: "श्री. गणेश मच्छिंद्र ठाकरे",
    role: "Member",
    roleMr: "सदस्य",
    mobile: "9822479345",
    tier: "member",
    img: "/श्री गणेश मच्छिंद्र ठाकरे.jpeg",
  },

  {
    name: "Mrs. Rupali Santosh Kale",
    nameMr: "कु रुपाली संतोष काळे",
    role: "Member",
    roleMr: "सदस्या",
    mobile: "8767428964",
    tier: "member",
    img: "/कु रुपाली संतोष काळे.jpeg",
  },

  {
    name: "Mr. Sachin Trambak Sanap",
    nameMr: "श्री. सचिन त्रंबक सानप",
    role: "Gram Panchayat Officer",
    roleMr: "ग्रामपंचायत अधिकारी",
    mobile: "9860582261",
    tier: "officer",
    img: "/श्री सचिन त्रम्बक सानप.jpeg",
  },

  {
    name: "Mr. Annasaheb Nivrutti Kale",
    nameMr: "श्री अण्णासाहेब निवृत्ती काळे",
    role: "Computer Operator",
    roleMr: "संगणक परिचालक",
    mobile: "9423078435",
    tier: "staff",
    img: "/श्री अण्णासाहेब निवृत्ती काळे.jpeg",
  },
];

const tierConfig = {
  senior: {
    color: "#f59e0b",
    bg: "#fef3c7",
    border: "#fde68a",
  },

  officer: {
    color: "#2563eb",
    bg: "#dbeafe",
    border: "#bfdbfe",
  },

  member: {
    color: "#16a34a",
    bg: "#dcfce7",
    border: "#bbf7d0",
  },

  staff: {
    color: "#64748b",
    bg: "#f1f5f9",
    border: "#cbd5e1",
  },
};

function getInitials(name) {
  const parts = name.split(" ");

  return (
    parts[0][0] +
    parts[parts.length - 1][0]
  );
}

export default function AdminCommittee() {

  const {
    currentLanguage,
    t,
  } = useTranslator();

  const [filter, setFilter] =
    useState("all");

  const tiers = [
    "all",
    "senior",
    "officer",
    "member",
    "staff",
  ];

  const filteredMembers =
    filter === "all"
      ? membersData
      : membersData.filter(
          (m) => m.tier === filter
        );

  return (
    <section className="ac-root">
      <Navbar />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          overflow-x:hidden;
        }

        .ac-root{
          background:#f8fafc;
          min-height:100vh;
          font-family:'Inter',sans-serif;
        }

        .ac-hero{
          background:
            linear-gradient(
              180deg,
              #eff6ff 0%,
              #f8fafc 100%
            );

          padding:85px 20px 65px;

          text-align:center;
        }

        .ac-title{
          color:#0f172a;
          font-size:
            clamp(30px,5vw,44px);
          font-weight:800;
          margin-bottom:14px;
        }

        .ac-subtitle{
          color:#475569;
          font-size:15px;
          line-height:1.9;
          max-width:620px;
          margin:auto;
        }

        .ac-filter-wrap{
          max-width:1100px;
          margin:auto;
          padding:24px 16px 10px;
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
        }

        .ac-filter-btn{
          border:none;
          padding:10px 16px;
          border-radius:999px;
          background:#ffffff;
          border:1px solid #e2e8f0;
          color:#475569;
          font-size:12px;
          font-weight:600;
          cursor:pointer;
          transition:0.2s ease;
        }

        .ac-filter-btn.active{
          background:#2563eb;
          color:#ffffff;
          border-color:#2563eb;
        }

        .ac-section{
          max-width:1100px;
          margin:auto;
          padding:20px 16px 70px;
        }

        .ac-grid{
          display:grid;
          grid-template-columns:
            repeat(auto-fit,minmax(250px,1fr));
          gap:22px;
        }

        .ac-card-wrapper{
          perspective:1000px;
          height:340px;
        }

        .ac-card-inner{
          position:relative;
          width:100%;
          height:100%;
          transition:transform 0.8s;
          transform-style:preserve-3d;
        }

        .ac-card-wrapper:hover
        .ac-card-inner{
          transform:rotateY(180deg);
        }

        .ac-card-front,
        .ac-card-back{
          position:absolute;
          width:100%;
          height:100%;
          backface-visibility:hidden;
          border-radius:22px;
          overflow:hidden;
        }

        .ac-card-front{
          background:#ffffff;
          border:1px solid #e2e8f0;
          padding:24px 18px;
          text-align:center;
          box-shadow:
            0 10px 24px rgba(0,0,0,0.05);
        }

        .ac-card-back{
          background:#2563eb;
          color:#ffffff;
          transform:rotateY(180deg);

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          text-align:center;
          padding:20px;
        }

        .ac-top-bar{
          position:absolute;
          top:0;
          left:0;
          right:0;
          height:5px;
        }

        .ac-avatar{
          width:90px;
          height:90px;
          border-radius:50%;
          margin:10px auto 18px;
          background-size:cover;
          background-position:center;
          background-repeat:no-repeat;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:24px;
          font-weight:700;
          color:#ffffff;
        }

        .ac-name{
          color:#0f172a;
          font-size:16px;
          font-weight:700;
          line-height:1.6;
          margin-bottom:14px;
          min-height:55px;
        }

        .ac-role{
          display:inline-block;
          padding:7px 14px;
          border-radius:999px;
          font-size:12px;
          font-weight:700;
        }

        .ac-flip-title{
          font-size:18px;
          font-weight:700;
          margin-bottom:18px;
        }

        .ac-mobile-big{
          font-size:24px;
          font-weight:800;
          letter-spacing:1px;
          margin-bottom:12px;
        }

        .ac-call-btn{
          margin-top:10px;
          background:#ffffff;
          color:#2563eb;
          padding:10px 18px;
          border-radius:12px;
          text-decoration:none;
          font-size:14px;
          font-weight:700;
        }

        @media(max-width:768px){

          .ac-grid{
            grid-template-columns:
              repeat(2,1fr);
          }
        }

        @media(max-width:520px){

          .ac-grid{
            grid-template-columns:1fr;
          }

          .ac-card-wrapper{
            height:320px;
          }
        }
      `}</style>

      <div className="ac-hero">

        <h1 className="ac-title">
          {t("admin.hero.title")}
        </h1>

        <p className="ac-subtitle">
          {t("admin.hero.subtitle")}
        </p>

      </div>

      <div className="ac-filter-wrap">

        {tiers.map((tier) => (

          <button
            key={tier}
            className={`ac-filter-btn ${
              filter === tier
                ? "active"
                : ""
            }`}
            onClick={() =>
              setFilter(tier)
            }
          >
            {t(`admin.filter.${tier}`)}
          </button>

        ))}

      </div>

      <div className="ac-section">

        <div className="ac-grid">

          {filteredMembers.map(
            (member, index) => {
              const cfg =
                tierConfig[
                  member.tier
                ] || {
                  color: "#64748b",
                  bg: "#f1f5f9",
                  border: "#cbd5e1",
                };

              return (

                <motion.div
                  key={index}
                  className="ac-card-wrapper"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                >

                  <div className="ac-card-inner">

                    {/* FRONT */}

                    <div className="ac-card-front">

                      <div
                        className="ac-top-bar"
                        style={{
                          background:
                            cfg.color,
                        }}
                      />

                      <div
                        className="ac-avatar"
                        style={{
                          backgroundColor:
                            cfg.color,

                          backgroundImage:
                            member.img
                              ? `url('${encodeURI(member.img)}')`
                              : "none",
                        }}
                      >
                        {!member.img &&
                          getInitials(
                            member.name
                          )}
                      </div>

                      <div className="ac-name">

                        {currentLanguage ===
                        "mr"
                          ? member.nameMr
                          : member.name}

                      </div>

                      <span
                        className="ac-role"
                        style={{
                          background:
                            cfg.bg,

                          color:
                            cfg.color,

                          border:
                            "1px solid " +
                            cfg.border,
                        }}
                      >

                        {currentLanguage ===
                        "mr"
                          ? member.roleMr
                          : member.role}

                      </span>

                    </div>

                    {/* BACK */}

                    <div className="ac-card-back">

                      <div className="ac-flip-title">
                        Contact Number
                      </div>

                      <div className="ac-mobile-big">
                        📞 {member.mobile}
                      </div>

                      <a
                        href={`tel:${member.mobile}`}
                        className="ac-call-btn"
                      >
                        Call Now
                      </a>

                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>
      </div>

      <Footer />
    </section>
  );
}