import { useTranslator } from "../../context/LanguageContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AboutUs() {
  const { t } = useTranslator();

  const stats = {
    total: "1371",
    male: "723",
    female: "648",
    families: "335",
  };

  const vikaasKame = [
    {
      sr: "1",
      name: t("about.vikas.work.road"),
      year: "2024",
      nidhi: "₹5,00,000",
      status: t(
        "about.vikas.status.completed"
      ),
    },

    {
      sr: "2",
      name: t("about.vikas.work.water"),
      year: "2023",
      nidhi: "₹3,50,000",
      status: t(
        "about.vikas.status.progress"
      ),
    },

    {
      sr: "3",
      name: t(
        "about.vikas.work.anganwadi"
      ),
      year: "2022",
      nidhi: "₹1,50,000",
      status: t(
        "about.vikas.status.completed"
      ),
    },
  ];

  const adarshGhatak = [
    {
      idealText: t(
        "about.adarsh.cleanliness"
      ),

      detailsText: t(
        "about.adarsh.cleanliness.desc"
      ),
    },

    {
      idealText: t(
        "about.adarsh.water"
      ),

      detailsText: t(
        "about.adarsh.water.desc"
      ),
    },

    {
      idealText: t(
        "about.adarsh.education"
      ),

      detailsText: t(
        "about.adarsh.education.desc"
      ),
    },

    {
      idealText: t(
        "about.adarsh.health"
      ),

      detailsText: t(
        "about.adarsh.health.desc"
      ),
    },

    {
      idealText: t(
        "about.adarsh.environment"
      ),

      detailsText: t(
        "about.adarsh.environment.desc"
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.au-root {
  background: #f8fafc;
  min-height: 100vh;

  font-family:
    'DM Sans',
    'Noto Sans Devanagari',
    sans-serif;

  color: #1e293b;
}

/* Hero */
.au-hero {
  background: #ffffff;

  text-align: center;

  padding: 60px 20px 40px;

  border-bottom: 1px solid #e2e8f0;
}

.au-hero-badge {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  background: #eff6ff;

  color: #2563eb;

  padding: 6px 14px;

  border-radius: 999px;

  font-size: 12px;

  font-weight: 600;

  margin-bottom: 16px;
}

.au-hero-title {
  font-size:
    clamp(28px, 5vw, 42px);

  font-weight: 700;

  color: #0f172a;

  line-height: 1.2;
}

.au-hero-sub {
  margin-top: 10px;

  font-size: 15px;

  color: #64748b;
}

/* Container */
.au-container {
  max-width: 1100px;

  margin: auto;

  padding: 40px 16px 60px;
}

/* Sections */
.au-section {
  margin-bottom: 28px;
}

.au-section-head {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 14px;
}

.au-section-icon {
  width: 38px;
  height: 38px;

  border-radius: 10px;

  background: #2563eb;

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;
}

.au-section-title {
  font-size: 20px;

  font-weight: 700;

  color: #0f172a;
}

.au-section-line {
  flex: 1;

  height: 1px;

  background: #e2e8f0;
}

/* Card */
.au-card {
  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 14px;

  padding: 22px;
}

/* Population */
.au-pop-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 14px;
}

.au-pop-box {
  background: #f8fafc;

  border: 1px solid #e2e8f0;

  border-radius: 12px;

  padding: 18px;

  text-align: center;
}

.au-pop-label {
  font-size: 13px;

  color: #64748b;

  margin-bottom: 8px;

  font-weight: 500;
}

.au-pop-val {
  font-size:
    clamp(24px, 4vw, 32px);

  font-weight: 700;

  color: #2563eb;
}

/* Text */
.au-info-text {
  font-size: 14px;

  line-height: 1.9;

  color: #475569;
}

.au-info-text p {
  margin-bottom: 14px;
}

/* Table */
.au-table-wrap {
  overflow-x: auto;
}

.au-table {
  width: 100%;

  border-collapse: collapse;

  min-width: 650px;
}

.au-table th {
  background: #f1f5f9;

  color: #334155;

  padding: 12px;

  border: 1px solid #e2e8f0;

  font-size: 13px;

  text-align: left;
}

.au-table td {
  padding: 12px;

  border: 1px solid #e2e8f0;

  font-size: 13px;

  color: #475569;
}

.au-table tr:nth-child(even) {
  background: #f8fafc;
}

/* Status */
.au-badge-purna,
.au-badge-pragati {
  padding: 5px 10px;

  border-radius: 999px;

  font-size: 11px;

  font-weight: 600;
}

.au-badge-purna {
  background: #dcfce7;

  color: #166534;
}

.au-badge-pragati {
  background: #fef3c7;

  color: #92400e;
}

/* Adarsh */
.au-adarsh-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 14px;
}

.au-adarsh-card {
  background: white;

  border: 1px solid #e2e8f0;

  border-radius: 12px;

  padding: 18px;
}

.au-adarsh-title {
  font-size: 16px;

  font-weight: 700;

  color: #2563eb;

  margin-bottom: 8px;
}

.au-adarsh-desc {
  font-size: 14px;

  color: #475569;

  line-height: 1.7;
}

/* Tablet */
@media (max-width: 900px) {
  .au-pop-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .au-adarsh-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .au-hero {
    padding: 50px 16px 32px;
  }

  .au-hero-title {
    font-size: 28px;
  }

  .au-container {
    padding: 28px 14px 40px;
  }

  .au-pop-grid {
    grid-template-columns: 1fr;
  }

  .au-card {
    padding: 18px;
  }

  .au-section-title {
    font-size: 18px;
  }

  .au-info-text {
    font-size: 13px;
  }

  .au-table th,
  .au-table td {
    font-size: 12px;
    padding: 10px;
  }

  .au-adarsh-card {
    padding: 16px;
  }
}`}</style>

      <div className="au-root">
        <div className="au-hero">
          <div className="au-hero-badge">
            📍
            {t("about.hero.badge")}
          </div>

          <div className="au-hero-title">
            {t("about.hero.title")}
          </div>

          <div className="au-hero-sub">
            {t("about.hero.sub")}
          </div>
        </div>

        <div className="au-container">
          {/* Population */}
          <div className="au-section">
            <div className="au-section-head">
              <div className="au-section-icon">
                👥
              </div>

              <div className="au-section-title">
                {t("about.population.title")}
              </div>

              <div className="au-section-line" />
            </div>

            <div className="au-card">
              <div className="au-pop-grid">
                <div className="au-pop-box highlight">
                  <div className="au-pop-label">
                    {t("about.population.total")}
                  </div>

                  <div className="au-pop-val">
                    {stats.total}
                  </div>
                </div>

                <div className="au-pop-box">
                  <div className="au-pop-label">
                    {t("about.population.male")}
                  </div>

                  <div className="au-pop-val">
                    {stats.male}
                  </div>
                </div>

                <div className="au-pop-box">
                  <div className="au-pop-label">
                    {t("about.population.female")}
                  </div>

                  <div className="au-pop-val">
                    {stats.female}
                  </div>
                </div>

                <div className="au-pop-box">
                  <div className="au-pop-label">
                    {t("about.population.families")}
                  </div>

                  <div className="au-pop-val">
                    {stats.families}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Village Intro */}
          <div className="au-section">
            <div className="au-section-head">
              <div className="au-section-icon">
                ❤️
              </div>

              <div className="au-section-title">
                {t("about.village.title")}
              </div>

              <div className="au-section-line" />
            </div>

            <div className="au-card">
              <div className="au-info-text">
                <p>
                  <strong>
                    {t("about.village.introduction.title")}
                  </strong>
                </p>

                <p>
                  {t("about.village.introduction.desc1")}
                </p>

                <p>
                  {t("about.village.introduction.desc2")}
                </p>

                <p>
                  {t("about.village.introduction.desc3")}
                </p>

                <p>
                  {t("about.village.introduction.desc4")}
                </p>

                <p>
                  {t("about.village.introduction.desc5")}
                </p>

                <p>
                  {t("about.village.introduction.desc6")}
                </p>

                <p>
                  <strong>
                    {t("about.village.saint.title")}
                  </strong>
                </p>

                <p>
                  {t("about.village.saint.desc1")}
                </p>

                <p>
                  {t("about.village.saint.desc2")}
                </p>

                <p>
                  {t("about.village.saint.desc3")}
                </p>

                <p>
                  {t("about.village.saint.desc4")}
                </p>

                <p>
                  {t("about.village.saint.desc5")}
                </p>

                <p>
                  <strong>
                    {t("about.village.culture.title")}
                  </strong>
                </p>

                <p>
                  {t("about.village.culture.desc1")}
                </p>

                <p>
                  {t("about.village.culture.desc2")}
                </p>

                <p>
                  {t("about.village.culture.desc3")}
                </p>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="au-section">
            <div className="au-section-head">
              <div className="au-section-icon">
                📈
              </div>

              <div className="au-section-title">
                {t("about.vikas.title")}
              </div>

              <div className="au-section-line" />
            </div>

            <div className="au-card">
              <div className="au-table-wrap">
                <table className="au-table">
                  <thead>
                    <tr>
                      <th>
                        {t("about.vikas.table.sr")}
                      </th>

                      <th>
                        {t("about.vikas.table.work")}
                      </th>

                      <th>
                        {t("about.vikas.table.year")}
                      </th>

                      <th>
                        {t("about.vikas.table.amount")}
                      </th>

                      <th>
                        {t("about.vikas.table.status")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {vikaasKame.map((row) => (
                      <tr key={row.sr}>
                        <td>{row.sr}</td>

                        <td>{row.name}</td>

                        <td>{row.year}</td>

                        <td>{row.nidhi}</td>

                        <td>
                          <span
                            className={
                              row.status ===
                              t(
                                "about.vikas.status.completed"
                              )
                                ? "au-badge-purna"
                                : "au-badge-pragati"
                            }
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Adarsh */}
          <div className="au-section">
            <div className="au-section-head">
              <div className="au-section-icon">
                🎯
              </div>

              <div className="au-section-title">
                {t("about.adarsh.title")}
              </div>

              <div className="au-section-line" />
            </div>

            <div className="au-adarsh-grid">
              {adarshGhatak.map(
                (item, index) => (
                  <div
                    key={index}
                    className="au-adarsh-card"
                  >
                    <div className="au-adarsh-title">
                      {item.idealText}
                    </div>

                    <div className="au-adarsh-desc">
                      {item.detailsText}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}