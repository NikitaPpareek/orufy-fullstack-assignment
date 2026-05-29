import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  publishProduct,
  unpublishProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Create product
router.post("/", createProduct);

// Get single product
router.get("/:id", getProductById);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

// Publish product
router.patch("/:id/publish", publishProduct);

// Unpublish product
router.patch("/:id/unpublish", unpublishProduct);

export default router;