
// import React, { useEffect, useState } from "react";

// function Hero() {
//   const slides = [
//     {
//       badge: "🍔 BEST SELLER",
//       title: "Crispy Zinger Burger",
//       highlight: "Made Fresh For You",
//       description:
//         "Crispy chicken, fresh vegetables and our special sauce. Hot, fresh and ready to satisfy your hunger.",
//       image: "/burger.png",
//       button: "Order Burger 🍔",
//     },
//     {
//       badge: "🍕 CUSTOMER FAVORITE",
//       title: "Delicious Chicken Pizza",
//       highlight: "Loaded With Flavor",
//       description:
//         "Freshly baked pizza topped with juicy chicken, melted cheese and delicious ingredients.",
//       image: "/pizza.png",
//       button: "Order Pizza 🍕",
//     },
//     {
//       badge: "🍟 PERFECT SIDE",
//       title: "Crispy French Fries",
//       highlight: "Golden & Crunchy",
//       description:
//         "Golden crispy fries made fresh and served hot. The perfect side for your favorite meal.",
//       image: "/fries.png",
//       button: "Order Fries 🍟",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // ================================
//   // AUTO SLIDER
//   // ================================

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) =>
//         prev === slides.length - 1 ? 0 : prev + 1,
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // ================================
//   // NEXT / PREVIOUS
//   // ================================

//   function nextSlide() {
//     setCurrentSlide((prev) =>
//       prev === slides.length - 1 ? 0 : prev + 1,
//     );
//   }

//   function previousSlide() {
//     setCurrentSlide((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1,
//     );
//   }

//   return (
//     <section
//       id="home"
//       className="
//         relative
//         overflow-hidden
//         bg-gradient-to-br
//         from-slate-900
//         via-slate-800
//         to-black
//         px-4
//         py-12
//         text-white
//         sm:px-6
//         sm:py-16
//       "
//     >
//       {/* Background Glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-20
//           -top-20
//           h-64
//           w-64
//           rounded-full
//           bg-yellow-400/10
//           blur-3xl
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-20
//           -left-20
//           h-64
//           w-64
//           rounded-full
//           bg-blue-500/10
//           blur-3xl
//         "
//       />

//       {/* ================================
//           SLIDER CONTAINER
//       ================================= */}

//       <div className="mx-auto max-w-6xl">
//         <div className="relative overflow-hidden">
//           {/* ================================
//               SLIDES TRACK
//           ================================= */}

//           <div
//             className="
//               flex
//               transition-transform
//               duration-700
//               ease-in-out
//             "
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//             }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="
//                   min-w-full
//                   flex-shrink-0
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     min-h-[540px]
//                     flex-col
//                     items-center
//                     justify-center
//                     gap-10
//                     md:flex-row
//                     md:gap-8
//                   "
//                 >
//                   {/* ================================
//                       LEFT CONTENT
//                   ================================= */}

//                   <div
//                     className="
//                       w-full
//                       text-center
//                       md:w-1/2
//                       md:text-left
//                     "
//                   >
//                     <p
//                       className="
//                         mb-3
//                         text-sm
//                         font-bold
//                         tracking-wider
//                         text-yellow-400
//                         sm:text-base
//                       "
//                     >
//                       {slide.badge}
//                     </p>

//                     <h1
//                       className="
//                         text-4xl
//                         font-extrabold
//                         leading-tight
//                         sm:text-5xl
//                         lg:text-6xl
//                       "
//                     >
//                       {slide.title}

//                       <span
//                         className="
//                           block
//                           text-yellow-400
//                         "
//                       >
//                         {slide.highlight}
//                       </span>
//                     </h1>

//                     <p
//                       className="
//                         mx-auto
//                         mt-5
//                         max-w-lg
//                         text-base
//                         leading-relaxed
//                         text-slate-300
//                         sm:text-lg
//                         md:mx-0
//                       "
//                     >
//                       {slide.description}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() => {
//                         document.getElementById("menu")?.scrollIntoView({
//                           behavior: "smooth",
//                         });
//                       }}
//                       className="
//                         mt-7
//                         rounded-xl
//                         bg-yellow-400
//                         px-6
//                         py-3
//                         font-bold
//                         text-slate-900
//                         shadow-[0_6px_0_#a16207]
//                         transition
//                         hover:-translate-y-1
//                         hover:shadow-[0_8px_0_#a16207]
//                         active:translate-y-1
//                         active:shadow-[0_2px_0_#a16207]
//                         sm:px-7
//                       "
//                     >
//                       {slide.button}
//                     </button>
//                   </div>

//                   {/* ================================
//                       RIGHT IMAGE
//                   ================================= */}

//                   <div
//                     className="
//                       flex
//                       w-full
//                       items-center
//                       justify-center
//                       md:w-1/2
//                     "
//                   >
//                     <div
//                       className="
//                         relative
//                         flex
//                         items-center
//                         justify-center
//                       "
//                     >
//                       {/* Glow */}

//                       <div
//                         className="
//                           absolute
//                           h-64
//                           w-64
//                           rounded-full
//                           bg-yellow-400/10
//                           blur-3xl
//                           sm:h-80
//                           sm:w-80
//                         "
//                       />

