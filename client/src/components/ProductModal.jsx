import { useState, useEffect } from "react";
import API from "../services/api";

function ProductModal({
  isOpen,
  onClose,
  fetchProducts,
  selectedProduct,
}) {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.productName);
      setProductType(selectedProduct.productType);
    } else {
      setProductName("");
      setProductType("");
    }
  }, [selectedProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      if (selectedProduct) {
        await API.put(
          `/products/${selectedProduct._id}`,
          {
            productName,
            productType,
            quantityStock:
              selectedProduct.quantityStock,
            mrp: selectedProduct.mrp,
            sellingPrice:
              selectedProduct.sellingPrice,
            brandName:
              selectedProduct.brandName,
          }
        );
      } else {
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
      }

      fetchProducts();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Operation Failed");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "600px",
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "32px",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                color: "#0F172A",
              }}
            >
              {selectedProduct
                ? "Edit Product"
                : "Add Product"}
            </h2>

            <p
              style={{
                color: "#64748B",
                marginTop: "6px",
              }}
            >
              Manage your product information
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "#F1F5F9",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#334155",
                fontWeight: "600",
              }}
            >
              Product Name
            </label>

            <input
              type="text"
              value={productName}
              onChange={(e) =>
                setProductName(e.target.value)
              }
              placeholder="Enter product name"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                outline: "none",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#334155",
                fontWeight: "600",
              }}
            >
              Product Type
            </label>

            <input
              type="text"
              value={productType}
              onChange={(e) =>
                setProductType(e.target.value)
              }
              placeholder="Enter product type"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "#E2E8F0",
              color: "#334155",
              border: "none",
              padding: "12px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            style={{
              background: "#7C3AED",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            {selectedProduct
              ? "Update Product"
              : "Create Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;