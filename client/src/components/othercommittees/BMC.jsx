import React from "react";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useTranslator } from "../../context/LanguageContext";

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const BMC = () => {
  const { t, currentLanguage } = useTranslator();

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

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .bmc-section { width: 100%; background: #f0fdf4; overflow: hidden; font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; }

        .bmc-hero {
          width: 100%; min-height: 400px;
          background:
            linear-gradient(rgba(5, 46, 22, 0.78), rgba(5, 46, 22, 0.82)),
            url("https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80&auto=format&fit=crop");
          background-size: cover; background-position: center;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 60px 20px;
          border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;
        }

        .bmc-content { max-width: 900px; color: #fff; }

        .bmc-icon {
          width: 88px; height: 88px; margin: 0 auto 22px;
          background: #22c55e; border-radius: 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 40px; transform: rotate(-8deg);
          box-shadow: 0 10px 28px rgba(0,0,0,0.30);
        }

        .bmc-content h1 { font-size: clamp(26px, 5vw, 44px); font-weight: 800; line-height: 1.25; margin-bottom: 18px; }
        .bmc-content p { font-size: 15px; line-height: 1.9; color: #bbf7d0; max-width: 700px; margin: auto; }

        .bmc-container { max-width: 1200px; margin: auto; padding: 70px 20px; }

        .bmc-section-title { text-align: center; margin-bottom: 48px; }
        .bmc-section-title h2 { font-size: clamp(26px, 4vw, 36px); color: #14532d; font-weight: 800; margin-bottom: 12px; }
        .bmc-title-line { width: 70px; height: 4px; background: #22c55e; margin: auto; border-radius: 999px; }

        .bmc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 24px; }

        .bmc-card {
          background: #ffffff; border-radius: 22px; padding: 28px 18px 24px;
          text-align: center; position: relative; overflow: hidden;
          border: 1.5px solid #bbf7d0;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          display: flex; flex-direction: column; align-items: center;
        }

        .bmc-card::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 5px;
          background: linear-gradient(to right, #22c55e, #15803d);
        }

        .bmc-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(21,128,61,0.16); }
        .bmc-card:hover .bmc-avatar-wrap { border-color: #86efac; }

        .bmc-avatar-wrap {
          width: 100px; height: 100px;
          border-radius: 50%; overflow: hidden;
          border: 4px solid #dcfce7; background: #f0fdf4;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px; flex-shrink: 0;
          transition: border-color 0.22s ease;
        }

        .bmc-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .bmc-avatar-initials { font-size: 28px; font-weight: 700; color: #15803d; user-select: none; }

        .bmc-card h3 {
          font-size: 15px; font-weight: 700; color: #14532d;
          margin-bottom: 12px; line-height: 1.5;
          flex: 1; display: flex; align-items: center; justify-content: center;
        }

        .bmc-role {
          display: inline-block; padding: 7px 18px;
          background: #dcfce7; color: #15803d;
          border-radius: 999px; font-size: 12.5px; font-weight: 700;
          margin-bottom: 10px; border: 1.5px solid #bbf7d0;
        }

        .bmc-mobile { color: #475569; font-size: 13.5px; margin-top: 8px; font-weight: 500; }

        @media (max-width: 768px) {
          .bmc-hero { border-bottom-left-radius: 48px; border-bottom-right-radius: 48px; }
          .bmc-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .bmc-avatar-wrap { width: 84px; height: 84px; }
        }

        @media (max-width: 480px) {
          .bmc-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .bmc-card { padding: 22px 12px 18px; border-radius: 18px; }
          .bmc-avatar-wrap { width: 72px; height: 72px; }
          .bmc-card h3 { font-size: 13px; }
          .bmc-role { font-size: 11px; padding: 6px 12px; }
        }

        @media (max-width: 340px) { .bmc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="bmc-section">
        <div className="bmc-hero">
          <div className="bmc-content">
            <div className="bmc-icon">🌿</div>
            <h1>Biodiversity Management Committee</h1>
            <p>Redgaon Gram Panchayat's dedicated committee for environmental protection. This committee works for the conservation of biodiversity, protection of local species, and sustainable use of nature.</p>
          </div>
        </div>

        <div className="bmc-container">
          <div className="bmc-section-title">
            <h2>समिती सदस्य</h2>
            <div className="bmc-title-line" />
          </div>

          <div className="bmc-grid">
            {members.map((member) => {
              const displayName = currentLanguage === "mr" ? member.nameMr : member.name;
              const displayRole = currentLanguage === "mr" ? member.roleMr : member.role;
              const initials = getInitials(member.name);
              return (
                <div className="bmc-card" key={member.id}>
                  <div className="bmc-avatar-wrap">
                    {member.img && <img src={member.img} alt={displayName} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                    <span className="bmc-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                  </div>
                  <h3>{displayName}</h3>
                  <div className="bmc-role">{displayRole}</div>
                  <p className="bmc-mobile">{member.mobile}</p>
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

export default BMC;