import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";

export default function BusinessTradeLicense() {

  return (
    <>
      <Navbar />

      <div style={{
        minHeight:"100vh",
        background:"#f8fafc",
        paddingBottom:"60px"
      }}>

        <div style={{
          padding:"80px 20px",
          textAlign:"center",
          background:"linear-gradient(180deg,#eff6ff 0%,#f8fafc 100%)"
        }}>

          <h1 style={{
            fontSize:"42px",
            fontWeight:"800",
            marginBottom:"14px"
          }}>
            Business & Trade License
          </h1>

          <p style={{
            maxWidth:"700px",
            margin:"auto",
            color:"#475569",
            lineHeight:"1.8"
          }}>
            Apply for Business and Trade License online.
          </p>

        </div>

        <div style={{
          maxWidth:"900px",
          margin:"auto",
          padding:"40px 16px"
        }}>

          <div style={{
            background:"white",
            padding:"28px",
            borderRadius:"18px",
            border:"1px solid #e2e8f0"
          }}>

            <h2 style={{
              fontSize:"22px",
              marginBottom:"18px"
            }}>
              License Details
            </h2>

            <div style={{
              background:"#dbeafe",
              padding:"14px",
              borderRadius:"12px",
              color:"#2563eb",
              fontWeight:"700",
              marginBottom:"20px"
            }}>
              💰 Application Fee : ₹300
            </div>

            <h3>Required Documents</h3>

            <ul style={{
              paddingLeft:"20px",
              lineHeight:"2",
              color:"#475569"
            }}>

              <li>Aadhaar Card</li>

              <li>Shop Address Proof</li>

              <li>PAN Card</li>

              <li>Business Registration</li>

            </ul>

            <h3 style={{marginTop:"20px"}}>
              Application Process
            </h3>

            <ul style={{
              paddingLeft:"20px",
              lineHeight:"2",
              color:"#475569"
            }}>

              <li>Complete Application Form</li>

              <li>Upload Business Documents</li>

              <li>Verification Process</li>

              <li>License Approval</li>

            </ul>

            <h3 style={{marginTop:"20px"}}>
              Processing Time
            </h3>

            <div style={{
              background:"#f1f5f9",
              padding:"14px",
              borderRadius:"12px",
              marginTop:"10px"
            }}>
              7 - 10 Working Days
            </div>

          </div>

          <div style={{
            marginTop:"24px",
            background:"linear-gradient(135deg,#2563eb,#3b82f6)",
            color:"white",
            padding:"30px",
            borderRadius:"20px",
            textAlign:"center"
          }}>

            <h2 style={{
              fontSize:"24px",
              marginBottom:"12px"
            }}>
              Apply For Trade License
            </h2>

            <p>
              Start your business registration process online.
            </p>

            <Link
              to="/business-trade-license-apply"
              style={{
                display:"inline-block",
                marginTop:"18px",
                background:"white",
                color:"#2563eb",
                padding:"12px 20px",
                borderRadius:"12px",
                textDecoration:"none",
                fontWeight:"700"
              }}
            >
              Apply Now
            </Link>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}