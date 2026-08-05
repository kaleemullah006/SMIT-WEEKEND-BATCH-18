// import React, { useState } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   function scrollToSection(id) {
//     const section = document.getElementById(id);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }

//     setMenuOpen(false);
//   }

//   return (
//     <nav
//       className="
//         sticky
//         top-0
//         z-50
//         border-b
//         border-white/10
//         bg-slate-900/95
//         px-4
//         py-3
//         text-white
//         shadow-lg
//         backdrop-blur-md
//         sm:px-6
//       "
//     >
//       <div className="mx-auto max-w-6xl">

//         {/* ================================
//             TOP NAVBAR
//         ================================= */}

//         <div className="flex items-center justify-between">

//           {/* LOGO */}

//           <button
//             type="button"
//             onClick={() => scrollToSection("home")}
//             className="
//               flex
//               items-center
//               gap-2
//               text-left
//             "
//           >
//             <img
//               src="/restaurant.png"
//               alt="Sushi Club"
//               className="
//                 h-9
//                 w-9
//                 object-contain
//                 sm:h-10
//                 sm:w-10
//               "
//             />

//             <span className="
//               text-xl
//               font-bold
//               sm:text-2xl
//             ">
//               Sushi
//               <span className="text-yellow-400">
//                 Club
//               </span>
//             </span>
//           </button>

//           {/* ================================
//               DESKTOP MENU
//           ================================= */}

//           <ul className="
//             hidden
//             items-center
//             gap-3
//             font-bold
//             md:flex
//           ">

//             <li>
//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("home")
//                 }
//                 className="
//                   rounded-3xl
//                   border-2
//                   border-white/20
//                   px-3
//                   py-2
//                   transition
//                   hover:-translate-y-0.5
//                   hover:border-yellow-400
//                   hover:text-yellow-400
//                 "
//               >
//                 Home
//               </button>
//             </li>

//             <li>
//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("menu")
//                 }
//                 className="
//                   rounded-3xl
//                   border-2
//                   border-white/20
//                   px-3
//                   py-2
//                   transition
//                   hover:-translate-y-0.5
//                   hover:border-yellow-400
//                   hover:text-yellow-400
//                 "
//               >
//                 Menu
//               </button>
//             </li>

//             <li>
//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("about")
//                 }
//                 className="
//                   rounded-3xl
//                   border-2
//                   border-white/20
//                   px-3
//                   py-2
//                   transition
//                   hover:-translate-y-0.5
//                   hover:border-yellow-400
//                   hover:text-yellow-400
//                 "
//               >
//                 About
//               </button>
//             </li>

//             <li>
//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("contact")
//                 }
//                 className="
//                   rounded-3xl
//                   border-2
//                   border-white/20
//                   px-3
//                   py-2
//                   transition
//                   hover:-translate-y-0.5
//                   hover:border-yellow-400
//                   hover:text-yellow-400
//                 "
//               >
//                 Contact
//               </button>
//             </li>

//           </ul>

//           {/* ================================
//               RIGHT SIDE
//           ================================= */}

//           <div className="flex items-center gap-2">

//             {/* CART */}

//             <button
//               type="button"
//               onClick={() =>
//                 scrollToSection("cart")
//               }
//               className="
//                 rounded-xl
//                 bg-yellow-400
//                 px-3
//                 py-2
//                 text-sm
//                 font-bold
//                 text-slate-900
//                 shadow-[0_4px_0_#a16207]
//                 transition
//                 hover:-translate-y-1
//                 hover:shadow-[0_2px_0_#a16207]
//                 active:translate-y-1
//                 active:shadow-none
//                 sm:px-4
//                 sm:text-base
//               "
//             >
//               Cart 🛒
//             </button>

//             {/* ================================
//                 MOBILE MENU BUTTON
//             ================================= */}

//             <button
//               type="button"
//               onClick={() =>
//                 setMenuOpen((previous) => !previous)
//               }
//               aria-label="Toggle menu"
//               aria-expanded={menuOpen}
//               className="
//                 flex
//                 h-10
//                 w-10
//                 items-center
//                 justify-center
//                 rounded-xl
//                 border
//                 border-white/20
//                 bg-slate-800
//                 text-xl
//                 transition
//                 hover:border-yellow-400
//                 hover:text-yellow-400
//                 md:hidden
//               "
//             >
//               {menuOpen ? "✕" : "☰"}
//             </button>

