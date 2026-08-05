// const jwt = require("jsonwebtoken");

// const bcrypt = require("bcryptjs");
// const Admin = require("./models/Admin");

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const Product = require("./models/Product");
// const Order = require("./models/Order");

// const app = express();

// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((error) => {
//     console.log("MongoDB connection failed:", error);
//   });


//   function verifyAdmin(req, res, next) {
//     try {
//       const authHeader = req.headers.authorization;

//       if (!authHeader) {
//         return res.status(401).json({
//           message: "Access denied. Login required.",
//         });
//       }

//       const token = authHeader.split(" ")[1];

//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.admin = decoded;

//       next();
//     } catch (error) {
//       return res.status(401).json({
//         message: "Invalid or expired token",
//       });
//     }
//   }

// // Home
// app.get("/", function (req, res) {
//   res.send("FoodHub backend is running!");
// });

// // Get Products
// app.get("/api/products", async function (req, res) {
//   try {
//     const products = await Product.find();

//     res.json(products);
//   } catch (error) {
//     console.log("PRODUCT GET ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get products",
//     });
//   }
// });

// // Add Product
// app.post("/api/products", async function (req, res) {
//   try {
//     console.log("Received:", req.body);

//     const product = await Product.create(req.body);

//     res.status(201).json({
//       message: "Product created successfully",
//       product: product,
//     });
//   } catch (error) {
//     console.log("PRODUCT POST ERROR:", error);

//     res.status(500).json({
//       message: "Product creation failed",
//       error: error.message,
//     });
//   }
// });

// // Create Order
// app.post("/api/orders", async function (req, res) {
//   try {
//     // Aaj ki date ka start
//     const startOfDay = new Date();
//     startOfDay.setHours(0, 0, 0, 0);

//       // Kal ki date ka start//////
      
//     const endOfDay = new Date(startOfDay);
//     endOfDay.setDate(endOfDay.getDate() + 1);

//       // Aaj ke orders count karo/////
      
//     const todayOrdersCount = await Order.countDocuments({
//       createdAt: {
//         $gte: startOfDay,
//         $lt: endOfDay,
//       },
//     });

//       // Next order number////////////
      
//     const orderNumber = todayOrdersCount + 1;

//       // Order create//////////
      
//     const order = await Order.create({
//       ...req.body,
//       orderNumber: orderNumber,
//     });

//     res.status(201).json({
//       message: "Order created successfully",
//       order: order,
//     });
//   } catch (error) {
//     console.log("ORDER ERROR:", error);

//     res.status(500).json({
//       message: "Order failed",
//       error: error.message,
//     });
//   }
// });

// // Get Orders///////////////////

// app.get("/api/orders", verifyAdmin, async function (req, res) {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });

//     res.json(orders);
//   } catch (error) {
//     console.log("ORDER GET ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get orders",
//     });
//   }
// });

// // //////////////Put /////////////////////
// app.put("/api/orders/:id/status", verifyAdmin, async function (req, res) {
//   try {
//     const { status } = req.body;

//     const allowedStatuses = [
//       "Pending",
//       "Accepted",
//       "Preparing",
//       "Out for Delivery",
//       "Completed",
//       "Cancelled",
//     ];

//     if (!allowedStatuses.includes(status)) {
//       return res.status(400).json({
//         message: "Invalid order status",
//       });
//     }

