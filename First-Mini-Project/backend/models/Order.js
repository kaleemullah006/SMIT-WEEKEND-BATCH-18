// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     customer: {
//       name: String,
//       phone: String,
//       address: String,
//     },

//     items: Array,

//     totalAmount: Number,

//     orderNumber: {
//       type: Number,
//       required: true,
//     },

//     status: {
//       type: String,
//       enum: [
//         "Pending",
//         "Accepted",
//         "Preparing",
//         "Out for Delivery",
//         "Completed",
//         "Cancelled",
//       ],
//       default: "Pending",
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// module.exports = mongoose.model("Order", orderSchema);

//  #region startpoint new 2 ////////////////////////////////

// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     // Customer Information
//     customer: {
//       name: {
//         type: String,
//         required: true,
//       },

//       phone: {
//         type: String,
//         required: true,
//       },

//       address: {
//         type: String,
//         required: true,
//       },
//     },

//     // Ordered Products
//     items: [
//       {
//         id: Number,
//         name: String,
//         price: Number,
//         image: String,
//         quantity: Number,
//       },
//     ],

//     // Total Order Amount
//     totalAmount: {
//       type: Number,
//       required: true,
//     },

//     // Daily Restaurant Order Number
//     orderNumber: {
//       type: Number,
//       required: true,
//     },

//     // Order Status
//     status: {
//       type: String,
//       enum: [
//         "Pending",
//         "Accepted",
//         "Preparing",
//         "Out for Delivery",
//         "Completed",
//         "Cancelled",
//       ],
//       default: "Pending",
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// const Order = mongoose.model("Order", orderSchema);

// module.exports = Order;


//  #region startpoint new 3 ///////////////////////////////////////


const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // ===============================
    // CUSTOMER INFORMATION
    // ===============================

    customer: {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      phone: {
        type: String,
        required: true,
        trim: true,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },
    },

    // ===============================
    // ORDERED PRODUCTS
    // ===============================

    items: [
      {
        id: Number,
        name: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],

    // ===============================
    // TOTAL ORDER AMOUNT
    // ===============================

    totalAmount: {
      type: Number,
      required: true,
    },

    // ===============================
    // DAILY RESTAURANT ORDER NUMBER
    // ===============================

    orderNumber: {
      type: Number,
      required: true,
    },

    // ===============================
    // PRIVATE CUSTOMER TRACKING TOKEN
    // ===============================

    trackingToken: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    // ===============================
    // ORDER STATUS
    // ===============================

    status: {
      type: String,

      enum: [
        "Pending",
        "Accepted",
        "Preparing",
        "Out for Delivery",
        "Completed",
        "Cancelled",
      ],

      default: "Pending",
    },
  },

  {
    timestamps: true,
  }
);

const Order = mongoose.model(
  "Order",
  orderSchema
);

module.exports = Order;

