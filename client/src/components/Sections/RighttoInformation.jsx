import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useTranslator } from "../../context/LanguageContext.js";
import { motion } from "framer-motion";

const tableRowsData = [
  ["1", "जन्म दाखले", "2023-24", "45", "42", "3", "-"],
  ["2", "मृत्यू दाखले", "2023-24", "28", "28", "0", "-"],
  ["3", "रहिवास दाखले", "2023-24", "112", "109", "3", "-"],
  ["4", "विवाह दाखले", "2023-24", "18", "18", "0", "-"],
  ["5", "संपत्ती कर", "2023-24", "234", "220", "14", "-"],
];

const statusColors = {
  "0": { bg: "#d1fae5", color: "#065f46" },
  "3": { bg: "#fef3c7", color: "#92400e" },
  "14": { bg: "#fee2e2", color: "#991b1b" },
  "-": { bg: "#f1f5f9", color: "#64748b" },
};

export default function RighttoInformation() {
  const { t } = useTranslator();
  const [search, setSearch] = useState("");

  const headers = [
    t('rti.table.colSr'),
    t('rti.table.colDoc'),
    t('rti.table.colPeriod'),
    t('rti.table.colReceived'),
    t('rti.table.colApproved'),
    t('rti.table.colRejected'),
    t('rti.table.colReason'),
  ];

  const filtered = tableRowsData.filter(row =>
    row.some(cell => cell.toLowerCase().includes(search.toLowerCase()))
  );

  const downloadCSV = () => {
    const csv = [headers, ...tableRowsData].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "rti-data.csv"; a.click();
  };

  const summaryStats = [
    { label: t("rti.stats.totalReceived"), value: tableRowsData.reduce((a, r) => a + parseInt(r[3] || 0), 0), color: "#dbeafe", accent: "#2563eb" },
    { label: t("rti.stats.totalApproved"), value: tableRowsData.reduce((a, r) => a + parseInt(r[4] || 0), 0), color: "#d1fae5", accent: "#059669" },
    { label: t("rti.stats.totalRejected"), value: tableRowsData.reduce((a, r) => a + (isNaN(parseInt(r[5])) ? 0 : parseInt(r[5])), 0), color: "#fef3c7", accent: "#d97706" },
  ];

  return (
    <section style={{ background: "#f0f4f8", minHeight: "100vh", fontFamily: "'Sora','Noto Sans Devanagari',sans-serif" }}>
      <Navbar />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

section {
  background: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
}

/* Hero */
.rti-hero {
  background:
    linear-gradient(
      180deg,
      #eff6ff 0%,
      #f8fafc 100%
    );

  padding: 90px 20px 65px;

  text-align: center;

  position: relative;

  overflow: hidden;
}

.rti-hero::before {
  content: "";

  position: absolute;

  top: -80px;
  right: -80px;

  width: 240px;
  height: 240px;

  background:
    rgba(59,130,246,0.08);

  border-radius: 50%;
}

.rti-hero::after {
  content: "";

  position: absolute;

  bottom: -100px;
  left: -100px;

  width: 280px;
  height: 280px;

  background:
    rgba(37,99,235,0.05);

  border-radius: 50%;
}

.rti-hero-text {
  max-width: 720px;

  margin: 0 auto;

  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;
}

.rti-hero-badge {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  background: #dbeafe;

  border: 1px solid #bfdbfe;

  color: #2563eb;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;

  padding: 6px 16px;

  border-radius: 999px;

  margin-bottom: 18px;
}

.rti-hero-title {
  color: #0f172a;

  font-size:
    clamp(26px,5vw,42px);

  font-weight: 800;

  line-height: 1.25;

  letter-spacing: -0.02em;

  margin-bottom: 14px;
}

.rti-hero-subtitle {
  color: #475569;

  font-size:
    clamp(13px,2vw,15px);

  max-width: 560px;

  line-height: 1.8;

  text-align: center;
}

/* Main */
.rti-main {
  max-width: 950px;

  margin: auto;

  padding: 30px 16px 50px;
}

/* Stats */
.rti-stats {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 12px;

  margin-bottom: 18px;
}

.rti-stat-card {
  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 12px;

  padding: 18px;

  text-align: center;
}

.rti-stat-val {
  font-size: 28px;

  font-weight: 700;
}

.rti-stat-label {
  font-size: 12px;

  color: #64748b;

  margin-top: 5px;
}

/* Card */
.rti-card {
  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 12px;

  padding: 18px;
}

/* Search */
.rti-search-wrap {
  margin-bottom: 16px;
}

.rti-search {
  width: 100%;

  padding: 12px 14px;

  border: 1px solid #dbe2ea;

  border-radius: 10px;

  font-size: 14px;

  outline: none;

  background: #ffffff;
}

.rti-search:focus {
  border-color: #2563eb;
}

/* Table */
.rti-table-wrap {
  overflow-x: auto;
}

.rti-desktop-table {
  width: 100%;

  min-width: 650px;

  border-collapse: collapse;
}

.rti-desktop-table th {
  background: #f8fafc;

  color: #334155;

  padding: 12px;

  font-size: 12px;

  font-weight: 600;

  text-align: left;

  border-bottom: 1px solid #e2e8f0;
}

.rti-desktop-table td {
  padding: 12px;

  font-size: 13px;

  color: #475569;

  border-bottom: 1px solid #f1f5f9;
}

/* Mobile Cards */
.rti-mob-cards {
  display: none;
}

.rti-mob-card {
  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 10px;

  padding: 14px;

  margin-bottom: 10px;
}

.rti-mob-row {
  display: flex;

  justify-content: space-between;

  padding: 8px 0;

  border-bottom: 1px solid #f1f5f9;

  font-size: 13px;
}

.rti-mob-row:last-child {
  border-bottom: none;
}

/* Buttons */
.rti-toolbar {
  display: flex;

  gap: 10px;

  margin-top: 16px;

  flex-wrap: wrap;
}

.rti-tool-btn {
  padding: 10px 14px;

  border: 1px solid #dbe2ea;

  border-radius: 8px;

  background: #ffffff;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;
}

.rti-tool-btn:hover {
  border-color: #2563eb;

  color: #2563eb;
}

/* Tablet */
@media (max-width: 768px) {
  .rti-hero {
    padding: 65px 16px 45px;
  }

  .rti-hero-text {
    max-width: 100%;
  }

  .rti-main {
    padding: 22px 14px 40px;
  }

  .rti-stats {
    grid-template-columns: 1fr;
  }

  .rti-card {
    padding: 16px;
  }

  .rti-desktop-table {
    display: none;
  }

  .rti-mob-cards {
    display: block;
  }

  .rti-toolbar {
    flex-direction: column;
  }

  .rti-tool-btn {
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .rti-hero {
    padding: 55px 14px 40px;
  }

  .rti-hero-title {
    font-size: 30px;
  }

  .rti-hero-subtitle {
    font-size: 14px;
  }

  .rti-card {
    padding: 14px;
  }

  .rti-stat-card {
    padding: 16px;
  }

  .rti-stat-val {
    font-size: 24px;
  }
}`}</style>

      {/* HERO */}
      <div className="rti-hero">
        <div className="rti-hero-text">
          <div style={{
            display: "inline-block",
            background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.4)",
            color: "#fbbf24", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 999, marginBottom: 16,
          }}>माहितीचा अधिकार</div>
          <h2 style={{ color: "#0a0a0a", fontSize: "clamp(20px,5vw,36px)", fontWeight: 800, lineHeight: 1.2 }}>
            {t('rti.title')}<br />{t('rti.subtitle')}
          </h2>
          <p style={{ color: "#a5b4fc", fontSize: "clamp(12px,2vw,14px)", marginTop: 10, maxWidth: 420, lineHeight: 1.7 }}>
            {t('rti.heroText')}
          </p>
        </div>
        <div className="rti-hero-emoji">📋</div>
      </div>

      {/* MAIN */}
      <div className="rti-main">
        {/* Summary Stats */}
        <div className="rti-stats">
          {summaryStats.map((s, i) => (
            <motion.div key={i} className="rti-stat-card" style={{ background: s.color }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="rti-stat-val" style={{ color: s.accent }}>{s.value}</div>
              <div className="rti-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Table Card */}
        <motion.div className="rti-card"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1e293b", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "inline-block", boxShadow: "0 0 0 3px rgba(29,78,216,0.15)" }} />
              {t('rti.documents.title')}
            </div>
            <div style={{ fontSize: 12, color: "#10b981", fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              {filtered.length} records
            </div>
          </div>

          <div className="rti-search-wrap">
            <span className="rti-search-icon">🔍</span>
            <input className="rti-search" placeholder={t('rti.search.placeholder')}
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          {/* Desktop Table */}
          <div className="rti-table-wrap">
            <table className="rti-desktop-table">
              <thead>
                <tr>
                  {headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={7} style={{ padding: 40, textAlign: "center", color: "#94a3b8" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{t('rti.noResults')}</div>
                  </td></tr>
                ) : filtered.map((row, i) => (
                  <tr key={i}
                    style={{ background: i % 2 === 0 ? "#fff" : "#f8fafc", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? "#fff" : "#f8fafc"}
                  >
                    {row.map((cell, j) => {
                      const sc = statusColors[cell] || statusColors["-"];
                      return (
                        <td key={j}>
                          {j === 5 ? (
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 28, height: 24, borderRadius: 6, background: sc.bg, color: sc.color, fontSize: 12, fontWeight: 700, padding: "0 8px" }}>
                              {cell}
                            </span>
                          ) : j === 0 ? (
                            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 8, background: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 700 }}>{cell}</span>
                          ) : (
                            <span style={{ color: j === 1 ? "#1e293b" : "#475569", fontWeight: j === 1 ? 600 : 400 }}>{cell}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="rti-mob-cards">
            {filtered.length === 0 ? (
              <div style={{ padding: 32, textAlign: "center", color: "#94a3b8" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t('rti.noResults')}</div>
              </div>
            ) : filtered.map((row, i) => (
              <div className="rti-mob-card" key={`mob-${i}`}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 8, background: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 700 }}>{row[0]}</span>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{row[1]}</span>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b" }}>{row[2]}</span>
                </div>
                <div className="rti-mob-row"><span style={{ color: "#64748b" }}>प्राप्त</span><span style={{ fontWeight: 700, color: "#1e293b" }}>{row[3]}</span></div>
                <div className="rti-mob-row"><span style={{ color: "#64748b" }}>मंजूर</span><span style={{ fontWeight: 700, color: "#059669" }}>{row[4]}</span></div>
                <div className="rti-mob-row">
                  <span style={{ color: "#64748b" }}>नाकारले</span>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 28, height: 22, borderRadius: 6, background: statusColors[row[5]]?.bg || "#f1f5f9", color: statusColors[row[5]]?.color || "#64748b", fontSize: 12, fontWeight: 700, padding: "0 8px" }}>{row[5]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="rti-toolbar">
            <button className="rti-tool-btn" onClick={downloadCSV}>{t('rti.downloadCSV')}</button>
            <button className="rti-tool-btn" onClick={() => window.print()}>{t('rti.print')}</button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
}