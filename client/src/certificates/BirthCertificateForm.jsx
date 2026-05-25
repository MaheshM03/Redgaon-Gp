import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";

import Footer from "../components/Sections/Footer";

export default function BirthCertificateForm() {

  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [done, setDone] = useState(false);

  const [data, setData] = useState({
    mobile: "",
    otp: "",
    childName: "",
    dob: "",
    gender: "",
    birthPlace: "",
    fatherName: "",
    motherName: "",
    address: "",
  });

  const token =
    "BC" +
    Date.now()
      .toString()
      .slice(-8);

  const upd = (e) => {

    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };

  return (
    <>
      <Navbar />

      <div style={s.page}>

        <style>{`

          *{
            box-sizing:border-box;
          }

          body{
            margin:0;
          }

          @media(max-width:768px){

            .mobile-grid{
              grid-template-columns:1fr !important;
            }

            .mobile-btns{
              flex-direction:column;
            }

          }

        `}</style>

        {/* TOP BAR */}

        <div style={s.topBar}>

          <div style={s.topBarLeft}>

            <button
              onClick={() =>
                navigate("/birth-certificate")
              }
              style={s.backBtn}
            >
              ←
            </button>

            <div>

              <div style={s.topTitle}>
                जन्म दाखला अर्ज
              </div>

              <div style={s.topSub}>
                Birth Certificate Application
              </div>

            </div>

          </div>

          <div style={s.topRight}>
            Fee : ₹20
          </div>

        </div>

        {/* STEPPER */}

        {!done && (

          <div style={s.stepperOuter}>

            <div style={s.stepperInner}>

              {[1,2,3,4,5].map((n) => (

                <div
                  key={n}
                  style={s.stepCol}
                >

                  <div
                    style={{
                      ...s.circle,

                      background:
                        step >= n
                          ? "#e8b84b"
                          : "#fff",

                      color:
                        step >= n
                          ? "#1a2235"
                          : "#999",

                      border:
                        step >= n
                          ? "2px solid #e8b84b"
                          : "2px solid #d8dde6",
                    }}
                  >
                    {n}
                  </div>

                  <div style={s.stepTexts}>

                    <div style={s.stepMr}>
                      {
                        [
                          "सत्यापन",
                          "बाळाची माहिती",
                          "पालक माहिती",
                          "कागदपत्रे",
                          "पेमेंट"
                        ][n - 1]
                      }
                    </div>

                    <div style={s.stepEn}>
                      {
                        [
                          "Verification",
                          "Child Details",
                          "Parent Details",
                          "Documents",
                          "Payment"
                        ][n - 1]
                      }
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* BODY */}

        <div style={s.body}>

          {/* STEP 1 */}

          {!done && step === 1 && (

            <div style={s.stepCard}>

              <div style={s.stepHeader}>

                <div style={s.stepIcon}>
                  📱
                </div>

                <h2 style={s.stepTitle}>
                  मोबाईल सत्यापन
                </h2>

                <p style={s.stepSubtitle}>
                  Mobile Verification
                </p>

              </div>

              <Input
                label="मोबाईल नंबर"
                name="mobile"
                value={data.mobile}
                onChange={upd}
                placeholder="Enter mobile number"
              />

              <Input
                label="OTP"
                name="otp"
                value={data.otp}
                onChange={upd}
                placeholder="Enter OTP"
              />

              <button
                style={s.primaryBtn}
                onClick={() => setStep(2)}
              >
                Verify OTP →
              </button>

            </div>

          )}

          {/* STEP 2 */}

          {!done && step === 2 && (

            <div style={s.stepCard}>

              <div style={s.stepHeader}>

                <div style={s.stepIcon}>
                  👶
                </div>

                <h2 style={s.stepTitle}>
                  बाळाची माहिती
                </h2>

                <p style={s.stepSubtitle}>
                  Child Details
                </p>

              </div>

              <div
                style={s.grid2}
                className="mobile-grid"
              >

                <Input
                  label="बाळाचे नाव"
                  name="childName"
                  value={data.childName}
                  onChange={upd}
                />

                <Input
                  label="जन्म तारीख"
                  name="dob"
                  type="date"
                  value={data.dob}
                  onChange={upd}
                />

              </div>

              <div
                style={s.grid2}
                className="mobile-grid"
              >

                <Select
                  label="लिंग"
                  name="gender"
                  value={data.gender}
                  onChange={upd}
                  options={[
                    {
                      value: "male",
                      label: "Male",
                    },

                    {
                      value: "female",
                      label: "Female",
                    },
                  ]}
                />

                <Input
                  label="जन्म ठिकाण"
                  name="birthPlace"
                  value={data.birthPlace}
                  onChange={upd}
                />

              </div>

              <div
                style={s.btnRow}
                className="mobile-btns"
              >

                <button
                  style={s.ghostBtn}
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>

                <button
                  style={s.primaryBtn}
                  onClick={() => setStep(3)}
                >
                  Next →
                </button>

              </div>

            </div>

          )}

          {/* STEP 3 */}

          {!done && step === 3 && (

            <div style={s.stepCard}>

              <div style={s.stepHeader}>

                <div style={s.stepIcon}>
                  👨‍👩‍👦
                </div>

                <h2 style={s.stepTitle}>
                  पालकांची माहिती
                </h2>

                <p style={s.stepSubtitle}>
                  Parent Details
                </p>

              </div>

              <Input
                label="वडिलांचे नाव"
                name="fatherName"
                value={data.fatherName}
                onChange={upd}
              />

              <Input
                label="आईचे नाव"
                name="motherName"
                value={data.motherName}
                onChange={upd}
              />

              <Textarea
                label="पत्ता"
                name="address"
                value={data.address}
                onChange={upd}
              />

              <div
                style={s.btnRow}
                className="mobile-btns"
              >

                <button
                  style={s.ghostBtn}
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>

                <button
                  style={s.primaryBtn}
                  onClick={() => setStep(4)}
                >
                  Next →
                </button>

              </div>

            </div>

          )}

          {/* STEP 4 */}

          {!done && step === 4 && (

            <div style={s.stepCard}>

              <div style={s.stepHeader}>

                <div style={s.stepIcon}>
                  📁
                </div>

                <h2 style={s.stepTitle}>
                  कागदपत्रे
                </h2>

                <p style={s.stepSubtitle}>
                  Upload Documents
                </p>

              </div>

              <div style={s.uploadBox}>

                <input type="file" />

              </div>

              <div
                style={s.btnRow}
                className="mobile-btns"
              >

                <button
                  style={s.ghostBtn}
                  onClick={() => setStep(3)}
                >
                  ← Back
                </button>

                <button
                  style={s.primaryBtn}
                  onClick={() => setStep(5)}
                >
                  Next →
                </button>

              </div>

            </div>

          )}

          {/* STEP 5 */}

          {!done && step === 5 && (

            <div style={s.stepCard}>

              <div style={s.stepHeader}>

                <div style={s.stepIcon}>
                  💳
                </div>

                <h2 style={s.stepTitle}>
                  पेमेंट
                </h2>

                <p style={s.stepSubtitle}>
                  Payment
                </p>

              </div>

              <div style={s.paymentBox}>

                <h2 style={s.paymentAmount}>
                  ₹20
                </h2>

                <p style={s.paymentText}>
                  Application Fee
                </p>

              </div>

              <div
                style={s.btnRow}
                className="mobile-btns"
              >

                <button
                  style={s.ghostBtn}
                  onClick={() => setStep(4)}
                >
                  ← Back
                </button>

                <button
                  style={s.primaryBtn}
                  onClick={() => setDone(true)}
                >
                  Pay & Submit
                </button>

              </div>

            </div>

          )}

          {/* SUCCESS */}

          {done && (

            <div
              style={{
                ...s.stepCard,
                textAlign: "center",
              }}
            >

              <div style={s.successIcon}>
                ✓
              </div>

              <h2 style={s.stepTitle}>
                अर्ज यशस्वी!
              </h2>

              <p style={s.stepSubtitle}>
                Application Submitted Successfully
              </p>

              <div style={s.tokenCard}>

                <p style={s.tokenLabel}>
                  Token Number
                </p>

                <h2 style={s.tokenValue}>
                  {token}
                </h2>

              </div>

              <button
                style={s.primaryBtn}
                onClick={() =>
                  navigate("/birth-certificate")
                }
              >
                Back To Home
              </button>

            </div>

          )}

        </div>

      </div>

      <Footer />

    </>
  );
}

/* INPUT */

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {

  return (
    <div style={s.fieldWrap}>

      <label style={s.label}>
        {label}
      </label>

      <input
        style={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

    </div>
  );
}

/* SELECT */

function Select({
  label,
  name,
  value,
  onChange,
  options,
}) {

  return (
    <div style={s.fieldWrap}>

      <label style={s.label}>
        {label}
      </label>

      <select
        style={s.input}
        name={name}
        value={value}
        onChange={onChange}
      >

        <option value="">
          Select
        </option>

        {options.map((o) => (

          <option
            key={o.value}
            value={o.value}
          >
            {o.label}
          </option>

        ))}

      </select>

    </div>
  );
}

/* TEXTAREA */

function Textarea({
  label,
  name,
  value,
  onChange,
}) {

  return (
    <div style={s.fieldWrap}>

      <label style={s.label}>
        {label}
      </label>

      <textarea
        style={s.textarea}
        name={name}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

/* STYLES */

const s = {

  page:{
    minHeight:"100vh",
    background:"#f0f2f7",
    fontFamily:"Inter, sans-serif",
  },

  topBar:{
    background:"#1a2235",
    padding:"14px 24px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"wrap",
    gap:"10px",
  },

  topBarLeft:{
    display:"flex",
    alignItems:"center",
    gap:"14px",
  },

  backBtn:{
    background:"none",
    border:"none",
    color:"#fff",
    fontSize:"20px",
    cursor:"pointer",
  },

  topTitle:{
    color:"#e8b84b",
    fontWeight:"800",
  },

  topSub:{
    color:"#8a9ab8",
    fontSize:"12px",
  },

  topRight:{
    color:"#fff",
    fontWeight:"600",
  },

  stepperOuter:{
    background:"#fff",
    padding:"20px",
  },

  stepperInner:{
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    gap:"10px",
  },

  stepCol:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },

  circle:{
    width:"38px",
    height:"38px",
    borderRadius:"50%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontWeight:"700",
  },

  stepTexts:{
    marginTop:"8px",
    textAlign:"center",
  },

  stepMr:{
    fontSize:"12px",
    fontWeight:"700",
  },

  stepEn:{
    fontSize:"11px",
    color:"#777",
  },

  body:{
    maxWidth:"760px",
    margin:"0 auto",
    padding:"30px 16px 60px",
  },

  stepCard:{
    background:"#fff",
    borderRadius:"16px",
    padding:"30px",
    boxShadow:"0 4px 20px rgba(0,0,0,0.08)",
  },

  stepHeader:{
    marginBottom:"24px",
  },

  stepIcon:{
    fontSize:"34px",
    marginBottom:"10px",
  },

  stepTitle:{
    fontSize:"28px",
    fontWeight:"800",
    color:"#1a2235",
  },

  stepSubtitle:{
    color:"#7a8a9e",
    fontSize:"14px",
  },

  grid2:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"18px",
  },

  fieldWrap:{
    marginBottom:"18px",
  },

  label:{
    display:"block",
    marginBottom:"6px",
    fontWeight:"600",
  },

  input:{
    width:"100%",
    padding:"12px 14px",
    borderRadius:"10px",
    border:"1.5px solid #d8dde8",
    fontSize:"14px",
  },

  textarea:{
    width:"100%",
    minHeight:"90px",
    padding:"12px",
    borderRadius:"10px",
    border:"1.5px solid #d8dde8",
  },

  btnRow:{
    display:"flex",
    gap:"12px",
    marginTop:"24px",
    flexWrap:"wrap",
  },

  primaryBtn:{
    flex:1,
    padding:"13px",
    border:"none",
    borderRadius:"10px",
    background:"#e8b84b",
    fontWeight:"700",
    cursor:"pointer",
  },

  ghostBtn:{
    flex:1,
    padding:"13px",
    borderRadius:"10px",
    border:"1.5px solid #d8dde8",
    background:"#fff",
    cursor:"pointer",
  },

  uploadBox:{
    border:"2px dashed #d8dde8",
    padding:"40px",
    borderRadius:"12px",
    textAlign:"center",
  },

  paymentBox:{
    background:"#fffbee",
    border:"2px solid #e8b84b",
    padding:"30px",
    borderRadius:"16px",
    textAlign:"center",
    marginBottom:"20px",
  },

  paymentAmount:{
    fontSize:"42px",
    color:"#e8b84b",
  },

  paymentText:{
    color:"#666",
  },

  successIcon:{
    width:"70px",
    height:"70px",
    borderRadius:"50%",
    background:"#e8b84b",
    color:"#fff",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"32px",
    margin:"0 auto 20px",
  },

  tokenCard:{
    margin:"24px 0",
    padding:"20px",
    background:"#fffbee",
    border:"2px dashed #e8b84b",
    borderRadius:"12px",
  },

  tokenLabel:{
    color:"#777",
    marginBottom:"8px",
  },

  tokenValue:{
    color:"#e8b84b",
    fontSize:"28px",
    fontWeight:"800",
  },
};