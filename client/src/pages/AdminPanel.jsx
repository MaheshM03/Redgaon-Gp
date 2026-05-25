import React, { useState, useEffect } from "react";

import { useNews } from "../context/NewsContext";
import { useGrievances } from "../context/GrievanceContext";
import { useCertificates } from "../context/CertificateContext";

/* ================= DECLARATIONS COMPONENT ================= */

function DeclarationsUploadForm() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [uploaded, setUploaded] = useState([]);

  const API_BASE = (() => {
    const envBase = process.env.REACT_APP_API_URL;

    if (envBase) return envBase;

    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      return "http://localhost:5000";
    }

    return window.location.origin;
  })();

  console.log("[AdminPanel] API_BASE =", API_BASE);

  const fetchDeclarations = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/declarations`);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();

      setUploaded(json.data || []);
    } catch (e) {
      console.error(e);
      setError("Failed to load declarations");
    }
  };

  useEffect(() => {
    fetchDeclarations();
  }, []);

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
      setError("Admin not authenticated. Please login again.");
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();

      fd.append("title", title.trim());
      fd.append("pdf", file);

      const res = await fetch(`${API_BASE}/api/declarations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      if (!res.ok) {
        const text = await res.text();
        setError(text || "Upload failed");
        return;
      }

      await fetchDeclarations();

      setTitle("");
      setFile(null);
    } catch (e) {
      console.error(e);
      setError("Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="news-form" style={{ marginBottom: 22 }}>
        <h3>📤 Upload Declaration (PDF)</h3>

        {error && (
          <div
            className="error"
            style={{ color: "#dc2626", marginTop: 8 }}
          >
            {error}
          </div>
        )}

        <div className="form-grid" style={{ marginTop: 14 }}>
          <input
            placeholder="Title *"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <div
            style={{
              gridColumn: "1 / -1",
              color: "#64748b",
              fontSize: 13,
            }}
          >
            Date is automatic (server date).
          </div>
        </div>

        <div className="form-actions">
          <button
            className="cancel-btn"
            disabled={submitting}
            onClick={() => {
              setTitle("");
              setFile(null);
              setError("");
            }}
          >
            Clear
          </button>

          <button
            className="save-btn"
            disabled={submitting}
            onClick={onUpload}
          >
            {submitting ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      <div className="card documents-section" style={{ marginTop: 30 }}>
        <h3>📁 Uploaded Declarations ({uploaded.length})</h3>

        {uploaded.length === 0 ? (
          <p className="no-data">No declarations uploaded yet.</p>
        ) : (
          <div className="table-container">
            <table className="documents-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {uploaded.map((d) => (
                  <tr key={d._id}>
                    <td>{d.title}</td>

                    <td>
                      {d.date
                        ? new Date(d.date).toLocaleDateString()
                        : ""}
                    </td>

                    <td>
                      {d.pdf && (
                        <a
                          href={d.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="doc-link"
                        >
                          View
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= MAIN ADMIN PANEL ================= */

export default function AdminPanel() {
  const [tab, setTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "News",
    date: new Date().toISOString().split("T")[0],
    excerpt: "",
    content: "",
    imageUrl: "",
  });

  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    news = [],
    addNews,
    updateNews,
    deleteNews,
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
    documents = [],
    fetchAllCertificates,
    fetchDocuments,
    updateCertStatus,
  } = useCertificates();

  useEffect(() => {
    fetchGrievances();
  }, [fetchGrievances]);

  useEffect(() => {
    if (tab === "certificates") {
      fetchAllCertificates();
      fetchDocuments();
    }
  }, [tab, fetchAllCertificates, fetchDocuments]);

  return (
    <div className={darkMode ? "admin dark" : "admin"}>
      {/* SIDEBAR */}

      <aside className="sidebar">
        <h2>Admin Panel</h2>

        <button
          className={tab === "dashboard" ? "active" : ""}
          onClick={() => setTab("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={tab === "grievances" ? "active" : ""}
          onClick={() => setTab("grievances")}
        >
          Grievances
        </button>

        <button
          className={tab === "news" ? "active" : ""}
          onClick={() => setTab("news")}
        >
          News
        </button>

        <button
          className={tab === "declarations" ? "active" : ""}
          onClick={() => setTab("declarations")}
        >
          Declarations
        </button>

        <button
          className={tab === "certificates" ? "active" : ""}
          onClick={() => setTab("certificates")}
        >
          Certificates & Documents
        </button>

        <div className="sidebar-bottom">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light mode" : "Dark mode"}
          </button>

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("adminToken");
              window.location.href = "/";
            }}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}

      <main className="content">

        {/* DASHBOARD */}

        {tab === "dashboard" && (
          <div className="dashboard-grid">
            <div className="stat blue">
              <h3>{grievances.length}</h3>
              <p>Total Grievances</p>
            </div>

            <div className="stat green">
              <h3>{news.length}</h3>
              <p>News</p>
            </div>

            <div className="stat orange">
              <h3>
                {Object.values(certs).reduce(
                  (a, b) => a + b.length,
                  0
                )}
              </h3>

              <p>Total Certificates</p>
            </div>
          </div>
        )}

        {/* DECLARATIONS */}

        {tab === "declarations" && (
          <div className="card">
            <h2>Declarations (PDF)</h2>

            <DeclarationsUploadForm />
          </div>
        )}
      </main>

      {/* YOUR EXISTING CSS HERE */}
    </div>
  );
}