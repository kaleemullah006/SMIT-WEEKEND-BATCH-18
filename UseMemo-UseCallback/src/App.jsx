// // import './App.css'
// // import UseCallback from './usecallback/Usecallback'
// // import UseMemo from './UseMemo/UseMemo'

// // function App() {

// //   return (
// //     <>
// //       {/* <UseMemo /> */}
// //       <UseCallback/>
// //     </>
// //   )
// // }

// // export default App

// // import { useCallback, useState } from "react";
// // import Child from "./usecallback/Child";

// // function App() {
// //   const [count, setCount] = useState(0);
// //   const [name, setName] = useState("");

// //   const handleClick = useCallback(() => {
// //     console.log("Button clicked");
// //   }, []);

// //   return (
// //     <>
// //       <h1>Count: {count}</h1>

// //       <button onClick={() => setCount(count + 1)}>Increase</button>

// //       <br />
// //       <br />

// //       <input
// //         className="border w-content px-4 py-2"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         placeholder="Enter Name"
// //       />

// //       <h2 className="border w-content px-4 py-2">Hello {name}</h2>

// //       <Child handleClick={handleClick} />
// //     </>
// //   );
// // }

// // export default App;

// // import React,{useState, useCallback} from 'react'
// // import Child from './usecallback/Child'

// // function App() {
// //   const [count, setCount] = useState(0)
// //   const [name, setName] = useState("")

// //   const handleMessage = useCallback(() => {
// //     console.log("Hello from Parent")
// //   },[])
// //   return (
// //     <>

// //       <h2>Count: {count}</h2>
// //       <button onClick={()=>setCount(count + 1)}>Increase</button>

// //       <input type="text"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       placeholder="Enter Name"/>

// //       <h2>Message:{name }</h2>

// //     <Child handleMessage={handleMessage}/>

// //     </>
// //   )
// // }

// // export default App

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center transform-3d">
//       {/* <div className="perspective-dramatic"> */}
//       {/* <div className="w-64 h-40 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold rotate-y-20 shadow-2xl">
//           3D Card
//         </div> */}
//       {/* <div
//           className="
//             w-64 h-40
//             bg-red-600
//             rounded-2xl
//             flex items-center justify-center
//             text-white text-2xl font-bold
//             shadow-2xl
//             transition-transform duration-500
//             hover:rotate-y-20

//           "
//         >
//           3D Card
//         </div>
//       </div> */}
//       <div className="perspective-normal">
//         <div className="transform-3d">
//           <div
//             className="      w-64 h-40
//               bg-blue-600
//               rounded-2xl
//               flex items-center justify-center
//               text-white text-2xl font-bold
//               hover:translate-z-20
//               shadow-2xl"
//           >
//             Card
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center">
//       {/* Perspective */}
//       <div className="perspective-normal">
//         {/* 3D Space */}
//         <div
//           className="
//             transform-3d
//             w-72
//             h-48
//             bg-red-600
//             rounded-2xl
//             flex
//             items-center
//             justify-center
//             shadow-2xl
//             rotate-y-12
//             transition-transform
//             duration-500
//             hover:rotate-y-20
//           "
//         >
//           {/* 3D Content */}
//           <div
//             className="
//               translate-z-20
//               text-white
//               text-3xl
//               font-bold
//             "
//           >
//             3D CARD
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      {/* Perspective */}
      <div className="perspective-dramatic">
        {/* Card Container */}
        <div
          className="
            group
            relative
            w-72
            h-48
            transform-3d
            transition-transform
            duration-700
            hover:rotate-y-180
          "
        >
          {/* Front Side */}
          <div
            className="
              absolute
              inset-0
              bg-blue-600
              rounded-2xl
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
              backface-hidden
            "
          >
            FRONT
          </div>

          {/* Back Side */}
          <div
            className="
              absolute
              inset-0
              bg-purple-600
              rounded-2xl
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
              rotate-y-180
              backface-hidden
            "
          >
            BACK
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;