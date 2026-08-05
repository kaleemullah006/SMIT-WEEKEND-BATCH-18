
// import React, { useEffect, useState } from "react";

// function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedStatus, setSelectedStatus] = useState({});
//   const [printingOrder, setPrintingOrder] = useState(null);

//   // =========================
//   // FETCH ORDERS
//   // =========================
//   useEffect(() => {
//     async function fetchOrders() {
//       try {
//         const token = localStorage.getItem("adminToken");

//         const response = await fetch("http://localhost:5000/api/orders", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           console.log("ORDER ERROR:", data);
//           setOrders([]);
//           return;
//         }

//         setOrders(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.log("FETCH ORDERS ERROR:", error);
//         setOrders([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchOrders();
//   }, []);

//   // =========================
//   // SORT ORDERS
//   // Oldest / lowest order number first
//   // =========================
//   const sortedOrders = [...orders].sort(
//     (a, b) => Number(a.orderNumber || 0) - Number(b.orderNumber || 0),
//   );

//   // =========================
//   // TODAY'S ORDERS
//   // =========================
//   const today = new Date();

//   const todayOrders = sortedOrders.filter((order) => {
//     if (!order.createdAt) return false;

//     const orderDate = new Date(order.createdAt);

//     return (
//       orderDate.getDate() === today.getDate() &&
//       orderDate.getMonth() === today.getMonth() &&
//       orderDate.getFullYear() === today.getFullYear()
//     );
//   });

//   // =========================
//   // TODAY'S COUNT
//   // =========================
//   const todayOrderCount = todayOrders.length;

//   // =========================
//   // TODAY'S TOTAL SALES
//   // =========================
//   const todayTotalAmount = todayOrders.reduce(
//     (total, order) => total + Number(order.totalAmount || 0),
//     0,
//   );

//   // =========================
//   // TODAY'S DATE
//   // =========================
//   const todayDate = today.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });

//   // =========================
//   // FORMAT ORDER DATE
//   // =========================
//   function formatOrderDate(date) {
//     if (!date) return "Date unavailable";

//     return new Date(date).toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   }

//   // =========================
//   // FORMAT ORDER TIME
//   // =========================
//   function formatOrderTime(date) {
//     if (!date) return "Time unavailable";

//     return new Date(date).toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   }

//   // =========================
//   // UPDATE STATUS
//   // =========================
//   async function updateStatus(orderId, newStatus) {
//     try {
//       const token = localStorage.getItem("adminToken");

//       const response = await fetch(
//         `http://localhost:5000/api/orders/${orderId}/status`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//             status: newStatus,
//           }),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         console.log("STATUS ERROR:", data);
//         return;
//       }

//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === orderId
//             ? {
//                 ...order,
//                 status: newStatus,
//               }
//             : order,
//         ),
//       );

//       setSelectedStatus((prev) => ({
//         ...prev,
//         [orderId]: newStatus,
//       }));

//       console.log("Status updated:", data);
//     } catch (error) {
//       console.log("UPDATE STATUS ERROR:", error);
//     }
//   }

//   // =========================
//   // PRINT ORDER
//   // =========================
//   function printOrder(order) {
//     setPrintingOrder(order);

//     setTimeout(() => {
//       window.print();

//       setTimeout(() => {
//         setPrintingOrder(null);
//       }, 500);
//     }, 100);
//   }

//   // =========================
//   // LOGOUT
//   // =========================
//   function handleLogout() {
//     localStorage.removeItem("adminToken");
//     window.location.href = "/admin/login";
//   }

//   // =========================
//   // LOADING SCREEN
//   // =========================
//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
//         <h1 className="text-2xl font-bold text-white">Loading Orders...</h1>
//       </div>
//     );
//   }

//   // =========================
//   // PRINT SCREEN
//   // =========================
//   if (printingOrder) {
//     return (
//       <div className="min-h-screen bg-black p-8 text-black">
//         <div className="mx-auto max-w-md">
//           {/* RESTAURANT NAME */}
//           <div className="mb-6 text-center">
//             <h1 className="text-3xl font-bold">FOODHUB</h1>

//             <p className="text-lg font-bold">KITCHEN ORDER</p>

//             <div className="my-4 border-t-2 border-dashed border-black" />
//           </div>

//           {/* ORDER NUMBER */}
//           <div className="mb-5 text-center">
//             <p className="text-3xl font-bold">
//               ORDER #{printingOrder.orderNumber}
//             </p>

//             <p className="mt-1 text-sm">
//               {formatOrderDate(printingOrder.createdAt)}
//               {" • "}
//               {formatOrderTime(printingOrder.createdAt)}
//             </p>
//           </div>

//           {/* CUSTOMER DETAILS */}
//           <div className="mb-5">
//             <p>
//               <strong>Customer:</strong> {printingOrder.customer?.name}
//             </p>

//             <p>
//               <strong>Phone:</strong> {printingOrder.customer?.phone}
//             </p>

//             <p>
//               <strong>Address:</strong> {printingOrder.customer?.address}
//             </p>
//           </div>

//           {/* ITEMS */}
//           <div className="border-b-2 border-t-2 border-black py-4">
//             <h2 className="mb-3 text-lg font-bold">ORDER ITEMS</h2>

//             {printingOrder.items?.map((item) => (
//               <div
//                 key={item._id || item.id}
//                 className="mb-2 flex justify-between gap-4"
//               >
//                 <span>
//                   {item.name} x {item.quantity}
//                 </span>

//                 <span>
//                   Rs.{" "}
//                   {(
//                     Number(item.price || 0) * Number(item.quantity || 0)
//                   ).toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* TOTAL */}
//           <div className="mt-5 flex justify-between text-xl font-bold">
//             <span>Total</span>

//             <span>
//               Rs. {Number(printingOrder.totalAmount || 0).toLocaleString()}
//             </span>
//           </div>

//           {/* STATUS */}
//           <div className="mt-4">
//             <p>
//               <strong>Status:</strong> {printingOrder.status || "Pending"}
//             </p>
//           </div>

//           {/* FOOTER */}
//           <div className="mt-10 border-t-2 border-dashed border-black pt-4 text-center">
//             <p className="font-bold">Please prepare this order</p>

//             <p className="mt-2 text-sm">FoodHub Kitchen</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // =========================
//   // ADMIN ORDERS UI
//   // =========================
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-6 text-white sm:px-5 sm:py-10">
//       {/* =========================
//           HEADER
//       ========================= */}
//       <div
//         className="
//           mx-auto
//           mb-10
//           flex
//           max-w-7xl
//           flex-col
//           gap-5
//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//         "
//       >
//         {/* TITLE */}
//         <div className="text-center lg:text-left">
//           <h1 className="text-3xl font-bold">Admin Orders</h1>

//           <p className="mt-1 text-sm text-white-400">
//             Manage restaurant orders
//           </p>
//         </div>

//         {/* TODAY SUMMARY */}
//         <div
//           className="
//             rounded-2xl
//             border border-white/20
//             bg-gradient-to-br
//             from-slate-700
//             to-slate-950
//             px-5 py-3
//             shadow-[0_6px_0_#020617,0_12px_25px_rgba(0,0,0,0.5)]
//           "
//         >
//           <div className="flex items-center justify-center gap-4 sm:gap-5">
//             {/* DATE */}
//             <div>
//               <p className="text-xs text-white-400">Today's Orders</p>

//               <p className="text-sm font-bold text-white">{todayDate}</p>
//             </div>

//             <div className="h-10 w-px bg-black/20" />

//             {/* ORDERS COUNT */}
//             <div>
//               <p className="text-xs text-white-400">Orders</p>

//               <p className="text-xl font-bold text-yellow-400">
//                 {todayOrderCount}
//               </p>
//             </div>

//             <div className="h-10 w-px bg-black/20" />

//             {/* TOTAL */}
//             <div>
//               <p className="text-xs text-white-400">Total Sales</p>

//               <p className="text-xl font-bold text-green-400">
//                 Rs. {todayTotalAmount.toLocaleString()}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* LOGOUT */}
//         <button
//           onClick={handleLogout}
//           className="
//             mx-auto
//             rounded-lg
//             bg-gradient-to-b
//             from-red-500
//             to-red-700
//             px-5 py-2
//             text-sm
//             font-bold
//             text-white
//             shadow-[0_4px_0_#991b1b,0_7px_12px_rgba(0,0,0,0.35)]
//             transition-all
//             hover:-translate-y-0.5
//             active:translate-y-1
//             lg:mx-0
//           "
//         >
//           Logout
//         </button>
//       </div>

//       {/* =========================
//           ORDERS
//       ========================= */}
//       <div
//         className="
//           mx-auto
//           grid
//           max-w-7xl
//           gap-8
//           md:grid-cols-2
//         "
//       >
//         {sortedOrders.length === 0 ? (
//           <div
//             className="
//               col-span-full
//               rounded-3xl
//               border border-white/20
//               bg-slate-800
//               p-10
//               text-center
//               shadow-xl
//             "
//           >
//             <h2 className="text-2xl font-bold">No Orders Found</h2>

//             <p className="mt-2 text-white-400">
//               Customer orders will appear here.
//             </p>
//           </div>
//         ) : (
//           sortedOrders.map((order) => (
//             <div
//               key={order._id}
//               className="
//                 rounded-3xl
//                 border border-white/20
//                 bg-gradient-to-br
//                 from-slate-800
//                 to-slate-950
//                 p-6
//                 shadow-[0_10px_0_#020617,0_20px_40px_rgba(0,0,0,0.6)]
//               "
//             >
//               {/* =========================
//                   ORDER HEADER
//               ========================= */}
//               <div className="mb-5 flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-sm text-white-400">Restaurant Order</p>

//                   <h2 className="text-2xl font-bold text-yellow-400">
//                     Order #{order.orderNumber}
//                   </h2>

//                   {/* DATE + TIME */}
//                   <p className="mt-1 text-sm text-white-400">
//                     {formatOrderDate(order.createdAt)}
//                     {" • "}
//                     {formatOrderTime(order.createdAt)}
//                   </p>
//                 </div>

//                 {/* STATUS BADGE */}
//                 <span
//                   className="
//                     whitespace-nowrap
//                     rounded-full
//                     bg-yellow-500
//                     px-3 py-1
//                     text-sm
//                     font-bold
//                     text-black
//                   "
//                 >
//                   {order.status || "Pending"}
//                 </span>
//               </div>

