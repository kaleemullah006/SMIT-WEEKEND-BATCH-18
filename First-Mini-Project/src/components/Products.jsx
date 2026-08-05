// import React from "react";
// import { useCart } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Salmon Sushi Roll",
//     price: 899,
//     image: "/menu1.jpg",
//   },
//   {
//     id: 2,
//     name: "California Roll",
//     price: 799,
//     image: "/menu1.jpg",
//   },
//   {
//     id: 3,
//     name: "Spicy Tuna Roll",
//     price: 949,
//     image: "/menu1.jpg",
//   },
//   {
//     id: 4,
//     name: "Dragon Roll",
//     price: 1199,
//     image: "/menu1.jpg",
//   },
//   {
//     id: 5,
//     name: "Shrimp Tempura Roll",
//     price: 999,
//     image: "/menu1.jpg",
//   },
//   {
//     id: 6,
//     name: "Rainbow Roll",
//     price: 1299,
//     image: "/menu1.jpg",
//   },
// ];

// function Products() {
//   const { dispatch } = useCart();

//   return (
//     <section
//       id="menu"
//       className="
//         bg-slate-100
//         px-4
//         py-12
//         sm:px-6
//         sm:py-16
//         lg:px-8
//       "
//     >
//       <div className="mx-auto w-full max-w-6xl">
//         {/* ================================
//             HEADING
//         ================================= */}

//         <div className="mb-8 text-center sm:mb-10">
//           <p
//             className="
//             text-sm
//             font-bold
//             tracking-widest
//             text-yellow-600
//             sm:text-base
//           "
//           >
//             OUR MENU
//           </p>

//           <h2
//             className="
//             mt-2
//             text-3xl
//             font-extrabold
//             text-slate-900
//             sm:text-4xl
//             lg:text-5xl
//           "
//           >
//             Popular Dishes
//           </h2>

//           <p
//             className="
//             mx-auto
//             mt-3
//             max-w-xl
//             text-sm
//             text-slate-500
//             sm:text-base
//           "
//           >
//             Choose your favorite food and add it to your cart.
//           </p>
//         </div>

//         {/* ================================
//             PRODUCTS GRID
//         ================================= */}

//         <div
//           className="
//           grid
//           grid-cols-1
//           gap-6
//           sm:grid-cols-2
//           sm:gap-7
//           lg:grid-cols-3
//           lg:gap-8
//         "
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="
//   flex
//   flex-col
//   overflow-hidden
//   rounded-3xl
//   bg-white
//   border
//   border-slate-200
//   shadow-md
//   transition-transform
//   duration-200
//   hover:-translate-y-1
// "
//             >
//               {/* ============================
//                   IMAGE
//               ============================ */}

//               <div className="relative overflow-hidden bg-slate-200">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   loading="lazy"
//                   decoding="async"
//                   className="h-60 w-full object-cover"
//                   draggable="false"
//                 />
//               </div>

//               {/* ============================
//                   CONTENT
//               ============================ */}

//               <div
//                 className="
//                 flex
//                 flex-1
//                 flex-col
//                 p-5
//                 sm:p-6
//               "
//               >
//                 <h3
//                   className="
//                   min-h-[3rem]
//                   text-xl
//                   font-bold
//                   leading-tight
//                   text-slate-900
//                   sm:text-2xl
//                   text-center
//                 "
//                 >
//                   {product.name}
//                 </h3>

//                 <p
//                   className="
//                   mt-2
//                   text-xl
//                   font-bold
//                   text-yellow-600
//                   text-center
//                 "
//                 >
//                   Rs. {product.price}
//                 </p>

