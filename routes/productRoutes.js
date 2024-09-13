const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// @desc Get product by productCode
// @route GET /api/products/:productCode
router.get("/:productCode", async (req, res) => {
  try {
    const product = await Product.findOne({
      productCode: req.params.productCode,
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @desc Add a new product
// @route POST /api/products
router.post("/add", async (req, res) => {
  try {

    const newProduct = new Product({...req.body});

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product" });
  }
});

module.exports = router;
