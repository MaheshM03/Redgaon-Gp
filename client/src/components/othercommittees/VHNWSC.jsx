import React from "react";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useTranslator } from "../../context/LanguageContext";

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const members = [
  { id: 1, name: "Mr. Yadav Kashinath Garud", nameMr: "श्री. यादव काशिनाथ गरुड", role: "Sarpanch", roleMr: "सरपंच", mobile: "9270572674", img: "/श्री यादव काशिनाथ गरुड.jpeg" },
  { id: 2, name: "Mrs. Sunita Annasaheb Kale", nameMr: "सौ. सुनिता अण्णासाहेब काळे", role: "Deputy Sarpanch", roleMr: "उप सरपंच", mobile: "9423078435", img: "/सौ सुनिता अण्णासाहेब काळे.jpeg" },
  { id: 3, name: "Mr. Sanjay Dagu Kale", nameMr: "श्री. संजय दगू काळे", role: "Member", roleMr: "सदस्य", mobile: "9552224456", img: "/श्री संजय दगू काळे.jpeg" },
  { id: 4, name: "Mrs. Kusum Sanjay Kale", nameMr: "सौ. कुसुम संजय काळे", role: "Member", roleMr: "सदस्या", mobile: "9689455720", img: "/सौ कुसुम संजय काळे.jpeg" },
  { id: 5, name: "Mrs. Sheetal Ganesh Aher", nameMr: "सौ. शीतल गणेश अहेर", role: "Member", roleMr: "सदस्या", mobile: "9604194528", img: "/सौ शीतल गणेश आहेर.jpeg" },
  { id: 6, name: "Mrs. Umakant Shriram Kale", nameMr: "कु. उमाकांत श्रीराम काळे", role: "Member", roleMr: "सदस्या", mobile: "7517497815", img: "/कु उमाकांत श्रीराम काळे.jpeg" },
  { id: 7, name: "Mr. Ganesh Machhindra Thackeray", nameMr: "श्री. गणेश मच्छिंद्र ठाकरे", role: "Member", roleMr: "सदस्य", mobile: "9822479345", img: "/श्री गणेश मच्छिंद्र ठाकरे.jpeg" },
  { id: 8, name: "Mrs. Rupali Santosh Kale", nameMr: "कु. रुपाली संतोष काळे", role: "Member", roleMr: "सदस्या", mobile: "8767428964", img: "/कु रुपाली संतोष काळे.jpeg" },
  { id: 9, name: "Mr. Sachin Trambak Sanap", nameMr: "श्री. सचिन त्रंबक सानप", role: "Gram Panchayat Officer", roleMr: "ग्रामपंचायत अधिकारी", mobile: "9860582261", img: "/श्री सचिन त्रम्बक सानप.jpeg" },
  { id: 10, name: "Mr. Annasaheb Nivrutti Kale", nameMr: "श्री. अण्णासाहेब निवृत्ती काळे", role: "Computer Operator", roleMr: "संगणक परिचालक", mobile: "9423078435", img: "/श्री अण्णासाहेब निवृत्ती काळे.jpeg" },
];

