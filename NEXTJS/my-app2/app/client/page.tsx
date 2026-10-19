"use client"
import  { useState } from 'react'

function ClientPage() {
    const [count, setCount] = useState(0)
  return (<>
    <div>Client page</div>
<p>Count : {count}</p>
 <button onClick={()=> setCount(count + 1)}>ADD</button>
  </>
  )
}

export default ClientPage