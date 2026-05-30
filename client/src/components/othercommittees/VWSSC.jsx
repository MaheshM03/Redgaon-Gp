import React from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import { useTranslator } from "../../context/LanguageContext";

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const VWSSC = () => {
  const { t, currentLanguage } = useTranslator();

  const members = [
    { id: 1, name: "Mr. Yadav Kashinath Garud", nameMr: "श्री. यादव काशिनाथ गरुड", roleKey: "vwssc.sarpanch", mobile: "9270572674", img: "/श्री यादव काशिनाथ गरुड.jpeg" },
    { id: 2, name: "Mrs. Sunita Annasaheb Kale", nameMr: "सौ. सुनिता अण्णासाहेब काळे", roleKey: "vwssc.deputySarpanch", mobile: "9423078435", img: "/सौ सुनिता अण्णासाहेब काळे.jpeg" },
    { id: 3, name: "Mr. Sanjay Dagu Kale", nameMr: "श्री. संजय दगू काळे", roleKey: "vwssc.member", mobile: "9552224456", img: "/श्री संजय दगू काळे.jpeg" },
    { id: 4, name: "Mrs. Kusum Sanjay Kale", nameMr: "सौ. कुसुम संजय काळे", roleKey: "vwssc.memberFemale", mobile: "9689455720", img: "/सौ कुसुम संजय काळे.jpeg" },
    { id: 5, name: "Mrs. Sheetal Ganesh Aher", nameMr: "सौ. शीतल गणेश अहेर", roleKey: "vwssc.memberFemale", mobile: "9604194528", img: "/सौ शीतल गणेश आहेर.jpeg" },
    { id: 6, name: "Mrs. Umakant Shriram Kale", nameMr: "कु. उमाकांत श्रीराम काळे", roleKey: "vwssc.memberFemale", mobile: "7517497815", img: "/कु उमाकांत श्रीराम काळे.jpeg" },
    { id: 7, name: "Mr. Ganesh Machhindra Thackeray", nameMr: "श्री. गणेश मच्छिंद्र ठाकरे", roleKey: "vwssc.member", mobile: "9822479345", img: "/श्री गणेश मच्छिंद्र ठाकरे.jpeg" },
    { id: 8, name: "Mrs. Rupali Santosh Kale", nameMr: "कु. रुपाली संतोष काळे", roleKey: "vwssc.memberFemale", mobile: "8767428964", img: "/कु रुपाली संतोष काळे.jpeg" },
    { id: 9, name: "Mr. Sachin Trambak Sanap", nameMr: "श्री. सचिन त्रंबक सानप", roleKey: "vwssc.officer", mobile: "9860582261", img: "/श्री सचिन त्रम्बक सानप.jpeg" },
    { id: 10, name: "Mr. Annasaheb Nivrutti Kale", nameMr: "श्री. अण्णासाहेब निवृत्ती काळे", roleKey: "vwssc.operator", mobile: "9423078435", img: "/श्री अण्णासाहेब निवृत्ती काळे.jpeg" },
  ];

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .vwssc-section { width: 100%; background: #f0fdfa; overflow: hidden; font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; }

        .vwssc-hero {
          position: relative; width: 100%; min-height: 340px;
          background:
            linear-gradient(rgba(0, 55, 45, 0.80), rgba(0, 55, 45, 0.86)),
            url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop");
          background-size: cover; background-position: center;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 60px 20px;
          border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;
          overflow: hidden;
        }

        .vwssc-hero-content { position: relative; z-index: 2; max-width: 800px; margin: auto; }

        .vwssc-badge {
          width: 72px; height: 72px; margin: 0 auto 18px;
          background: #ffffff; color: #00735c;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 30px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }

        .vwssc-hero h1 { font-size: clamp(26px, 5vw, 42px); color: #ffffff; margin-bottom: 14px; line-height: 1.3; font-weight: 800; }
        .vwssc-hero p { font-size: 15px; line-height: 1.8; color: #ccfbf1; max-width: 680px; margin: auto; }

        .vwssc-container { max-width: 1200px; margin: auto; padding: 60px 20px; }

        .vwssc-section-title { text-align: center; margin-bottom: 44px; }
        .vwssc-section-title h2 { font-size: clamp(24px, 4vw, 34px); color: #111827; margin-bottom: 10px; font-weight: 800; }
        .vwssc-title-line { width: 65px; height: 4px; background: linear-gradient(90deg, #00b894, #00735c); margin: auto; border-radius: 999px; }

        .vwssc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 22px; }

        .vwssc-card {
          background: #ffffff; border: 1.5px solid #99f6e4;
          border-radius: 22px; padding: 28px 18px 24px;
          text-align: center; position: relative; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex; flex-direction: column; align-items: center;
        }

        .vwssc-card::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 5px;
          background: linear-gradient(to right, #00b894, #00735c);
        }

        .vwssc-card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(0,115,92,0.14); }
        .vwssc-card:hover .vwssc-avatar-wrap { border-color: #5eead4; }

        .vwssc-avatar-wrap {
          width: 96px; height: 96px;
          border-radius: 50%; overflow: hidden;
          border: 4px solid #ccfbf1; background: #f0fdfa;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; flex-shrink: 0;
          transition: border-color 0.22s ease;
        }

        .vwssc-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .vwssc-avatar-initials { font-size: 26px; font-weight: 700; color: #00735c; user-select: none; }

        .vwssc-card h3 {
          font-size: 15px; font-weight: 700; color: #111827;
          margin-bottom: 12px; line-height: 1.5;
          flex: 1; display: flex; align-items: center; justify-content: center; min-height: 46px;
        }

        .vwssc-role {
          display: inline-block; padding: 7px 16px;
          background: #ccfbf1; color: #00735c;
          border-radius: 999px; font-size: 12.5px; font-weight: 700;
          margin-bottom: 10px; border: 1.5px solid #99f6e4;
        }

        .vwssc-mobile { color: #64748b; font-size: 13.5px; margin-top: 8px; font-weight: 500; }

        @media (max-width: 768px) {
          .vwssc-hero { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; padding: 48px 18px; }
          .vwssc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .vwssc-avatar-wrap { width: 80px; height: 80px; }
        }

        @media (max-width: 480px) {
          .vwssc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .vwssc-card { padding: 22px 12px 18px; border-radius: 18px; }
          .vwssc-avatar-wrap { width: 70px; height: 70px; }
          .vwssc-card h3 { font-size: 13px; min-height: auto; }
          .vwssc-role { font-size: 11px; padding: 6px 12px; }
        }

        @media (max-width: 340px) { .vwssc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="vwssc-section">
        <div className="vwssc-hero">
          <div className="vwssc-hero-content">
            <div className="vwssc-badge">💧</div>
            <h1>{t("vwssc.title")}</h1>
            <p>{t("vwssc.subtitle")}</p>
          </div>
        </div>

        <div className="vwssc-container">
          <div className="vwssc-section-title">
            <h2>{t("vwssc.members")}</h2>
            <div className="vwssc-title-line" />
          </div>

          <div className="vwssc-grid">
            {members.map((member) => {
              const displayName = currentLanguage === "mr" ? member.nameMr : member.name;
              const initials = getInitials(member.name);
              return (
                <div className="vwssc-card" key={member.id}>
                  <div className="vwssc-avatar-wrap">
                    {member.img && <img src={member.img} alt={displayName} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                    <span className="vwssc-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                  </div>
                  <h3>{displayName}</h3>
                  <div className="vwssc-role">{t(member.roleKey)}</div>
                  <p className="vwssc-mobile">{member.mobile}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VWSSC;