const VHNWSC = () => {
  const { t, currentLanguage } = useTranslator();

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .vhn-section { width: 100%; background: #faf5ff; overflow: hidden; font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; }

        .vhn-banner {
          position: relative; width: 100%; min-height: 340px;
          background:
            linear-gradient(rgba(46, 16, 101, 0.82), rgba(60, 20, 120, 0.86)),
            url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80&auto=format&fit=crop");
          background-size: cover; background-position: center;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 60px 20px;
          border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;
          overflow: hidden;
        }

        .vhn-banner-content { position: relative; z-index: 2; max-width: 820px; margin: auto; }

        .vhn-logo-box {
          width: 72px; height: 72px; margin: 0 auto 18px;
          background: #ffffff; color: #6d28d9;
          font-size: 16px; font-weight: 700; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
        }

        .vhn-banner-content h1 { color: #ffffff; font-size: clamp(26px, 5vw, 42px); line-height: 1.3; font-weight: 800; margin-bottom: 14px; }
        .vhn-banner-content p { color: #ede9fe; font-size: 15px; line-height: 1.8; max-width: 680px; margin: auto; }

        .vhn-container { max-width: 1200px; margin: auto; padding: 60px 20px; }

        .vhn-section-title { text-align: center; margin-bottom: 44px; }
        .vhn-section-title h2 { font-size: clamp(24px, 4vw, 34px); color: #111827; font-weight: 800; margin-bottom: 10px; }
        .vhn-title-line { width: 65px; height: 4px; background: linear-gradient(90deg, #7c3aed, #a855f7); margin: auto; border-radius: 999px; }

        .vhn-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 22px; }

        .vhn-card {
          background: #ffffff; border: 1.5px solid #ddd6fe;
          border-radius: 22px; padding: 28px 18px 24px;
          text-align: center; position: relative; overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex; flex-direction: column; align-items: center;
        }

        .vhn-card::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 5px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          opacity: 0; transition: opacity 0.25s ease;
        }

        .vhn-card:hover::before { opacity: 1; }
        .vhn-card:hover { transform: translateY(-6px); box-shadow: 0 14px 36px rgba(124,58,237,0.14); }
        .vhn-card:hover .vhn-avatar-wrap { border-color: #c4b5fd; }

        .vhn-avatar-wrap {
          width: 96px; height: 96px;
          border-radius: 50%; overflow: hidden;
          border: 4px solid #ede9fe; background: #faf5ff;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px; flex-shrink: 0;
          transition: border-color 0.22s ease;
        }

        .vhn-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; transition: transform 0.35s ease; }
        .vhn-card:hover .vhn-avatar-wrap img { transform: scale(1.05); }
        .vhn-avatar-initials { font-size: 26px; font-weight: 700; color: #7c3aed; user-select: none; }

        .vhn-card h3 {
          font-size: 15px; font-weight: 700; color: #111827;
          margin-bottom: 12px; line-height: 1.5;
          flex: 1; display: flex; align-items: center; justify-content: center; min-height: 46px;
        }

        .vhn-role {
          display: inline-block; padding: 7px 16px;
          background: #f3e8ff; color: #6d28d9;
          border-radius: 999px; font-size: 12.5px; font-weight: 700;
          margin-bottom: 10px; border: 1.5px solid #ddd6fe;
        }

        .vhn-mobile { color: #64748b; font-size: 13.5px; margin-top: 8px; font-weight: 500; }

        @media (max-width: 768px) {
          .vhn-banner { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; padding: 48px 18px; }
          .vhn-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .vhn-avatar-wrap { width: 80px; height: 80px; }
        }

        @media (max-width: 480px) {
          .vhn-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .vhn-card { padding: 22px 12px 18px; border-radius: 18px; }
          .vhn-avatar-wrap { width: 70px; height: 70px; }
          .vhn-card h3 { font-size: 13px; min-height: auto; }
          .vhn-role { font-size: 11px; padding: 6px 12px; }
          .vhn-card:hover { transform: none; }
        }

        @media (max-width: 340px) { .vhn-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="vhn-section">
        <div className="vhn-banner">
          <div className="vhn-banner-content">
            <div className="vhn-logo-box">{t("vhnwsc.logo")}</div>
            <h1>{t("vhnwsc.title")}</h1>
            <p>{t("vhnwsc.subtitle")}</p>
          </div>
        </div>

        <div className="vhn-container">
          <div className="vhn-section-title">
            <h2>{t("vhnwsc.members")}</h2>
            <div className="vhn-title-line" />
          </div>

          <div className="vhn-grid">
            {members.map((member) => {
              const displayName = currentLanguage === "mr" ? member.nameMr : member.name;
              const displayRole = currentLanguage === "mr" ? member.roleMr : member.role;
              const initials = getInitials(member.name);
              return (
                <div className="vhn-card" key={member.id}>
                  <div className="vhn-avatar-wrap">
                    {member.img && <img src={member.img} alt={displayName} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                    <span className="vhn-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                  </div>
                  <h3>{displayName}</h3>
                  <span className="vhn-role">{displayRole}</span>
                  <p className="vhn-mobile">{member.mobile}</p>
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

export default VHNWSC;