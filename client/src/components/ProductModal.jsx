import { useState } from "react";
import API from "../services/api";

function ProductModal({ isOpen, onClose, fetchProducts }) {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      await API.post("/products", {
        productName,
        productType,
        quantityStock: 100,
        mrp: 200,
        sellingPrice: 150,
        brandName: "Demo Brand",
        images: [],
        exchangeEligible: false,
      });

      alert("Product Added Successfully");

      fetchProducts();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          width: "500px",
          borderRadius: "10px",
        }}
      >
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Product Type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button onClick={handleSubmit}>
          Create Product
        </button>

        <button
          onClick={onClose}
          style={{ marginLeft: "10px" }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductModal;