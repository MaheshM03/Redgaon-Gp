import Navbar from "./Navbar";
import { useTranslator } from "../../context/LanguageContext.js";
import Footer from "./Footer.jsx";

const waterCupTable = [
  { k: 'Nursery', v: '2682–2700' },
  { k: 'Soil testing', v: '203–203' },
  { k: 'Drainage pits', v: '123–135' },
  { k: 'Labour', v: '8046 gh.m. (achieved 2000 gh.m.)' },
  { k: 'Work done by machine', v: '95700 gh.m. (achieved 238025 gh.m.)' },
  { k: 'Area treatment', v: '51874 gh.m. (achieved 199650 gh.m.)' },
  { k: 'Water saving technology', v: '14 hectares → 100 hectares' },
  { k: 'Protection of structures', v: '4 → 4' },
  { k: 'Well refilling', v: '7 → 7' },
];


const activitiesData = [
  { id: 1, tagKey: 'activity.1.tag', titleKey: 'activity.1.title', descKey: 'activity.1.desc' },
  { id: 2, tagKey: 'activity.2.tag', titleKey: 'activity.2.title', descKey: 'activity.2.desc' },
  { id: 3, tagKey: 'activity.3.tag', titleKey: 'activity.3.title', descKey: 'activity.3.desc' },
  { id: 4, tagKey: 'activity.4.tag', titleKey: 'activity.4.title', descKey: 'activity.4.desc' },
  { id: 5, tagKey: 'activity.5.tag', titleKey: 'activity.5.title', descKey: 'activity.5.desc' },
  { id: 6, tagKey: 'activity.6.tag', titleKey: 'activity.6.title', descKey: 'activity.6.desc' },
  { id: 7, tagKey: 'activity.7.tag', titleKey: 'activity.7.title', descKey: 'activity.7.desc' },
];

