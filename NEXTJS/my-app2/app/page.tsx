// export default function Home() {
//   console.log("SERVER COMPONENT");

//   return <h1>Hello Pakistan</h1>;
// }

// "use client"
// export default function Home() {
//   console.log("client COMPONENT");

//   return <h1>Hello Pakistan</h1>;
// }



// function Home() {
//   return (<>
//     <div> server component</div>

//     <button className="bg-amber-700 rounded-3xl px-4 py-2 w-30 " onClick={()=> alert("hello")}>click me</button>
//   </>
//   )
// }

// export default Home


// "use client"

// import { useState } from "react"

// function Home() {
//   const [count, setCount] = useState(0)
//   return (<>
//     <div>Client Component</div>

//     <h4>Count: {count}</h4>

//     <button className="bg-amber-700 rounded-3xl px-4 py-2 w-30 " onClick={() => setCount(count + 1)}>click me</button>
//   </>
//   )
// }

// export default Home

"use client"

import { useState } from "react"

function Home() {
  
  const [ age, setAge] = useState("")
  return (<>

    <div>Client Component</div>

  <input type="Number"
   value={age} 
  onChange={(e)=> setAge(e.target.value)}
  placeholder="Enter your age"/>

    <h4>Age: {age}</h4>
    <h5>Your Age is "{age}" years</h5>

  </>
  )
}

export default Home