//               {/* =========================
//                   CUSTOMER DETAILS
//               ========================= */}
//               <div
//                 className="
//                   mb-5
//                   rounded-2xl
//                   border border-white/10
//                   bg-slate-900/70
//                   p-4
//                 "
//               >
//                 <h3 className="mb-3 text-lg font-bold text-yellow-400">
//                   Customer Details
//                 </h3>

//                 <p>
//                   <span className="font-bold">Name:</span>{" "}
//                   {order.customer?.name}
//                 </p>

//                 <p>
//                   <span className="font-bold">Phone:</span>{" "}
//                   {order.customer?.phone}
//                 </p>

//                 <p>
//                   <span className="font-bold">Address:</span>{" "}
//                   {order.customer?.address}
//                 </p>
//               </div>

//               {/* =========================
//                   ORDER ITEMS
//               ========================= */}
//               <div className="mb-5">
//                 <h3 className="mb-3 text-lg font-bold text-yellow-400">
//                   Ordered Items
//                 </h3>

//                 <div className="space-y-3">
//                   {order.items?.map((item) => (
//                     <div
//                       key={item._id || item.id}
//                       className="
//                         flex
//                         items-center
//                         justify-between
//                         gap-4
//                         rounded-xl
//                         border border-white/10
//                         bg-slate-900
//                         px-4 py-3
//                         shadow-[0_4px_0_#020617]
//                       "
//                     >
//                       <div>
//                         <p className="font-bold">{item.name}</p>

//                         <p className="text-sm text-white-400">
//                           Quantity: {item.quantity}
//                         </p>
//                       </div>

//                       <p className="whitespace-nowrap font-bold text-green-400">
//                         Rs.{" "}
//                         {(
//                           Number(item.price || 0) * Number(item.quantity || 0)
//                         ).toLocaleString()}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* =========================
//                   TOTAL
//               ========================= */}
//               <div
//                 className="
//                   mb-5
//                   rounded-2xl
//                   border border-green-300/20
//                   bg-gradient-to-b
//                   from-green-500
//                   to-green-700
//                   px-5 py-4
//                   text-center
//                   font-bold
//                   shadow-[0_6px_0_#166534,0_10px_20px_rgba(0,0,0,0.4)]
//                 "
//               >
//                 <span className="text-lg">Total Amount</span>

//                 <div className="mt-1 text-2xl">
//                   Rs. {Number(order.totalAmount || 0).toLocaleString()}
//                 </div>
//               </div>

//               {/* =========================
//                   STATUS
//               ========================= */}
//               <div>
//                 <label className="mb-2 block font-bold text-yellow-400">
//                   Update Order Status
//                 </label>

//                 <select
//                   value={selectedStatus[order._id] ?? order.status ?? "Pending"}
//                   onChange={(e) =>
//                     setSelectedStatus((prev) => ({
//                       ...prev,
//                       [order._id]: e.target.value,
//                     }))
//                   }
//                   className="
//                     w-full
//                     appearance-none
//                     rounded-xl
//                     border border-white/20
//                     bg-slate-900
//                     px-4 py-3
//                     font-bold
//                     text-white
//                     outline-none
//                     shadow-[0_5px_0_#020617]
//                     focus:border-blue-400
//                     focus:ring-2
//                     focus:ring-blue-400
//                   "
//                 >
//                   <option className="bg-slate-900 text-white" value="Pending">
//                     Pending
//                   </option>

//                   <option className="bg-slate-900 text-white" value="Accepted">
//                     Accepted
//                   </option>

//                   <option className="bg-slate-900 text-white" value="Preparing">
//                     Preparing
//                   </option>

//                   <option
//                     className="bg-slate-900 text-white"
//                     value="Out for Delivery"
//                   >
//                     Out for Delivery
//                   </option>

//                   <option className="bg-slate-900 text-white" value="Completed">
//                     Completed
//                   </option>

//                   <option className="bg-slate-900 text-white" value="Cancelled">
//                     Cancelled
//                   </option>
//                 </select>

//                 {/* SAVE */}
//                 <button
//                   onClick={() =>
//                     updateStatus(
//                       order._id,
//                       selectedStatus[order._id] ?? order.status ?? "Pending",
//                     )
//                   }
//                   className="
//                     mt-4
//                     w-full
//                     rounded-xl
//                     border border-green-300/30
//                     bg-gradient-to-b
//                     from-green-400
//                     to-green-700
//                     px-5 py-3
//                     font-bold
//                     text-white
//                     shadow-[0_6px_0_#166534,0_10px_20px_rgba(0,0,0,0.4)]
//                     transition-all
//                     duration-150
//                     hover:-translate-y-1
//                     active:translate-y-1
//                   "
//                 >
//                   Save Status
//                 </button>

//                 {/* PRINT */}
//                 <button
//                   onClick={() => printOrder(order)}
//                   className="
//                     mt-4
//                     w-full
//                     rounded-xl
//                     border border-white/20
//                     bg-gradient-to-b
//                     from-slate-500
//                     to-slate-700
//                     px-5 py-3
//                     font-bold
//                     text-white
//                     shadow-[0_6px_0_#020617,0_10px_20px_rgba(0,0,0,0.4)]
//                     transition-all
//                     duration-150
//                     hover:-translate-y-1
//                     active:translate-y-1
//                   "
//                 >
//                   🖨 Print Order
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminOrders;


