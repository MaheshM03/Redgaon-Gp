import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";


// ======================================
// INPUT COMPONENT
// ======================================

const Input = ({
  label,
  marathi,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = true,
}) => {

  return (

    <div style={styles.fieldWrap}>

      <label style={styles.label}>

        <span style={styles.labelMr}>
          {marathi}
        </span>

        <span style={styles.labelEn}>

          {label}

          {required && (
            <span style={styles.req}>
              {" "}*
            </span>
          )}

        </span>

      </label>

      <input
        style={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />

    </div>
  );
};


// ======================================
// SELECT COMPONENT
// ======================================

const Select = ({
  label,
  marathi,
  name,
  value,
  onChange,
  options,
}) => {

  return (

    <div style={styles.fieldWrap}>

      <label style={styles.label}>

        <span style={styles.labelMr}>
          {marathi}
        </span>

        <span style={styles.labelEn}>
          {label}
        </span>

      </label>

      <select
        style={styles.input}
        name={name}
        value={value}
        onChange={onChange}
      >

        <option value="">
          -- Select --
        </option>

        {options.map((item) => (

          <option
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>

        ))}

      </select>

    </div>
  );
};


// ======================================
// TEXTAREA COMPONENT
// ======================================

const Textarea = ({
  label,
  marathi,
  name,
  value,
  onChange,
}) => {

  return (

    <div style={styles.fieldWrap}>

      <label style={styles.label}>

        <span style={styles.labelMr}>
          {marathi}
        </span>

        <span style={styles.labelEn}>
          {label}
        </span>

      </label>

      <textarea
        style={styles.textarea}
        name={name}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};


// ======================================
// MAIN COMPONENT
// ======================================

export default function BuildingPermitCertificateForm() {

  const navigate = useNavigate();

  const { t } = useTranslator();

  const [step, setStep] =
    useState(1);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({

      applicantName: "",
      mobile: "",

      aadhar: "",
      surveyNumber: "",

      plotNumber: "",
      buildingType: "",

      area: "",
      address: "",

    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const tokenNumber =
    "BP" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (
    <>

      <Navbar />

      <div style={styles.page}>


        {/* TOP BAR */}

        <div style={styles.topBar}>

          <div style={styles.topLeft}>

            <button
              style={styles.backBtn}
              onClick={() =>
                navigate(
                  "/building-permit"
                )
              }
            >
              ←
            </button>

            <div>

              <h2 style={styles.topTitle}>
                {t("permitForm.title")}
              </h2>

              <p style={styles.topSub}>
                {t("permitForm.subtitle")}
              </p>

            </div>

          </div>

          <div style={styles.feeBox}>
            ₹100
          </div>

        </div>


        {/* STEPPER */}

        {!success && (

          <div style={styles.stepper}>

            {[1,2,3,4,5].map((item) => (

              <div
                key={item}
                style={styles.stepItem}
              >

                <div
                  style={{
                    ...styles.circle,

                    background:
                      step >= item
                        ? "#fbbf24"
                        : "#fff",

                    color:
                      step >= item
                        ? "#000"
                        : "#94a3b8",
                  }}
                >
                  {item}
                </div>

              </div>
            ))}

          </div>

        )}


        <div style={styles.container}>


          {/* STEP 1 */}

          {step === 1 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("permitForm.applicantName")}
              </h2>

              <div style={styles.grid}>

                <Input
                  label={t("permitForm.applicantName")}
                  marathi={t("permitForm.applicantName")}
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                />

                <Input
                  label={t("permitForm.mobile")}
                  marathi={t("permitForm.mobile")}
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

              </div>

              <button
                style={styles.primaryBtn}
                onClick={() =>
                  setStep(2)
                }
              >
                {t("permitForm.next")}
              </button>

            </div>

          )}


          {/* STEP 2 */}

          {step === 2 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("permitForm.aadhar")}
              </h2>

              <div style={styles.grid}>

                <Input
                  label={t("permitForm.aadhar")}
                  marathi={t("permitForm.aadhar")}
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                />

                <Input
                  label={t("permitForm.survey")}
                  marathi={t("permitForm.survey")}
                  name="surveyNumber"
                  value={formData.surveyNumber}
                  onChange={handleChange}
                />

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(1)
                  }
                >
                  {t("permitForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(3)
                  }
                >
                  {t("permitForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 3 */}

          {step === 3 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("permitForm.buildingType")}
              </h2>

              <div style={styles.grid}>

                <Input
                  label={t("permitForm.plot")}
                  marathi={t("permitForm.plot")}
                  name="plotNumber"
                  value={formData.plotNumber}
                  onChange={handleChange}
                />

                <Select
                  label={t("permitForm.buildingType")}
                  marathi={t("permitForm.buildingType")}
                  name="buildingType"
                  value={formData.buildingType}
                  onChange={handleChange}
                  options={[
                    {
                      value:"Residential",
                      label:t("permitForm.residential"),
                    },

                    {
                      value:"Commercial",
                      label:t("permitForm.commercial"),
                    },
                  ]}
                />

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(2)
                  }
                >
                  {t("permitForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(4)
                  }
                >
                  {t("permitForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 4 */}

          {step === 4 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("permitForm.address")}
              </h2>

              <Input
                label={t("permitForm.area")}
                marathi={t("permitForm.area")}
                name="area"
                value={formData.area}
                onChange={handleChange}
              />

              <Textarea
                label={t("permitForm.address")}
                marathi={t("permitForm.address")}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(3)
                  }
                >
                  {t("permitForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(5)
                  }
                >
                  {t("permitForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 5 */}

          {step === 5 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("permitForm.upload")}
              </h2>

              <div style={styles.uploadBox}>

                <input type="file" />

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(4)
                  }
                >
                  {t("permitForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setSuccess(true)
                  }
                >
                  {t("permitForm.submit")}
                </button>

              </div>

            </div>

          )}


          {/* SUCCESS */}

          {success && (

            <div style={styles.card}>

              <div style={styles.successIcon}>
                ✓
              </div>

              <h2 style={styles.heading}>
                {t("permitForm.success")}
              </h2>

              <div style={styles.tokenBox}>

                <p>
                  {t("permitForm.token")}
                </p>

                <h1>
                  {tokenNumber}
                </h1>

              </div>

              <button
                style={styles.primaryBtn}
                onClick={() =>
                  navigate("/")
                }
              >
                {t("permitForm.home")}
              </button>

            </div>

          )}

        </div>

      </div>

      <Footer />

    </>
  );
}


// ======================================
// STYLES
// ======================================

const styles = {

  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    paddingBottom: "60px",
  },

  topBar: {
    background: "#1e293b",
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "14px",
  },

  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  backBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },

  topTitle: {
    color: "#fff",
    margin: 0,
    fontSize: "22px",
  },

  topSub: {
    color: "#cbd5e1",
    margin: 0,
    fontSize: "13px",
  },

  feeBox: {
    background: "#fbbf24",
    padding: "10px 18px",
    borderRadius: "12px",
    fontWeight: "700",
  },

  stepper: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    padding: "24px",
    flexWrap: "wrap",
  },

  stepItem: {
    display: "flex",
    alignItems: "center",
  },

  circle: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: "2px solid #cbd5e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  },

  container: {
    maxWidth: "850px",
    margin: "auto",
    padding: "0 16px",
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "24px",
    color: "#0f172a",
  },

  fieldWrap: {
    marginBottom: "20px",
  },

  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
  },

  labelMr: {
    fontWeight: "700",
    fontSize: "14px",
  },

  labelEn: {
    fontSize: "12px",
    color: "#64748b",
  },

  req: {
    color: "red",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    resize: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "16px",
  },

  btnRow: {
    display: "flex",
    gap: "14px",
    marginTop: "24px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    flex: 1,
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "#2563eb",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },

  secondaryBtn: {
    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    background: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  },

  uploadBox: {
    border: "2px dashed #cbd5e1",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
  },

  successIcon: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#22c55e",
    color: "#fff",
    fontSize: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },

  tokenBox: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
    marginBottom: "24px",
  },

};