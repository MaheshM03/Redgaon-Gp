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

/* ───────────────── GLOBAL RESET ───────────────── */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

nav,
header,
.navbar {
  margin-bottom: 0 !important;
}

/* ───────────────── ROOT ───────────────── */

.hr-root {
  font-family:
    'Plus Jakarta Sans',
    'Noto Sans Devanagari',
    sans-serif;

  background: #f8fafc;

  min-height: 100vh;

  overflow-x: hidden;
}

/* ───────────────── HERO SECTION ───────────────── */

.hr-hero {
  background:
    linear-gradient(
      rgba(15, 23, 42, 0.72),
      rgba(15, 23, 42, 0.72)
    ),
    url("/grampanchyat%20office.jpeg");

  background-size: cover;

  background-position: center;

  background-repeat: no-repeat;

  color: white;

  text-align: center;

  padding:
    clamp(40px, 6vw, 80px)
    clamp(16px, 5vw, 40px)
    clamp(100px, 10vw, 130px);

  position: relative;

  overflow: hidden;
}

.hr-hero::before {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.10),
      rgba(0,0,0,0.25)
    );

  pointer-events: none;
}

.hr-hero-inner {
  position: relative;

  z-index: 2;

  max-width: 850px;

  margin: auto;
}

.hr-hero-badge {
  display: inline-block;

  background:
    rgba(255,255,255,0.12);

  border:
    1px solid rgba(255,255,255,0.20);

  color: #ffffff;

  padding: 6px 16px;

  border-radius: 999px;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 1px;

  text-transform: uppercase;

  margin-bottom: 18px;

  backdrop-filter: blur(6px);
}

.hr-hero h1 {
  font-size:
    clamp(28px, 5vw, 52px);

  font-weight: 800;

  line-height: 1.2;

  color: #ffffff;

  margin-bottom: 14px;
}

.hr-hero-sub {
  font-size:
    clamp(14px, 2vw, 17px);

  color:
    rgba(255,255,255,0.88);

  line-height: 1.8;

  max-width: 650px;

  margin: auto;
}

/* ───────────────── OUTER WRAPPER ───────────────── */

.hr-outer {
  padding:
    0
    clamp(12px, 4vw, 24px)
    clamp(40px, 6vw, 70px);
}

/* ───────────────── FLOATING CONTAINER ───────────────── */

.hr-container {
  max-width: 1100px;

  margin: -60px auto 0;

  background: #ffffff;

  padding:
    clamp(20px, 4vw, 36px)
    clamp(16px, 4vw, 32px);

  border-radius: 20px;

  border: 1px solid #e2e8f0;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.06);

  position: relative;

  z-index: 5;
}

/* ───────────────── SECTION HEAD ───────────────── */

.hr-section-head {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 20px;
}

.hr-section-head h2 {
  font-size:
    clamp(18px, 3vw, 24px);

  font-weight: 700;

  color: #0f172a;
}

.hr-section-line {
  flex: 1;

  height: 1px;

  background: #e2e8f0;
}

/* ───────────────── GRIDS ───────────────── */

.hr-grid,
.hr-grid-3 {
  display: grid;

  gap: 16px;
}

.hr-grid {
  grid-template-columns:
    repeat(4, 1fr);
}

.hr-grid-3 {
  grid-template-columns:
    repeat(3, 1fr);
}

/* ───────────────── CARDS ───────────────── */

.hr-card {
  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 16px;

  padding: 20px 14px;

  text-align: center;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  min-height: 170px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
}

.hr-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 10px 24px rgba(0,0,0,0.08);
}

.hr-card-img-wrap {
  margin-bottom: 12px;
}

.hr-card img {
  width: 74px;
  height: 74px;

  border-radius: 50%;

  object-fit: cover;

  border: 3px solid #e2e8f0;
}

.hr-card h3 {
  font-size: 14px;

  font-weight: 700;

  color: #0f172a;

  margin-bottom: 6px;

  line-height: 1.5;
}

.hr-card p {
  font-size: 12px;

  color: #64748b;

  line-height: 1.6;
}

/* ───────────────── MODAL ───────────────── */

.hr-overlay {
  position: fixed;

  inset: 0;

  background:
    rgba(0,0,0,0.60);

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 16px;

  z-index: 9999;
}

.hr-modal {
  width: 100%;

  max-width: 360px;

  background: white;

  border-radius: 18px;

  overflow: hidden;
}

.hr-modal-top {
  background:
    linear-gradient(
      135deg,
      #1d4ed8,
      #2563eb
    );

  padding: 26px 22px;

  text-align: center;
}

