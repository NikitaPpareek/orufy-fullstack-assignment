function Navbar() {
  return (
    <div
      style={{
        height: "80px",
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
            fontSize: "24px",
            color: "#0F172A",
            fontWeight: "700",
          }}
        >
          Dashboard
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
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
          gap: "12px",
          background: "#F8FAFC",
          padding: "10px 16px",
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#7C3AED",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          A
        </div>

        <div>
          <div
            style={{
              fontWeight: "600",
              color: "#0F172A",
            }}
          >
            Admin
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#64748B",
            }}
          >
            Administrator
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;