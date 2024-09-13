const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
