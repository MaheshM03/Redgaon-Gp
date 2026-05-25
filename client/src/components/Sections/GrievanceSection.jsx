import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGrievances } from "../../context/GrievanceContext";
import { useTranslator } from "../../context/LanguageContext";

const departments = [
  { name: "Water Supply", label: "पाणीपुरवठा", icon: "💧", color: "#0ea5e9" },
  { name: "Road & Infrastructure", label: "रस्ते", icon: "🛣️", color: "#f59e0b" },
  { name: "Health Department", label: "आरोग्य", icon: "🏥", color: "#10b981" },
  { name: "Education", label: "शिक्षण", icon: "📚", color: "#6366f1" },
  { name: "Agriculture", label: "कृषी", icon: "🌾", color: "#84cc16" },
  { name: "Revenue", label: "महसूल", icon: "💰", color: "#f97316" },
  { name: "Sanitation", label: "स्वच्छता", icon: "🧹", color: "#14b8a6" },
  { name: "Electricity", label: "वीज", icon: "⚡", color: "#eab308" },
];

const contactInfo = [
  { Icon: "📍", label: "पत्ता", value: "Redgaon Kh, Nashik - 422306", color: "#1d4ed8" },
  { Icon: "📞", label: "दूरध्वनी", value: "+91 76200 68056", action: "call", href: "tel:+917620068056", color: "#16a34a" },
  { Icon: "✉️", label: "ईमेल", value: "chdredgaon@gmail.com ", action: "email", href: "mailto:chdredgaon@gmail.com ", color: "#9333ea" },
];

