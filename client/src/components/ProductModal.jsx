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
  const [brandName, setBrandName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantityStock, setQuantityStock] =
    useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.productName);
      setProductType(selectedProduct.productType);
      setBrandName(selectedProduct.brandName);
      setMrp(selectedProduct.mrp);
      setSellingPrice(
        selectedProduct.sellingPrice
      );
      setQuantityStock(
        selectedProduct.quantityStock
      );
    } else {
      setProductName("");
      setProductType("");
      setBrandName("");
      setMrp("");
      setSellingPrice("");
      setQuantityStock("");
    }
  }, [selectedProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const productData = {
        productName,
        productType,
        brandName,
        mrp,
        sellingPrice,
        quantityStock,
        images: [],
        exchangeEligible: false,
      };

      if (selectedProduct) {
        await API.put(
          `/products/${selectedProduct._id}`,
          productData
        );
      } else {
        await API.post(
          "/products",
          productData
        );
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
            gap: "16px",
          }}
        >
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) =>
              setProductName(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Product Type"
            value={productType}
            onChange={(e) =>
              setProductType(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Brand Name"
            value={brandName}
            onChange={(e) =>
              setBrandName(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="MRP"
            value={mrp}
            onChange={(e) =>
              setMrp(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Selling Price"
            value={sellingPrice}
            onChange={(e) =>
              setSellingPrice(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            value={quantityStock}
            onChange={(e) =>
              setQuantityStock(e.target.value)
            }
            style={inputStyle}
          />
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

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #CBD5E1",
  outline: "none",
};

export default ProductModal;