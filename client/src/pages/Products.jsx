import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import API from "../services/api";

function Products() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const filteredProducts = products
    .filter((product) => {
      if (activeTab === "published") return product.isPublished;
      if (activeTab === "unpublished") return !product.isPublished;
      return true;
    })
    .filter((product) =>
      product.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const tabStyle = (tab) => ({
    background:
      activeTab === tab ? "#7C3AED" : "#FFFFFF",
    color:
      activeTab === tab ? "#FFFFFF" : "#475569",
    border: "1px solid #E2E8F0",
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  });

  return (
    <Layout>
      {/* Header */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#0F172A",
            }}
          >
            Products
          </h1>

          <p
            style={{
              color: "#64748B",
              marginTop: "8px",
            }}
          >
            Manage all your products from one place
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedProduct(null);
            setOpenModal(true);
          }}
          style={{
            background:
              "linear-gradient(135deg,#7C3AED,#9333EA)",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "14px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "15px",
            boxShadow:
              "0 8px 20px rgba(124,58,237,0.25)",
          }}
        >
          ➕ Add Product
        </button>
      </div>

      {/* Search */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: "400px",
            padding: "14px 18px",
            borderRadius: "14px",
            border: "1px solid #CBD5E1",
            outline: "none",
            background: "#FFFFFF",
            fontSize: "15px",
          }}
        />
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        <button
          style={tabStyle("all")}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>

        <button
          style={tabStyle("published")}
          onClick={() =>
            setActiveTab("published")
          }
        >
          Published
        </button>

        <button
          style={tabStyle("unpublished")}
          onClick={() =>
            setActiveTab("unpublished")
          }
        >
          Unpublished
        </button>
      </div>

      {/* Product Cards */}
      <div
        style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
}}
      >
        {filteredProducts.length === 0 ? (
          <div
            style={{
              width: "100%",
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: "60px",
              textAlign: "center",
              border: "1px solid #E2E8F0",
            }}
          >
            <h2>No Products Found</h2>

            <p
              style={{
                color: "#64748B",
                marginTop: "10px",
              }}
            >
              Click "Add Product" to create your
              first product.
            </p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              fetchProducts={fetchProducts}
              setSelectedProduct={
                setSelectedProduct
              }
              setOpenModal={setOpenModal}
            />
          ))
        )}
      </div>

      <ProductModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedProduct(null);
        }}
        fetchProducts={fetchProducts}
        selectedProduct={selectedProduct}
      />
    </Layout>
  );
}

export default Products;