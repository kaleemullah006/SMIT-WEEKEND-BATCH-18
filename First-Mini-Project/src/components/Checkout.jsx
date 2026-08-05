
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, dispatch } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // ================================
    // CHECK CART
    // ================================

    if (cart.length === 0) {
      alert("Please add products to cart first!");
      return;
    }

    // ================================
    // TOTAL
    // ================================

    const totalAmount = cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0,
    );

    const orderData = {
      customer: formData,
      items: cart,
      totalAmount,
    };

    try {
      setLoading(true);

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      console.log("Order Response:", data);

      // ================================
      // ERROR
      // ================================

      if (!response.ok) {
        alert(
          data.message ||
            "Order failed. Please try again.",
        );
        return;
      }

      // ================================
      // SAVE ORDER INFO
      // ================================

      setOrderInfo({
        orderNumber: data.order.orderNumber,
        status: data.order.status,
        trackingToken:
          data.order.trackingToken,
      });

      window.location.href = `/track-order/${data.order.trackingToken}`;

      // ================================
      // CLEAR FORM
      // ================================

      setFormData({
        name: "",
        phone: "",
        address: "",
      });

      // ================================
      // CLEAR CART
      // ================================

      dispatch({
        type: "CLEAR_CART",
      });

      alert("Order placed successfully! 🎉");
    } catch (error) {
      console.log("Order Error:", error);

      alert(
        "Unable to connect to server. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  // ================================
  // TRACK ORDER
  // ================================

  function handleTrackOrder() {
    if (!orderInfo?.trackingToken) {
      alert(
        "Tracking information is not available.",
      );
      return;
    }

    window.location.href =
      `/track-order/${orderInfo.trackingToken}`;
  }

  return (
    <section
      id="checkout"
      className="
      bg-slate-900/95
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:px-8
      "
    >
      <div
        className="
        mx-auto
        w-full
        max-w-2xl
      "
      >
        {/* ================================
            CHECKOUT CARD
        ================================= */}

        <div
          className="
          rounded-3xl
          bg-slate-900/95
          p-5
          shadow-xl
          sm:p-8
          border
          border-white
        "
        >
          {/* ================================
              TITLE
          ================================= */}

          <div className="mb-7 text-center">
            <p
              className="
              text-sm
              font-bold
              tracking-widest
              text-yellow-600
            "
            >
              ORDER NOW
            </p>

            <h2
              className="
              mt-2
              text-2xl
              font-extrabold
              text-white
              sm:text-3xl
            "
            >
              Checkout 🛍️
            </h2>

            <p
              className="
              mt-2
              text-sm
              text-slate-400
              sm:text-base
            "
            >
              Enter your delivery information below.
            </p>
          </div>

          {/* ================================
              SUCCESS CARD
          ================================= */}

          {orderInfo && (
            <div
              className="
              mb-8
              overflow-hidden
              rounded-2xl
              border-2
              border-green-400
              bg-gradient-to-br
              from-green-50
              to-white
              p-5
              text-center
              shadow-[0_7px_0_#166534,0_15px_25px_rgba(0,0,0,0.12)]
              sm:p-6
            "
            >
              <div className="text-4xl">🎉</div>

              <h3
                className="
                mt-2
                text-xl
                font-extrabold
                text-green-700
                sm:text-2xl
              "
              >
                Order Placed Successfully!
              </h3>

              {/* ORDER NUMBER */}

              <div
                className="
                mx-auto
                mt-4
                inline-flex
                items-center
                rounded-xl
                bg-slate-900
                px-5
                py-3
                text-lg
                font-extrabold
                text-white
              "
              >
                Order #{orderInfo.orderNumber}
              </div>

              <p
                className="
                mt-3
                text-sm
                text-slate-500
              "
              >
                Your order has been received successfully.
              </p>

              {/* STATUS */}

              <div
                className="
                mx-auto
                mt-5
                max-w-xs
                rounded-xl
                bg-yellow-100
                px-4
                py-3
                font-bold
                text-yellow-800
              "
              >
                Status: {orderInfo.status || "Pending"}
              </div>

              {/* TRACK BUTTON */}

              <button
                type="button"
                onClick={handleTrackOrder}
                className="
                  mt-6
                  w-full
                  rounded-xl
                  bg-gradient-to-b
                  from-blue-500
                  to-blue-700
                  px-5
                  py-4
                  font-bold
                  text-white
                  shadow-[0_6px_0_#1e3a8a,0_10px_20px_rgba(0,0,0,0.25)]
                  transition
                  hover:-translate-y-1
                  hover:shadow-[0_8px_0_#1e3a8a,0_12px_20px_rgba(0,0,0,0.25)]
                  active:translate-y-1
                  active:shadow-[0_3px_0_#1e3a8a]
                "
              >
                Track My Order 📦
              </button>
            </div>
          )}

          {/* ================================
              FORM
          ================================= */}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}

            <div>
              <label
                className="
                mb-2
                block
                text-sm
                font-bold
                text-white
              "
              >
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/30
                "
                required
              />
            </div>

            {/* PHONE */}

            <div>
              <label
                className="
                mb-2
                block
                text-sm
                font-bold
                text-white
              "
              >
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XXXXXXXXX"
                autoComplete="tel"
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/30
                "
                required
              />
            </div>

            {/* ADDRESS */}

            <div>
              <label
                className="
                mb-2
                block
                text-sm
                font-bold
                text-white
              "
              >
                Delivery Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete delivery address"
                rows="4"
                autoComplete="street-address"
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-yellow-400
                  focus:ring-2
                  focus:ring-yellow-400/30
                "
                required
              />
            </div>

            {/* ================================
                SUBMIT BUTTON
            ================================= */}

            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className="
                w-full
                rounded-xl
                bg-yellow-400
                px-5
                py-4
                font-extrabold
                text-slate-900
                shadow-[0_6px_0_#a16207]
                transition
                hover:-translate-y-1
                hover:bg-yellow-300
                hover:shadow-[0_8px_0_#a16207]
                active:translate-y-1
                active:shadow-[0_2px_0_#a16207]
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
              "
            >
              {loading
                ? "Placing Order..."
                : cart.length === 0
                  ? "Add Items To Cart First 🛒"
                  : "Place Order 🚀"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Checkout;

