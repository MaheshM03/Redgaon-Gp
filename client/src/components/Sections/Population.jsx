import { useEffect, useRef, useState } from "react";
import { useTranslator } from "../../context/LanguageContext";

function useCountUp(target, duration = 1300, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const numeric = parseInt(
      String(target).replace(/,/g, ""),
      10
    );

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * numeric));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return value.toLocaleString("en-IN");
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function StatCard({ stat, inView, delay }) {
  const count = useCountUp(
    stat.value,
    1400,
    inView
  );

  return (
    <div
      className="pp-stat-card"
      style={{
        background: stat.color,
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0)"
          : "translateY(20px)",
        transition: `all 0.5s ${delay}s`,
      }}
    >
      <div
        className="pp-stat-value"
        style={{
          color: stat.accent,
        }}
      >
        {count}
      </div>

      <div className="pp-stat-label">
        {stat.label}
      </div>
    </div>
  );
}

export default function Population() {
  const { t } = useTranslator();

  const [statsRef, statsInView] =
    useInView(0.1);

const stats = [
  {
    label: t("population.totalFamilies"),
    value: "335",
    color: "#dbeafe",
    accent: "#2563eb",
  },

  {
    label: t("population.scFemale"),
    value: "68",
    color: "#fee2e2",
    accent: "#dc2626",
  },

  {
    label: t("population.scMale"),
    value: "86",
    color: "#fecaca",
    accent: "#b91c1c",
  },

  {
    label: t("population.scTotal"),
    value: "140",
    color: "#fee2e2",
    accent: "#ef4444",
  },

  {
    label: t("population.stFemale"),
    value: "16",
    color: "#fef3c7",
    accent: "#d97706",
  },

  {
    label: t("population.stMale"),
    value: "12",
    color: "#fde68a",
    accent: "#ca8a04",
  },

  {
    label: t("population.stTotal"),
    value: "28",
    color: "#fef3c7",
    accent: "#f59e0b",
  },

  {
    label: t("population.otherFemale"),
    value: "564",
    color: "#dcfce7",
    accent: "#16a34a",
  },

  {
    label: t("population.otherMale"),
    value: "609",
    color: "#bbf7d0",
    accent: "#15803d",
  },

  {
    label: t("population.otherTotal"),
    value: "1341",
    color: "#dcfce7",
    accent: "#22c55e",
  },

  {
    label: t("population.bpl"),
    value: "67",
    color: "#ede9fe",
    accent: "#7c3aed",
  },

  {
    label: t("population.apl"),
    value: "268",
    color: "#cffafe",
    accent: "#0891b2",
  },

  {
    label: t("population.privateToilet"),
    value: "301",
    color: "#fef9c3",
    accent: "#ca8a04",
  },

  {
    label: t("population.publicToilet"),
    value: "1",
    color: "#e0f2fe",
    accent: "#0284c7",
  },

  {
    label: t("population.primarySchool"),
    value: "1",
    color: "#dcfce7",
    accent: "#16a34a",
  },

  {
    label: t("population.anganwadi"),
    value: "2",
    color: "#fae8ff",
    accent: "#a21caf",
  },

  {
    label: t("population.society"),
    value: "1",
    color: "#ffe4e6",
    accent: "#e11d48",
  },

  {
    label: t("population.area"),
    value: "638",
    color: "#ecfccb",
    accent: "#65a30d",
  },

  {
    label: t("population.farmers"),
    value: "403",
    color: "#ede9fe",
    accent: "#7c3aed",
  },
];

 return (
  <section className="pp-section">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

      .pp-section {
        padding: 60px 20px;
        background: #f8fafc;
        font-family: 'Inter', sans-serif;
      }

      .pp-root {
        max-width: 1200px;
        margin: 0 auto;
      }

      .pp-eyebrow {
        width: fit-content;
        margin: 0 auto 10px;
        padding: 6px 14px;
        background: #e0f2fe;
        color: #0369a1;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .pp-title {
        text-align: center;
        font-size: clamp(28px, 5vw, 38px);
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 10px;
      }

      .pp-subtitle {
        text-align: center;
        color: #64748b;
        font-size: 15px;
        max-width: 600px;
        margin: 0 auto 36px;
        line-height: 1.7;
      }

      .pp-stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }

      .pp-stat-card {
        background: #ffffff !important;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 24px 16px;
        text-align: center;
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;
      }

      .pp-stat-card:hover {
        transform: translateY(-3px);
        box-shadow:
          0 8px 20px rgba(0,0,0,0.06);
      }

      .pp-stat-value {
        font-size: clamp(26px, 4vw, 34px);
        font-weight: 700;
        margin-bottom: 8px;
      }

      .pp-stat-label {
        font-size: 13px;
        color: #475569;
        line-height: 1.6;
        font-weight: 500;
      }

      @media (max-width: 992px) {
        .pp-stats-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 768px) {
        .pp-section {
          padding: 45px 14px;
        }

        .pp-title {
          font-size: 30px;
        }

        .pp-subtitle {
          font-size: 14px;
          margin-bottom: 28px;
        }

        .pp-stats-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .pp-stat-card {
          padding: 18px 12px;
        }

        .pp-stat-value {
          font-size: 24px;
        }

        .pp-stat-label {
          font-size: 12px;
        }
      }

      @media (max-width: 480px) {
        .pp-section {
          padding: 40px 12px;
        }

        .pp-title {
          font-size: 26px;
        }

        .pp-stats-grid {
          gap: 10px;
        }

        .pp-stat-card {
          border-radius: 12px;
          padding: 16px 10px;
        }

        .pp-stat-value {
          font-size: 22px;
        }

        .pp-stat-label {
          font-size: 11px;
        }
      }
    `}</style>

    <div className="pp-root">
      <div className="pp-eyebrow">
        {t("population.badge")}
      </div>

      <h2 className="pp-title">
        {t("population.title")}
      </h2>

      <p className="pp-subtitle">
        {t("population.subtitle")}
      </p>

      <div
        className="pp-stats-grid"
        ref={statsRef}
      >
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            stat={stat}
            inView={statsInView}
            delay={i * 0.06}
          />
        ))}
      </div>
    </div>
  </section>
);
}