//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status: status },
//       { new: true },
//     );

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     res.json({
//       message: "Order status updated",
//       order: order,
//     });
//   } catch (error) {
//     console.log("STATUS UPDATE ERROR:", error);

//     res.status(500).json({
//       message: "Failed to update order status",
//     });
//   }
// });

// // ////////////////Post admi  register////////////////////


// app.post("/api/admin/register", async function (req, res) {
//   try {
//     const { username, password } = req.body;

//     const existingAdmin = await Admin.findOne({ username });

//     if (existingAdmin) {
//       return res.status(400).json({
//         message: "Admin already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = await Admin.create({
//       username,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "Admin created successfully",
//       adminId: admin._id,
//     });
//   } catch (error) {
//     console.log("ADMIN REGISTER ERROR:", error);

//     res.status(500).json({
//       message: "Admin creation failed",
//     });
//   }
// });

// // admin login ///////////////////////////////////////////

// app.post("/api/admin/login", async function (req, res) {
//   try {
//     const { username, password } = req.body;

//     const admin = await Admin.findOne({ username });

//     if (!admin) {
//       return res.status(401).json({
//         message: "Invalid username or password",
//       });
//     }

//     const passwordMatch = await bcrypt.compare(password, admin.password);

//     if (!passwordMatch) {
//       return res.status(401).json({
//         message: "Invalid username or password",
//       });
//     }

//     const token = jwt.sign(
//       {
//         adminId: admin._id,
//         username: admin.username,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       },
//     );

//     res.json({
//       message: "Login successful",
//       token: token,
//     });
//   } catch (error) {
//     console.log("ADMIN LOGIN ERROR:", error);

//     res.status(500).json({
//       message: "Login failed",
//     });
//   }
// });

// // Start Server
// app.listen(PORT, function () {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//  #region startpoint new 2 ///////////////////////////////////////////

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const Admin = require("./models/Admin");

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const Product = require("./models/Product");
// const Order = require("./models/Order");

// const app = express();

// const PORT = 5000;

// // ===============================
// // MIDDLEWARE
// // ===============================

// app.use(cors());
// app.use(express.json());

// // ===============================
// // MONGODB CONNECTION
// // ===============================

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//   })
//   .catch((error) => {
//     console.log("MongoDB connection failed:", error);
//   });

// // ===============================
// // ADMIN AUTH MIDDLEWARE
// // ===============================

// function verifyAdmin(req, res, next) {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res.status(401).json({
//         message: "Access denied. Login required.",
//       });
//     }

//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({
//         message: "Access denied. Token missing.",
//       });
//     }

//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET
//     );

//     req.admin = decoded;

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       message: "Invalid or expired token",
//     });
//   }
// }

// // ===============================
// // HOME
// // ===============================

// app.get("/", function (req, res) {
//   res.send("FoodHub backend is running!");
// });

// // ===============================
// // GET PRODUCTS
// // ===============================

// app.get("/api/products", async function (req, res) {
//   try {
//     const products = await Product.find();

//     res.json(products);
//   } catch (error) {
//     console.log("PRODUCT GET ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get products",
//     });
//   }
// });

// // ===============================
// // ADD PRODUCT
// // ===============================

// app.post("/api/products", async function (req, res) {
//   try {
//     console.log("Received:", req.body);

//     const product = await Product.create(req.body);

//     res.status(201).json({
//       message: "Product created successfully",
//       product: product,
//     });
//   } catch (error) {
//     console.log("PRODUCT POST ERROR:", error);

//     res.status(500).json({
//       message: "Product creation failed",
//       error: error.message,
//     });
//   }
// });

// // ===============================
// // CREATE ORDER
// // ===============================

// app.post("/api/orders", async function (req, res) {
//   try {
//     // -------------------------------
//     // TODAY START
//     // -------------------------------

//     const startOfDay = new Date();

//     startOfDay.setHours(0, 0, 0, 0);

//     // -------------------------------
//     // TOMORROW START
//     // -------------------------------

//     const endOfDay = new Date(startOfDay);

//     endOfDay.setDate(
//       endOfDay.getDate() + 1
//     );

//     // -------------------------------
//     // TODAY ORDERS COUNT
//     // -------------------------------

//     const todayOrdersCount =
//       await Order.countDocuments({
//         createdAt: {
//           $gte: startOfDay,
//           $lt: endOfDay,
//         },
//       });

//     // -------------------------------
//     // NEXT ORDER NUMBER
//     // -------------------------------

//     const orderNumber =
//       todayOrdersCount + 1;

//     // -------------------------------
//     // CREATE ORDER
//     // -------------------------------

//     const order = await Order.create({
//       ...req.body,
//       orderNumber: orderNumber,
//     });

//     // -------------------------------
//     // RESPONSE
//     // -------------------------------

//     res.status(201).json({
//       message: "Order created successfully",

//       order: order,
//     });
//   } catch (error) {
//     console.log("ORDER ERROR:", error);

//     res.status(500).json({
//       message: "Order failed",
//       error: error.message,
//     });
//   }
// });

// // ===============================
// // ADMIN: GET ALL ORDERS
// // ===============================

// app.get(
//   "/api/orders",
//   verifyAdmin,
//   async function (req, res) {
//     try {
//       const orders = await Order.find().sort({
//         createdAt: -1,
//       });

//       res.json(orders);
//     } catch (error) {
//       console.log("ORDER GET ERROR:", error);

//       res.status(500).json({
//         message: "Failed to get orders",
//       });
//     }
//   }
// );

// // ===============================
// // CUSTOMER: GET SINGLE ORDER
// // ===============================
// //
// // Customer tracking endpoint.
// //
// // IMPORTANT:
// // For now this uses MongoDB _id.
// // Later we should add a random tracking token
// // for stronger privacy/security.
// //

// app.get(
//   "/api/orders/:id",
//   async function (req, res) {
//     try {
//       const order = await Order.findById(
//         req.params.id
//       ).select(
//         "orderNumber status items totalAmount createdAt customer.name"
//       );

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

//       res.json({
//         order: order,
//       });
//     } catch (error) {
//       console.log(
//         "SINGLE ORDER GET ERROR:",
//         error
//       );

//       res.status(400).json({
//         message: "Invalid order ID",
//       });
//     }
//   }
// );

// // ===============================
// // ADMIN: UPDATE ORDER STATUS
// // ===============================

// app.put(
//   "/api/orders/:id/status",
//   verifyAdmin,
//   async function (req, res) {
//     try {
//       const { status } = req.body;

//       const allowedStatuses = [
//         "Pending",
//         "Accepted",
//         "Preparing",
//         "Out for Delivery",
//         "Completed",
//         "Cancelled",
//       ];

//       // -------------------------------
//       // CHECK STATUS
//       // -------------------------------

//       if (!allowedStatuses.includes(status)) {
//         return res.status(400).json({
//           message: "Invalid order status",
//         });
//       }

//       // -------------------------------
//       // UPDATE ORDER
//       // -------------------------------

//       const order =
//         await Order.findByIdAndUpdate(
//           req.params.id,
//           {
//             status: status,
//           },
//           {
//             new: true,
//           }
//         );

//       // -------------------------------
//       // ORDER NOT FOUND
//       // -------------------------------

//       if (!order) {
//         return res.status(404).json({
//           message: "Order not found",
//         });
//       }

//       // -------------------------------
//       // RESPONSE
//       // -------------------------------

//       res.json({
//         message: "Order status updated",
//         order: order,
//       });
//     } catch (error) {
//       console.log(
//         "STATUS UPDATE ERROR:",
//         error
//       );

//       res.status(500).json({
//         message:
//           "Failed to update order status",
//       });
//     }
//   }
// );

// // ===============================
// // ADMIN REGISTER
// // ===============================

// app.post(
//   "/api/admin/register",
//   async function (req, res) {
//     try {
//       const {
//         username,
//         password,
//       } = req.body;

//       // -------------------------------
//       // CHECK EXISTING ADMIN
//       // -------------------------------

//       const existingAdmin =
//         await Admin.findOne({
//           username,
//         });

//       if (existingAdmin) {
//         return res.status(400).json({
//           message: "Admin already exists",
//         });
//       }

//       // -------------------------------
//       // HASH PASSWORD
//       // -------------------------------

//       const hashedPassword =
//         await bcrypt.hash(
//           password,
//           10
//         );

//       // -------------------------------
//       // CREATE ADMIN
//       // -------------------------------

//       const admin =
//         await Admin.create({
//           username,
//           password: hashedPassword,
//         });

//       // -------------------------------
//       // RESPONSE
//       // -------------------------------

//       res.status(201).json({
//         message:
//           "Admin created successfully",

//         adminId: admin._id,
//       });
//     } catch (error) {
//       console.log(
//         "ADMIN REGISTER ERROR:",
//         error
//       );

//       res.status(500).json({
//         message: "Admin creation failed",
//       });
//     }
//   }
// );

// // ===============================
// // ADMIN LOGIN
// // ===============================

// app.post(
//   "/api/admin/login",
//   async function (req, res) {
//     try {
//       const {
//         username,
//         password,
//       } = req.body;

//       // -------------------------------
//       // FIND ADMIN
//       // -------------------------------

//       const admin =
//         await Admin.findOne({
//           username,
//         });

//       if (!admin) {
//         return res.status(401).json({
//           message:
//             "Invalid username or password",
//         });
//       }

//       // -------------------------------
//       // CHECK PASSWORD
//       // -------------------------------

//       const passwordMatch =
//         await bcrypt.compare(
//           password,
//           admin.password
//         );

//       if (!passwordMatch) {
//         return res.status(401).json({
//           message:
//             "Invalid username or password",
//         });
//       }

//       // -------------------------------
//       // CREATE JWT
//       // -------------------------------

//       const token = jwt.sign(
//         {
//           adminId: admin._id,
//           username: admin.username,
//         },

//         process.env.JWT_SECRET,

//         {
//           expiresIn: "1h",
//         }
//       );

//       // -------------------------------
//       // RESPONSE
//       // -------------------------------

//       res.json({
//         message: "Login successful",
//         token: token,
//       });
//     } catch (error) {
//       console.log(
//         "ADMIN LOGIN ERROR:",
//         error
//       );

//       res.status(500).json({
//         message: "Login failed",
//       });
//     }
//   }
// );

// // ===============================
// // START SERVER
// // ===============================

// app.listen(PORT, function () {
//   console.log(
//     `Server is running on http://localhost:${PORT}`
//   );
// });


//  #region startpoint new 3 /////////////////


const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const Admin = require("./models/Admin");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();

const PORT = 5000;

// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());
app.use(express.json());

// ========================================
// MONGODB CONNECTION
// ========================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log(
      "MongoDB connection failed:",
      error
    );
  });

