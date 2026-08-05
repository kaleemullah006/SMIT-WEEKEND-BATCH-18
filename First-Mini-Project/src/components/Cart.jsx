
// import { useCart } from "../context/CartContext";

// function Cart() {
//   const { cart, dispatch } = useCart();

//   const totalAmount = cart.reduce(
//     (total, item) =>
//       total + item.price * item.quantity,
//     0,
//   );

//   return (
//     <section
//       id="cart"
//       className="bg-slate-900 px-4 py-10 text-white sm:px-6 sm:py-12"
//     >
//       <div className="mx-auto w-full max-w-4xl">
//         {/* ============================
//             HEADING
//         ============================ */}

//         <div className="mb-6 flex items-center  gap-3  justify-center ">
//           <h2 className="text-2xl font-bold sm:text-3xl ">Your Cart 🛒</h2>

//           {cart.length > 0 && (
//             <span
//               className="
//               rounded-full
//               bg-slate-800
//               px-3
//               py-1
//               text-sm
//               font-bold
//               text-yellow-400
//             "
//             >
//               {cart.length} {cart.length === 1 ? "Item" : "Items"}
//             </span>
//           )}
//         </div>

//         {/* ============================
//             EMPTY CART
//         ============================ */}

//         {cart.length === 0 ? (
//           <div
//             className="
//             rounded-2xl
//             border
//             border-white/10
//             bg-slate-800
//             px-5
//             py-10
//             text-center
//             shadow-xl
//           "
//           >
//             <div className="mb-3 text-5xl">🛒</div>

//             <p className="text-lg font-semibold text-slate-300">
//               Your cart is empty.
//             </p>

//             <p className="mt-1 text-sm text-slate-500">
//               Add something delicious from our menu.
//             </p>
//           </div>
//         ) : (
//           <>
//             {/* ============================
//                 CART ITEMS
//             ============================ */}

//             <div className="space-y-4">
//               {cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-slate-800
//                     p-4
//                     shadow-lg
//                     sm:p-5
//                   "
//                 >
//                   {/* ITEM INFORMATION */}

//                   <div
//                     className="
//                     flex
//                     flex-col
//                     gap-4
//                     sm:flex-row
//                     sm:items-center
//                     sm:justify-between
//                   "
//                   >
//                     <div className="min-w-0">
//                       <h3
//                         className="
//                         break-words
//                         text-lg
//                         font-bold
//                         sm:text-xl
//                       "
//                       >
//                         {item.name}
//                       </h3>

//                       <p className="mt-1 text-yellow-400">Rs. {item.price}</p>
//                     </div>

//                     {/* ============================
//                         QUANTITY CONTROLS
//                     ============================ */}

//                     <div
//                       className="
//                       flex
//                       items-center
//                       justify-between
//                       gap-3
//                       sm:justify-start
//                     "
//                     >
//                       <button
//                         type="button"
//                         onClick={() =>
//                           dispatch({
//                             type: "DECREASE_QUANTITY",
//                             payload: item.id,
//                           })
//                         }
//                         className="
//                           flex
//                           h-10
//                           w-10
//                           items-center
//                           justify-center
//                           rounded-lg
//                           bg-red-500
//                           text-xl
//                           font-bold
//                           shadow-[0_3px_0_#991b1b]
//                           transition
//                           hover:bg-red-600
//                           active:translate-y-1
//                           active:shadow-none
//                         "
//                       >
//                         −
//                       </button>

//                       <span
//                         className="
//                         flex
//                         min-w-8
//                         justify-center
//                         text-xl
//                         font-bold
//                       "
//                       >
//                         {item.quantity}
//                       </span>

//                       <button
//                         type="button"
//                         onClick={() =>
//                           dispatch({
//                             type: "INCREASE_QUANTITY",
//                             payload: item.id,
//                           })
//                         }
//                         className="
//                           flex
//                           h-10
//                           w-10
//                           items-center
//                           justify-center
//                           rounded-lg
//                           bg-green-500
//                           text-xl
//                           font-bold
//                           shadow-[0_3px_0_#166534]
//                           transition
//                           hover:bg-green-600
//                           active:translate-y-1
//                           active:shadow-none
//                         "
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* ============================
//                       ITEM TOTAL + REMOVE
//                   ============================ */}

//                   <div
//                     className="
//                     mt-4
//                     flex
//                     items-center
//                     justify-between
//                     gap-3
//                     border-t
//                     border-white/10
//                     pt-4
//                   "
//                   >
//                     <div>
//                       <p className="text-xs text-slate-400">Item Total</p>

//                       <p className="font-bold text-yellow-400">
//                         Rs. {item.price * item.quantity}
//                       </p>
//                     </div>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         dispatch({
//                           type: "REMOVE_FROM_CART",
//                           payload: item.id,
//                         })
//                       }
//                       className="
//                         rounded-xl
//                         bg-red-600
//                         px-4
//                         py-2
//                         text-sm
//                         font-bold
//                         text-white
//                         shadow-[0_4px_0_#991b1b]
//                         transition
//                         hover:bg-red-700
//                         active:translate-y-1
//                         active:shadow-none
//                       "
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* ============================
//                 TOTAL
//             ============================ */}

