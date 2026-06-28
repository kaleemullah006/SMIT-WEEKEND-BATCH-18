// import { ThemeContext } from "../Context/ThemeContext";
// import { useState } from "react";
// import Navbar from "./navbar";
// function MainApp() {
//   const [theme, setTheme] = useState("light");
//   function ToggleTheme() {
//     setTheme(theme === "light" ? "dark" : "light");
//   }
//   return (
//     <>
//       <div>MainApp</div>

//       <ThemeContext.Provider value={{theme, ToggleTheme}}>
//         <div className={theme === "light" ?
//         "min-h-screen bg-white text-black transition duration-300" :
//         "min-h-screen bg-gray-900 text-white transition duration-300"
//       }>

//         <Navbar />
//       </div>
//       </ThemeContext.Provider>
//     </>
//   );
// }

// export default MainApp;


import { UserContext } from "../Context/ThemeContext";

import Navbar from "./navbar";
function MainApp() {

  
  return (
    <>
      

      <UserContext.Provider value={{name:"KALEEM", job: "Teacher", city: "Karachi" }}>
       
      

        <Navbar />
      
      </UserContext.Provider>
    </>
  );
}

export default MainApp;
