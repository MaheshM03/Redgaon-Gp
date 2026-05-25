import React, { useState, useEffect } from "react";

import { useNews } from "../context/NewsContext";
import { useGrievances } from "../context/GrievanceContext";
import { useCertificates } from "../context/CertificateContext";

export default function AdminPanel() {
  /* ================= STATES ================= */

  const [tab, setTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [uploaded, setUploaded] = useState([]);

  /* ================= CONTEXT ================= */

  const {
    news = [],
    fetchNews,
  } = useNews();

  const {
    grievances = [],
    fetchGrievances,
  } = useGrievances();

  const {
    certs = {
      birth: [],
      death: [],
      residence: [],
    },
    fetchAllCertificates,
  } = useCertificates();

  /* ================= API ================= */

  const API_BASE = (() => {
    const envBase = process.env.REACT_APP_API_URL;
    if (envBase) return envBase;

    // Local development
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      return "http://localhost:5000";
    }

    // Production default (frontend origin != backend origin)
    return "https://redgaon-backend.onrender.com";
  })();

  /* ================= FETCH DATA ================= */

  useEffect(() => {

  let mounted = true;

  const loadData = async () => {

    if (!mounted) return;

    await Promise.all([
      fetchNews(),
      fetchGrievances(),
      fetchAllCertificates(),
      fetchDeclarations()
    ]);
  };

  loadData();

  return () => {
    mounted = false;
  };

}, []);

  /* ================= FETCH DECLARATIONS ================= */

  const fetchDeclarations = async () => {
    try {
      const res = await fetch(
        `${API_BASE}/api/declarations`
      );

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();

      setUploaded(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= UPLOAD ================= */

  const onUpload = async () => {
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!file) {
      setError("PDF file is required");
      return;
    }

    const token = localStorage.getItem("adminToken");

    if (!token) {
      setError("Please login again");
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();

      fd.append("title", title);
      fd.append("pdf", file);

      const res = await fetch(
        `${API_BASE}/api/declarations`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: fd,
        }
      );

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      await fetchDeclarations();

      setTitle("");
      setFile(null);
    } catch (err) {
      console.error(err);

      setError("Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= TOTAL ================= */

  const totalCertificates =
    Object.values(certs).reduce(
      (a, b) => a + b.length,
      0
    );

  /* ================= MOBILE ================= */

  const isMobile = window.innerWidth <= 768;

  /* ================= STYLES ================= */

  const styles = {
    admin: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      minHeight: "100vh",
      background: darkMode ? "#0f172a" : "#f1f5f9",
      fontFamily: "Segoe UI, sans-serif",
    },

    sidebar: {
      width: isMobile ? "100%" : "270px",
      background: "#0f172a",
      color: "white",
      padding: "24px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },

    sidebarTitle: {
      fontSize: "24px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "10px",
    },

    menuButton: (active) => ({
      border: "none",
      outline: "none",
      padding: "14px 16px",
      borderRadius: "12px",
      background: active
        ? "#2563eb"
        : "transparent",
      color: "white",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      transition: "0.3s",
    }),

    sidebarBottom: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    actionBtn: {
      border: "none",
      padding: "14px",
      borderRadius: "12px",
      background: "#334155",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },

    logoutBtn: {
      border: "none",
      padding: "14px",
      borderRadius: "12px",
      background: "#dc2626",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },

    content: {
      flex: 1,
      padding: isMobile ? "16px" : "30px",
    },

    dashboardGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(250px,1fr))",
      gap: "24px",
    },

    statCard: (bg) => ({
      padding: "28px",
      borderRadius: "20px",
      color: "white",
      background: bg,
      boxShadow:
        "0 4px 18px rgba(0,0,0,0.1)",
    }),

    card: {
      background: darkMode ? "#1e293b" : "white",
      borderRadius: "20px",
      padding: "24px",
      boxShadow:
        "0 4px 18px rgba(0,0,0,0.06)",
      color: darkMode ? "white" : "#111827",
    },

    form: {
      background: darkMode
        ? "#334155"
        : "#f8fafc",
      padding: "22px",
      borderRadius: "16px",
      border: "1px solid #e2e8f0",
      marginTop: "20px",
    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",
      gap: "16px",
    },

    input: {
      width: "100%",
      padding: "14px",
      borderRadius: "12px",
      border: "1px solid #cbd5e1",
      outline: "none",
      fontSize: "14px",
    },

    buttonRow: {
      display: "flex",
      flexDirection: isMobile
        ? "column"
        : "row",
      gap: "14px",
      marginTop: "22px",
    },

    clearBtn: {
      border: "none",
      padding: "13px 20px",
      borderRadius: "12px",
      background: "#e2e8f0",
      cursor: "pointer",
      fontWeight: "600",
    },

    uploadBtn: {
      border: "none",
      padding: "13px 20px",
      borderRadius: "12px",
      background: "#2563eb",
      color: "white",
      cursor: "pointer",
      fontWeight: "600",
    },

    error: {
      background: "#fee2e2",
      color: "#dc2626",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "16px",
    },

    tableWrapper: {
      overflowX: "auto",
      marginTop: "20px",
    },

    table: {
      width: "100%",
      minWidth: "600px",
      borderCollapse: "collapse",
    },

    th: {
      background: "#2563eb",
      color: "white",
      padding: "14px",
      textAlign: "left",
    },

    td: {
      padding: "14px",
      borderBottom: "1px solid #e5e7eb",
    },

    pdfBtn: {
      textDecoration: "none",
      background: "#2563eb",
      color: "white",
      padding: "8px 14px",
      borderRadius: "8px",
      display: "inline-block",
    },
  };

  /* ================= JSX ================= */

  return (
    <div style={styles.admin}>
      {/* SIDEBAR */}

      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>
          Admin Panel
        </h2>

        {[
          "dashboard",
          "grievances",
          "news",
          "declarations",
          "certificates",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            style={styles.menuButton(
              tab === item
            )}
          >
            {item.charAt(0).toUpperCase() +
              item.slice(1)}
          </button>
        ))}

        {/* BOTTOM */}

        <div style={styles.sidebarBottom}>
          <button
            style={styles.actionBtn}
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode
              ? "☀ Light Mode"
              : "🌙 Dark Mode"}
          </button>

          <button
            style={styles.logoutBtn}
            onClick={() => {
              localStorage.removeItem(
                "adminToken"
              );

              window.location.href = "/";
            }}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* CONTENT */}

      <main style={styles.content}>
        {/* DASHBOARD */}

        {tab === "dashboard" && (
          <div style={styles.dashboardGrid}>
            <div
              style={styles.statCard(
                "linear-gradient(135deg,#2563eb,#1d4ed8)"
              )}
            >
              <h2>{grievances.length}</h2>

              <p>Total Grievances</p>
            </div>

            <div
              style={styles.statCard(
                "linear-gradient(135deg,#16a34a,#15803d)"
              )}
            >
              <h2>{news.length}</h2>

              <p>Total News</p>
            </div>

            <div
              style={styles.statCard(
                "linear-gradient(135deg,#ea580c,#c2410c)"
              )}
            >
              <h2>{totalCertificates}</h2>

              <p>Total Certificates</p>
            </div>
          </div>
        )}

        {/* DECLARATIONS */}

        {tab === "declarations" && (
          <div style={styles.card}>
            <h2>
              📄 Declaration PDF Upload
            </h2>

            {/* FORM */}

            <div style={styles.form}>
              <h3>
                📤 Upload New Declaration
              </h3>

              {error && (
                <div style={styles.error}>
                  {error}
                </div>
              )}

              <div style={styles.formGrid}>
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  style={styles.input}
                />

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    setFile(
                      e.target.files?.[0] || null
                    )
                  }
                  style={styles.input}
                />
              </div>

              {/* BUTTONS */}

              <div style={styles.buttonRow}>
                <button
                  style={styles.clearBtn}
                  onClick={() => {
                    setTitle("");
                    setFile(null);
                    setError("");
                  }}
                >
                  Clear
                </button>

                <button
                  style={styles.uploadBtn}
                  onClick={onUpload}
                >
                  {submitting
                    ? "Uploading..."
                    : "Upload PDF"}
                </button>
              </div>
            </div>

            {/* TABLE */}

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>
                      Title
                    </th>

                    <th style={styles.th}>
                      Date
                    </th>

                    <th style={styles.th}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {uploaded.map((item) => (
                    <tr key={item._id}>
                      <td style={styles.td}>
                        {item.title}
                      </td>

                      <td style={styles.td}>
                        {item.date
                          ? new Date(
                              item.date
                            ).toLocaleDateString()
                          : "-"}
                      </td>

                      <td style={styles.td}>
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.pdfBtn}
                        >
                          View PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}