export default function Activity() {
  const { t } = useTranslator();
  return (
    <>
      <Navbar />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

*,
*::before,
*::after{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body{
  overflow-x:hidden;
}

.act-root{
  font-family:
    'Inter',
    'Noto Sans Devanagari',
    sans-serif;

  background:#f8fafc;

  color:#1e293b;

  min-height:100vh;
}

/* HERO */

.act-hero{
  background:
    linear-gradient(
      180deg,
      #eff6ff 0%,
      #f8fafc 100%
    );

  padding:85px 20px 60px;

  position:relative;

  overflow:hidden;

  text-align:center;
}

.act-hero::before{
  content:"";

  position:absolute;

  width:260px;
  height:260px;

  background:
    rgba(59,130,246,0.08);

  border-radius:50%;

  top:-120px;
  right:-100px;
}

.act-hero::after{
  content:"";

  position:absolute;

  width:240px;
  height:240px;

  background:
    rgba(37,99,235,0.05);

  border-radius:50%;

  bottom:-100px;
  left:-80px;
}

.act-hero-badge{
  display:inline-flex;

  align-items:center;

  justify-content:center;

  background:#dbeafe;

  border:1px solid #bfdbfe;

  color:#2563eb;

  font-size:11px;

  font-weight:700;

  letter-spacing:0.08em;

  text-transform:uppercase;

  padding:6px 16px;

  border-radius:999px;

  margin-bottom:18px;

  position:relative;

  z-index:2;
}

.act-hero-title{
  font-size:
    clamp(30px,5vw,44px);

  font-weight:800;

  color:#0f172a;

  line-height:1.2;

  position:relative;

  z-index:2;
}

.act-hero-sub{
  margin-top:12px;

  font-size:15px;

  color:#475569;

  line-height:1.9;

  max-width:620px;

  margin-inline:auto;

  position:relative;

  z-index:2;
}

/* CONTAINER */

.act-container{
  max-width:1000px;

  margin:0 auto;

  padding:34px 16px 60px;
}

/* BLOCK */

.act-block{
  background:#ffffff;

  border:1px solid #e2e8f0;

  border-radius:20px;

  padding:26px;

  margin-bottom:22px;

  box-shadow:
    0 4px 20px rgba(15,23,42,0.04);

  transition:0.2s ease;
}

.act-block:hover{
  transform:translateY(-3px);

  box-shadow:
    0 10px 24px rgba(0,0,0,0.06);
}

/* TAG */

.act-tag{
  display:inline-flex;

  align-items:center;

  justify-content:center;

  font-size:11px;

  font-weight:700;

  color:#2563eb;

  background:#eff6ff;

  border:1px solid #bfdbfe;

  padding:5px 12px;

  border-radius:999px;

  margin-bottom:14px;

  text-transform:uppercase;

  letter-spacing:0.05em;
}

/* ACCENT */

.act-accent-bar{
  width:46px;

  height:4px;

  background:#2563eb;

  border-radius:999px;

  margin-bottom:16px;
}

/* TITLE */

.act-title{
  font-size:
    clamp(20px,3vw,28px);

  font-weight:700;

  color:#0f172a;

  line-height:1.5;

  margin-bottom:16px;
}

/* DESC */

.act-desc{
  font-size:14px;

  line-height:1.9;

  color:#475569;
}

/* TABLE */

table{
  width:100%;

  border-collapse:collapse;

  margin-top:16px;

  background:#ffffff;

  min-width:600px;
}

th{
  text-align:left;

  padding:12px 10px;

  background:#f8fafc;

  color:#334155;

  font-size:13px;

  font-weight:700;

  border-bottom:1px solid #e2e8f0;
}

td{
  padding:11px 10px;

  border-bottom:1px solid #f1f5f9;

  font-size:13px;

  color:#475569;

  line-height:1.7;
}

tr:hover{
  background:#f8fafc;
}

/* TABLE WRAP */

.act-table-wrap{
  overflow-x:auto;

  border-radius:14px;

  border:1px solid #e2e8f0;

  margin-top:16px;
}

/* SPECIAL TITLE */

.act-special-title{
  font-size:16px;

  font-weight:700;

  color:#0f172a;

  margin-bottom:12px;

  line-height:1.7;
}

/* TABLET */

@media(max-width:768px){

  .act-hero{
    padding:70px 16px 50px;
  }

  .act-hero-title{
    font-size:34px;
  }

  .act-hero-sub{
    font-size:14px;

    max-width:100%;
  }

  .act-container{
    padding:28px 14px 45px;
  }

  .act-block{
    padding:20px;

    border-radius:16px;
  }

  .act-title{
    font-size:22px;
  }

  .act-desc{
    font-size:13px;

    line-height:1.8;
  }

  th,
  td{
    font-size:12px;

    padding:9px 8px;
  }
}

/* MOBILE */

@media(max-width:480px){

  .act-hero{
    padding:60px 14px 42px;
  }

  .act-hero-title{
    font-size:28px;

    line-height:1.3;
  }

  .act-hero-sub{
    font-size:13px;

    line-height:1.8;
  }

  .act-container{
    padding:22px 12px 38px;
  }

  .act-block{
    padding:18px;

    border-radius:14px;
  }

  .act-tag{
    font-size:10px;
  }

  .act-title{
    font-size:18px;

    line-height:1.6;
  }

  .act-desc{
    font-size:13px;
  }

  .act-special-title{
    font-size:14px;

    line-height:1.7;
  }

  table{
    min-width:520px;
  }

  th,
  td{
    font-size:11px;

    padding:8px 7px;
  }
}`}</style>

      <div className="act-root">
        <div className="act-hero">
          <div className="act-hero-badge">{t('activity.hero.badge')}</div>
          <div className="act-hero-title">{t('activity.hero.title')}</div>
          <div className="act-hero-sub">{t('activity.hero.sub')}</div>
        </div>

        <div className="act-container">
          {activitiesData.map((act, index) => (
            <div key={act.id} className={`act-block${index % 2 !== 0 ? " rev" : ""}`}>
              <div className="act-content">
                <div className="act-tag">{t(act.tagKey)}</div>
                <div className="act-accent-bar" />
                <div className="act-title">{t(act.titleKey)}</div>

                {/* Water Foundation / Water Cup 2017 intro + Water Cup 2018 work table (only for Activity #1) */}
                {act.id === 1 ? (
                  <>
                    <div style={{ marginTop: 14 }}>
                      <div style={{ fontWeight: 800, color: '#0f2057', marginBottom: 8 }}>
                        पाणी फाउंडेशन / वॉटर कप 2017 (श्रमदान) — 40 रात्री-40 दिवस
                      </div>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                          <thead>
                            <tr>
                              <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid #e2e8f0', color: '#334155' }}>कामाचे नाव</th>
                              <th style={{ textAlign: 'left', padding: '10px 8px', borderBottom: '1px solid #e2e8f0', color: '#334155' }}>मापन / उपलब्धि</th>
                            </tr>
                          </thead>
                          <tbody>
                            {waterCupTable.map((row, idx) => (
                              <tr key={idx}>
                                <td style={{ padding: '8px 8px', borderBottom: '1px solid #f1f5f9', color: '#475569', fontWeight: 600 }}>{row.k}</td>
                                <td style={{ padding: '8px 8px', borderBottom: '1px solid #f1f5f9', color: '#475569' }}>{row.v}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="act-desc">{t(act.descKey)}</div>
                )}
              </div>
              {/* Images removed as per request */}
              <div className="act-media" />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}