

const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors")
const Product = require("./models/Product");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(function () {
    console.log("MongoDB connected successfuly");
  })

  .catch(function (error) {
    console.log("MongoDB connection Failed:", error);
  });

app.get("/", function (req, res) {
  res.send("shopping cart backend is running!");
});

app.get("/api/products",async function (req, res) {
    try {
        const products = await Product.find()

        
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: "failed to get products",
            error: error.message,
        })
    }
});

app.post("/api/products", async function (req, res) {
  try {
    console.log("Received:", req.body);

    const product = await Product.create(req.body);

    res.json({
      message: "Product created successfully",
      product: product,
    });
  } catch (error) {
    console.log("POST ERROR:", error);

    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`server is running on http://localhost:${PORT}`);
});

// const express = require("express");

// const app = express();

// const PORT = 5000;

// app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("Backend is Running!");
// });

// app.get("/api/products", function (req, res) {
//   res.json([
//     {
//       id: 1,
//       name: "Laptop",
//       price: 1000,
//     },
//   ]);
// });

// app.post("/api/products", function (req, res) {
//   const product = req.body;

//   console.log(product);

//   res.json({
//     message: "Product received successfully",
//     product: product,
//   });
// });

// app.listen(PORT, function () {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
