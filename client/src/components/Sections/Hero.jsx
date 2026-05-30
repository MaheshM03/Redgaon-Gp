import { useState } from "react";
import { useTranslator } from "../../context/LanguageContext.js";

const ministers = [
  { nameKey: "hero.minister1.name", roleKey: "hero.minister1.role", img: "/Devendra Fadnavis.jfif", descKey: "hero.minister1.desc" },
  { nameKey: "hero.minister2.name", roleKey: "hero.minister2.role", img: "/eknath shinde.avif", descKey: "hero.minister2.desc" },
  { nameKey: "hero.minister3.name", roleKey: "hero.minister3.role", img: "/sunetra ajit pawar.jfif", descKey: "hero.minister3.desc" },
  { nameKey: "hero.minister5.name", roleKey: "hero.minister5.role", img: "/Jaykumar gore.png", descKey: "hero.minister5.desc" },
  { nameKey: "hero.minister6.name", roleKey: "hero.minister6.role", img: "/yogesh kadam.png", descKey: "hero.minister6.desc" },
  { nameKey: "hero.minister7.name", roleKey: "hero.minister7.role", img: "/chandrakant pulkundwar.jpg", descKey: "hero.minister7.desc" },
  { nameKey: "hero.minister4.name", roleKey: "hero.minister4.role", img: "/omkar pawar.jfif", descKey: "hero.minister4.desc" },
];

const gpOfficials = [
  { nameKey: "hero.official1.name", roleKey: "hero.official1.role", img: "/श्री यादव काशिनाथ गरुड.jpeg", descKey: "hero.official1.desc" },
  { nameKey: "hero.official2.name", roleKey: "hero.official2.role", img: "/सौ सुनिता अण्णासाहेब काळे.jpeg", descKey: "hero.official2.desc" },
  { nameKey: "hero.official3.name", roleKey: "hero.official3.role", img: "/श्री सचिन त्रम्बक सानप.jpeg", descKey: "hero.official3.desc" },
];

