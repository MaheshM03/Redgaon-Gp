export default function Map() {
  const infoCards = [
    {
      icon: "📍",
      label: "Latitude",
      value: "20.327127",
    },

    {
      icon: "📍",
      label: "Longitude",
      value: "74.247276",
    },

    {
      icon: "🧭",
      label: "DMS Latitude",
      value: "20° 19' 37.6572'' N",
    },

    {
      icon: "🧭",
      label: "DMS Longitude",
      value: "74° 14' 50.1936'' E",
    },

    {
      icon: "🌐",
      label: "UTM Easting",
      value: "421,423.34",
    },

    {
      icon: "🌐",
      label: "UTM Northing",
      value: "2,247,861.16",
    },
  ];

  return (
    <section
      style={{
        padding:
          "50px 20px",
        background: "#f8fafc",
        fontFamily:
          "'Plus Jakarta Sans', 'Noto Sans Devanagari', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .mp-root {
          max-width: 1100px;
          margin: 0 auto;
        }

        .mp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;

          margin-bottom: 28px;
        }

        .mp-badge {
          display: inline-block;

          background: #dbeafe;

          color: #1d4ed8;

          font-size: 11px;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 1px;

          padding: 6px 14px;

          border-radius: 999px;

          margin-bottom: 10px;
        }

        .mp-title {
          font-size:
            clamp(24px, 4vw, 34px);

          font-weight: 800;

          color: #0f172a;

          display: flex;

          align-items: center;

          gap: 10px;
        }

        .mp-open-btn {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          background: #2563eb;

          color: white;

          padding: 12px 18px;

          border-radius: 12px;

          text-decoration: none;

          font-size: 14px;

          font-weight: 600;

          transition: 0.2s ease;
        }

        .mp-open-btn:hover {
          background: #1d4ed8;
        }

        .mp-info-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 16px;

          margin-bottom: 24px;
        }

        .mp-info-card {
          background: white;

          border-radius: 14px;

          padding: 18px;

          border: 1px solid #e2e8f0;

          display: flex;

          align-items: flex-start;

          gap: 12px;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .mp-info-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 8px 18px rgba(0,0,0,0.06);
        }

        .mp-info-icon {
          width: 42px;

          height: 42px;

          border-radius: 10px;

          background: #eff6ff;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 20px;

          flex-shrink: 0;
        }

        .mp-info-label {
          font-size: 11px;

          font-weight: 700;

          color: #64748b;

          text-transform: uppercase;

          letter-spacing: 0.5px;

          margin-bottom: 4px;
        }

        .mp-info-val {
          font-size: 15px;

          font-weight: 600;

          color: #0f172a;

          word-break: break-word;
        }

        .mp-frame-wrap {
          overflow: hidden;

          border-radius: 18px;

          border: 1px solid #e2e8f0;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.08);
        }

        iframe {
          display: block;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .mp-info-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .mp-header {
            flex-direction: column;

            align-items: flex-start;
          }

          .mp-title {
            font-size: 28px;
          }

          .mp-open-btn {
            width: 100%;

            justify-content: center;
          }

          .mp-info-grid {
            grid-template-columns:
              repeat(2, 1fr);

            gap: 12px;
          }

          .mp-info-card {
            padding: 14px;
          }

          iframe {
            height: 320px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          section {
            padding: 40px 12px !important;
          }

          .mp-title {
            font-size: 24px;
          }

          .mp-info-grid {
            grid-template-columns: 1fr;
          }

          .mp-info-card {
            padding: 14px 12px;
          }

          .mp-info-icon {
            width: 38px;
            height: 38px;
            font-size: 18px;
          }

          .mp-info-val {
            font-size: 14px;
          }

          iframe {
            height: 280px !important;
          }
        }
      `}</style>

      <div className="mp-root">
        {/* Header */}
        <div className="mp-header">
          <div>
            <div className="mp-badge">
              Location
            </div>

            <div className="mp-title">
              <span>📍</span>
              Find Us Here
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=20.327127,74.247276"
            target="_blank"
            rel="noreferrer"
            className="mp-open-btn"
          >
            🗺️ Open in Google Maps
          </a>
        </div>

        {/* Info Cards */}
        <div className="mp-info-grid">
          {infoCards.map(
            (card, i) => (
              <div
                key={i}
                className="mp-info-card"
              >
                <div className="mp-info-icon">
                  {card.icon}
                </div>

                <div>
                  <div className="mp-info-label">
                    {card.label}
                  </div>

                  <div className="mp-info-val">
                    {card.value}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Map */}
        <div className="mp-frame-wrap">
          <iframe
            title="Village Map"
            src="https://www.google.com/maps?q=20.327127,74.247276&output=embed"
            width="100%"
            height="420"
            style={{
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}