//                       <img
//                         src={slide.image}
//                         alt={slide.title}
//                         className="
//                           relative
//                           h-64
//                           w-64
//                           rounded-full
//                           object-cover
//                           shadow-[0_20px_50px_rgba(0,0,0,0.6)]
//                           sm:h-80
//                           sm:w-80
//                           lg:h-[350px]
//                           lg:w-[350px]
//                         "
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ================================
//               PREVIOUS BUTTON
//           ================================= */}

//           <button
//             type="button"
//             onClick={previousSlide}
//             aria-label="Previous slide"
//             className="
//               absolute
//               left-1
//               top-1/2
//               z-10
//               flex
//               h-10
//               w-10
//               -translate-y-1/2
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-white/20
//               bg-black/40
//               text-xl
//               backdrop-blur-sm
//               transition
//               duration-200
//               hover:border-yellow-400
//               hover:bg-yellow-400
//               hover:text-slate-900
//               sm:left-2
//               md:left-0
//             "
//           >
//             ←
//           </button>

//           {/* ================================
//               NEXT BUTTON
//           ================================= */}

//           <button
//             type="button"
//             onClick={nextSlide}
//             aria-label="Next slide"
//             className="
//               absolute
//               right-1
//               top-1/2
//               z-10
//               flex
//               h-10
//               w-10
//               -translate-y-1/2
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-white/20
//               bg-black/40
//               text-xl
//               backdrop-blur-sm
//               transition
//               duration-200
//               hover:border-yellow-400
//               hover:bg-yellow-400
//               hover:text-slate-900
//               sm:right-2
//               md:right-0
//             "
//           >
//             →
//           </button>
//         </div>

//         {/* ================================
//             DOTS
//         ================================= */}

//         <div
//           className="
//             mt-4
//             flex
//             justify-center
//             gap-2
//           "
//         >
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               className={`
//                 h-2.5
//                 rounded-full
//                 transition-all
//                 duration-500
//                 ${
//                   currentSlide === index
//                     ? "w-8 bg-yellow-400"
//                     : "w-2.5 bg-white/30 hover:bg-white/60"
//                 }
//               `}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// #region SUSHI ///////////////////////////////////////

import React, { useEffect, useState } from "react";

function Hero() {
  const slides = [
    {
      image: "/sushi1.jpg",
      smallText: "PREMIUM SUSHI EXPERIENCE",
      title: "Fresh Sushi,",
      highlight: "Made With Love",
      description:
        "Experience fresh ingredients, authentic flavors and beautifully crafted sushi delivered to your doorstep.",
    },
    {
      image: "/sushi2.jpg",
      smallText: "JAPANESE FLAVORS",
      title: "Taste The",
      highlight: "Art Of Sushi",
      description:
        "From classic rolls to delicious signature creations, discover your new favorite sushi.",
    },
    {
      image: "/sushi3.jpg",
      smallText: "FRESH • DELICIOUS • FAST",
      title: "Your Sushi",
      highlight: "Is Waiting",
      description:
        "Order your favorite sushi rolls today and enjoy a delicious restaurant experience at home.",
    },
    {
      image: "/sushi4.jpg",
      smallText: "SUSHI CLUB SPECIAL",
      title: "Roll Into",
      highlight: "Happiness 🍣",
      description:
        "Beautifully prepared sushi, fresh ingredients and flavors that keep you coming back.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slider);
  }, [slides.length]);

  function nextSlide() {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  function previousSlide() {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <section
      id="home"
      className="relative h-[550px] w-full overflow-hidden bg-slate-950 sm:h-[680px] lg:h-[520px]"
    >
      {/* SLIDES */}

      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          {/* IMAGE */}

          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/25" />

          {/* GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />

          {/* BOTTOM GRADIENT */}

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

          {/* CONTENT */}

          <div className="relative z-20 flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
              <div className="max-w-2xl text-center md:text-left">
                {/* SMALL TITLE */}

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-black/30 px-4 py-2 text-xs font-bold tracking-[0.2em] text-yellow-400 backdrop-blur-sm sm:text-sm">
                  🍣 {slide.smallText}
                </div>

                {/* TITLE */}

                <h1 className="text-4xl font-black leading-[1.05] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
                  {slide.title}

                  <span className="mt-2 block text-yellow-400">
                    {slide.highlight}
                  </span>
                </h1>

                {/* DESCRIPTION */}

                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-200 drop-shadow-lg sm:text-lg md:mx-0">
                  {slide.description}
                </p>

                {/* BUTTONS */}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href="#menu"
                    className="rounded-xl bg-yellow-400 px-7 py-4 font-extrabold text-slate-950 shadow-[0_6px_0_#a16207] transition hover:-translate-y-1 hover:shadow-[0_8px_0_#a16207] active:translate-y-1 active:shadow-[0_3px_0_#a16207]"
                  >
                    Explore Menu 🍣
                  </a>

                  <a
                    href="#about"
                    className="rounded-xl border-2 border-white/40 bg-black/20 px-7 py-4 font-extrabold text-white backdrop-blur-sm transition hover:border-yellow-400 hover:text-yellow-400"
                  >
                    Discover Sushi Club
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* PREVIOUS */}

      <button
        type="button"
        onClick={previousSlide}
        className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur-md transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950 sm:left-6 sm:h-14 sm:w-14"
      >
        ←
      </button>

      {/* NEXT */}

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-xl text-white backdrop-blur-md transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-slate-950 sm:right-6 sm:h-14 sm:w-14"
      >
        →
      </button>

      {/* DOTS */}

      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-9 bg-yellow-400"
                : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
