import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProducts = products.length;

  const publishedProducts = products.filter(
    (product) => product.isPublished
  ).length;

  const unpublishedProducts = products.filter(
    (product) => !product.isPublished
  ).length;

  return (
    <Layout>
      <div>
        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              margin: 0,
              color: "#0F172A",
              fontSize: "34px",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#64748B",
              marginTop: "8px",
            }}
          >
            Overview of your products and activity
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Total Products
            </h3>

            <h1
              style={{
                color: "#7C3AED",
                margin: 0,
              }}
            >
              {totalProducts}
            </h1>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Published Products
            </h3>

            <h1
              style={{
                color: "#22C55E",
                margin: 0,
              }}
            >
              {publishedProducts}
            </h1>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                color: "#64748B",
                marginBottom: "12px",
              }}
            >
              Unpublished Products
            </h3>

            <h1
              style={{
                color: "#F59E0B",
                margin: 0,
              }}
            >
              {unpublishedProducts}
            </h1>
          </div>
        </div>

        {/* Recent Products */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "24px",
            border: "1px solid #E2E8F0",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              color: "#0F172A",
              marginBottom: "20px",
            }}
          >
            Recent Products
          </h2>

          {products.length === 0 ? (
            <p>No products found</p>
          ) : (
            products.slice(0, 5).map((product) => (
              <div
                key={product._id}
                style={{
                  padding: "14px 0",
                  borderBottom:
                    "1px solid #E2E8F0",
                }}
              >
                <strong>
                  {product.productName}
                </strong>

                <div
                  style={{
                    color: "#64748B",
                    marginTop: "4px",
                  }}
                >
                  {product.productType}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Home;