// #region new 2 ////////////////////////////////////

// import React, { useEffect, useMemo, useState } from "react";

// function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   // ======================================
//   // FETCH ORDERS
//   // ======================================

//   async function fetchOrders() {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("adminToken");

//       const response = await fetch(
//         "http://localhost:5000/api/orders",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         alert(data.message);
//         return;
//       }

//       setOrders(data);
//     } catch (error) {
//       console.log(error);
//       alert("Unable to load orders.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // ======================================
//   // UPDATE STATUS
//   // ======================================

//   async function updateStatus(id, status) {
//     try {
//       const token = localStorage.getItem("adminToken");

//       const response = await fetch(
//         `http://localhost:5000/api/orders/${id}/status`,
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },

//           body: JSON.stringify({
//             status,
//           }),
//         },
//       );

//       if (!response.ok) {
//         alert("Status update failed");
//         return;
//       }

//       fetchOrders();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // ======================================
//   // FILTERED ORDERS
//   // ======================================

//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const matchSearch =
//         order.customer.name
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         order.customer.phone.includes(search) ||
//         String(order.orderNumber).includes(search);

//       const matchStatus =
//         filter === "All" ||
//         order.status === filter;

//       return matchSearch && matchStatus;
//     });
//   }, [orders, search, filter]);

//   // ======================================
//   // DASHBOARD STATS
//   // ======================================

//   const today = new Date().toDateString();

//   const todayOrders = orders.filter(
//     (o) =>
//       new Date(o.createdAt).toDateString() ===
//       today,
//   );

//   const todaySales = todayOrders.reduce(
//     (total, order) =>
//       total + order.totalAmount,
//     0,
//   );

//   const pendingOrders = orders.filter(
//     (o) => o.status === "Pending",
//   ).length;

//   const completedOrders = orders.filter(
//     (o) => o.status === "Completed",
//   ).length;

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center text-3xl font-bold">
//         Loading Orders...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-8">

//       {/* HEADER */}

//       <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

//         <h1 className="text-3xl font-extrabold">
//           Admin Dashboard 📦
//         </h1>

//         <button
//           onClick={fetchOrders}
//           className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
//         >
//           Refresh
//         </button>

//       </div>

//       {/* DASHBOARD */}

//       <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

//         <div className="rounded-2xl bg-black p-6 shadow-lg">
//           <p className="text-white-500">
//             Today's Orders
//           </p>

//           <h2 className="mt-2 text-4xl font-bold">
//             {todayOrders.length}
//           </h2>
//         </div>

//         <div className="rounded-2xl bg-black p-6 shadow-lg">
//           <p className="text-white-500">
//             Pending
//           </p>

//           <h2 className="mt-2 text-4xl font-bold text-yellow-600">
//             {pendingOrders}
//           </h2>
//         </div>

//         <div className="rounded-2xl bg-black p-6 shadow-lg">
//           <p className="text-white-500">
//             Completed
//           </p>

//           <h2 className="mt-2 text-4xl font-bold text-green-600">
//             {completedOrders}
//           </h2>
//         </div>

//         <div className="rounded-2xl bg-black p-6 shadow-lg">
//           <p className="text-white-500">
//             Today's Sales
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-blue-700">
//             Rs. {todaySales}
//           </h2>
//         </div>

//       </div>

//       {/* SEARCH */}

//       <div className="mb-8 flex flex-col gap-4 md:flex-row">

//         <input
//           type="text"
//           placeholder="Search Order / Customer / Phone"
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           className="flex-1 rounded-xl border bg-black p-4"
//         />

//         <select
//           value={filter}
//           onChange={(e) =>
//             setFilter(e.target.value)
//           }
//           className="rounded-xl border bg-black p-4"
//         >
//           <option>All</option>
//           <option>Pending</option>
//           <option>Accepted</option>
//           <option>Preparing</option>
//           <option>
//             Out for Delivery
//           </option>
//           <option>Completed</option>
//           <option>Cancelled</option>
//         </select>

//       </div>
   
//       {/* ORDERS */}

//       <div className="space-y-5">

//         {filteredOrders.length === 0 ? (
//           <div className="rounded-3xl bg-black p-10 text-center shadow-lg">
//             <div className="text-5xl">📦</div>

//             <h2 className="mt-4 text-2xl font-bold text-white-800">
//               No Orders Found
//             </h2>

//             <p className="mt-2 text-white-500">
//               Try another search or status filter.
//             </p>
//           </div>
//         ) : (
//           filteredOrders.map((order) => {

//             const statusStyles = {
//               Pending:
//                 "bg-yellow-100 text-yellow-700 border-yellow-300",

//               Accepted:
//                 "bg-blue-100 text-blue-700 border-blue-300",

//               Preparing:
//                 "bg-orange-100 text-orange-700 border-orange-300",

//               "Out for Delivery":
//                 "bg-purple-100 text-purple-700 border-purple-300",

//               Completed:
//                 "bg-green-100 text-green-700 border-green-300",

//               Cancelled:
//                 "bg-red-100 text-red-700 border-red-300",
//             };

