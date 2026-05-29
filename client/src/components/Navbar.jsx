function Navbar() {
  return (
    <div
      style={{
        height: "72px",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left Side */}
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            color: "#0F172A",
            fontWeight: "700",
          }}
        >
          Dashboard
        </h2>

        <p
          style={{
            margin: "2px 0 0 0",
            fontSize: "13px",
            color: "#64748B",
          }}
        >
          Manage your products efficiently
        </p>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#F8FAFC",
          padding: "8px 14px",
          borderRadius: "14px",
          border: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#7C3AED,#A855F7)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          A
        </div>

        <div>
          <div
            style={{
              fontWeight: "600",
              color: "#0F172A",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            Admin
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#64748B",
              lineHeight: "16px",
            }}
          >
            Welcome back 👋
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;