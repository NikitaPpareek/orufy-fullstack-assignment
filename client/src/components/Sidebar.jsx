import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    padding: "14px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#E2E8F0",
    background:
      location.pathname === path
        ? "#7C3AED"
        : "transparent",
    transition: "0.3s",
    fontWeight: "500",
  });

  return (
    <div
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#0F172A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Section */}
      <div>
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          📦 Productz
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link to="/home" style={menuStyle("/home")}>
            Dashboard
          </Link>

          <Link
            to="/products"
            style={menuStyle("/products")}
          >
            Products
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: "#1E293B",
            color: "#E2E8F0",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;