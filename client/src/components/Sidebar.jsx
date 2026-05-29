import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    padding: "14px 18px",
    borderRadius: "12px",
    textDecoration: "none",
    color:
      location.pathname === path
        ? "#FFFFFF"
        : "#CBD5E1",
    background:
      location.pathname === path
        ? "#7C3AED"
        : "transparent",
    transition: "0.3s",
    fontWeight: "600",
    fontSize: "15px",
  });

  return (
    <div
      style={{
        width: "280px",
        height: "100vh",
        background: "#0F172A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "30px 20px",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Top Section */}
      <div>
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            📦 Products
          </h1>

          <p
            style={{
              color: "#94A3B8",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            Inventory Management
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Link
            to="/home"
            style={menuStyle("/home")}
          >
            📊 Dashboard
          </Link>

          <Link
            to="/products"
            style={menuStyle("/products")}
          >
            📦 Products
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: "#1E293B",
            color: "#E2E8F0",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;