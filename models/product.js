const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  brand: { type: String },
  price: { type: Number },
  discountedPrice: { type: Number },
  category: { type: String },
  subCategory: { type: String },
  quantity: { type: Number },
  description: { type: String },
  breadCrumbs: { type: [String] },
  image: { type: String },
  productCode: { type: String, required: true, unique: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
