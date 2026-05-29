import API from "../services/api";

function ProductCard({
  product,
  fetchProducts,
  setSelectedProduct,
  setOpenModal,
}) {
  const handleDelete = async () => {
    try {
      await API.delete(`/products/${product._id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  const handlePublishToggle = async () => {
    try {
      if (product.isPublished) {
        await API.patch(
          `/products/${product._id}/unpublish`
        );
      } else {
        await API.patch(
          `/products/${product._id}/publish`
        );
      }

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Publish Update Failed");
    }
  };

  const handleEdit = () => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  return (
    <div
      style={{
        width: "420px",
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "24px",
        border: "1px solid #E2E8F0",
        boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#0F172A",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {product.productName}
          </h2>

          <div
            style={{
              marginTop: "10px",
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              background: product.isPublished
                ? "#DCFCE7"
                : "#FEF3C7",
              color: product.isPublished
                ? "#166534"
                : "#92400E",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {product.isPublished
              ? "● Published"
              : "● Unpublished"}
          </div>
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#94A3B8",
            cursor: "pointer",
          }}
        >
          ⋮
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #E2E8F0",
          marginBottom: "20px",
        }}
      />

      {/* Product Info */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          marginBottom: "25px",
        }}
      >
        <div>
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Type
          </p>

          <h4
            style={{
              marginTop: "6px",
              color: "#0F172A",
            }}
          >
            {product.productType}
          </h4>
        </div>

        <div>
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Stock
          </p>

          <h4
            style={{
              marginTop: "6px",
              color: "#0F172A",
            }}
          >
            {product.quantityStock}
          </h4>
        </div>

        <div>
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            MRP
          </p>

          <h4
            style={{
              marginTop: "6px",
              color: "#0F172A",
            }}
          >
            ₹{product.mrp}
          </h4>
        </div>

        <div>
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Price
          </p>

          <h4
            style={{
              marginTop: "6px",
              color: "#0F172A",
            }}
          >
            ₹{product.sellingPrice}
          </h4>
        </div>

        <div>
          <p
            style={{
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Brand
          </p>

          <h4
            style={{
              marginTop: "6px",
              color: "#0F172A",
            }}
          >
            {product.brandName}
          </h4>
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={handleEdit}
          style={{
            background: "#7C3AED",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          style={{
            background: "#EF4444",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Delete
        </button>

        <button
          onClick={handlePublishToggle}
          style={{
            background: product.isPublished
              ? "#22C55E"
              : "#F59E0B",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {product.isPublished
            ? "Published"
            : "Publish"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;