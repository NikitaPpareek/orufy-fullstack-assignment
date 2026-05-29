import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!mobile) {
      alert("Please enter mobile number");
      return;
    }

    navigate("/otp");
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
            Productz
          </h1>

          <p
            style={{
              color: "#64748B",
            }}
          >
            Sign in to continue
          </p>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              color: "#334155",
              fontWeight: "600",
            }}
          >
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #CBD5E1",
              outline: "none",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
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
          Send OTP
        </button>
      </div>
    </div>
  );
}

export default Login;