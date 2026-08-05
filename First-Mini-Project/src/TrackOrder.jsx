
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TrackOrder() {
  const { trackingToken } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchOrder() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/track/${trackingToken}`,
      );

      const data = await response.json();

      console.log("TRACK RESPONSE:", data);

      if (!response.ok) {
        setError(data.message || "Order not found");
        return;
      }

      setOrder(data.order);
      setError("");
    } catch (err) {
      console.log("TRACK ERROR:", err);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!trackingToken) {
      setError("Tracking token is missing.");
      setLoading(false);
      return;
    }

    fetchOrder();

    const interval = setInterval(() => {
      fetchOrder();
    }, 5000);

    return () => clearInterval(interval);
  }, [trackingToken]);

  const statuses = [
    "Pending",
    "Accepted",
    "Preparing",
    "Out for Delivery",
    "Completed",
  ];

  const currentIndex = order
    ? statuses.indexOf(order.status)
    : 0;

  function getStatusIcon(status) {
    if (status === "Pending") return "⏳";
    if (status === "Accepted") return "✅";
    if (status === "Preparing") return "👨‍🍳";
    if (status === "Out for Delivery") return "🛵";
    if (status === "Completed") return "🎉";

    return "📦";
  }

  function goHome() {
    window.location.href = "/";
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl">
          <div className="mb-4 animate-bounce text-5xl">📦</div>

          <h2 className="text-2xl font-extrabold text-slate-900">
            Loading Order...
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Please wait while we find your order.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-xl sm:p-8">
          <div className="mb-4 text-5xl">❌</div>

          <h1 className="text-2xl font-extrabold text-red-600">
            Order Not Found
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {error}
          </p>

          <button
            type="button"
            onClick={goHome}
            className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 font-bold text-white shadow-md transition hover:-translate-y-1"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!order) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">

        {/* Header */}
        <div className="mb-6 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-6 text-center text-white shadow-xl sm:p-8">
          <div className="text-5xl">📦</div>

          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-yellow-400">
            Sushi Club
          </p>

          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">
            Track Your Order
          </h1>

          <div className="mx-auto mt-4 inline-flex rounded-xl bg-white/10 px-5 py-3 text-lg font-extrabold">
            Order #{order.orderNumber}
          </div>
        </div>

        {/* Current Status */}
        <div className="mb-6 rounded-3xl bg-white p-6 text-center shadow-xl sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Current Status
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-3xl">
              {getStatusIcon(order.status)}
            </span>

            <h2 className="text-2xl font-extrabold text-green-600 sm:text-3xl">
              {order.status}
            </h2>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Live Tracking
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6 rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <h2 className="mb-7 text-center text-xl font-extrabold text-slate-900 sm:text-2xl">
            Order Progress
          </h2>

          <div className="space-y-4 sm:grid sm:grid-cols-5 sm:gap-2 sm:space-y-0">
            {statuses.map((status, index) => {
              const completed =
                currentIndex >= index;

              const active =
                currentIndex === index;

              return (
                <div
                  key={status}
                  className="flex items-center gap-4 sm:flex-col sm:gap-2 sm:text-center"
                >
                  <div
                    className={
                      completed
                        ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white shadow-lg"
                        : "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-400"
                    }
                  >
                    {completed ? "✓" : index + 1}
                  </div>

                  <div>
                    <p
                      className={
                        active
                          ? "text-sm font-extrabold text-green-600"
                          : completed
                            ? "text-sm font-bold text-slate-800"
                            : "text-sm font-bold text-slate-400"
                      }
                    >
                      {status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Customer Information */}
        <div className="mb-6 rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <h2 className="mb-5 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Delivery Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Customer
              </p>

              <p className="mt-1 font-bold text-slate-900">
                👤 {order.customer?.name}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Phone
              </p>

              <p className="mt-1 font-bold text-slate-900">
                📞 {order.customer?.phone}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4 sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Address
              </p>

              <p className="mt-1 font-bold leading-relaxed text-slate-900">
                📍 {order.customer?.address}
              </p>
            </div>

          </div>
        </div>

        {/* Ordered Items */}
        <div className="mb-6 rounded-3xl bg-white p-5 shadow-xl sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Ordered Items
            </h2>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
              {order.items?.length || 0} Items
            </span>
          </div>

          <div className="space-y-3">
            {order.items?.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 sm:p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-slate-900">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Rs. {item.price} × {item.quantity}
                  </p>
                </div>

                <p className="shrink-0 text-sm font-extrabold text-slate-900 sm:text-base">
                  Rs. {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between gap-4 border-t pt-5">
            <span className="text-base font-bold text-slate-600 sm:text-lg">
              Total Amount
            </span>

            <span className="text-xl font-extrabold text-green-600 sm:text-2xl">
              Rs. {order.totalAmount}
            </span>
          </div>
        </div>

        {/* Back Home */}
        <button
          type="button"
          onClick={goHome}
          className="w-full rounded-xl bg-slate-900 px-5 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1"
        >
          ← Back to Home
        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          🔄 Order status automatically updates every 5 seconds.
        </p>
      </div>
    </div>
  );
}

export default TrackOrder;