export default function Hero() {
  const { t } = useTranslator();
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* ── ROOT ── */
        .hr-root {
          font-family: 'Plus Jakarta Sans', 'Noto Sans Devanagari', sans-serif;
          background: #f1f5f9;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO BANNER ── */
        .hr-hero {
          background:
            linear-gradient(rgba(10, 18, 38, 0.75), rgba(10, 18, 38, 0.78)),
            url("/grampanchyat%20office.jpeg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          text-align: center;
          padding: clamp(50px, 7vw, 90px) clamp(16px, 5vw, 40px) clamp(110px, 12vw, 145px);
          position: relative;
          overflow: hidden;
        }

        .hr-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 820px;
          margin: auto;
        }

        .hr-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.22);
          color: #ffffff;
          padding: 6px 18px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }

        .hr-hero h1 {
          font-size: clamp(28px, 5vw, 50px);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .hr-hero-sub {
          font-size: clamp(14px, 2vw, 16px);
          color: rgba(255,255,255,0.85);
          line-height: 1.85;
          max-width: 600px;
          margin: auto;
        }

        /* ── OUTER WRAPPER ── */
        .hr-outer {
          padding: 0 clamp(12px, 4vw, 28px) clamp(48px, 6vw, 72px);
        }

        /* ── FLOATING CONTAINER ── */
        .hr-container {
          max-width: 1140px;
          margin: -68px auto 0;
          background: #ffffff;
          padding: clamp(24px, 4vw, 40px) clamp(20px, 4vw, 36px);
          border-radius: 22px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 40px rgba(0,0,0,0.07), 0 2px 10px rgba(0,0,0,0.04);
          position: relative;
          z-index: 5;
        }

        /* ── SECTION HEADER ── */
        .hr-section-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }

        .hr-section-head h2 {
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
        }

        .hr-section-line {
          flex: 1;
          height: 1.5px;
          background: linear-gradient(to right, #cbd5e1, transparent);
          border-radius: 2px;
        }

        /* ── MINISTER ROWS ── */
        .minister-row-1 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        .minister-row-2 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* ── CARDS ── */
        .hr-card {
          background: #ffffff;
          border: 1.5px solid #e8eef5;
          border-radius: 18px;
          padding: 24px 14px 20px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .hr-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.10), 0 2px 8px rgba(0,0,0,0.05);
          border-color: #bfdbfe;
        }

        /* ── IMAGE AREA ── */
        .hr-card-avatar {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #e2e8f0;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          flex-shrink: 0;
          transition: border-color 0.22s ease;
        }

        .hr-card:hover .hr-card-avatar {
          border-color: #93c5fd;
        }

        .hr-card-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .hr-card h3 {
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
          line-height: 1.45;
          word-break: break-word;
        }

        .hr-card p {
          font-size: 11.5px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }

        /* ── GP OFFICIALS GRID ── */
        .hr-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* ── MODAL OVERLAY ── */
        .hr-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 10, 30, 0.55);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          z-index: 9999;
          backdrop-filter: blur(3px);
        }

        .hr-modal {
          width: 100%;
          max-width: 380px;
          background: white;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,0,0,0.20);
          animation: modalIn 0.2s ease;
        }

        @keyframes modalIn {
          from { transform: scale(0.94) translateY(10px); opacity: 0; }
          to   { transform: scale(1)    translateY(0);    opacity: 1; }
        }

        .hr-modal-top {
          background: linear-gradient(140deg, #1e40af, #2563eb, #3b82f6);
          padding: 30px 24px 24px;
          text-align: center;
          position: relative;
        }

        /* ── MODAL IMAGE ── */
        .hr-modal-avatar {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.50);
          background: rgba(255,255,255,0.15);
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hr-modal-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .hr-modal-top h3 {
          color: white;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 5px;
          line-height: 1.35;
        }

        .hr-modal-role {
          color: rgba(255,255,255,0.80);
          font-size: 13px;
          line-height: 1.5;
        }

        .hr-modal-body {
          padding: 22px 24px 24px;
        }

        .hr-modal-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .hr-modal-close {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: 12px;
          background: #2563eb;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: background 0.18s ease;
        }

        .hr-modal-close:hover {
          background: #1d4ed8;
        }

        /* ── TABLET ── */
        @media (max-width: 768px) {
          .hr-hero {
            padding: 50px 16px 100px;
          }

          .hr-container {
            margin-top: -55px;
            padding: 22px 16px;
          }

          .minister-row-1 {
            grid-template-columns: repeat(3, 1fr);
          }

          .minister-row-2 {
            grid-template-columns: repeat(2, 1fr);
          }

          .hr-grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }

          .hr-card-avatar {
            width: 70px;
            height: 70px;
          }
        }

        /* ── MOBILE ── */
        @media (max-width: 540px) {
          .hr-hero {
            padding: 44px 14px 88px;
          }

          .hr-outer {
            padding: 0 10px 36px;
          }

          .hr-container {
            margin-top: -46px;
            border-radius: 18px;
            padding: 18px 12px;
          }

          .minister-row-1,
          .minister-row-2,
          .hr-grid-3 {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .hr-card {
            padding: 18px 10px 16px;
            border-radius: 14px;
          }

          .hr-card-avatar {
            width: 64px;
            height: 64px;
            margin-bottom: 10px;
          }

          .hr-card h3 {
            font-size: 12px;
          }

          .hr-card p {
            font-size: 10.5px;
          }
        }

        /* ── EXTRA SMALL ── */
        @media (max-width: 340px) {
          .minister-row-1,
          .minister-row-2,
          .hr-grid-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="hr-root">

        {/* ── HERO BANNER ── */}
        <div className="hr-hero">
          <div className="hr-hero-inner">
            <div className="hr-hero-badge">{t("hero.badge")}</div>
            <h1>{t("hero.title")}</h1>
            <p className="hr-hero-sub">{t("hero.welcome")}</p>
          </div>
        </div>

        {/* ── FLOATING CARD ── */}
        <div className="hr-outer">
          <div className="hr-container">

            {/* ── MINISTERS SECTION HEADER ── */}
            <div className="hr-section-head" style={{ marginBottom: "20px" }}>
              <h2>{t("hero.ministers") || "Ministers"}</h2>
              <div className="hr-section-line" />
            </div>

            {/* ── First Row — 3 Ministers ── */}
            <div className="minister-row-1">
              {ministers.slice(0, 3).map((m, i) => (
                <div
                  key={i}
                  className="hr-card"
                  onClick={() => setSelected({ ...m, isOfficial: false })}
                >
                  <div className="hr-card-avatar">
                    {m.img && (
                      <img src={m.img} alt={t(m.nameKey)} />
                    )}
                  </div>
                  <h3>{t(m.nameKey)}</h3>
                  <p>{t(m.roleKey)}</p>
                </div>
              ))}
            </div>

            {/* ── Second Row — 4 Ministers ── */}
            <div className="minister-row-2">
              {ministers.slice(3, 7).map((m, i) => (
                <div
                  key={i}
                  className="hr-card"
                  onClick={() => setSelected({ ...m, isOfficial: false })}
                >
                  <div className="hr-card-avatar">
                    {m.img && (
                      <img src={m.img} alt={t(m.nameKey)} />
                    )}
                  </div>
                  <h3>{t(m.nameKey)}</h3>
                  <p>{t(m.roleKey)}</p>
                </div>
              ))}
            </div>

            {/* ── GP OFFICIALS ── */}
            <div className="hr-section-head" style={{ marginTop: "clamp(28px, 4vw, 40px)" }}>
              <h2>{t("hero.gpOfficials")}</h2>
              <div className="hr-section-line" />
            </div>
            <div className="hr-grid-3">
              {gpOfficials.map((o, i) => (
                <div
                  key={i}
                  className="hr-card"
                  onClick={() => setSelected({ ...o, isOfficial: true })}
                >
                  <div className="hr-card-avatar">
                    {o.img && (
                      <img src={o.img} alt={t(o.nameKey)} />
                    )}
                  </div>
                  <h3>{t(o.nameKey)}</h3>
                  <p>{t(o.roleKey)}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {selected && (
        <div className="hr-overlay" onClick={() => setSelected(null)}>
          <div className="hr-modal" onClick={e => e.stopPropagation()}>
            <div className="hr-modal-top">
              <div className="hr-modal-avatar">
                {selected.img && (
                  <img src={selected.img} alt={t(selected.nameKey)} />
                )}
              </div>
              <h3>{t(selected.nameKey)}</h3>
              <p className="hr-modal-role">{t(selected.roleKey)}</p>
            </div>
            <div className="hr-modal-body">
              <p className="hr-modal-desc">{t(selected.descKey)}</p>
              <button className="hr-modal-close" onClick={() => setSelected(null)}>
                {t("modal.close")} ✕
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}