// ========================================
// ADMIN AUTH MIDDLEWARE
// ========================================

function verifyAdmin(req, res, next) {
  try {
    const authHeader =
      req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message:
          "Access denied. Login required.",
      });
    }

    const token =
      authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message:
          "Access denied. Token missing.",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message:
        "Invalid or expired token",
    });
  }
}

// ========================================
// HOME
// ========================================

app.get("/", function (req, res) {
  res.send(
    "FoodHub backend is running!"
  );
});

// ========================================
// GET PRODUCTS
// ========================================

app.get(
  "/api/products",
  async function (req, res) {
    try {
      const products =
        await Product.find();

      res.json(products);
    } catch (error) {
      console.log(
        "PRODUCT GET ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Failed to get products",
      });
    }
  }
);

// ========================================
// ADD PRODUCT
// ========================================

app.post(
  "/api/products",
  async function (req, res) {
    try {
      console.log(
        "Received:",
        req.body
      );

      const product =
        await Product.create(
          req.body
        );

      res.status(201).json({
        message:
          "Product created successfully",

        product: product,
      });
    } catch (error) {
      console.log(
        "PRODUCT POST ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Product creation failed",

        error: error.message,
      });
    }
  }
);

// ========================================
// CREATE ORDER
// ========================================

app.post(
  "/api/orders",
  async function (req, res) {
    try {
      // --------------------------------
      // TODAY START
      // --------------------------------

      const startOfDay =
        new Date();

      startOfDay.setHours(
        0,
        0,
        0,
        0
      );

      // --------------------------------
      // TOMORROW START
      // --------------------------------

      const endOfDay =
        new Date(startOfDay);

      endOfDay.setDate(
        endOfDay.getDate() + 1
      );

      // --------------------------------
      // TODAY ORDERS COUNT
      // --------------------------------

      const todayOrdersCount =
        await Order.countDocuments({
          createdAt: {
            $gte: startOfDay,
            $lt: endOfDay,
          },
        });

      // --------------------------------
      // NEXT DAILY ORDER NUMBER
      // --------------------------------

      const orderNumber =
        todayOrdersCount + 1;

      // --------------------------------
      // RANDOM TRACKING TOKEN
      // --------------------------------

      const trackingToken =
        crypto.randomBytes(32).toString(
          "hex"
        );

      // --------------------------------
      // CREATE ORDER
      // --------------------------------

      const order =
        await Order.create({
          ...req.body,

          orderNumber:
            orderNumber,

          trackingToken:
            trackingToken,
        });

      // --------------------------------
      // CUSTOMER RESPONSE
      // --------------------------------

      res.status(201).json({
        message:
          "Order created successfully",

        order: {
          _id: order._id,

          orderNumber:
            order.orderNumber,

          status:
            order.status,

          trackingToken:
            order.trackingToken,
        },
      });
    } catch (error) {
      console.log(
        "ORDER ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Order failed",

        error: error.message,
      });
    }
  }
);

