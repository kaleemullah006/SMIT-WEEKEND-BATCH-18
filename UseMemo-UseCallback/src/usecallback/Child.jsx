// import React from "react";

// function Child({ handleClick }) {
//   console.log("Child rendered");

//   return (
//     <>
//       <button className="border w-content px-4 py-2" onClick={handleClick}>
//         Child Button
//       </button>
//     </>
//   );
// }

// export default React.memo(Child);


import React from "react"

function Child({ handleMessage }) {
    console.log("child rendered")

  return (
      <>
      <button onClick={handleMessage}>message</button>
      
      
      
      </>
  )
}

export default React.memo(Child);