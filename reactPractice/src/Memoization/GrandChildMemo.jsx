// import { memo } from "react";


// function GrandChildMemo({name}) {
//     console.log("grandchild rerender hua")
//   return (<>
    
  
//   <h1>name: {name}</h1>
  
  
//   </>
//   )
// }

// export default memo(GrandChildMemo)
import {memo} from 'react'

function GrandChildMemo({items}) {
    console.log("grandChild")
  return (<>
    <div>GrandChildMemo</div>

    {items.map((item,index)=>(
        <p className='border-2 border-blue-600 rounded-3xl px-4 py-2 text-black w-80' key={index}>Item: {item}</p>
    ))}
  </>
  )
}

export default memo (GrandChildMemo)