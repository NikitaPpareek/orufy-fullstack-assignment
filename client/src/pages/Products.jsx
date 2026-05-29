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
      if (activeTab === "published") {
        return product.isPublished;
      }

      if (activeTab === "unpublished") {
        return !product.isPublished;
      }

      return true;
    })
    .filter((product) =>
      product.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Products</h1>

          <button
            onClick={() => setOpenModal(true)}
            style={{
              background: "#1D4ED8",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            + Add Product
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button onClick={() => setActiveTab("all")}>
            All
          </button>

          <button onClick={() => setActiveTab("published")}>
            Published
          </button>

          <button onClick={() => setActiveTab("unpublished")}>
            Unpublished
          </button>
        </div>

        {/* Search */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "300px",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Product Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              fetchProducts={fetchProducts}
            />
          ))}
        </div>

        {/* Modal */}
        <ProductModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          fetchProducts={fetchProducts}
        />
      </div>
    </Layout>
  );
}

export default Products;