// export default function Child1({onNameChange}) {
//   return (
//     <>

// <input type="text"
// onChange={(e)=> onNameChange(e.target.value)}
// placeholder="Naam likhen..."
// className="border border-blue-400 rounded-3xl px-4 py-2 mt-2"/>

//     </>
//   )
// }
// export default function Child1({sendData}) {
//   return (
//     <>

//     <button className="px-4 py-2
//      rounded-3xl bg-blue-400" onClick={()=> sendData("hi baaba")}>send Data</button>

//     </>
//   )
// }

// export default function Child1({ sendData }) {
//   return(

//     <>
//     <button
//       className="px-4 py-2
//       rounded-3xl bg-blue-400"
//       onClick={() => sendData(5)}
//       >Send Data</button>
//   </>
//     )
// }
import { useState } from "react";

export default function Child1({ sendData }) {
  
  return (
    <>
    <div className="flex flex-col w-60 mt-2 gap-2">

      <input
        type="text"
        
        onChange={(e) => sendData(e.target.value)}
        
        placeholder="Enter message"
        className="border border-blue-600 rounded-3xl px-4 py-2 focus outline-none"
        />
        
     
        </div>
    </>
  );
}
