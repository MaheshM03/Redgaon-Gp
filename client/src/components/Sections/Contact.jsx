import { useState } from "react";
import { useTranslator } from "../../context/LanguageContext.js";

function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display:"block", fontSize:"11px", fontWeight:700, color:"#64748b", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:"6px" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useTranslator();
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", subject:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ firstName:"", lastName:"", email:"", subject:"", message:"" });
  };

  const inputStyle = (field) => ({
    width:"100%", padding:"11px 14px", borderRadius:"10px",
    border: `1.5px solid ${focused === field ? "#2563eb" : "#e2e8f0"}`,
    fontSize:"13.5px", fontFamily:"inherit", color:"#1e293b",
    background: focused === field ? "#fff" : "#f8fafc",
    outline:"none", transition:"border-color 0.2s, background 0.2s", boxSizing:"border-box",
  });

  const infoItems = [
    { icon:"📞", label: t('contact.phoneLabel'), value: t('contact.info.phone') },
    { icon:"✉️", label: t('contact.emailLabel'), value: t('contact.info.email') },
    { icon:"📍", label: t('contact.addressLabel'), value: t('contact.info.address') },
    { icon:"🕐", label: t('contact.hoursLabel'), value: t('contact.info.hours') },
  ];

  return (
    <section style={{ background:"#f8fafc", minHeight:"100vh", fontFamily:"'Plus Jakarta Sans','Noto Sans Devanagari',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap');

        .ct-root { max-width:1100px; margin:0 auto; padding:clamp(28px,5vw,60px) clamp(14px,4vw,32px); }

        /* HERO TOP */
        .ct-hero-tag {
          display:inline-block;
          background:rgba(37,99,235,0.1); border:1px solid rgba(37,99,235,0.3);
          color:#2563eb; font-size:11px; font-weight:700;
          letter-spacing:0.1em; text-transform:uppercase;
          padding:5px 16px; border-radius:999px; margin-bottom:18px;
        }
        .ct-hero-title { font-size:clamp(22px,4.5vw,36px); font-weight:800; color:#1e293b; margin-bottom:8px; }
        .ct-hero-sub { font-size:14px; color:#64748b; margin-bottom:clamp(28px,4vw,44px); }

        /* GRID */
        .ct-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:clamp(16px,3vw,28px); align-items:start; }

        /* INFO PANEL */
        .ct-info-panel {
          background:linear-gradient(135deg,#0f172a,#1e3a8a);
          border-radius:22px; padding:clamp(22px,3vw,32px);
          color:#fff; position:sticky; top:80px;
        }
        .ct-info-panel h2 { font-size:18px; font-weight:800; margin-bottom:6px; }
        .ct-info-panel > p { color:#94a3b8; font-size:13px; line-height:1.7; margin-bottom:24px; }
        .ct-info-item {
          display:flex; align-items:flex-start; gap:13px;
          background:rgba(255,255,255,0.06); border-radius:12px; padding:13px 15px;
          border:1px solid rgba(255,255,255,0.08); margin-bottom:10px;
        }
        .ct-info-icon {
          width:36px; height:36px; border-radius:10px; flex-shrink:0;
          background:rgba(232,160,32,0.18); border:1px solid rgba(232,160,32,0.3);
          display:flex; align-items:center; justify-content:center; font-size:15px;
        }
        .ct-info-label { font-size:10px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.07em; margin-bottom:3px; }
        .ct-info-val { font-size:13px; font-weight:600; color:#e2e8f0; line-height:1.5; }
        .ct-social-row { display:flex; gap:9px; margin-top:22px; padding-top:18px; border-top:1px solid rgba(255,255,255,0.08); }
        .ct-social-icon { width:38px; height:38px; border-radius:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:15px; transition:all 0.2s; }
        .ct-social-icon:hover { background:rgba(232,160,32,0.2); border-color:rgba(232,160,32,0.4); transform:translateY(-2px); }

        /* FORM PANEL */
        .ct-form-panel {
          background:#fff; border-radius:22px; padding:clamp(20px,3vw,36px);
          border:1px solid #e2e8f0; box-shadow:0 8px 32px rgba(0,0,0,0.07);
        }
        .ct-form-header { display:flex; align-items:center; gap:12px; margin-bottom:24px; padding-bottom:18px; border-bottom:1px solid #f1f5f9; }
        .ct-form-icon { width:40px; height:40px; border-radius:12px; flex-shrink:0; background:linear-gradient(135deg,#1e3a8a,#2563eb); display:flex; align-items:center; justify-content:center; font-size:16px; }
        .ct-form-title { font-size:15px; font-weight:700; color:#1e293b; }
        .ct-form-sub { font-size:12px; color:#94a3b8; margin-top:2px; }
        .ct-two-col { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .ct-submit-btn {
          width:100%; padding:14px; border-radius:12px; border:none;
          background:linear-gradient(135deg,#1e3a8a,#2563eb);
          color:#fff; font-size:14px; font-weight:700; font-family:inherit; cursor:pointer;
          display:flex; align-items:center; justify-content:center; gap:8px;
          transition:opacity 0.2s, transform 0.15s; margin-top:4px;
        }
        .ct-submit-btn:hover { opacity:0.9; transform:translateY(-1px); }
        .ct-success { text-align:center; padding:clamp(32px,6vw,56px) 20px; display:flex; flex-direction:column; align-items:center; gap:14px; }
        .ct-success-icon { font-size:52px; animation:ct-pop 0.4s ease; }
        @keyframes ct-pop { from{transform:scale(0.5);opacity:0;} to{transform:scale(1);opacity:1;} }
        .ct-success h3 { font-size:20px; font-weight:800; color:#1e293b; }
        .ct-success p { color:#64748b; font-size:14px; line-height:1.7; }

        /* RESPONSIVE */
@media (max-width: 768px) {
  .ct-root {
    padding: 22px 14px;
  }

  .ct-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .ct-info-panel {
    position: static;
    padding: 20px 16px;
    border-radius: 18px;
  }

  .ct-form-panel {
    padding: 20px 16px;
    border-radius: 18px;
  }

  .ct-two-col {
    grid-template-columns: 1fr;
  }

  .ct-info-item {
    padding: 12px;
    gap: 10px;
    align-items: flex-start;
  }

  .ct-info-icon {
    width: 34px;
    height: 34px;
    min-width: 34px;
    font-size: 14px;
  }

  .ct-info-label {
    font-size: 9px;
  }

  .ct-info-val {
    font-size: 12px;
    line-height: 1.5;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .ct-social-row {
    justify-content: center;
    flex-wrap: wrap;
  }

  .ct-social-icon {
    width: 36px;
    height: 36px;
  }

  .ct-form-header {
    align-items: flex-start;
  }

  .ct-form-title {
    font-size: 14px;
  }

  .ct-form-sub {
    font-size: 11px;
  }

  .ct-submit-btn {
    font-size: 13px;
    padding: 13px;
  }
}

@media (max-width: 480px) {
  .ct-root {
    padding: 18px 12px;
  }

  .ct-hero-title {
    font-size: 24px;
    line-height: 1.3;
  }

  .ct-hero-sub {
    font-size: 13px;
    line-height: 1.6;
  }

  .ct-info-panel h2 {
    font-size: 17px;
  }

  .ct-info-panel > p {
    font-size: 12px;
  }

  .ct-info-item {
    flex-direction: row;
    align-items: flex-start;
  }

  .ct-info-val {
    font-size: 11.5px;
  }

  input,
  textarea,
  select {
    font-size: 16px !important;
  }
}

@media (max-width: 360px) {
  .ct-root {
    padding: 16px 10px;
  }

  .ct-info-panel,
  .ct-form-panel {
    padding: 16px 12px;
  }

  .ct-social-row {
    gap: 6px;
  }

  .ct-social-icon {
    width: 32px;
    height: 32px;
    font-size: 13px;
  }

  .ct-submit-btn {
    font-size: 12px;
  }
}
      `}</style>

      <div className="ct-root">
        <div className="ct-hero-tag">{t('contact.tagline') || '📬 संपर्क करा'}</div>
        <div className="ct-hero-title">{t('contact.title') || 'आमच्याशी संपर्क साधा'}</div>
        <div className="ct-hero-sub">{t('contact.subtitle') || 'प्रमाणपत्र, तक्रार किंवा योजनेसाठी — आम्ही येथे आहोत.'}</div>

        <div className="ct-grid">
          {/* INFO */}
          <div className="ct-info-panel">
            <h2>Contact Info</h2>
            <p>कार्यालयास भेट द्या किंवा खाली दिलेल्या माहितीद्वारे संपर्क करा.</p>
            {infoItems.map((item, i) => (
              <div key={i} className="ct-info-item">
                <div className="ct-info-icon">{item.icon}</div>
                <div>
                  <div className="ct-info-label">{item.label}</div>
                  <div className="ct-info-val">{item.value}</div>
                </div>
              </div>
            ))}
            <div className="ct-social-row">
              {["📘","🐦","📸"].map((icon, i) => (
                <div key={i} className="ct-social-icon">{icon}</div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="ct-form-panel">
            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">✅</div>
                <h3>{t('contact.successTitle') || 'संदेश पाठवला!'}</h3>
                <p>{t('contact.successMessage') || 'आम्ही लवकरच तुमच्याशी संपर्क साधू.'}</p>
              </div>
            ) : (
              <>
                <div className="ct-form-header">
                  <div className="ct-form-icon">✉️</div>
                  <div>
                    <div className="ct-form-title">{t('contact.sendMessage') || 'संदेश पाठवा'}</div>
                    <div className="ct-form-sub">{t('contact.responseTime') || 'आम्ही 24 तासांत उत्तर देतो'}</div>
                  </div>
                </div>

                <div className="ct-two-col">
                  <FormField label={t('contact.firstName') || 'पहिले नाव'}>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder={t('contact.firstName') || 'पहिले नाव'} style={inputStyle("firstName")} onFocus={() => setFocused("firstName")} onBlur={() => setFocused(null)} />
                  </FormField>
                  <FormField label={t('contact.lastName') || 'आडनाव'}>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder={t('contact.lastName') || 'आडनाव'} style={inputStyle("lastName")} onFocus={() => setFocused("lastName")} onBlur={() => setFocused(null)} />
                  </FormField>
                </div>

                <FormField label={t('contact.emailAddress') || 'ईमेल'}>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('contact.emailPlaceholder') || 'your@email.com'} style={inputStyle("email")} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                </FormField>

                <FormField label={t('contact.subject') || 'विषय'}>
                  <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle("subject"), cursor:"pointer" }} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}>
                    <option value="">{t('contact.subjectPlaceholder') || 'विषय निवडा'}</option>
                    <option>{t('contact.option.birth') || 'जन्म दाखला'}</option>
                    <option>{t('contact.option.death') || 'मृत्यू दाखला'}</option>
                    <option>{t('contact.option.residence') || 'रहिवास दाखला'}</option>
                    <option>{t('contact.option.grievance') || 'तक्रार'}</option>
                    <option>{t('contact.option.scheme') || 'योजना'}</option>
                    <option>{t('contact.option.other') || 'इतर'}</option>
                  </select>
                </FormField>

                <FormField label={t('contact.message') || 'संदेश'}>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={t('contact.placeholderMessage') || 'तुमचा संदेश येथे लिहा...'} rows={4} style={{ ...inputStyle("message"), resize:"vertical", minHeight:"110px" }} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                </FormField>

                <button className="ct-submit-btn" onClick={handleSubmit}>
                  ✉️ {t('contact.submit') || 'संदेश पाठवा'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}