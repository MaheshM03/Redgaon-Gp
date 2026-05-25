import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslator } from "../context/LanguageContext";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";


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
}) => (
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
}) => (
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


// ======================================
// TEXTAREA COMPONENT
// ======================================

const Textarea = ({
  label,
  marathi,
  name,
  value,
  onChange,
}) => (
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


// ======================================
// MAIN COMPONENT
// ======================================

export default function MarriageCertificateForm() {

  const navigate = useNavigate();

  const { t } = useTranslator();

  const [step, setStep] =
    useState(1);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({

      mobile: "",
      otp: "",

      marriageDate: "",
      marriagePlace: "",
      registrationNumber: "",
      marriageType: "",

      groomName: "",
      brideName: "",
      address: "",

    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  return (
    <>

      <Navbar />

      <div style={styles.page}>

        <div style={styles.topBar}>

          <div style={styles.topLeft}>

            <button
              style={styles.backBtn}
              onClick={() =>
                navigate(
                  "/marriage-certificate"
                )
              }
            >
              ←
            </button>

            <div>

              <h2 style={styles.topTitle}>
                {t("marriageForm.top.title")}
              </h2>

              <p style={styles.topSub}>
                {t("marriageForm.top.subtitle")}
              </p>

            </div>

          </div>

          <div style={styles.feeBox}>
            {t("marriageForm.fee")}
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
                {t("marriageForm.mobileVerification")}
              </h2>

              <Input
                label={t("marriageForm.mobile")}
                marathi={t("marriageForm.mobile")}
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder={t("marriageForm.mobilePlaceholder")}
              />

              <Input
                label={t("marriageForm.otp")}
                marathi={t("marriageForm.otp")}
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder={t("marriageForm.otpPlaceholder")}
              />

              <button
                style={styles.primaryBtn}
                onClick={() =>
                  setStep(2)
                }
              >
                {t("marriageForm.verifyOtp")}
              </button>

            </div>

          )}


          {/* STEP 2 */}

          {step === 2 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("marriageForm.marriageDetails")}
              </h2>

              <div style={styles.grid}>

                <Input
                  label={t("marriageForm.marriageDate")}
                  marathi={t("marriageForm.marriageDate")}
                  name="marriageDate"
                  type="date"
                  value={formData.marriageDate}
                  onChange={handleChange}
                />

                <Input
                  label={t("marriageForm.marriagePlace")}
                  marathi={t("marriageForm.marriagePlace")}
                  name="marriagePlace"
                  value={formData.marriagePlace}
                  onChange={handleChange}
                />

              </div>

              <div style={styles.grid}>

                <Input
                  label={t("marriageForm.registrationNumber")}
                  marathi={t("marriageForm.registrationNumber")}
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                />

                <Select
                  label={t("marriageForm.marriageType")}
                  marathi={t("marriageForm.marriageType")}
                  name="marriageType"
                  value={formData.marriageType}
                  onChange={handleChange}
                  options={[
                    {
                      value:"hindu",
                      label:t("marriageForm.hindu"),
                    },

                    {
                      value:"court",
                      label:t("marriageForm.court"),
                    },

                    {
                      value:"other",
                      label:t("marriageForm.other"),
                    },
                  ]}
                />

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(1)
                  }
                >
                  {t("marriageForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(3)
                  }
                >
                  {t("marriageForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 3 */}

          {step === 3 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("marriageForm.brideGroom")}
              </h2>

              <Input
                label={t("marriageForm.groomName")}
                marathi={t("marriageForm.groomName")}
                name="groomName"
                value={formData.groomName}
                onChange={handleChange}
              />

              <Input
                label={t("marriageForm.brideName")}
                marathi={t("marriageForm.brideName")}
                name="brideName"
                value={formData.brideName}
                onChange={handleChange}
              />

              <Textarea
                label={t("marriageForm.address")}
                marathi={t("marriageForm.address")}
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(2)
                  }
                >
                  {t("marriageForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(4)
                  }
                >
                  {t("marriageForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 4 */}

          {step === 4 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("marriageForm.documents")}
              </h2>

              <div style={styles.uploadBox}>

                <input type="file" />

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(3)
                  }
                >
                  {t("marriageForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setStep(5)
                  }
                >
                  {t("marriageForm.next")}
                </button>

              </div>

            </div>

          )}


          {/* STEP 5 */}

          {step === 5 && !success && (

            <div style={styles.card}>

              <h2 style={styles.heading}>
                {t("marriageForm.payment")}
              </h2>

              <div style={styles.paymentCard}>

                <h1 style={styles.amount}>
                  ₹50
                </h1>

                <p>
                  {t("marriageForm.applicationFee")}
                </p>

              </div>

              <div style={styles.btnRow}>

                <button
                  style={styles.secondaryBtn}
                  onClick={() =>
                    setStep(4)
                  }
                >
                  {t("marriageForm.back")}
                </button>

                <button
                  style={styles.primaryBtn}
                  onClick={() =>
                    setSuccess(true)
                  }
                >
                  {t("marriageForm.paySubmit")}
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
                {t("marriageForm.successMr")}
              </h2>

              <p style={styles.subText}>
                {t("marriageForm.successEn")}
              </p>

              <div style={styles.tokenBox}>

                <p>
                  {t("marriageForm.token")}
                </p>

                <h1>
                  MC102938
                </h1>

              </div>

              <button
                style={styles.primaryBtn}
                onClick={() =>
                  navigate("/")
                }
              >
                {t("marriageForm.home")}
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

  subText: {
    color: "#64748b",
    marginBottom: "24px",
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

  paymentCard: {
    background: "#eff6ff",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
    marginBottom: "20px",
  },

  amount: {
    fontSize: "48px",
    margin: 0,
    color: "#2563eb",
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