// ========================================
// ADMIN: GET ALL ORDERS
// ========================================

app.get(
  "/api/orders",
  verifyAdmin,
  async function (req, res) {
    try {
      const orders =
        await Order.find().sort({
          createdAt: -1,
        });

      res.json(orders);
    } catch (error) {
      console.log(
        "ORDER GET ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Failed to get orders",
      });
    }
  }
);

// ========================================
// CUSTOMER: TRACK SINGLE ORDER
// ========================================
//
// IMPORTANT:
// Customer uses trackingToken,
// NOT MongoDB _id.
//

app.get(
  "/api/orders/track/:trackingToken",
  async function (req, res) {
    try {
      const {
        trackingToken,
      } = req.params;

      if (!trackingToken) {
        return res.status(400).json({
          message:
            "Tracking token required",
        });
      }

      const order =
        await Order.findOne({
          trackingToken:
            trackingToken,
        }).select(
          "orderNumber status items totalAmount createdAt customer.name trackingToken"
        );

      if (!order) {
        return res.status(404).json({
          message:
            "Order not found",
        });
      }

      res.json({
        order: order,
      });
    } catch (error) {
      console.log(
        "TRACK ORDER ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Failed to track order",
      });
    }
  }
);

// ========================================
// ADMIN: UPDATE ORDER STATUS
// ========================================

