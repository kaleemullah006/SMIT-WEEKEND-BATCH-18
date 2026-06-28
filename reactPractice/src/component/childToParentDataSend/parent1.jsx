import Child1 from "./child1";
import { useState } from "react";

// export default function Parent1() {
//     const [name, setName] = useState ("")
//     function handleName(value){
//         setName(value)
//     }
//   return (
//     <>

//       <div className="flex flex-col ml-2">
//       <div>parent1</div>
//         <h1>parent ko mila: {name}</h1>
//         <Child1 onNameChange={handleName} />
//       </div>
//     </>
//   );
// }
// export default function Parent1() {
//   const [text, setText] = useState("");
//   function recieveText(value) {

//     setText(value);
//   }
//   console.log(text)

//   return <>
//   <h1>{text}</h1>
//   <Child1 sendData={recieveText}/>

//   </>
// }

// export default function Parent1() {
//   const [name, setName]= useState("")
//   function recieveName(data){
//     setName(data)
//   }
// return(
//   <>
//   <h1>Name: {name}</h1>
//   <Child1 sendData={recieveName}/>
  
  
//   </>
// )


// }
// export default function Parent1() {
//   const [number, setNumber]= useState(0)
//   function recieveName(data){
//     setNumber((prev)=> prev + data)
//   }
// return(
//   <>
//   <h1>Number: {number}</h1>
//   <Child1 sendData={recieveName}/>
  
  
//   </>
// )


// }
export default function Parent1() {
  const [message, setMessage]= useState("")
  function recieveName(data){
    setMessage(data)
  }
return(
  <>
  <h1 className="bg-blue-300 rounded-3xl px-4 py-2 w-60">Message: {message}</h1>
  <Child1 sendData={recieveName}/>
  
  
  </>
)


}
