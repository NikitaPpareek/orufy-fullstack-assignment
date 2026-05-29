import API from "../services/api";

function ProductCard({ product, fetchProducts }) {
  const handleDelete = async () => {
    try {
      await API.delete(`/products/${product._id}`);

      alert("Product Deleted");

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

  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        color: "#000",
      }}
    >
      <h2>{product.productName}</h2>

      <p>Type: {product.productType}</p>
      <p>Stock: {product.quantityStock}</p>
      <p>MRP: ₹{product.mrp}</p>
      <p>Price: ₹{product.sellingPrice}</p>
      <p>Brand: {product.brandName}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button>Edit</button>

        <button
          onClick={handleDelete}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={handlePublishToggle}
          style={{
            background: product.isPublished
              ? "green"
              : "#222",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {product.isPublished
            ? "Published"
            : "Unpublished"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;