//             <div
//               className="
//               mt-6
//               flex
//               flex-col
//               gap-2
//               rounded-2xl
//               bg-yellow-400
//               p-5
//               text-slate-900
//               shadow-[0_6px_0_#a16207]
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//             "
//             >
//               <span className="text-lg font-bold sm:text-xl">Total Amount</span>

//               <span className="text-2xl font-extrabold">Rs. {totalAmount}</span>
//             </div>

//             {/* ============================
//                 CLEAR CART
//             ============================ */}

//             <button
//               type="button"
//               onClick={() =>
//                 dispatch({
//                   type: "CLEAR_CART",
//                 })
//               }
//               className="
//                 mt-6
//                 w-full
//                 rounded-xl
//                 bg-red-600
//                 px-5
//                 py-3
//                 font-bold
//                 text-white
//                 shadow-[0_5px_0_#991b1b]
//                 transition
//                 hover:bg-red-700
//                 hover:translate-y-1
//                 hover:shadow-[0_2px_0_#991b1b]
//                 active:translate-y-1
//               "
//             >
//               Clear Cart 🗑️
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Cart;

//#region new  2 ////////////////////////////


import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section
      id="cart"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 sm:py-12"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* ============================
            HEADING
        ============================ */}

        <div className="mb-7 flex flex-wrap items-center justify-center gap-3">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Your Cart 🛒
          </h2>

          {cart.length > 0 && (
            <span
              className="
                rounded-full
                bg-slate-800
                px-3
                py-1
                text-sm
                font-bold
                text-yellow-400
              "
            >
              {cart.length} {cart.length === 1 ? "Item" : "Items"}
            </span>
          )}
        </div>

        {/* ============================
            EMPTY CART
        ============================ */}

        {cart.length === 0 ? (
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-800
              px-5
              py-12
              text-center
              shadow-xl
            "
          >
            <div className="mb-4 text-5xl">🛒</div>

            <p className="text-lg font-semibold text-slate-300">
              Your cart is empty.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Add something delicious from our sushi menu.
            </p>
          </div>
        ) : (
          <>
            {/* ============================
                CART ITEMS
            ============================ */}

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-slate-800
                    p-4
                    shadow-md
                    sm:p-5
                  "
                >
                  {/* ITEM TOP */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    {/* NAME + PRICE */}

                    <div className="min-w-0">
                      <h3
                        className="
                          break-words
                          text-lg
                          font-bold
                          text-white
                          sm:text-xl
                        "
                      >
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-yellow-400">
                        Rs. {item.price.toLocaleString()} each
                      </p>
                    </div>

                    {/* QUANTITY */}

                    <div
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-900
                        p-2
                        sm:w-auto
                        sm:justify-start
                        sm:gap-3
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: item.id,
                          })
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          bg-red-500
                          text-xl
                          font-bold
                          shadow-[0_3px_0_#991b1b]
                          transition-transform
                          duration-150
                          hover:bg-red-600
                          active:translate-y-1
                          active:shadow-none
                        "
                      >
                        −
                      </button>

                      <span
                        className="
                          min-w-10
                          text-center
                          text-xl
                          font-extrabold
                        "
                      >
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            payload: item.id,
                          })
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          bg-green-500
                          text-xl
                          font-bold
                          shadow-[0_3px_0_#166534]
                          transition-transform
                          duration-150
                          hover:bg-green-600
                          active:translate-y-1
                          active:shadow-none
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* ITEM BOTTOM */}

                  <div
                    className="
                      mt-4
                      flex
                      flex-col
                      gap-3
                      border-t
                      border-white/10
                      pt-4
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    {/* ITEM TOTAL */}

                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Item Total
                      </p>

                      <p className="text-lg font-extrabold text-yellow-400">
                        Rs.{" "}
                        {(
                          item.price * item.quantity
                        ).toLocaleString()}
                      </p>
                    </div>

                    {/* REMOVE */}

                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        })
                      }
                      className="
                        w-full
                        rounded-xl
                        bg-red-600
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_4px_0_#991b1b]
                        transition-transform
                        duration-150
                        hover:bg-red-700
                        active:translate-y-1
                        active:shadow-none
                        sm:w-auto
                      "
                    >
                      Remove 🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ============================
                TOTAL
            ============================ */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-2
                rounded-3xl
                bg-yellow-400
                p-5
                text-center
                text-slate-900
                shadow-[0_5px_0_#a16207]
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:text-left
              "
            >
              <span className="text-lg font-bold sm:text-xl">
                Total Amount
              </span>

              <span className="text-2xl font-extrabold">
                Rs. {totalAmount.toLocaleString()}
              </span>
            </div>

            {/* ============================
                CLEAR CART
            ============================ */}

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "CLEAR_CART",
                })
              }
              className="
                mt-6
                w-full
                rounded-xl
                bg-red-600
                px-5
                py-3
                font-bold
                text-white
                shadow-[0_5px_0_#991b1b]
                transition-transform
                duration-150
                hover:bg-red-700
                hover:-translate-y-0.5
                active:translate-y-1
                active:shadow-none
              "
            >
              Clear Cart 🗑️
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;