.hr-modal-top h3 {
  color: white;

  font-size: 18px;

  font-weight: 700;

  margin-bottom: 6px;
}

.hr-modal-role {
  color:
    rgba(255,255,255,0.82);

  font-size: 13px;
}

.hr-modal-body {
  padding: 22px;
}

.hr-modal-desc {
  font-size: 14px;

  color: #475569;

  line-height: 1.8;

  margin-bottom: 18px;
}

.hr-modal-body button {
  width: 100%;

  padding: 12px;

  border: none;

  border-radius: 10px;

  background: #2563eb;

  color: white;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;
}

/* ───────────────── TABLET ───────────────── */

@media (max-width: 768px) {
  .hr-hero {
    padding:
      50px 16px
      95px;
  }

  .hr-container {
    margin-top: -50px;

    padding: 22px 16px;
  }

  .hr-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .hr-grid-3 {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .hr-card {
    min-height: 160px;
  }

  .hr-card img {
    width: 64px;
    height: 64px;
  }
}

/* ───────────────── MOBILE ───────────────── */

@media (max-width: 480px) {
  .hr-hero {
    padding:
      45px 14px
      85px;
  }

  .hr-hero-badge {
    font-size: 10px;

    padding: 5px 12px;
  }

  .hr-hero h1 {
    font-size: 30px;
  }

  .hr-hero-sub {
    font-size: 13px;
  }

  .hr-outer {
    padding:
      0 10px 34px;
  }

  .hr-container {
    margin-top: -42px;

    border-radius: 16px;

    padding: 18px 12px;
  }

  .hr-grid,
  .hr-grid-3 {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 10px;
  }

  .hr-card {
    min-height: 145px;

    padding: 16px 10px;

    border-radius: 14px;
  }

  .hr-card img {
    width: 56px;
    height: 56px;
  }

  .hr-card h3 {
    font-size: 12px;
  }

  .hr-card p {
    font-size: 10px;
  }

  .hr-section-head h2 {
    font-size: 18px;
  }
}
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

@media (max-width: 768px) {
  .minister-row-1,
  .minister-row-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .minister-row-1,
  .minister-row-2 {
    grid-template-columns: 1fr;
  }
}

/* ───────────────── EXTRA SMALL ───────────────── */

@media (max-width: 340px) {
  .hr-grid,
  .hr-grid-3 {
    grid-template-columns: 1fr;
  }
}  `}</style>

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

            {/* Ministers */}
            {/* First Row - 3 Ministers */}
<div className="minister-row-1">
  {ministers.slice(0, 3).map((m, i) => (
    <div
      key={i}
      className="hr-card"
      onClick={() => setSelected({ ...m, isOfficial: false })}
    >
      <div className="hr-card-img-wrap">
        <div className="hr-card-ring" />
        {m.img ? (
          <img
            src={m.img}
            alt={t(m.nameKey)}
            className="hr-card-img"
          />
        ) : null}
      </div>

      <h3>{t(m.nameKey)}</h3>
      <p>{t(m.roleKey)}</p>
    </div>
  ))}
</div>

{/* Second Row - 4 Ministers */}
<div className="minister-row-2">
  {ministers.slice(3, 7).map((m, i) => (
    <div
      key={i}
      className="hr-card"
      onClick={() => setSelected({ ...m, isOfficial: false })}
    >
      <div className="hr-card-img-wrap">
        <div className="hr-card-ring" />
        {m.img ? (
          <img
            src={m.img}
            alt={t(m.nameKey)}
            className="hr-card-img"
          />
        ) : null}
      </div>

      <h3>{t(m.nameKey)}</h3>
      <p>{t(m.roleKey)}</p>
    </div>
  ))}
</div>

            {/* GP Officials */}
            <div className="hr-section-head" style={{ marginTop: "clamp(24px, 4vw, 36px)" }}>
              <h2> {t("hero.gpOfficials")}</h2>
              <div className="hr-section-line" />
            </div>
            <div className="hr-grid-3">
              {gpOfficials.map((o, i) => (
                  <div key={i} className="hr-card"
                  onClick={() => setSelected({ ...o, isOfficial: true })}>
                  <div className="hr-card-img-wrap">
                    <div className="hr-card-ring" />
{o.img ? <img src={o.img} alt={t(o.nameKey)} className="hr-card-img" /> : null}
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
              <h3>{t(selected.nameKey)}</h3>
              <p className="hr-modal-role">{t(selected.roleKey)}</p>
            </div>
            <div className="hr-modal-body">
              <p className="hr-modal-desc">{t(selected.descKey)}</p>
              <button onClick={() => setSelected(null)}>
                {t("modal.close")} ✕
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}