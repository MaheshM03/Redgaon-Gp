import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

/* ─────────────────────────────────────────────
   INPUT COMPONENT
───────────────────────────────────────────── */

const Input = ({
  label,
  marathi,
  name,
  value,
  onChange,
  type = "text",
  required = true,
}) => (
  <div style={s.fieldWrap}>

    <label style={s.label}>

      <span style={s.labelMr}>
        {marathi}
      </span>

      <span style={s.labelEn}>
        {label}

        {required && (
          <span style={s.req}>
            {" "}*
          </span>
        )}
      </span>

    </label>

    <input
      style={s.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />

  </div>
);

/* ─────────────────────────────────────────────
   TEXTAREA COMPONENT
───────────────────────────────────────────── */

const Textarea = ({
  label,
  marathi,
  name,
  value,
  onChange,
}) => (
  <div style={s.fieldWrap}>

    <label style={s.label}>

      <span style={s.labelMr}>
        {marathi}
      </span>

      <span style={s.labelEn}>
        {label}
      </span>

    </label>

    <textarea
      style={s.textarea}
      name={name}
      value={value}
      onChange={onChange}
    />

  </div>
);

/* ─────────────────────────────────────────────
   SELECT COMPONENT
───────────────────────────────────────────── */

const Select = ({
  label,
  marathi,
  name,
  value,
  onChange,
  options,
}) => (
  <div style={s.fieldWrap}>

    <label style={s.label}>

      <span style={s.labelMr}>
        {marathi}
      </span>

      <span style={s.labelEn}>
        {label}
      </span>

    </label>

    <select
      style={s.input}
      name={name}
      value={value}
      onChange={onChange}
    >

      <option value="">
        -- Select --
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

/* ─────────────────────────────────────────────
   STEPS
───────────────────────────────────────────── */

const STEPS = [
  {
    n: 1,
    mr: "OTP सत्यापन",
    en: "Verification",
  },

  {
    n: 2,
    mr: "व्यवसाय माहिती",
    en: "Business Details",
  },

  {
    n: 3,
    mr: "मालक माहिती",
    en: "Owner Details",
  },

  {
    n: 4,
    mr: "कागदपत्रे",
    en: "Documents",
  },

  {
    n: 5,
    mr: "पेमेंट",
    en: "Payment",
  },
];

/* ─────────────────────────────────────────────
   STEPPER
───────────────────────────────────────────── */

function Stepper({ current }) {

  return (
    <div style={s.stepperOuter}>

      <div style={s.stepperInner}>

        {STEPS.map((step, i) => {

          const done =
            current > step.n;

          const active =
            current === step.n;

          return (
            <div
              key={step.n}
              style={s.stepCol}
            >

              {i > 0 && (
                <div
                  style={{
                    ...s.connector,

                    background:
                      done
                        ? "#e8b84b"
                        : "#d8dde6",
                  }}
                />
              )}

              <div
                style={{
                  ...s.circle,

                  background:
                    active || done
                      ? "#e8b84b"
                      : "#fff",

                  border:
                    `2px solid ${
                      active || done
                        ? "#e8b84b"
                        : "#d8dde6"
                    }`,
                }}
              >
                {done ? "✓" : step.n}
              </div>

              <div style={s.stepTexts}>

                <span style={s.stepMr}>
                  {step.mr}
                </span>

                <span style={s.stepEn}>
                  {step.en}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP 1
───────────────────────────────────────────── */

function Step1({ onNext }) {

  const [mobile, setMobile] =
    useState("");

  const [otp, setOtp] =
    useState("");

  return (
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
        label="Mobile Number"
        marathi="मोबाईल नंबर"
        name="mobile"
        value={mobile}
        onChange={(e) =>
          setMobile(e.target.value)
        }
      />

      <Input
        label="OTP"
        marathi="OTP"
        name="otp"
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value)
        }
      />

      <button
        style={s.primaryBtn}
        onClick={onNext}
      >
        Verify OTP →
      </button>

    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP 2
───────────────────────────────────────────── */

function Step2({
  data,
  setData,
  onNext,
  onBack,
}) {

  const upd = (e) =>
    setData((d) => ({
      ...d,
      [e.target.name]:
        e.target.value,
    }));

  return (
    <div style={s.stepCard}>

      <div style={s.stepHeader}>

        <div style={s.stepIcon}>
          🏪
        </div>

        <h2 style={s.stepTitle}>
          व्यवसाय माहिती
        </h2>

        <p style={s.stepSubtitle}>
          Business Details
        </p>

      </div>

      <Input
        label="Business Name"
        marathi="व्यवसायाचे नाव"
        name="businessName"
        value={data.businessName}
        onChange={upd}
      />

      <Input
        label="Business Address"
        marathi="व्यवसायाचा पत्ता"
        name="businessAddress"
        value={data.businessAddress}
        onChange={upd}
      />

      <div style={s.grid2}>

        <Input
          label="Business Type"
          marathi="व्यवसाय प्रकार"
          name="businessType"
          value={data.businessType}
          onChange={upd}
        />

        <Select
          label="License Type"
          marathi="परवाना प्रकार"
          name="licenseType"
          value={data.licenseType}
          onChange={upd}
          options={[
            {
              value: "new",
              label: "New",
            },

            {
              value: "renewal",
              label: "Renewal",
            },
          ]}
        />

      </div>

      <div style={s.btnRow}>

        <button
          style={s.ghostBtn}
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          style={s.primaryBtn}
          onClick={onNext}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP 3
───────────────────────────────────────────── */

function Step3({
  data,
  setData,
  onNext,
  onBack,
}) {

  const upd = (e) =>
    setData((d) => ({
      ...d,
      [e.target.name]:
        e.target.value,
    }));

  return (
    <div style={s.stepCard}>

      <div style={s.stepHeader}>

        <div style={s.stepIcon}>
          👤
        </div>

        <h2 style={s.stepTitle}>
          मालक माहिती
        </h2>

        <p style={s.stepSubtitle}>
          Owner Details
        </p>

      </div>

      <Input
        label="Owner Name"
        marathi="मालकाचे नाव"
        name="ownerName"
        value={data.ownerName}
        onChange={upd}
      />

      <Input
        label="Mobile Number"
        marathi="मोबाईल नंबर"
        name="mobile"
        value={data.mobile}
        onChange={upd}
      />

      <Input
        label="Aadhar Number"
        marathi="आधार नंबर"
        name="aadhar"
        value={data.aadhar}
        onChange={upd}
      />

      <Textarea
        label="Owner Address"
        marathi="मालकाचा पत्ता"
        name="ownerAddress"
        value={data.ownerAddress}
        onChange={upd}
      />

      <div style={s.btnRow}>

        <button
          style={s.ghostBtn}
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          style={s.primaryBtn}
          onClick={onNext}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP 4
───────────────────────────────────────────── */

function Step4({
  onNext,
  onBack,
}) {

  return (
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

      <div style={s.btnRow}>

        <button
          style={s.ghostBtn}
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          style={s.primaryBtn}
          onClick={onNext}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP 5
───────────────────────────────────────────── */

function Step5({
  onBack,
  onSuccess,
}) {

  return (
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
          ₹150
        </h2>

        <p style={s.paymentText}>
          Trade License Fee
        </p>

      </div>

      <div style={s.btnRow}>

        <button
          style={s.ghostBtn}
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          style={s.primaryBtn}
          onClick={onSuccess}
        >
          Pay & Submit
        </button>

      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   SUCCESS
───────────────────────────────────────────── */

function Success({
  onHome,
}) {

  const token =
    "BTL" +
    Date.now()
      .toString()
      .slice(-8);

  return (
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
        Business Trade License Submitted Successfully
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
        onClick={onHome}
      >
        Back To Home
      </button>

    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function BusinessTradeLicenseForm() {

  const navigate =
    useNavigate();

  const [step, setStep] =
    useState(1);

  const [done, setDone] =
    useState(false);

  const [data, setData] =
    useState({
      businessName: "",
      businessAddress: "",
      businessType: "",
      licenseType: "",
      ownerName: "",
      mobile: "",
      aadhar: "",
      ownerAddress: "",
    });

  return (
    <>
      <Navbar />

      <div style={s.page}>

        <div style={s.topBar}>

          <div style={s.topBarLeft}>

            <button
              onClick={() =>
                navigate(
                  "/business-trade-license"
                )
              }
              style={s.backBtn}
            >
              ←
            </button>

            <div>

              <div style={s.topTitle}>
                व्यवसाय परवाना अर्ज
              </div>

              <div style={s.topSub}>
                Business Trade License Application
              </div>

            </div>

          </div>

          <div style={s.topRight}>
            Fee: ₹150
          </div>

        </div>

        {!done && (
          <Stepper current={step} />
        )}

        <div style={s.body}>

          {done ? (
            <Success
              onHome={() =>
                navigate(
                  "/business-trade-license"
                )
              }
            />
          ) : (
            <>
              {step === 1 && (
                <Step1
                  onNext={() =>
                    setStep(2)
                  }
                />
              )}

              {step === 2 && (
                <Step2
                  data={data}
                  setData={setData}
                  onNext={() =>
                    setStep(3)
                  }
                  onBack={() =>
                    setStep(1)
                  }
                />
              )}

              {step === 3 && (
                <Step3
                  data={data}
                  setData={setData}
                  onNext={() =>
                    setStep(4)
                  }
                  onBack={() =>
                    setStep(2)
                  }
                />
              )}

              {step === 4 && (
                <Step4
                  onNext={() =>
                    setStep(5)
                  }
                  onBack={() =>
                    setStep(3)
                  }
                />
              )}

              {step === 5 && (
                <Step5
                  onBack={() =>
                    setStep(4)
                  }
                  onSuccess={() =>
                    setDone(true)
                  }
                />
              )}
            </>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const s = {
  page: {
    minHeight: "100vh",
    background: "#f0f2f7",
    fontFamily: "Inter, sans-serif",
  },

  topBar: {
    background: "#1a2235",
    padding: "14px 24px",
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  topBarLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  backBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
  },

  topTitle: {
    color: "#e8b84b",
    fontWeight: "800",
  },

  topSub: {
    color: "#8a9ab8",
    fontSize: "12px",
  },

  topRight: {
    color: "#fff",
    fontWeight: "600",
  },

  stepperOuter: {
    background: "#fff",
    padding: "20px",
  },

  stepperInner: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  stepCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },

  connector: {
    position: "absolute",
    width: "80px",
    height: "2px",
    top: "18px",
    right: "50%",
  },

  circle: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
  },

  stepTexts: {
    marginTop: "8px",
    textAlign: "center",
  },

  stepMr: {
    fontSize: "12px",
    fontWeight: "700",
  },

  stepEn: {
    fontSize: "11px",
    color: "#777",
  },

  body: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "30px 16px 60px",
  },

  stepCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow:
      "0 4px 20px rgba(0,0,0,0.08)",
  },

  stepHeader: {
    marginBottom: "24px",
  },

  stepIcon: {
    fontSize: "34px",
    marginBottom: "10px",
  },

  stepTitle: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a2235",
  },

  stepSubtitle: {
    color: "#7a8a9e",
    fontSize: "14px",
  },

  grid2: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
  },

  fieldWrap: {
    marginBottom: "18px",
  },

  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "6px",
  },

  labelMr: {
    fontWeight: "700",
    fontSize: "13px",
  },

  labelEn: {
    color: "#7a8a9e",
    fontSize: "12px",
  },

  req: {
    color: "red",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border:
      "1.5px solid #d8dde8",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    minHeight: "90px",
    padding: "12px",
    borderRadius: "10px",
    border:
      "1.5px solid #d8dde8",
  },

  btnRow: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
  },

  primaryBtn: {
    flex: 1,
    padding: "13px",
    border: "none",
    borderRadius: "10px",
    background: "#e8b84b",
    fontWeight: "700",
    cursor: "pointer",
  },

  ghostBtn: {
    flex: 1,
    padding: "13px",
    borderRadius: "10px",
    border:
      "1.5px solid #d8dde8",
    background: "#fff",
    cursor: "pointer",
  },

  uploadBox: {
    border:
      "2px dashed #d8dde8",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
  },

  paymentBox: {
    background: "#fffbee",
    border:
      "2px solid #e8b84b",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "center",
    marginBottom: "20px",
  },

  paymentAmount: {
    fontSize: "42px",
    color: "#e8b84b",
  },

  paymentText: {
    color: "#666",
  },

  successIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#e8b84b",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    margin: "0 auto 20px",
  },

  tokenCard: {
    margin: "24px 0",
    padding: "20px",
    background: "#fffbee",
    border:
      "2px dashed #e8b84b",
    borderRadius: "12px",
  },

  tokenLabel: {
    color: "#777",
    marginBottom: "8px",
  },

  tokenValue: {
    color: "#e8b84b",
    fontSize: "28px",
    fontWeight: "800",
  },
};