// import React,{useMemo, useState} from 'react'

// function UseMemo() {
//     const [count, setCount] = useState(0)
//     const [number, setNumber] = useState(5)

//     const multiCountMemo = useMemo(function multiCount() {
//       console.log("function running");

//       return count * 3;
//     }, [number]);
//   return (
//     <>

//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-10">
//         {/* Navbar */}
//         <div className="mx-auto flex w-fit items-center gap-8 rounded-2xl border border-white/20 bg-gradient-to-b from-yellow-300 to-yellow-500 px-8 py-4 font-bold text-slate-900 shadow-[0_8px_0_#a16207,0_15px_30px_rgba(0,0,0,0.4)]">
//           <li className="list-none cursor-pointer transition hover:-translate-y-1">
//             Home
//           </li>

//           <li className="list-none cursor-pointer transition hover:-translate-y-1">
//             About
//           </li>

//           <li className="list-none cursor-pointer transition hover:-translate-y-1">
//             Services
//           </li>

//           <li className="list-none cursor-pointer transition hover:-translate-y-1">
//             Contact
//           </li>
//         </div>

//         {/* Main Card */}
//         <div className="mx-auto mt-12 flex w-[350px] flex-col items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 p-8 shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
//           {/* Count Card */}
//           <h2 className="w-full rounded-2xl border border-red-200/30 bg-gradient-to-b from-red-400 to-red-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#991b1b,0_12px_20px_rgba(0,0,0,0.4)]">
//             Count: {count}
//           </h2>
//           {/* Count Card 2 */}
//           <h2 className="w-full rounded-2xl border border-red-200/30 bg-gradient-to-b from-red-400 to-red-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#991b1b,0_12px_20px_rgba(0,0,0,0.4)]">
//             multiCount: {multiCountMemo}
//           </h2>

//           {/* Number Card */}
//           <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
//             Number: {number}
//           </h2>

//           {/* Add Button */}
//           <button
//             className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
//             onClick={() => setCount(count + 1)}
//           >
//             ADD
//           </button>

//           {/* Multiply Button */}
//           <button
//             className="w-full rounded-2xl border border-green-300/30 bg-gradient-to-b from-green-400 to-green-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#166534,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#166534,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#166534]"
//             onClick={() => setNumber(number * 5)}
//           >
//             MULTIPLY ×5
//           </button>
//         </div>
//       </div>

//     </>
//   );
// }

// export default UseMemo
import React, { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

    const result = useMemo(() => {
        console.log("function running")

        return number * 10
    }, [number]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black ">
        {/* Navbar */}
        <div className="mx-auto flex w-full justify-center items-center gap-5 rounded-2xl border border-white/20 bg-gradient-to-b from-yellow-300 to-yellow-500 px-8 py-4 font-bold text-slate-900 shadow-[0_8px_0_#a16207,0_15px_30px_rgba(0,0,0,0.4)]">
          <li className="list-none cursor-pointer transition hover:-translate-y-1">
            Home
          </li>

          <li className="list-none cursor-pointer transition hover:-translate-y-1">
            About
          </li>

          <li className="list-none cursor-pointer transition hover:-translate-y-1">
            Services
          </li>

          <li className="list-none cursor-pointer transition hover:-translate-y-1">
            Contact
          </li>
        </div>

        {/*/////////////////////////////////////// HADDING ///////////////////////////////////////////// */}


        <h1 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 mt-6 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
          UseCallback
        </h1>
        {/* Main Card */}
        <div className="flex flex-row flex-wrap ">
          <div className="mx-auto mt-12 flex  w-[250px] flex-col items-center gap-6 p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950  shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
            <input
              className="w-full border bg-slate-800 border-red-200/30 rounded-2xl px-6 py-4  text-xl font-bold text-white shadow-[0_7px_0_#475569,0_12px_20px_rgba(15,23,42,0.4)]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            {/* Number Card */}
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {number}
            </h2>
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {result}
            </h2>

            {/* Add Button */}
            <button
              className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
              onClick={() => setNumber(number + 1)}
            >
              ADD
            </button>
          </div>
          {/* Main Card 2 */}
          <div className="mx-auto mt-12 flex w-[250px] flex-col items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 p-8 shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
            <input
              className="w-full border bg-slate-800 border-red-200/30 rounded-2xl px-6 py-4  text-xl font-bold text-white shadow-[0_7px_0_#475569,0_12px_20px_rgba(15,23,42,0.4)]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            {/* Number Card */}
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {number}
            </h2>
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {result}
            </h2>

            {/* Add Button */}
            <button
              className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
              onClick={() => setNumber(number + 1)}
            >
              ADD
            </button>
          </div>
          {/* Main Card 3 */}
          <div className="mx-auto mt-12 flex w-[250px] flex-col items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 p-8 shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
            <input
              className="w-full border bg-slate-800 border-red-200/30 rounded-2xl px-6 py-4  text-xl font-bold text-white shadow-[0_7px_0_#475569,0_12px_20px_rgba(15,23,42,0.4)]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            {/* Number Card */}
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {number}
            </h2>
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {result}
            </h2>

            {/* Add Button */}
            <button
              className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
              onClick={() => setNumber(number + 1)}
            >
              ADD
            </button>
          </div>
          {/* Main Card 3 */}
          <div className="mx-auto mt-12 flex w-[250px] flex-col items-center gap-6 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-700 to-slate-950 p-8 shadow-[0_15px_0_#020617,0_25px_50px_rgba(0,0,0,0.6)]">
            <input
              className="w-full border bg-slate-800 border-red-200/30 rounded-2xl px-6 py-4  text-xl font-bold text-white shadow-[0_7px_0_#475569,0_12px_20px_rgba(15,23,42,0.4)]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />

            {/* Number Card */}
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {number}
            </h2>
            <h2 className="w-full rounded-2xl border border-purple-200/30 bg-gradient-to-b from-purple-400 to-purple-700 px-6 py-4 text-center text-xl font-bold text-white shadow-[0_7px_0_#6b21a8,0_12px_20px_rgba(0,0,0,0.4)]">
              Number: {result}
            </h2>

            {/* Add Button */}
            <button
              className="w-full rounded-2xl border border-blue-300/30 bg-gradient-to-b from-blue-400 to-blue-700 px-6 py-4 font-bold text-white shadow-[0_8px_0_#1e3a8a,0_14px_25px_rgba(0,0,0,0.5)] transition duration-150 hover:-translate-y-1 hover:shadow-[0_12px_0_#1e3a8a,0_18px_30px_rgba(0,0,0,0.5)] active:translate-y-2 active:shadow-[0_3px_0_#1e3a8a] "
              onClick={() => setNumber(number + 1)}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseMemo;