export default function GrievanceSection() {
  const { fetchGrievances } = useGrievances();
  const { t } = useTranslator();
  const [form, setForm] = useState({ fullName:"", mobile:"", aadhaar:"", email:"", department:"", details:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);


  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = t('grievance.form.error.fullName.required');
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = t('grievance.form.error.mobile.required');
    if (!/^\d{12}$/.test(form.aadhaar)) e.aadhaar = t('grievance.form.error.aadhaar.required');
    if (!form.department) e.department = t('grievance.form.error.department.required');
    if (!form.details.trim()) e.details = t('grievance.form.error.details.required');
    setErrors(e);
    return Object.keys(e).length === 0;
  };


  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch("https://redgaon-backend.onrender.com/api/grievance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("success");
      setForm({ fullName:"", mobile:"", aadhaar:"", email:"", department:"", details:"" });
      fetchGrievances();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <>
      <Navbar />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

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

.gr-root{
  font-family:'Inter',sans-serif;
  background:#f8fafc;
  min-height:100vh;
  color:#1e293b;
}

/* HERO */

.gr-hero{
  background:
    linear-gradient(
      180deg,
      #eff6ff 0%,
      #f8fafc 100%
    );

  padding:85px 20px 60px;

  text-align:center;

  position:relative;

  overflow:hidden;
}

.gr-hero::before{
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

.gr-hero::after{
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

.gr-hero-badge{
  display:inline-flex;

  align-items:center;

  justify-content:center;

  background:#dbeafe;

  border:1px solid #bfdbfe;

  color:#2563eb;

  padding:6px 16px;

  border-radius:999px;

  font-size:11px;

  font-weight:700;

  letter-spacing:0.08em;

  text-transform:uppercase;

  margin-bottom:18px;

  position:relative;

  z-index:2;
}

.gr-hero-title{
  font-size:
    clamp(30px,5vw,44px);

  font-weight:800;

  color:#0f172a;

  line-height:1.2;

  position:relative;

  z-index:2;
}

.gr-hero-sub{
  margin-top:12px;

  color:#475569;

  font-size:15px;

  line-height:1.9;

  max-width:620px;

  margin-inline:auto;

  position:relative;

  z-index:2;
}

/* LAYOUT */

.gr-container{
  max-width:1100px;

  margin:0 auto;

  padding:30px 16px 60px;

  display:grid;

  grid-template-columns:
    1fr 320px;

  gap:20px;
}

/* CARDS */

.gr-card,
.gr-info-box{
  background:#ffffff;

  border:1px solid #e2e8f0;

  border-radius:18px;

  padding:24px;

  box-shadow:
    0 4px 20px rgba(15,23,42,0.04);
}

.gr-card-title{
  font-size:16px;

  font-weight:700;

  color:#0f172a;

  margin-bottom:22px;

  display:flex;

  align-items:center;

  gap:10px;
}

.gr-card-title-dot{
  width:8px;
  height:8px;

  border-radius:50%;

  background:#2563eb;
}

/* FORM */

.gr-field{
  margin-bottom:18px;
}

.gr-field label,
.gr-dept-label{
  display:block;

  margin-bottom:7px;

  font-size:12px;

  font-weight:600;

  color:#475569;
}

.gr-field input,
.gr-field textarea{
  width:100%;

  padding:13px 14px;

  border:1px solid #dbe2ea;

  border-radius:12px;

  background:#ffffff;

  font-size:14px;

  outline:none;

  transition:0.2s ease;
}

.gr-field input:focus,
.gr-field textarea:focus{
  border-color:#2563eb;

  box-shadow:
    0 0 0 4px rgba(37,99,235,0.08);
}

.gr-field textarea{
  min-height:120px;

  resize:vertical;
}

.gr-field input.err,
.gr-field textarea.err{
  border-color:#ef4444;
}

.gr-err{
  margin-top:5px;

  font-size:12px;

  color:#ef4444;
}

/* ROWS */

.gr-row{
  display:grid;

  grid-template-columns:
    1fr 1fr;

  gap:14px;
}

/* DEPARTMENT */

.gr-dept-grid{
  display:grid;

  grid-template-columns:
    repeat(4,1fr);

  gap:10px;
}

.gr-dept-item{
  border:1px solid #e2e8f0;

  border-radius:14px;

  padding:16px 10px;

  text-align:center;

  cursor:pointer;

  background:#ffffff;

  transition:0.2s ease;
}

.gr-dept-item:hover{
  border-color:#2563eb;

  transform:translateY(-2px);
}

.gr-dept-item.active{
  background:#eff6ff;

  border-color:#2563eb;
}

.gr-dept-icon{
  margin-bottom:8px;

  display:flex;

  justify-content:center;
}

.gr-dept-name{
  font-size:12px;

  font-weight:600;

  color:#334155;

  line-height:1.5;
}

/* BUTTON */

.gr-submit{
  width:100%;

  margin-top:10px;

  padding:14px;

  border:none;

  border-radius:12px;

  background:#2563eb;

  color:white;

  font-size:14px;

  font-weight:700;

  cursor:pointer;

  display:flex;

  align-items:center;

  justify-content:center;

  gap:8px;

  transition:0.2s ease;
}

.gr-submit:hover{
  background:#1d4ed8;
}

.gr-submit:disabled{
  opacity:0.7;

  cursor:not-allowed;
}

/* SIDEBAR */

.gr-sidebar{
  display:flex;

  flex-direction:column;

  gap:18px;
}

.gr-contact-card{
  display:flex;

  align-items:flex-start;

  gap:12px;

  padding:14px 0;

  border-bottom:1px solid #e2e8f0;
}

.gr-contact-card:last-child{
  border-bottom:none;
}

.gr-contact-icon{
  width:40px;
  height:40px;

  border-radius:12px;

  display:flex;

  align-items:center;

  justify-content:center;

  color:white;

  flex-shrink:0;
}

.gr-contact-btn{
  margin-top:6px;

  padding:6px 12px;

  border:none;

  border-radius:999px;

  color:white;

  font-size:11px;

  font-weight:700;

  cursor:pointer;
}

/* INFO */

.gr-info-box h4{
  font-size:15px;

  font-weight:700;

  margin-bottom:12px;
}

.gr-info-row{
  display:flex;

  justify-content:space-between;

  align-items:center;

  gap:10px;

  padding:12px 0;

  border-bottom:1px solid #e2e8f0;

  font-size:13px;
}

.gr-info-row:last-child{
  border-bottom:none;
}

/* TOAST */

.gr-toast{
  position:fixed;

  top:16px;
  right:16px;

  z-index:999;

  display:flex;

  align-items:center;

  gap:8px;

  padding:12px 16px;

  border-radius:12px;

  font-size:13px;

  font-weight:700;

  box-shadow:
    0 8px 24px rgba(0,0,0,0.08);
}

.gr-toast.success{
  background:#dcfce7;
  color:#166534;
}

.gr-toast.error{
  background:#fee2e2;
  color:#dc2626;
}

/* TABLET */

@media(max-width:900px){

  .gr-container{
    grid-template-columns:1fr;
  }

  .gr-sidebar{
    order:2;
  }
}

/* MOBILE */

@media(max-width:640px){

  .gr-hero{
    padding:65px 16px 45px;
  }

  .gr-hero-title{
    font-size:30px;

    line-height:1.3;
  }

  .gr-hero-sub{
    font-size:13px;

    line-height:1.8;
  }

  .gr-container{
    padding:22px 14px 40px;
  }

  .gr-row{
    grid-template-columns:1fr;
  }

  .gr-dept-grid{
    grid-template-columns:
      repeat(2,1fr);
  }

  .gr-card,
  .gr-info-box{
    padding:18px;
  }

  .gr-field input,
  .gr-field textarea{
    font-size:13px;
  }

  .gr-submit{
    font-size:13px;
  }

  .gr-contact-card{
    gap:10px;
  }

  .gr-contact-btn{
    font-size:10px;
  }

  .gr-info-row{
    font-size:12px;
  }
}`}</style>

      <div className="gr-root">
        {status && (
          <div className={`gr-toast ${status}`}>
            {status==="success" ? '✅' : '⚠️'}
            {status==="success" ? t('grievance.toast.success') : t('grievance.toast.error')}
          </div>
        )}

        <div className="gr-hero">
          <div className="gr-hero-badge">{t('grievance.hero.badge')}</div>
          <div className="gr-hero-title">{t('grievance.hero.title')}</div>
          <div className="gr-hero-sub">{t('grievance.hero.sub')}</div>
        </div>



        <div className="gr-container">
          {/* FORM */}
          <div className="gr-card">
            <div className="gr-card-title">
              <div className="gr-card-title-dot" />
              {t('grievance.form.title')}
            </div>


            <div className="gr-row">
              <div className="gr-field">
                <label>{t('grievance.form.fullName.label')} *</label>
                <input placeholder={t('grievance.form.fullName.placeholder')} value={form.fullName}
                  onChange={e=>set("fullName",e.target.value)} className={errors.fullName?"err":""} />
                {errors.fullName && <div className="gr-err">⚠️ {errors.fullName}</div>}
              </div>
              <div className="gr-field">
                <label>{t('grievance.form.mobile.label')} *</label>
                <input placeholder={t('grievance.form.mobile.placeholder')} value={form.mobile} maxLength={10}
                  onChange={e=>set("mobile",e.target.value.replace(/\D/g,""))} className={errors.mobile?"err":""} />
                {errors.mobile && <div className="gr-err">⚠️ {errors.mobile}</div>}
              </div>
            </div>

            <div className="gr-row">
              <div className="gr-field">
                <label>{t('grievance.form.aadhaar.label')} *</label>
                <input placeholder={t('grievance.form.aadhaar.placeholder')} value={form.aadhaar} maxLength={12}
                  onChange={e=>set("aadhaar",e.target.value.replace(/\D/g,""))} className={errors.aadhaar?"err":""} />
                {errors.aadhaar && <div className="gr-err">⚠️ {errors.aadhaar}</div>}
              </div>
              <div className="gr-field">
                <label>{t('grievance.form.email.optionalLabel')}</label>
                <input placeholder={t('grievance.form.email.placeholder')} value={form.email}
                  onChange={e=>set("email",e.target.value)} />
              </div>
            </div>

            <div className="gr-field">
              <span className="gr-dept-label">{t('grievance.form.department.label')} *</span>
              <div className="gr-dept-grid">
                {departments.map(d=>(
                  <div key={d.name}
                    className={`gr-dept-item${form.department===d.name?" active":""}`}
                    onClick={()=>set("department",d.name)}
                  >
                    <div className="gr-dept-icon">
                      <span style={{ color: form.department===d.name ? d.color : "#94a3b8", fontSize: 18 }}>{d.icon}</span>
                    </div>
                      <div className="gr-dept-name">
                        {t(
                          `grievance.form.department.${d.name === "Water Supply" ? 'waterSupply' : d.name === "Road & Infrastructure" ? 'roadInfra' : d.name === "Health Department" ? 'health' : d.name === "Education" ? 'education' : d.name === "Agriculture" ? 'agriculture' : d.name === "Revenue" ? 'revenue' : d.name === "Sanitation" ? 'sanitation' : 'electricity'}`
                        ) || d.label}
                      </div>
                  </div>
                ))}
              </div>
              {errors.department && <div className="gr-err">⚠️ {errors.department}</div>}
            </div>

            <div className="gr-field">
              <label>{t('grievance.form.details.label')} *</label>
              <textarea placeholder={t('grievance.form.details.placeholder')} value={form.details}
                onChange={e=>set("details",e.target.value)} className={errors.details?"err":""} />
              {errors.details && <div className="gr-err">⚠️ {errors.details}</div>}
            </div>

            <button className="gr-submit" onClick={handleSubmit} disabled={loading}>
              ➤
              {loading ? t('grievance.form.submitting') : t('grievance.form.submit')}
            </button>
          </div>

          {/* SIDEBAR */}
          <div className="gr-sidebar">
            <div className="gr-card">
              <div className="gr-card-title"><div className="gr-card-title-dot" /> {t('grievance.sidebar.officeContact.title')}</div>
              {contactInfo.map(item=>(
                <div className="gr-contact-card" key={item.label}>
                  <div className="gr-contact-icon" style={{ background:item.color }}>
                    <span style={{ fontSize: 16 }}>{item.Icon}</span>
                  </div>
                  <div style={{ flex:1,minWidth:0 }}>
                    <div style={{ fontSize:10,fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:3 }}>{item.label}</div>
                    <div style={{ fontSize:13,fontWeight:600,color:"#1a2236",wordBreak:"break-all" }}>{item.value}</div>
                  </div>
                  {item.action && (
                    <button className="gr-contact-btn" style={{ background:item.color }}
                      onClick={()=>window.location.href=item.href}>
                      {item.action==="call"?"Call":"Email"}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="gr-info-box" style={{ background:"#eff6ff",border:"1px solid #bfdbfe" }}>
              <h4 style={{ color:"#1e3a8a" }}>{t('grievance.sidebar.officeHours.title')}</h4>
              {[
                {
                  day: t('grievance.sidebar.officeHours.mondayToFriday'),
                  time: t('grievance.sidebar.officeHours.mondayToFriday.time'),
                  bc: '#dbeafe',
                },
                {
                  day: t('grievance.sidebar.officeHours.saturday'),
                  time: t('grievance.sidebar.officeHours.saturday.time'),
                  bc: '#dbeafe',
                },
                {
                  day: t('grievance.sidebar.officeHours.sunday'),
                  time: t('grievance.sidebar.officeHours.sunday.value'),
                  bc: '#dbeafe',
                },
              ].map(({ day, time, bc }) => (
                <div key={day} className="gr-info-row" style={{ borderColor:"#bfdbfe" }}>
                  <span style={{ color:"#374151" }}>{day}</span>
                  <span style={{ fontWeight:700,color:"#1e40af" }}>{time}</span>
                </div>
              ))}
            </div>

            <div className="gr-info-box" style={{ background:"#f0fdf4",border:"1px solid #86efac" }}>
              <h4 style={{ color:"#15803d" }}>{t('grievance.sidebar.status.title')}</h4>
              {[
                {
                  label: t('grievance.sidebar.status.pending'),
                  val: t('grievance.sidebar.status.pending.value'),
                },
                {
                  label: t('grievance.sidebar.status.followup'),
                  val: t('grievance.sidebar.status.followup.value'),
                },
              ].map(({ label, val }) => (

                <div key={label} className="gr-info-row" style={{ borderColor:"#bbf7d0" }}>
                  <span style={{ color:"#374151" }}>{label}</span>
                  <span style={{ fontWeight:700,color:"#15803d" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}