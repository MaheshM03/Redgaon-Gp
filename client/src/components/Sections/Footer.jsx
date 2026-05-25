import { useTranslator } from '../../context/LanguageContext.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslator();

  const quickLinks = [
    { labelKey: "nav.home", to: "/" },
    { labelKey: "nav.adminCommittee", to: "/admin-committee" },
    { labelKey: "nav.citizenPortal", to: "/citizen-portal" },
    { labelKey: "nav.grievance", to: "/grievance" },
    { labelKey: "nav.rti", to: "/rti" },
    { labelKey: "nav.aboutus", to: "/aboutus" },
  ];

  return (
    <footer style={{ fontFamily:"'Sora','Noto Sans Devanagari',sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.ft-main {
  background: #0f172a;

  color: #e2e8f0;

  padding: 24px 16px 10px;

  font-family: 'Inter', sans-serif;
}

/* TOP */

.ft-top {
  text-align: center;

  max-width: 620px;

  margin: 0 auto 14px;
}

.ft-top h3 {
  font-size:
    clamp(20px, 4vw, 26px);

  font-weight: 700;

  color: #ffffff;

  margin-bottom: 5px;

  line-height: 1.3;
}

.ft-top p {
  font-size: 12px;

  color: #94a3b8;

  line-height: 1.6;
}

/* CTA */

.ft-cta {
  max-width: 600px;

  margin: 0 auto 14px;

  background:
    rgba(255,255,255,0.03);

  border: 1px solid
    rgba(255,255,255,0.06);

  border-radius: 10px;

  padding: 12px;

  text-align: center;
}

.ft-cta-text h4 {
  font-size: 14px;

  color: #ffffff;

  margin-bottom: 4px;

  font-weight: 600;
}

.ft-cta-text p {
  font-size: 12px;

  color: #94a3b8;

  line-height: 1.5;

  margin-bottom: 10px;
}

.ft-cta-btn {
  display: inline-block;

  padding: 8px 16px;

  background: #2563eb;

  color: #ffffff;

  border-radius: 7px;

  text-decoration: none;

  font-size: 12px;

  font-weight: 600;

  transition: 0.2s ease;
}

.ft-cta-btn:hover {
  background: #1d4ed8;
}

/* CONTACT */

.ft-grid {
  display: flex;

  justify-content: center;

  margin-bottom: 10px;
}

.ft-col {
  text-align: center;
}

.ft-col h4 {
  font-size: 13px;

  color: #ffffff;

  margin-bottom: 6px;

  font-weight: 600;
}

.ft-text {
  font-size: 12px;

  color: #94a3b8;

  line-height: 1.5;

  margin-bottom: 3px;
}

/* DIVIDER */

.ft-divider {
  border: none;

  border-top: 1px solid
    rgba(255,255,255,0.06);

  margin: 0 0 10px;
}

/* BOTTOM */

.ft-bottom-bar {
  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 6px;

  text-align: center;
}

.ft-bottom-text {
  font-size: 11px;

  color: #64748b;
}

/* COPY */

.ft-copy {
  background: #111827;

  padding: 7px 10px;

  text-align: center;

  font-size: 11px;

  color: #94a3b8;
}

/* MOBILE */

@media (max-width: 500px) {

  .ft-main {
    padding: 20px 12px 8px;
  }

  .ft-top {
    margin-bottom: 12px;
  }

  .ft-top h3 {
    font-size: 22px;
  }

  .ft-top p,
  .ft-text,
  .ft-cta-text p {
    font-size: 11px;
  }

  .ft-cta {
    padding: 10px;

    margin-bottom: 12px;
  }

  .ft-cta-btn {
    width: 100%;
  }

  .ft-grid {
    margin-bottom: 8px;
  }

  .ft-copy {
    font-size: 10px;

    padding: 6px 8px;
  }
}
}`}</style>

      <div className="ft-main">
        <div className="ft-top">
          
          <h3>{t('footer.title')}</h3>
          <p>{t('footer.subtitle')}</p>
        </div>

        <div className="ft-cta">
          <div className="ft-cta-text">
            <h4>{t('footer.ctaTitle')}</h4>
            <p>{t('footer.ctaText')}</p>
          </div>
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=chdredgaon@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="ft-cta-btn"
>
  {t('footer.ctaButton')}
</a>
        </div>

        <div className="ft-grid">
          <div className="ft-col">
            <h4>{t('footer.contact')}</h4>
            <p className="ft-text">{t('contact.info.email')}</p>
            <p className="ft-text">{t('contact.info.phone')}</p>
            <p className="ft-text">{t('footer.address')}</p>
          </div>
         
        
        </div>

        <hr className="ft-divider" />

      
      </div>

  
    </footer>
  );
}