app.put(
  "/api/orders/:id/status",
  verifyAdmin,
  async function (req, res) {
    try {
      const {
        status,
      } = req.body;

      const allowedStatuses = [
        "Pending",
        "Accepted",
        "Preparing",
        "Out for Delivery",
        "Completed",
        "Cancelled",
      ];

      // --------------------------------
      // VALIDATE STATUS
      // --------------------------------

      if (
        !allowedStatuses.includes(
          status
        )
      ) {
        return res.status(400).json({
          message:
            "Invalid order status",
        });
      }

      // --------------------------------
      // UPDATE ORDER
      // --------------------------------

      const order =
        await Order.findByIdAndUpdate(
          req.params.id,

          {
            status: status,
          },

          {
            new: true,
          }
        );

      if (!order) {
        return res.status(404).json({
          message:
            "Order not found",
        });
      }

      // --------------------------------
      // RESPONSE
      // --------------------------------

      res.json({
        message:
          "Order status updated",

        order: order,
      });
    } catch (error) {
      console.log(
        "STATUS UPDATE ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Failed to update order status",
      });
    }
  }
);

// ========================================
// ADMIN REGISTER
// ========================================

app.post(
  "/api/admin/register",
  async function (req, res) {
    try {
      const {
        username,
        password,
      } = req.body;

      // --------------------------------
      // CHECK EXISTING ADMIN
      // --------------------------------

      const existingAdmin =
        await Admin.findOne({
          username,
        });

      if (existingAdmin) {
        return res.status(400).json({
          message:
            "Admin already exists",
        });
      }

      // --------------------------------
      // HASH PASSWORD
      // --------------------------------

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      // --------------------------------
      // CREATE ADMIN
      // --------------------------------

      const admin =
        await Admin.create({
          username,
          password:
            hashedPassword,
        });

      res.status(201).json({
        message:
          "Admin created successfully",

        adminId:
          admin._id,
      });
    } catch (error) {
      console.log(
        "ADMIN REGISTER ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Admin creation failed",
      });
    }
  }
);

// ========================================
// ADMIN LOGIN
// ========================================

app.post(
  "/api/admin/login",
  async function (req, res) {
    try {
      const {
        username,
        password,
      } = req.body;

      // --------------------------------
      // FIND ADMIN
      // --------------------------------

      const admin =
        await Admin.findOne({
          username,
        });

      if (!admin) {
        return res.status(401).json({
          message:
            "Invalid username or password",
        });
      }

      // --------------------------------
      // CHECK PASSWORD
      // --------------------------------

      const passwordMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!passwordMatch) {
        return res.status(401).json({
          message:
            "Invalid username or password",
        });
      }

      // --------------------------------
      // CREATE JWT
      // --------------------------------

      const token =
        jwt.sign(
          {
            adminId:
              admin._id,

            username:
              admin.username,
          },

          process.env.JWT_SECRET,

          {
            expiresIn:
              "1h",
          }
        );

      res.json({
        message:
          "Login successful",

        token: token,
      });
    } catch (error) {
      console.log(
        "ADMIN LOGIN ERROR:",
        error
      );

      res.status(500).json({
        message:
          "Login failed",
      });
    }
  }
);

// ========================================
// START SERVER
// ========================================

app.listen(
  PORT,
  function () {
    console.log(
      `Server is running on http://localhost:${PORT}`
    );
  }
);