//             return (
//               <div
//                 key={order._id}
//                 className="overflow-hidden rounded-3xl bg-black shadow-lg"
//               >

//                 {/* ORDER HEADER */}

//                 <div className="flex flex-col gap-4 border-b bg-slate-900 p-5 text-white sm:flex-row sm:items-center sm:justify-between">

//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-wider text-white-400">
//                       Order Number
//                     </p>

//                     <h2 className="mt-1 text-2xl font-extrabold text-yellow-400">
//                       #{order.orderNumber}
//                     </h2>
//                   </div>

//                   <div className="flex flex-wrap items-center gap-3">

//                     <span className="text-sm text-white-300">
//                       {new Date(
//                         order.createdAt,
//                       ).toLocaleString()}
//                     </span>

//                     <span
//                       className={`rounded-full border px-4 py-2 text-sm font-bold ${
//                         statusStyles[order.status] ||
//                         "bg-slate-100 text-white-700"
//                       }`}
//                     >
//                       {order.status}
//                     </span>

//                   </div>

//                 </div>

//                 {/* ORDER BODY */}

//                 <div className="grid gap-6 p-5 lg:grid-cols-3">

//                   {/* CUSTOMER */}

//                   <div className="rounded-2xl bg-slate-100 p-5">

//                     <h3 className="mb-4 text-lg font-extrabold text-white-900">
//                       Customer 👤
//                     </h3>

//                     <div className="space-y-3">

//                       <div>
//                         <p className="text-xs font-bold uppercase text-white-400">
//                           Name
//                         </p>

//                         <p className="mt-1 font-bold text-white-800">
//                           {order.customer?.name}
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-xs font-bold uppercase text-white-400">
//                           Phone
//                         </p>

//                         <p className="mt-1 font-bold text-white-800">
//                           {order.customer?.phone}
//                         </p>
//                       </div>

//                       <div>
//                         <p className="text-xs font-bold uppercase text-white-400">
//                           Address
//                         </p>

//                         <p className="mt-1 leading-relaxed font-bold text-white-800">
//                           {order.customer?.address}
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                   {/* ITEMS */}

//                   <div className="rounded-2xl bg-slate-100 p-5 lg:col-span-2">

//                     <h3 className="mb-4 text-lg font-extrabold text-white-900">
//                       Ordered Items 🍔
//                     </h3>

//                     <div className="space-y-3">

//                       {order.items?.map(
//                         (item, index) => (
//                           <div
//                             key={`${item.id}-${index}`}
//                             className="flex items-center gap-3 rounded-2xl bg-black p-3 sm:p-4"
//                           >

//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="h-16 w-16 shrink-0 rounded-xl object-cover"
//                             />

//                             <div className="min-w-0 flex-1">

//                               <h4 className="truncate font-bold text-white-900">
//                                 {item.name}
//                               </h4>

//                               <p className="mt-1 text-sm text-white-500">
//                                 Rs. {item.price} ×{" "}
//                                 {item.quantity}
//                               </p>

//                             </div>

//                             <p className="shrink-0 font-extrabold text-white-900">
//                               Rs.{" "}
//                               {item.price *
//                                 item.quantity}
//                             </p>

//                           </div>
//                         ),
//                       )}

//                     </div>

//                   </div>

//                 </div>

//                 {/* ORDER FOOTER */}

//                 <div className="flex flex-col gap-5 border-t p-5 sm:flex-row sm:items-center sm:justify-between">

//                   {/* TOTAL */}

//                   <div>
//                     <p className="text-sm font-bold text-white-400">
//                       Total Amount
//                     </p>

//                     <p className="mt-1 text-2xl font-extrabold text-green-600">
//                       Rs. {order.totalAmount}
//                     </p>
//                   </div>

//                   {/* STATUS UPDATE */}

//                   <div className="w-full sm:w-auto">

//                     <label className="mb-2 block text-sm font-bold text-white-500">
//                       Update Order Status
//                     </label>

//                     <select
//                       value={order.status}
//                       onChange={(e) =>
//                         updateStatus(
//                           order._id,
//                           e.target.value,
//                         )
//                       }
//                       className="w-full rounded-xl border-2 border-slate-200 bg-black px-4 py-3 font-bold text-white-800 outline-none transition focus:border-blue-500 sm:min-w-[220px]"
//                     >
//                       <option value="Pending">
//                         Pending
//                       </option>

//                       <option value="Accepted">
//                         Accepted
//                       </option>

//                       <option value="Preparing">
//                         Preparing
//                       </option>

//                       <option value="Out for Delivery">
//                         Out for Delivery
//                       </option>

//                       <option value="Completed">
//                         Completed
//                       </option>

//                       <option value="Cancelled">
//                         Cancelled
//                       </option>
//                     </select>

//                   </div>

//                 </div>

//               </div>
//             );
//           })
//         )}

//       </div>

//       {/* FOOTER */}

//       <div className="mt-8 pb-5 text-center text-sm text-white-400">
//         Showing {filteredOrders.length} of{" "}
//         {orders.length} orders
//       </div>

//     </div>
//   );
// }

// export default AdminOrders;




// #region new 3///////////////////////////////////////////////////////////////



