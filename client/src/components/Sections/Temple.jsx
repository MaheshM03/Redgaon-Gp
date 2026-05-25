import React from "react";
import { useTranslator } from "../../context/LanguageContext";

const Temple = () => {
  const { t } = useTranslator();

  const temples = [
    {
      name: t("temple.hanuman.name"),
      location: t("temple.location"),
      image: "/hanumand mandir.jpeg",
    },

    {
      name: t("temple.yadavswami.name"),
      location: t("temple.location"),
      image: "/datta mandir.jpeg",
    },

    {
      name: t("temple.khanderao.name"),
      location: t("temple.location"),
      image: "/martanda mandir.jpeg",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>
          Temples
        </span>

        <h2 style={styles.heading}>
          {t("temple.heading")}
        </h2>

        <p style={styles.subHeading}>
          {t("temple.subheading")}
        </p>

        <div
          style={styles.grid}
          className="temple-grid"
        >
          {temples.map(
            (temple, index) => (
              <div
                key={index}
                style={styles.card}
                className="temple-card"
              >
                <img
                  src={temple.image}
                  alt={temple.name}
                  style={styles.image}
                  className="temple-image"
                />

                <div style={styles.content}>
                  <h3 style={styles.title}>
                    {temple.name}
                  </h3>

                  <p style={styles.location}>
                    {temple.location}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <style>
        {`
          * {
            box-sizing: border-box;
          }

          @media (max-width: 768px) {
            .temple-grid {
              grid-template-columns: 1fr !important;
            }

            .temple-image {
              height: 220px !important;
            }
          }

          @media (max-width: 480px) {
            .temple-image {
              height: 200px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f8fafc",
    fontFamily:
      "'Inter', sans-serif",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "999px",
    background: "#dbeafe",
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "16px",
  },

  heading: {
    fontSize: "clamp(28px, 5vw, 42px)",
    color: "#0f172a",
    marginBottom: "10px",
    fontWeight: "700",
  },

  subHeading: {
    fontSize: "15px",
    color: "#64748b",
    marginBottom: "40px",
    lineHeight: "1.7",
    maxWidth: "650px",
    marginInline: "auto",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",

    gap: "24px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
    transition: "0.3s ease",
  },

  image: {
    width: "100%",
    height: "240px",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },

  content: {
    padding: "20px",
    textAlign: "left",
  },

  title: {
    fontSize: "20px",
    color: "#0f172a",
    marginBottom: "8px",
    fontWeight: "600",
  },

  location: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.6",
  },
};

export default Temple;