import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    const savedOtp = localStorage.getItem("otp");

    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    if (otp !== savedOtp) {
      setError("Incorrect OTP");
      return;
    }

    localStorage.removeItem("otp");
    navigate("/home");
  };

  const handleResendOtp = () => {
    const generatedOtp = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    localStorage.setItem("otp", generatedOtp);

    alert(`New OTP: ${generatedOtp}`);

    setError("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#F8FAFC,#EEF2FF)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "40px",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.08)",
          border: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#7C3AED",
              marginBottom: "10px",
            }}
          >
            Verify OTP
          </h1>

          <p
            style={{
              color: "#64748B",
            }}
          >
            Enter the OTP sent to your mobile number
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);
            setError("");
          }}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #CBD5E1",
            outline: "none",
            textAlign: "center",
            fontSize: "18px",
            letterSpacing: "6px",
          }}
        />

        {error && (
          <p
            style={{
              color: "#EF4444",
              marginTop: "10px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            {error}
          </p>
        )}

        <button
          onClick={handleVerify}
          style={{
            width: "100%",
            marginTop: "25px",
            background: "#7C3AED",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          Verify OTP
        </button>

        <button
          onClick={handleResendOtp}
          style={{
            width: "100%",
            marginTop: "12px",
            background: "transparent",
            color: "#7C3AED",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}

export default Otp;