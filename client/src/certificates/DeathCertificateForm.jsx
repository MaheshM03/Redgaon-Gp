
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

import { useTranslator } from "../context/LanguageContext";

export default function DeathCertificateForm() {

  const navigate = useNavigate();

  const { t } = useTranslator();

  const [step, setStep] = useState(1);

  const [formData, setFormData] =
    useState({
      mobile: "",
      otp: "",

      deceasedName: "",
      deathDate: "",
      gender: "",
      deathPlace: "",

      informantName: "",
      relation: "",
      address: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {

    alert(
      t(
        "deathForm.success.title"
      )
    );

    navigate(
      "/death-certificate"
    );
  };

  return (
    <>
      <Navbar />

      <div className="dcf-page">

        {/* HEADER */}

        <div className="dcf-header">

          <h1 className="dcf-title">
            {t("death.title")}
          </h1>

          <p className="dcf-subtitle">
            {t(
              "death.card.title"
            )}
          </p>

        </div>

        {/* STEPPER */}

        <div className="dcf-stepper">

          <div
            className={`dcf-step ${
              step >= 1
                ? "active"
                : ""
            }`}
          >
            1
          </div>

          <div
            className={`dcf-line ${
              step >= 2
                ? "active"
                : ""
            }`}
          />

          <div
            className={`dcf-step ${
              step >= 2
                ? "active"
                : ""
            }`}
          >
            2
          </div>

          <div
            className={`dcf-line ${
              step >= 3
                ? "active"
                : ""
            }`}
          />

          <div
            className={`dcf-step ${
              step >= 3
                ? "active"
                : ""
            }`}
          >
            3
          </div>

          <div
            className={`dcf-line ${
              step >= 4
                ? "active"
                : ""
            }`}
          />

          <div
            className={`dcf-step ${
              step >= 4
                ? "active"
                : ""
            }`}
          >
            4
          </div>

          <div
            className={`dcf-line ${
              step >= 5
                ? "active"
                : ""
            }`}
          />

          <div
            className={`dcf-step ${
              step >= 5
                ? "active"
                : ""
            }`}
          >
            5
          </div>

        </div>

        {/* FORM CARD */}

        <div className="dcf-card">

          {/* STEP 1 */}

          {step === 1 && (
            <div>

              <h2 className="dcf-step-title">
                {t(
                  "deathForm.step1.title"
                )}
              </h2>

              <p className="dcf-step-sub">
                {t(
                  "deathForm.step1.subtitle"
                )}
              </p>

              <div className="dcf-field">

                <label>
                  Mobile Number
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={
                    formData.mobile
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter mobile number"
                />

              </div>

              <div className="dcf-field">

                <label>
                  OTP
                </label>

                <input
                  type="text"
                  name="otp"
                  value={
                    formData.otp
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter OTP"
                />

              </div>

              <button
                className="dcf-btn"
                onClick={nextStep}
              >
                {t(
                  "deathForm.step1.verify"
                )}
              </button>

            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <div>

              <h2 className="dcf-step-title">
                {t(
                  "deathForm.step2.title"
                )}
              </h2>

              <p className="dcf-step-sub">
                {t(
                  "deathForm.step2.subtitle"
                )}
              </p>

              <div className="dcf-field">

                <label>
                  Deceased Name
                </label>

                <input
                  type="text"
                  name="deceasedName"
                  value={
                    formData.deceasedName
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-field">

                <label>
                  Date of Death
                </label>

                <input
                  type="date"
                  name="deathDate"
                  value={
                    formData.deathDate
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-field">

                <label>
                  Gender
                </label>

                <select
                  name="gender"
                  value={
                    formData.gender
                  }
                  onChange={
                    handleChange
                  }
                >
                  <option value="">
                    Select
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>

              <div className="dcf-field">

                <label>
                  Place of Death
                </label>

                <input
                  type="text"
                  name="deathPlace"
                  value={
                    formData.deathPlace
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-btn-row">

                <button
                  className="dcf-btn-outline"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button
                  className="dcf-btn"
                  onClick={nextStep}
                >
                  Next
                </button>

              </div>

            </div>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <div>

              <h2 className="dcf-step-title">
                {t(
                  "deathForm.step3.title"
                )}
              </h2>

              <p className="dcf-step-sub">
                {t(
                  "deathForm.step3.subtitle"
                )}
              </p>

              <div className="dcf-field">

                <label>
                  Informant Name
                </label>

                <input
                  type="text"
                  name="informantName"
                  value={
                    formData.informantName
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-field">

                <label>
                  Relation
                </label>

                <input
                  type="text"
                  name="relation"
                  value={
                    formData.relation
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-field">

                <label>
                  Address
                </label>

                <textarea
                  name="address"
                  value={
                    formData.address
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>

              <div className="dcf-btn-row">

                <button
                  className="dcf-btn-outline"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button
                  className="dcf-btn"
                  onClick={nextStep}
                >
                  Next
                </button>

              </div>

            </div>
          )}

          {/* STEP 4 */}

          {step === 4 && (
            <div>

              <h2 className="dcf-step-title">
                {t(
                  "deathForm.step4.title"
                )}
              </h2>

              <p className="dcf-step-sub">
                {t(
                  "deathForm.step4.subtitle"
                )}
              </p>

              <div className="dcf-upload">

                <input
                  type="file"
                />

              </div>

              <div className="dcf-btn-row">

                <button
                  className="dcf-btn-outline"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button
                  className="dcf-btn"
                  onClick={nextStep}
                >
                  Next
                </button>

              </div>

            </div>
          )}

          {/* STEP 5 */}

          {step === 5 && (
            <div>

              <h2 className="dcf-step-title">
                {t(
                  "deathForm.step5.title"
                )}
              </h2>

              <p className="dcf-step-sub">
                {t(
                  "deathForm.step5.subtitle"
                )}
              </p>

              <div className="dcf-payment">

                <h3>
                  ₹20
                </h3>

                <p>
                  Application Fee
                </p>

              </div>

              <div className="dcf-btn-row">

                <button
                  className="dcf-btn-outline"
                  onClick={prevStep}
                >
                  Back
                </button>

                <button
                  className="dcf-btn"
                  onClick={
                    submitForm
                  }
                >
                  Pay & Submit
                </button>

              </div>

            </div>
          )}

        </div>

      </div>

      <Footer />

      <style>{`
        *{
          box-sizing:border-box;
        }

        .dcf-page{
          min-height:100vh;
          background:#f8fafc;
          padding:40px 20px;
          font-family:Inter,sans-serif;
        }

        .dcf-header{
          text-align:center;
          margin-bottom:30px;
        }

        .dcf-title{
          font-size:38px;
          font-weight:800;
          color:#0f172a;
          margin-bottom:10px;
        }

        .dcf-subtitle{
          color:#64748b;
          font-size:15px;
        }

        .dcf-stepper{
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:40px;
          flex-wrap:wrap;
        }

        .dcf-step{
          width:42px;
          height:42px;
          border-radius:50%;
          background:#e2e8f0;
          color:#64748b;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
        }

        .dcf-step.active{
          background:#2563eb;
          color:white;
        }

        .dcf-line{
          width:70px;
          height:4px;
          background:#cbd5e1;
        }

        .dcf-line.active{
          background:#2563eb;
        }

        .dcf-card{
          max-width:700px;
          margin:auto;
          background:white;
          border-radius:18px;
          padding:35px;
          box-shadow:
            0 8px 24px rgba(0,0,0,0.06);
        }

        .dcf-step-title{
          font-size:28px;
          font-weight:700;
          margin-bottom:8px;
          color:#0f172a;
        }

        .dcf-step-sub{
          color:#64748b;
          margin-bottom:28px;
        }

        .dcf-field{
          margin-bottom:20px;
        }

        .dcf-field label{
          display:block;
          margin-bottom:8px;
          font-weight:600;
          color:#334155;
        }

        .dcf-field input,
        .dcf-field select,
        .dcf-field textarea{
          width:100%;
          padding:13px 14px;
          border:1px solid #cbd5e1;
          border-radius:10px;
          font-size:14px;
        }

        .dcf-field textarea{
          min-height:100px;
        }

        .dcf-btn-row{
          display:flex;
          gap:12px;
          margin-top:20px;
        }

        .dcf-btn{
          flex:1;
          border:none;
          background:#2563eb;
          color:white;
          padding:14px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
        }

        .dcf-btn-outline{
          flex:1;
          border:1px solid #cbd5e1;
          background:white;
          color:#334155;
          padding:14px;
          border-radius:10px;
          font-weight:700;
          cursor:pointer;
        }

        .dcf-upload{
          border:2px dashed #cbd5e1;
          padding:40px;
          border-radius:14px;
          text-align:center;
        }

        .dcf-payment{
          background:#eff6ff;
          border-radius:14px;
          padding:30px;
          text-align:center;
          margin-bottom:20px;
        }

        .dcf-payment h3{
          font-size:40px;
          color:#2563eb;
          margin-bottom:8px;
        }

        @media(max-width:768px){

          .dcf-title{
            font-size:30px;
          }

          .dcf-card{
            padding:24px;
          }

          .dcf-line{
            width:40px;
          }

          .dcf-btn-row{
            flex-direction:column;
          }
        }

        @media(max-width:480px){

          .dcf-page{
            padding:30px 14px;
          }

          .dcf-title{
            font-size:26px;
          }

          .dcf-step{
            width:36px;
            height:36px;
            font-size:14px;
          }

          .dcf-line{
            width:24px;
          }

          .dcf-card{
            padding:20px;
          }
        }
      `}</style>
    </>
  );
}