//                 {/* ============================
//                     ADD TO CART
//                 ============================ */}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     dispatch({
//                       type: "ADD_TO_CART",
//                       payload: product,
//                     })
//                   }
//                   className="
//                     mt-5
//                     w-full
//                     rounded-xl
//                     bg-slate-900
//                     px-5
//                     py-3
//                     font-bold
//                     text-white
//                     shadow-[0_5px_0_#020617]
//                     transition
//                     duration-200
//                     hover:-translate-y-1
//                     hover:bg-slate-800
//                     active:translate-y-1
//                     active:shadow-none
                    
//                   "
//                 >
//                   Add To Cart 🛒
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Products;


//#region new 2 /////////////////////


import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Salmon Sushi Roll",
    price: 899,
    image: "/menu01.webp",
    category: "Rolls",
  },
  {
    id: 2,
    name: "California Roll",
    price: 799,
    image: "/menu02.webp",
    category: "Rolls",
  },
  {
    id: 3,
    name: "Spicy Tuna Roll",
    price: 949,
    image: "/menu03.webp",
    category: "Rolls",
  },
  {
    id: 4,
    name: "Dragon Roll",
    price: 1199,
    image: "/menu04.webp",
    category: "Rolls",
  },
  {
    id: 5,
    name: "Shrimp Nigiri",
    price: 999,
    image: "/menu05.webp",
    category: "Nigiri",
  },
  {
    id: 6,
    name: "Salmon Sashimi",
    price: 1299,
    image: "/menu06.webp",
    category: "Sashimi",
  },
];

function Products() {
  const { dispatch } = useCart();

  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) =>
      category === "All" || product.category === category,
  );

  return (
    <section
      id="menu"
      className="
        bg-slate-100
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================================
            HEADING
        ================================= */}

        <div className="mb-8 text-center sm:mb-10">
          <p
            className="
              text-sm
              font-bold
              tracking-widest
              text-yellow-600
              sm:text-base
            "
          >
            OUR MENU
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-extrabold
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Popular Sushi
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              text-slate-500
              sm:text-base
            "
          >
            Choose your favorite sushi and add it to your cart.
          </p>

          {/* ================================
              CATEGORY FILTERS
          ================================= */}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["All", "Rolls", "Nigiri", "Sashimi"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`
                  rounded-xl
                  px-5
                  py-2.5
                  font-bold
                  transition-transform
                  duration-200
                  ${
                    category === item
                      ? "bg-yellow-400 text-slate-900 shadow-[0_4px_0_#a16207]"
                      : "bg-slate-900 text-white shadow-md hover:-translate-y-0.5"
                  }
                `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ================================
            PRODUCTS GRID
        ================================= */}

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-md">
            <p className="text-lg font-bold text-slate-700">
              No sushi found in this category.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
              sm:gap-7
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  shadow-md
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                {/* ============================
                    IMAGE
                ============================ */}

                <div className="relative overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-60 w-full object-cover"
                    draggable="false"
                  />
                </div>

                {/* ============================
                    CONTENT
                ============================ */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                  "
                >
                  <div className="mb-2">
                    <span
                      className="
                        inline-block
                        rounded-full
                        bg-yellow-100
                        px-3
                        py-1
                        text-xs
                        font-bold
                        text-yellow-700
                      
                      "
                    >
                      {product.category}
                    </span>
                  </div>

                  <h3
                    className="
                      min-h-[3rem]
                      text-xl
                      font-bold
                      leading-tight
                      text-slate-900
                      sm:text-2xl
                      text-center
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xl
                      font-bold
                      text-yellow-600
                      text-center
                    "
                  >
                    Rs. {product.price.toLocaleString()}
                  </p>

                  {/* ============================
                      ADD TO CART
                  ============================ */}

                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      })
                    }
                    className="
                      mt-5
                      w-full
                      rounded-xl
                      bg-slate-900
                      px-5
                      py-3
                      font-bold
                      text-white
                      shadow-[0_4px_0_#020617]
                      transition-transform
                      duration-150
                      hover:-translate-y-0.5
                      hover:bg-slate-800
                      active:translate-y-1
                      active:shadow-none
                    "
                  >
                    Add To Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;

