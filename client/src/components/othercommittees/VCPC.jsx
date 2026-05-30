import React from "react";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useTranslator } from "../../context/LanguageContext";

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const VCPC = () => {
  const { t, currentLanguage } = useTranslator();

  const members = [
    { id: 1, name: "Mr. Yadav Kashinath Garud", nameMr: "श्री. यादव काशिनाथ गरुड", roleKey: "vcpc.sarpanch", mobile: "9270572674", img: "/श्री यादव काशिनाथ गरुड.jpeg" },
    { id: 2, name: "Mrs. Sunita Annasaheb Kale", nameMr: "सौ. सुनिता अण्णासाहेब काळे", roleKey: "vcpc.deputySarpanch", mobile: "9423078435", img: "/सौ सुनिता अण्णासाहेब काळे.jpeg" },
    { id: 3, name: "Mr. Sanjay Dagu Kale", nameMr: "श्री. संजय दगू काळे", roleKey: "vcpc.member", mobile: "9552224456", img: "/श्री संजय दगू काळे.jpeg" },
    { id: 4, name: "Mrs. Kusum Sanjay Kale", nameMr: "सौ. कुसुम संजय काळे", roleKey: "vcpc.memberFemale", mobile: "9689455720", img: "/सौ कुसुम संजय काळे.jpeg" },
    { id: 5, name: "Mrs. Sheetal Ganesh Aher", nameMr: "सौ. शीतल गणेश अहेर", roleKey: "vcpc.memberFemale", mobile: "9604194528", img: "/सौ शीतल गणेश आहेर.jpeg" },
    { id: 6, name: "Mrs. Umakant Shriram Kale", nameMr: "कु. उमाकांत श्रीराम काळे", roleKey: "vcpc.memberFemale", mobile: "7517497815", img: "/कु उमाकांत श्रीराम काळे.jpeg" },
    { id: 7, name: "Mr. Ganesh Machhindra Thackeray", nameMr: "श्री. गणेश मच्छिंद्र ठाकरे", roleKey: "vcpc.member", mobile: "9822479345", img: "/श्री गणेश मच्छिंद्र ठाकरे.jpeg" },
    { id: 8, name: "Mrs. Rupali Santosh Kale", nameMr: "कु. रुपाली संतोष काळे", roleKey: "vcpc.memberFemale", mobile: "8767428964", img: "/कु रुपाली संतोष काळे.jpeg" },
    { id: 9, name: "Mr. Sachin Trambak Sanap", nameMr: "श्री. सचिन त्रंबक सानप", roleKey: "vcpc.officer", mobile: "9860582261", img: "/श्री सचिन त्रम्बक सानप.jpeg" },
    { id: 10, name: "Mr. Annasaheb Nivrutti Kale", nameMr: "श्री. अण्णासाहेब निवृत्ती काळे", roleKey: "vcpc.operator", mobile: "9423078435", img: "/श्री अण्णासाहेब निवृत्ती काळे.jpeg" },
  ];

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .vcpc-section { width: 100%; background: #f5f3ff; overflow: hidden; font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; }

        .vcpc-hero {
          width: 100%; min-height: 400px;
          background:
            linear-gradient(rgba(46, 16, 101, 0.80), rgba(46, 16, 101, 0.85)),
            url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80&auto=format&fit=crop");
          background-size: cover; background-position: center top;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 60px 20px;
          border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;
        }

        .vcpc-content { max-width: 900px; color: #fff; }

        .vcpc-icon {
          width: 88px; height: 88px; margin: 0 auto 22px;
          background: #ffffff; color: #4f46e5;
          border-radius: 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 40px; transform: rotate(-8deg);
          box-shadow: 0 10px 28px rgba(0,0,0,0.30);
        }

        .vcpc-content h1 { font-size: clamp(26px, 5vw, 44px); font-weight: 800; line-height: 1.25; margin-bottom: 18px; }
        .vcpc-content p { font-size: 15px; line-height: 1.9; color: #ddd6fe; max-width: 700px; margin: auto; }

        .vcpc-container { max-width: 1200px; margin: auto; padding: 70px 20px; }

        .vcpc-section-title { text-align: center; margin-bottom: 48px; }
        .vcpc-section-title h2 { font-size: clamp(26px, 4vw, 36px); color: #111827; font-weight: 800; margin-bottom: 12px; }
        .vcpc-title-line { width: 70px; height: 4px; background: #6366f1; margin: auto; border-radius: 999px; }

        .vcpc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px; }

        .vcpc-card {
          background: #ffffff; border-radius: 22px; padding: 28px 18px 24px;
          text-align: center; position: relative; overflow: hidden;
          border: 1.5px solid #c7d2fe;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          display: flex; flex-direction: column; align-items: center;
        }

        .vcpc-card::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 5px;
          background: linear-gradient(to right, #6366f1, #4f46e5);
        }

        .vcpc-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(79,70,229,0.16); }
        .vcpc-card:hover .vcpc-avatar-wrap { border-color: #a5b4fc; }

        .vcpc-avatar-wrap {
          width: 100px; height: 100px;
          border-radius: 50%; overflow: hidden;
          border: 4px solid #e0e7ff; background: #f5f3ff;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px; flex-shrink: 0;
          transition: border-color 0.22s ease;
        }

        .vcpc-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .vcpc-avatar-initials { font-size: 28px; font-weight: 700; color: #4f46e5; user-select: none; }

        .vcpc-card h3 {
          font-size: 15px; font-weight: 700; color: #111827;
          margin-bottom: 12px; line-height: 1.5;
          flex: 1; display: flex; align-items: center; justify-content: center; min-height: 48px;
        }

        .vcpc-role {
          display: inline-block; padding: 7px 18px;
          background: #eef2ff; color: #4338ca;
          border-radius: 999px; font-size: 12.5px; font-weight: 700;
          margin-bottom: 10px; border: 1.5px solid #c7d2fe;
        }

        .vcpc-mobile { color: #475569; font-size: 13.5px; margin-top: 8px; font-weight: 500; }

        @media (max-width: 768px) {
          .vcpc-hero { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
          .vcpc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .vcpc-avatar-wrap { width: 84px; height: 84px; }
        }

        @media (max-width: 480px) {
          .vcpc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .vcpc-card { padding: 22px 12px 18px; border-radius: 18px; }
          .vcpc-avatar-wrap { width: 72px; height: 72px; }
          .vcpc-card h3 { font-size: 13px; min-height: auto; }
          .vcpc-role { font-size: 11px; padding: 6px 12px; }
        }

        @media (max-width: 340px) { .vcpc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="vcpc-section">
        <div className="vcpc-hero">
          <div className="vcpc-content">
            <div className="vcpc-icon">👶</div>
            <h1>{t("vcpc.title")}</h1>
            <p>{t("vcpc.subtitle")}</p>
          </div>
        </div>

        <div className="vcpc-container">
          <div className="vcpc-section-title">
            <h2>{t("vcpc.members")}</h2>
            <div className="vcpc-title-line" />
          </div>

          <div className="vcpc-grid">
            {members.map((member) => {
              const displayName = currentLanguage === "mr" ? member.nameMr : member.name;
              const initials = getInitials(member.name);
              return (
                <div className="vcpc-card" key={member.id}>
                  <div className="vcpc-avatar-wrap">
                    {member.img && <img src={member.img} alt={displayName} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                    <span className="vcpc-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                  </div>
                  <h3>{displayName}</h3>
                  <div className="vcpc-role">{t(member.roleKey)}</div>
                  <p className="vcpc-mobile">{member.mobile}</p>
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

export default VCPC;