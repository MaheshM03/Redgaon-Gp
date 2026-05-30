import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useTranslator } from "../../context/LanguageContext.js";

const membersData = [
  { name: "Mr. Yadav Kashinath Garud", nameMr: "श्री. यादव काशिनाथ गरुड", role: "Sarpanch", roleMr: "सरपंच", mobile: "9270572674", tier: "senior", img: "/श्री यादव काशिनाथ गरुड.jpeg" },
  { name: "Mrs. Sunita Annasaheb Kale", nameMr: "सौ. सुनिता अण्णासाहेब काळे", role: "Deputy Sarpanch", roleMr: "उप सरपंच", mobile: "9423078435", tier: "senior", img: "/सौ सुनिता अण्णासाहेब काळे.jpeg" },
  { name: "Mr. Sanjay Dagu Kale", nameMr: "श्री. संजय दगू काळे", role: "Member", roleMr: "सदस्य", mobile: "9552224456", tier: "member", img: "/श्री संजय दगू काळे.jpeg" },
  { name: "Mrs. Kusum Sanjay Kale", nameMr: "सौ. कुसुम संजय काळे", role: "Member", roleMr: "सदस्या", mobile: "9689455720", tier: "member", img: "/सौ कुसुम संजय काळे.jpeg" },
  { name: "Mrs. Sheetal Ganesh Aher", nameMr: "सौ. शीतल गणेश अहेर", role: "Member", roleMr: "सदस्या", mobile: "9604194528", tier: "member", img: "/सौ शीतल गणेश आहेर.jpeg" },
  { name: "Mrs. Umakant Shriram Kale", nameMr: "कु उमाकांत श्रीराम काळे", role: "Member", roleMr: "सदस्या", mobile: "7517497815", tier: "member", img: "/कु उमाकांत श्रीराम काळे.jpeg" },
  { name: "Mr. Ganesh Machhindra Thackeray", nameMr: "श्री. गणेश मच्छिंद्र ठाकरे", role: "Member", roleMr: "सदस्य", mobile: "9822479345", tier: "member", img: "/श्री गणेश मच्छिंद्र ठाकरे.jpeg" },
  { name: "Mrs. Rupali Santosh Kale", nameMr: "कु रुपाली संतोष काळे", role: "Member", roleMr: "सदस्या", mobile: "8767428964", tier: "member", img: "/कु रुपाली संतोष काळे.jpeg" },
  { name: "Mr. Sachin Trambak Sanap", nameMr: "श्री. सचिन त्रंबक सानप", role: "Gram Panchayat Officer", roleMr: "ग्रामपंचायत अधिकारी", mobile: "9860582261", tier: "officer", img: "/श्री सचिन त्रम्बक सानप.jpeg" },
  { name: "Mr. Annasaheb Nivrutti Kale", nameMr: "श्री अण्णासाहेब निवृत्ती काळे", role: "Computer Operator", roleMr: "संगणक परिचालक", mobile: "9423078435", tier: "staff", img: "/श्री अण्णासाहेब निवृत्ती काळे.jpeg" },
];

