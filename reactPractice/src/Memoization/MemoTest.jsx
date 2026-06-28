// // MemoTest.jsx — App ki jagah state yahan rakhenge
// import { useState } from 'react'
// import ParentMemo from './ParentMemo'

// function MemoTest() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState("")

//   return (
//     <div className="flex flex-col items-center gap-4 mt-10">

//       {/* Count yahan hai — Parent ko nahi diya */}
//       <button
//         className="bg-blue-300 px-4 py-2 rounded-3xl"
//         onClick={() => setCount(count + 1)}
//       >
//         Count: {count}
//       </button>

//       {/* Sirf name Parent ko diya */}
//       <ParentMemo name={name} setName={setName} count={count} />

//     </div>
//   )
// }

// export default MemoTest

// import { useState } from "react";
// import ParentMemo from "./ParentMemo";

// import React from 'react'

// function MemoTest() {
//     const [count, setCount] = useState(0)
//     const [data, setData] = useState(0)
//   return (<>

//     <button className="bg-blue-300 rounded-3xl px-4 py-2" onClick={()=>setCount(count + 1)}>Count</button>
//     <button className="bg-blue-300 rounded-3xl px-4 py-2" onClick={()=>setData(data + 1)}>Data</button>
//     <p>Data: {data}</p>
//     <ParentMemo count={count} data={data}/>
//   </>
//   )
// }

// export default MemoTest

import { useState } from "react";
import ParentMemo from "./ParentMemo";

function MemoTest() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [input, setIinput] = useState("");
  function addItems(){
    setItems([...items, input])
    setIinput("")
  }
  return (
    <>
      <div>MemoTest</div>

      {/* Count Button  */}
      <button
        className="bg-blue-300 rounded-3xl px-4 py-2 "
        onClick={() => setCount(count + 1)}
      >Count</button>

      <input type="text"
      placeholder="Items add karen"
      value={input} 
      onChange={(e)=> setIinput(e.target.value)}
      className="border-2 border-blue-600 rounded-3xl px-4 py-2 w-70 shadow-lg shadow-blue-300"/>

      <button className="rounded-3xl px-4 py-2 border bg-blue-200 shadow-lg shadow-blue-300" onClick={addItems}>Add Item</button>

      <ParentMemo count={count} items={items} />
    </>
  );
}

export default MemoTest;
