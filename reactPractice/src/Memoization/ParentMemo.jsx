// import {  memo } from "react";
// import ChildMemo from "./ChildMemo";

// function ParentMemo({name,setName}) {

//    console.log("parent rerender hua")
//   return (
//     <>
    
//       <div className="flex flex-col items-center gap-4 mt-10">
       


//         <input
//           type="text"
//           value={name}
          
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Naam Likhen"
//           className="border-2 border-blue-300 rounded-3xl px-4 py-2"
//         />

//         <ChildMemo name={name} />
//       </div>
//     </>
//   );
// }

// export default memo(ParentMemo);

// import {memo} from 'react'

// function ParentMemo({count,data}) {
//     console.warn("inner child")
//   return (<>
    
//     <p>Count: {count}</p>
//     <p>data: {data}</p>
//     <p>data: {data}</p>
//   </>
//   )
// }

// export default memo(ParentMemo)
import ChildMemo from "./ChildMemo"

function ParentMemo({items, count}) {
     console.log("parent")
  return (<>
    <div>ParentMemo</div>

    <p className="bg-blue-300 rounded-3xl px-4 py-2 w-25"> Count: {count}</p>

<ChildMemo items={items}/>

  </>
  )
}

export default ParentMemo