const tierConfig = {
  senior: { color: "#b45309", bg: "#fef3c7", border: "#fde68a", dot: "#f59e0b" },
  officer: { color: "#1d4ed8", bg: "#dbeafe", border: "#bfdbfe", dot: "#2563eb" },
  member: { color: "#15803d", bg: "#dcfce7", border: "#bbf7d0", dot: "#16a34a" },
  staff: { color: "#475569", bg: "#f1f5f9", border: "#cbd5e1", dot: "#64748b" },
};

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function AdminCommittee() {
  const { currentLanguage, t } = useTranslator();
  const [filter, setFilter] = useState("all");
  const tiers = ["all", "senior", "officer", "member", "staff"];
  const filteredMembers = filter === "all" ? membersData : membersData.filter((m) => m.tier === filter);

  return (
    <section className="ac-root">
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .ac-root { background: #f1f5f9; min-height: 100vh; font-family: 'Inter', 'Noto Sans Devanagari', sans-serif; }

        /* ── HERO ── */
        .ac-hero {
          background:
            linear-gradient(rgba(10, 20, 50, 0.72), rgba(10, 20, 50, 0.78)),
            url("https://images.unsplash.com/photo-1622354573449-ce732931783f?w=1600&q=80&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          padding: 100px 20px 72px;
          text-align: center;
        }

        .ac-title { color: #ffffff; font-size: clamp(28px, 5vw, 42px); font-weight: 800; margin-bottom: 14px; line-height: 1.2; }
        .ac-subtitle { color: rgba(255,255,255,0.82); font-size: 15px; line-height: 1.9; max-width: 580px; margin: auto; }

        /* ── FILTER ── */
        .ac-filter-wrap { max-width: 1100px; margin: auto; padding: 28px 16px 12px; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }

        .ac-filter-btn {
          padding: 9px 20px; border-radius: 999px;
          background: #ffffff; border: 1.5px solid #e2e8f0;
          color: #475569; font-size: 12.5px; font-weight: 600;
          cursor: pointer; transition: all 0.2s ease; font-family: inherit;
        }

        .ac-filter-btn:hover { border-color: #93c5fd; color: #1d4ed8; background: #eff6ff; }
        .ac-filter-btn.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }

        /* ── GRID ── */
        .ac-section { max-width: 1100px; margin: auto; padding: 16px 16px 72px; }
        .ac-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }

        /* ── FLIP CARD ── */
        .ac-card-wrapper { perspective: 1200px; height: 320px; }

        .ac-card-inner {
          position: relative; width: 100%; height: 100%;
          transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .ac-card-wrapper:hover .ac-card-inner { transform: rotateY(180deg); }

        .ac-card-front, .ac-card-back {
          position: absolute; inset: 0;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          border-radius: 20px; overflow: hidden;
        }

        .ac-card-front {
          background: #ffffff; border: 1.5px solid #e8eef5;
          padding: 0 18px 22px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .ac-top-bar { width: 100%; height: 5px; flex-shrink: 0; margin-bottom: 20px; }

        .ac-avatar-wrap {
          width: 92px; height: 92px;
          border-radius: 50%; overflow: hidden;
          flex-shrink: 0;
          border: 3px solid #e2e8f0;
          background: #f1f5f9;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          transition: border-color 0.2s ease;
        }

        .ac-card-wrapper:hover .ac-avatar-wrap { border-color: #93c5fd; }

        .ac-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .ac-avatar-initials { font-size: 26px; font-weight: 700; color: #ffffff; line-height: 1; user-select: none; }

        .ac-name {
          color: #0f172a; font-size: 14.5px; font-weight: 700;
          line-height: 1.5; margin-bottom: 12px;
          flex: 1; display: flex; align-items: center; justify-content: center; text-align: center;
        }

        .ac-role-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 6px 14px; border-radius: 999px;
          font-size: 11.5px; font-weight: 700; border: 1.5px solid; white-space: nowrap;
        }

        .ac-role-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

        /* ── BACK ── */
        .ac-card-back {
          background: #1e40af; color: #ffffff;
          transform: rotateY(180deg);
          display: flex; flex-direction: column;
          justify-content: center; align-items: center; text-align: center;
          padding: 28px 22px; gap: 4px;
        }

        .ac-back-avatar-wrap {
          width: 72px; height: 72px;
          border-radius: 50%; overflow: hidden;
          border: 2.5px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px; flex-shrink: 0;
        }

        .ac-back-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
        .ac-back-avatar-initials { font-size: 20px; font-weight: 700; color: rgba(255,255,255,0.85); }
        .ac-back-name { font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 4px; line-height: 1.4; }
        .ac-back-role { font-size: 12px; color: rgba(255,255,255,0.72); margin-bottom: 16px; }
        .ac-divider { width: 40px; height: 1.5px; background: rgba(255,255,255,0.25); border-radius: 2px; margin-bottom: 16px; }
        .ac-contact-label { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.60); margin-bottom: 8px; }
        .ac-mobile-big { font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff; margin-bottom: 16px; }

        .ac-call-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #ffffff; color: #1d4ed8;
          padding: 10px 20px; border-radius: 12px;
          text-decoration: none; font-size: 13.5px; font-weight: 700;
          transition: background 0.18s ease; font-family: inherit;
        }

        .ac-call-btn:hover { background: #dbeafe; }

        @media (max-width: 768px) {
          .ac-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .ac-card-wrapper { height: 300px; }
          .ac-avatar-wrap { width: 78px; height: 78px; }
        }

        @media (max-width: 480px) {
          .ac-hero { padding: 70px 16px 52px; }
          .ac-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .ac-card-wrapper { height: 285px; }
          .ac-card-front { padding: 0 12px 18px; }
          .ac-avatar-wrap { width: 70px; height: 70px; margin-bottom: 12px; }
          .ac-name { font-size: 12.5px; }
          .ac-role-badge { font-size: 10.5px; padding: 5px 10px; }
          .ac-mobile-big { font-size: 17px; }
        }

        @media (max-width: 340px) { .ac-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="ac-hero">
        <h1 className="ac-title">{t("admin.hero.title")}</h1>
        <p className="ac-subtitle">{t("admin.hero.subtitle")}</p>
      </div>

      <div className="ac-filter-wrap">
        {tiers.map((tier) => (
          <button key={tier} className={`ac-filter-btn ${filter === tier ? "active" : ""}`} onClick={() => setFilter(tier)}>
            {t(`admin.filter.${tier}`)}
          </button>
        ))}
      </div>

      <div className="ac-section">
        <div className="ac-grid">
          {filteredMembers.map((member, index) => {
            const cfg = tierConfig[member.tier] || tierConfig.staff;
            const displayName = currentLanguage === "mr" ? member.nameMr : member.name;
            const displayRole = currentLanguage === "mr" ? member.roleMr : member.role;
            const initials = getInitials(member.name);

            return (
              <motion.div key={index} className="ac-card-wrapper"
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: index * 0.05 }} viewport={{ once: true }}>
                <div className="ac-card-inner">
                  <div className="ac-card-front">
                    <div className="ac-top-bar" style={{ background: cfg.dot }} />
                    <div className="ac-avatar-wrap" style={{ borderColor: cfg.border, background: member.img ? "#f1f5f9" : cfg.dot }}>
                      {member.img && <img src={member.img} alt={member.name} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                      <span className="ac-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                    </div>
                    <div className="ac-name">{displayName}</div>
                    <span className="ac-role-badge" style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.border }}>
                      <span className="ac-role-dot" style={{ background: cfg.dot }} />
                      {displayRole}
                    </span>
                  </div>

                  <div className="ac-card-back">
                    <div className="ac-back-avatar-wrap">
                      {member.img && <img src={member.img} alt={member.name} onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />}
                      <span className="ac-back-avatar-initials" style={{ display: member.img ? "none" : "flex" }}>{initials}</span>
                    </div>
                    <div className="ac-back-name">{displayName}</div>
                    <div className="ac-back-role">{displayRole}</div>
                    <div className="ac-divider" />
                    <div className="ac-contact-label">Contact</div>
                    <div className="ac-mobile-big">{member.mobile}</div>
                    <a href={`tel:${member.mobile}`} className="ac-call-btn">Call Now</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </section>
  );
}