//           </div>

//         </div>

//         {/* ================================
//             MOBILE MENU
//         ================================= */}

//         {menuOpen && (
//           <div
//             className="
//               mt-4
//               rounded-2xl
//               border
//               border-white/10
//               bg-slate-800
//               p-3
//               shadow-[0_10px_25px_rgba(0,0,0,0.4)]
//               md:hidden
//             "
//           >
//             <div className="flex flex-col gap-2">

//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("home")
//                 }
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   px-4
//                   py-3
//                   text-left
//                   font-bold
//                   transition
//                   hover:bg-slate-700
//                   hover:text-yellow-400
//                 "
//               >
//                 🏠 Home
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("menu")
//                 }
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   px-4
//                   py-3
//                   text-left
//                   font-bold
//                   transition
//                   hover:bg-slate-700
//                   hover:text-yellow-400
//                 "
//               >
//                 🍽️ Menu
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("about")
//                 }
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   px-4
//                   py-3
//                   text-left
//                   font-bold
//                   transition
//                   hover:bg-slate-700
//                   hover:text-yellow-400
//                 "
//               >
//                 ℹ️ About
//               </button>

//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("contact")
//                 }
//                 className="
//                   rounded-xl
//                   border
//                   border-white/10
//                   px-4
//                   py-3
//                   text-left
//                   font-bold
//                   transition
//                   hover:bg-slate-700
//                   hover:text-yellow-400
//                 "
//               >
//                 📞 Contact
//               </button>

//               {/* MOBILE CART */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   scrollToSection("cart")
//                 }
//                 className="
//                   mt-1
//                   rounded-xl
//                   bg-yellow-400
//                   px-4
//                   py-3
//                   text-left
//                   font-bold
//                   text-slate-900
//                   shadow-[0_4px_0_#a16207]
//                   transition
//                   active:translate-y-1
//                   active:shadow-none
//                 "
//               >
//                 🛒 Go To Cart
//               </button>

//             </div>
//           </div>
//         )}

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// #region new 2 ///////////////////////////////////////



import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-900 px-4 py-4 text-white shadow-lg sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* =========================
            TOP NAVBAR
        ========================= */}

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <img
              src="/restaurant.png"
              alt="Sushi Club"
              className="h-10 w-10 object-contain"
            />

            <h1 className="text-xl font-extrabold sm:text-2xl">
              Sushi
              <span className="text-yellow-400">
                Club
              </span>
            </h1>
          </a>

          {/* DESKTOP MENU */}

          <ul className="hidden items-center gap-3 font-bold md:flex">

            <li>
              <a
                href="#home"
                className="block rounded-3xl border-2 border-transparent px-3 py-2 transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#menu"
                className="block rounded-3xl border-2 border-transparent px-3 py-2 transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-400"
              >
                Menu
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="block rounded-3xl border-2 border-transparent px-3 py-2 transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block rounded-3xl border-2 border-transparent px-3 py-2 transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-400"
              >
                Contact
              </a>
            </li>

          </ul>

          {/* DESKTOP CART */}

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("cart")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="hidden rounded-xl bg-yellow-400 px-4 py-2 font-bold text-slate-900 shadow-[0_4px_0_#a16207] transition hover:translate-y-1 hover:shadow-[0_2px_0_#a16207] md:block"
          >
            Cart 🛒
          </button>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="rounded-xl border border-white/20 bg-slate-800 p-2 text-2xl transition hover:border-yellow-400 hover:text-yellow-400 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        {menuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">

            <div className="flex flex-col gap-2">

              <a
                href="#home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-slate-800 hover:text-yellow-400"
              >
                🏠 Home
              </a>

              <a
                href="#menu"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-slate-800 hover:text-yellow-400"
              >
                🍣 Menu
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-slate-800 hover:text-yellow-400"
              >
                👨‍🍳 About Us
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-slate-800 hover:text-yellow-400"
              >
                📞 Contact
              </a>

              <button
                type="button"
                onClick={() => {
                  closeMenu();

                  document
                    .getElementById("cart")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="mt-2 w-full rounded-xl bg-yellow-400 px-4 py-3 font-bold text-slate-900 shadow-[0_4px_0_#a16207] transition hover:translate-y-1"
              >
                Cart 🛒
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;






