// import { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";

// function ThemeButton() {
//   const { theme, ToggleTheme } = useContext(ThemeContext);
//   return (
//     <>
//       <div>ThemeButton</div>

//       <button className={theme === "light" ?"bg-green-900 text-white px-4 py-2 rounded-full hover:-translate-y-1 transition duration-300 h-16 w-16 mx-auto  "  :"bg-white text-black  px-4 py-2 rounded-full mx-auto hover:-translate-y-1 transition h-16 w-16 duration-300 " } onClick={ToggleTheme}>
//         {theme === "light" ? "🌙Dark" : "☀️Light"}
//       </button>
//     </>
//   );
// }

// export default ThemeButton;

import { useContext } from "react";
import { UserContext } from "../Context/ThemeContext";

function ThemeButton() {
  const { name, job, city } = useContext(UserContext);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center gap-2">
        <div className="w-60 flex flex-col border-2 shadow-lg shadow-blue-800 spred border-blue-600 rounded-3xl justify-center items-center gap-2 space-y-1 hover:-translate-y-2 transition duration-300">
          <h1 className="font-bold mt-2 bg-blue-300 px-4 py-1 rounded-3xl shadow-lg shadow-blue-200">Name: {name}</h1>
          <p className="text-gray-600 font-bold bg-green-300 px-2 py-1 rounded-2xl shadow-lg shadow-green-200">Job: {job}</p>
          <p className="text-gray-600 font-bold mb-4 bg-green-300 px-2 py-1 rounded-2xl shadow-lg shadow-green-200">City: {city}</p>
        </div>
        <div className="w-60 flex flex-col border-2 shadow-lg shadow-blue-800 spred border-blue-600 rounded-3xl justify-center items-center gap-2 space-y-1 hover:-translate-y-2 transition duration-300">
          <h1 className="font-bold mt-2 bg-blue-300 px-4 py-1 rounded-3xl shadow-lg shadow-blue-200">Name: {name}</h1>
          <p className="text-gray-600 font-bold bg-green-300 px-2 py-1 rounded-2xl shadow-lg shadow-green-200">Job: {job}</p>
          <p className="text-gray-600 font-bold mb-4 bg-green-300 px-2 py-1 rounded-2xl shadow-lg shadow-green-200">City: {city}</p>
        </div>
      </div>
    </>
  );
}

export default ThemeButton;