import React, { useEffect, useMemo, useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [updatingId, setUpdatingId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [printingOrder, setPrintingOrder] = useState(null);

  // ======================================
  // FETCH ORDERS
  // ======================================

  async function fetchOrders() {
    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("ORDER ERROR:", data);
        setOrders([]);
        return;
      }

      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("FETCH ORDERS ERROR:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  // ======================================
  // SORT ORDERS
  // ======================================

  const sortedOrders = [...orders].sort(
    (a, b) =>
      Number(a.orderNumber || 0) -
      Number(b.orderNumber || 0),
  );

  // ======================================
  // SEARCH + FILTER
  // ======================================

  const filteredOrders = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return sortedOrders.filter((order) => {
      const name =
        order.customer?.name?.toLowerCase() || "";

      const phone =
        order.customer?.phone?.toLowerCase() || "";

      const orderNumber = String(
        order.orderNumber || "",
      );

      const matchesSearch =
        searchValue === "" ||
        name.includes(searchValue) ||
        phone.includes(searchValue) ||
        orderNumber.includes(searchValue);

      const matchesFilter =
        filter === "All" ||
        order.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [sortedOrders, search, filter]);

  // ======================================
  // TODAY
  // ======================================

  const today = new Date();

  const todayOrders = sortedOrders.filter((order) => {
    if (!order.createdAt) return false;

    const orderDate = new Date(order.createdAt);

    return (
      orderDate.getDate() === today.getDate() &&
      orderDate.getMonth() === today.getMonth() &&
      orderDate.getFullYear() === today.getFullYear()
    );
  });

  const todayOrderCount = todayOrders.length;

  const todayTotalAmount = todayOrders.reduce(
    (total, order) =>
      total + Number(order.totalAmount || 0),
    0,
  );

  const pendingOrders = sortedOrders.filter(
    (order) => order.status === "Pending",
  ).length;

  const completedOrders = sortedOrders.filter(
    (order) => order.status === "Completed",
  ).length;

  const todayDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // ======================================
  // DATE / TIME
  // ======================================

  function formatOrderDate(date) {
    if (!date) return "Date unavailable";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function formatOrderTime(date) {
    if (!date) return "Time unavailable";

    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // ======================================
  // STATUS STYLE
  // ======================================

  function getStatusStyle(status) {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-black";

      case "Accepted":
        return "bg-blue-500 text-white";

      case "Preparing":
        return "bg-orange-500 text-white";

      case "Out for Delivery":
        return "bg-purple-500 text-white";

      case "Completed":
        return "bg-green-500 text-white";

      case "Cancelled":
        return "bg-red-500 text-white";

      default:
        return "bg-slate-500 text-white";
    }
  }

  // ======================================
  // UPDATE STATUS
  // ======================================

  async function updateStatus(orderId, newStatus) {
    try {
      setUpdatingId(orderId);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("STATUS ERROR:", data);
        alert(data.message || "Status update failed.");
        return;
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? {
                ...order,
                status: newStatus,
              }
            : order,
        ),
      );

      setSelectedStatus((prev) => ({
        ...prev,
        [orderId]: newStatus,
      }));

      console.log("Status updated:", data);
    } catch (error) {
      console.log("UPDATE STATUS ERROR:", error);
      alert("Unable to update status.");
    } finally {
      setUpdatingId(null);
    }
  }

  // ======================================
  // PRINT ORDER
  // ======================================

  function printOrder(order) {
    setPrintingOrder(order);

    setTimeout(() => {
      window.print();

      setTimeout(() => {
        setPrintingOrder(null);
      }, 500);
    }, 100);
  }

  // ======================================
  // LOGOUT
  // ======================================

  function handleLogout() {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  }

  // ======================================
  // LOADING
  // ======================================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="text-center">
          <div className="mb-4 text-5xl">🍱</div>

          <h1 className="text-2xl font-bold text-white">
            Loading Orders...
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Please wait...
          </p>
        </div>
      </div>
    );
  }

  // ======================================
  // PRINT SCREEN
  // ======================================

  if (printingOrder) {
    return (
      <div className="min-h-screen bg-white p-8 text-black">
        <div className="mx-auto max-w-md">

          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold">
              SUSHI CLUB
            </h1>

            <p className="text-lg font-bold">
              KITCHEN ORDER
            </p>

            <div className="my-4 border-t-2 border-dashed border-black" />
          </div>

          <div className="mb-5 text-center">
            <p className="text-3xl font-bold">
              ORDER #{printingOrder.orderNumber}
            </p>

            <p className="mt-1 text-sm">
              {formatOrderDate(printingOrder.createdAt)}
              {" • "}
              {formatOrderTime(printingOrder.createdAt)}
            </p>
          </div>

          <div className="mb-5">
            <p>
              <strong>Customer:</strong>{" "}
              {printingOrder.customer?.name}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {printingOrder.customer?.phone}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {printingOrder.customer?.address}
            </p>
          </div>

          <div className="border-b-2 border-t-2 border-black py-4">
            <h2 className="mb-3 text-lg font-bold">
              ORDER ITEMS
            </h2>

            {printingOrder.items?.map((item) => (
              <div
                key={item._id || item.id}
                className="mb-2 flex justify-between gap-4"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>

                <span>
                  Rs.{" "}
                  {(
                    Number(item.price || 0) *
                    Number(item.quantity || 0)
                  ).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-between text-xl font-bold">
            <span>Total</span>

            <span>
              Rs.{" "}
              {Number(
                printingOrder.totalAmount || 0,
              ).toLocaleString()}
            </span>
          </div>

          <div className="mt-4">
            <p>
              <strong>Status:</strong>{" "}
              {printingOrder.status || "Pending"}
            </p>
          </div>

          <div className="mt-10 border-t-2 border-dashed border-black pt-4 text-center">
            <p className="font-bold">
              Please prepare this order
            </p>

            <p className="mt-2 text-sm">
              Sushi Club Kitchen
            </p>
          </div>

        </div>
      </div>
    );
  }

  // ======================================
  // MAIN ADMIN UI
  // ======================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-6 text-white sm:px-5 sm:py-10">
      <div className="mx-auto max-w-7xl">
        {/* ==================================
            HEADER
        ================================== */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="font-bold uppercase tracking-widest text-yellow-400">
              Sushi Club
            </p>

            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl">
              Admin Orders
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Manage restaurant orders
            </p>
          </div>

          {/* TODAY SUMMARY */}

          <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 px-5 py-4 shadow-[0_6px_0_#020617,0_12px_25px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-3 items-center gap-4 sm:gap-6">
              <div>
                <p className="text-xs text-slate-400">Date</p>

                <p className="mt-1 text-sm font-bold text-white">{todayDate}</p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <p className="text-xs text-slate-400">Orders</p>

                <p className="mt-1 text-xl font-bold text-yellow-400">
                  {todayOrderCount}
                </p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <p className="text-xs text-slate-400">Sales</p>

                <p className="mt-1 text-lg font-bold text-green-400">
                  Rs. {todayTotalAmount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* LOGOUT */}

          <button
            onClick={handleLogout}
            className="mx-auto rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-5 py-3 text-sm font-bold text-white shadow-[0_4px_0_#991b1b,0_7px_12px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 active:translate-y-1 lg:mx-0"
          >
            Logout
          </button>
        </div>
        {/* ==================================
            STATS
        ================================== */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-[0_8px_0_#020617,0_15px_25px_rgba(0,0,0,0.4)]">
            <p className="text-sm font-semibold text-slate-400">
              Today's Orders
            </p>

            <p className="mt-2 text-3xl font-extrabold text-yellow-400">
              {todayOrderCount}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-[0_8px_0_#020617,0_15px_25px_rgba(0,0,0,0.4)]">
            <p className="text-sm font-semibold text-slate-400">Pending</p>

            <p className="mt-2 text-3xl font-extrabold text-yellow-400">
              {pendingOrders}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-[0_8px_0_#020617,0_15px_25px_rgba(0,0,0,0.4)]">
            <p className="text-sm font-semibold text-slate-400">Completed</p>

            <p className="mt-2 text-3xl font-extrabold text-green-400">
              {completedOrders}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-[0_8px_0_#020617,0_15px_25px_rgba(0,0,0,0.4)]">
            <p className="text-sm font-semibold text-slate-400">
              Today's Sales
            </p>

            <p className="mt-2 text-2xl font-extrabold text-green-400">
              Rs. {todayTotalAmount.toLocaleString()}
            </p>
          </div>
        </div>
        {/* ==================================
            SEARCH
        ================================== */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4 shadow-[0_8px_0_#020617,0_15px_25px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order, customer or phone..."
              className="w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-white/20 bg-slate-900 px-4 py-3 font-bold text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
            >
              <option value="All">All Orders</option>

              <option value="Pending">Pending</option>

              <option value="Accepted">Accepted</option>

              <option value="Preparing">Preparing</option>

              <option value="Out for Delivery">Out for Delivery</option>

              <option value="Completed">Completed</option>

              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs font-semibold text-slate-500">
            <span>
              Showing {filteredOrders.length} of {orders.length} orders
            </span>

            {(search || filter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="font-bold text-yellow-400 hover:text-yellow-300"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
        {/* ==================================
            ORDERS
        ================================== */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredOrders.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-white/20 bg-gradient-to-br from-slate-800 to-slate-950 p-10 text-center shadow-[0_10px_0_#020617,0_20px_40px_rgba(0,0,0,0.6)]">
              <div className="text-5xl">📦</div>

              <h2 className="mt-4 text-2xl font-bold">No Orders Found</h2>

              <p className="mt-2 text-slate-400">
                Customer orders will appear here.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order._id}
                className="rounded-3xl border border-white/20 bg-gradient-to-br from-slate-800 to-slate-950 p-5 shadow-[0_10px_0_#020617,0_20px_40px_rgba(0,0,0,0.6)] sm:p-6"
              >
                {/* ORDER HEADER */}

                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Restaurant Order</p>

                    <h2 className="text-2xl font-bold text-yellow-400">
                      Order #{order.orderNumber}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      {formatOrderDate(order.createdAt)}
                      {" • "}
                      {formatOrderTime(order.createdAt)}
                    </p>
                  </div>

                  <span
                    className={`self-start whitespace-nowrap rounded-full px-3 py-1 text-sm font-bold ${getStatusStyle(
                      order.status,
                    )}`}
                  >
                    {order.status || "Pending"}
                  </span>
                </div>

                {/* CUSTOMER */}

                <div className="mb-5 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <h3 className="mb-3 text-lg font-bold text-yellow-400">
                    Customer Details
                  </h3>

                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-bold text-white">Name:</span>{" "}
                      <span className="text-slate-300">
                        {order.customer?.name || "N/A"}
                      </span>
                    </p>

                    <p>
                      <span className="font-bold text-white">Phone:</span>{" "}
                      <span className="text-slate-300">
                        {order.customer?.phone || "N/A"}
                      </span>
                    </p>

                    <p>
                      <span className="font-bold text-white">Address:</span>{" "}
                      <span className="text-slate-300">
                        {order.customer?.address || "N/A"}
                      </span>
                    </p>
                  </div>
                </div>

                {/* ITEMS */}

                <div className="mb-5">
                  <h3 className="mb-3 text-lg font-bold text-yellow-400">
                    Ordered Items
                  </h3>

                  <div className="space-y-3">
                    {order.items?.map((item) => (
                      <div
                        key={item._id || item.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 shadow-[0_4px_0_#020617]"
                      >
                        <div className="min-w-0">
                          <p className="truncate font-bold text-white">
                            {item.name}
                          </p>

                          <p className="text-sm text-slate-400">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        <p className="whitespace-nowrap font-bold text-green-400">
                          Rs.{" "}
                          {(
                            Number(item.price || 0) * Number(item.quantity || 0)
                          ).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOTAL */}

                <div className="mb-5 rounded-2xl border border-green-300/20 bg-gradient-to-b from-green-500 to-green-700 px-5 py-4 text-center font-bold shadow-[0_6px_0_#166534,0_10px_20px_rgba(0,0,0,0.4)]">
                  <span className="text-lg">Total Amount</span>

                  <div className="mt-1 text-2xl">
                    Rs. {Number(order.totalAmount || 0).toLocaleString()}
                  </div>
                </div>

                {/* STATUS */}

                <div>
                  <label className="mb-2 block font-bold text-yellow-400">
                    Update Order Status
                  </label>

                  <select
                    value={
                      selectedStatus[order._id] ?? order.status ?? "Pending"
                    }
                    onChange={(e) =>
                      setSelectedStatus((prev) => ({
                        ...prev,
                        [order._id]: e.target.value,
                      }))
                    }
                    disabled={updatingId === order._id}
                    className="w-full appearance-none rounded-xl border border-white/20 bg-slate-900 px-4 py-3 font-bold text-white outline-none shadow-[0_5px_0_#020617] focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option className="bg-slate-900 text-white" value="Pending">
                      Pending
                    </option>

                    <option
                      className="bg-slate-900 text-white"
                      value="Accepted"
                    >
                      Accepted
                    </option>

                    <option
                      className="bg-slate-900 text-white"
                      value="Preparing"
                    >
                      Preparing
                    </option>

                    <option
                      className="bg-slate-900 text-white"
                      value="Out for Delivery"
                    >
                      Out for Delivery
                    </option>

                    <option
                      className="bg-slate-900 text-white"
                      value="Completed"
                    >
                      Completed
                    </option>

                    <option
                      className="bg-slate-900 text-white"
                      value="Cancelled"
                    >
                      Cancelled
                    </option>
                  </select>

                  {/* SAVE */}

                  <button
                    disabled={updatingId === order._id}
                    onClick={() =>
                      updateStatus(
                        order._id,
                        selectedStatus[order._id] ?? order.status ?? "Pending",
                      )
                    }
                    className="mt-4 w-full rounded-xl border border-green-300/30 bg-gradient-to-b from-green-400 to-green-700 px-5 py-3 font-bold text-white shadow-[0_6px_0_#166534,0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-150 hover:-translate-y-1 active:translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {updatingId === order._id ? "Saving..." : "Save Status"}
                  </button>

                  {/* PRINT */}

                  <button
                    onClick={() => printOrder(order)}
                    className="mt-4 w-full rounded-xl border border-white/20 bg-gradient-to-b from-slate-500 to-slate-700 px-5 py-3 font-bold text-white shadow-[0_6px_0_#020617,0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-150 hover:-translate-y-1 active:translate-y-1"
                  >
                    🖨 Print Order
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
       
        {/* ==================================
    ADMIN FOOTER
================================== */}
        <footer className="mt-12 border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5">
            <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
              {/* BRAND */}

              <div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <img
                    src="/restaurant.png"
                    alt="Sushi Club"
                    className="h-9 w-9 object-contain"
                  />

                  <h2 className="text-lg font-extrabold text-white">
                    Sushi
                    <span className="text-yellow-400">Club</span>
                  </h2>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Restaurant Order Management System
                </p>
              </div>

              {/* CENTER */}

              <div className="text-xs text-slate-500">
                <p>© {new Date().getFullYear()} Sushi Club.</p>

                <p className="mt-1">All rights reserved.</p>
              </div>

              {/* STATUS */}

              <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <span className="text-xs font-bold text-green-400">
                  Admin Panel Online
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/5 pt-5 text-center">
              <p className="text-xs text-slate-600">
                Built for Sushi Club • Order Management
              </p>
            </div>
          </div>
        </footer>
       
      </div>
    </div>
  );
}

export default AdminOrders;

