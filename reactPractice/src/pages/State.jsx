// import { useState } from "react";

// function State() {
//   const [count , setCount] = useState(0)
// function Increase(){
//   setCount(count + 1)

// }
// function Decrease(){
//   if(count > 0 ){

//     setCount(count - 1)
//   }
// }
// function  Reset(){
//   setCount(0)
// }

//   return (
//     <>
//     <div className='min-h-screen flex justify-center items-center'>
// <div className=' flex flex-wrap border-2 border-blue-300 rounded-3xl'>

//     <h2 className='text-center bg-gray-800 border-2 border-yellow-300 rounded-full px-4 py-2 text-white'>counter: {count}</h2>
//     <button className='border border-blue-400 bg-blue-600 text-white rounded-3xl px-4 py-2 ' onClick={Increase}>Increase</button>
//     <button className='border border-red-400 bg-blue-600 text-white rounded-3xl px-4 py-2 ' onClick={Decrease}>Decrease</button>
//     <button className='border border-yellow-400 bg-blue-600 text-white rounded-3xl px-4 py-2 ' onClick={Reset}>Reset Value</button>

// </div>
//     </div>

//     </>
//   )
// }

// export default State
// function State() {
//   const [isVisible , setIsVisible] = useState(false)

//   function change(){
//     setIsVisible(!isVisible)
//   }

// return(

//   <>

// <button onClick={change }>Toggle</button>
// {isVisible && <p>ye text show ho raha hai</p> }

// </>
// )
// }
// export default State

// function State(){
// const [isVisible , setIsVisible] = useState(false)
// function changeText(){
//   setIsVisible(!isVisible)
// }
//   return (
//     <>
//     <button onClick={changeText}>Toggle</button>
//     {isVisible && <p>ye text ab b show ho raha hai </p>}

//     </>
//   )
// }
// export default State

// function State(){
// const [user , setUser] = useState([])
// function changeText(){
//   setUser([...user, "khan"])

// }
//   return (
//     <>
//     <h2 className='bg-yellow-200 w-36 border-2 rounded-3xl px-4 py-2'>user: {user}</h2>

//     <button className='bg-blue-300 rounded-3xl border-2  w-36 block mt-4 px-4 py-2' onClick={changeText}>update</button>

//     </>
//   )
// }
// export default State

// function State() {
//   const [name, setName] = useState("")
//   const [isStudent, setIsStudent] = useState(false)

//   return (
//     <>
//       <div className='min-h-screen flex flex-col justify-center items-center gap-4'>

//         {/* Input field */}
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Apna naam likho"
//           className='border-2 border-blue-400 rounded-3xl px-4 py-2 outline-none'
//         />

//         {/* Checkbox */}
//         <label className='flex items-center gap-2'>
//           <input
//             type="checkbox"
//             checked={isStudent}
//             onChange={(e) => setIsStudent(e.target.checked)}
//           />
//           Student hoon
//         </label>

//         {/* Result */}
//         <h1 className='bg-blue-400 px-4 py-2 rounded-3xl'>
//           Name: {name}
//         </h1>
//         <h1 className='bg-blue-400 px-4 py-2 rounded-3xl'>
//           Student: {isStudent ? "Yes" : "No"}
//         </h1>

//       </div>
//     </>
//   )
// }

// export default State

// function State() {
//   const [name, setName] = useState("");
//   const [isStudent, setIsStudent] = useState(false);

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center gap-4">
//         <input
//           type="text"
//           value={name}
//           placeholder="Apna Naam Likhen"
//           onChange={(e) => setName(e.target.value)}
//           className="border-2 border-blue-300 rounded-3xl
//       px-4 py-2"
//         />

//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={isStudent}
//             onChange={(e) => setIsStudent(e.target.checked)}
//           />
//           Student Hoon
//         </label>
// {/* <button className="px-4 py-2 bg-blue-400 rounded-3xl hover:-translate-y-1 transition duration-300">Submit</button> */}

// <h1 className="bg-blue-400 px-4 py-2 rounded-3xl">Naam: {name}</h1>
// <h1 className="bg-blue-400 px-4 py-2 rounded-3xl">Student: {isStudent? "Yes" : "No"}</h1>

//       </div>
//     </>
//   );
// }

// export default State;

// function State() {
//   const [todo, setTodo] = useState("");
//   const [list, setList] = useState([]);

//   function addTodo(){
//     if(todo=== "") return
//     setList([...list, todo])
//     setTodo("")
//   }

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center gap-4">

// <input type="text"
// value={todo}
// onChange={(e)=> setTodo(e.target.value)}
// placeholder="enter text"

// className="border-2 border-blue-400 rounded-3xl px-4 py-2"/>
//  {list.map((item, index)=>(
//   <p key={index}> {item}

//   </p>
//  ))}
// <button className="bg-blue-400 rounded-3xl px-4 py-2 hover:-translate-y-1 transition duration-300" onClick={addTodo}>Add</button>

//       </div>
//     </>
//   );
// }

// export default State;
// function State() {
//   const [count , setCount] = useState(0);

// function changeValue(){
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   console.log(count)
// }
// // function changeValue(){
// //   setCount((prev)=> prev + 1)
// //   setCount((prev)=> prev + 1)
// //   setCount((prev)=> prev + 1)

// //   console.log(count)
// // }

//  return(
//   <>

//   <button className="bg-blue-400 px-4 py-2 rounded-3xl" onClick={changeValue}>updateValue</button>
//     </>
//   );
// }

// export default State;
// function State() {

// function changeValue(e){
//  console.log(e.key)
// //  console.log(e.target)
// // if(e.key === "Enter"){
// //   console.log("Enter Dabaya")
// }

//  return(
//   <>

//   <button className="bg-blue-400 px-4 py-2 rounded-3xl" onClick={changeValue}>updateValue</button>
//     </>
//   );
// }

// export default State;
// import { useState } from 'react'

// function State() {
//   const [todo, setTodo] = useState("")
//   const [list, setList] = useState([])

//   function addTodo() {
//     if(todo === "") return    // empty todo mat add karo
//     setList((prev) => [...prev, todo])
//     setTodo("")               // input clear
//   }

//   function handleKey(e) {
//     console.log(e.key)        // dekho konsi key dabayi
//     // if(e.key === "Enter") {   // agar Enter dabayi
//     //   addTodo()               // todo add karo
//     // }
//   }

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center gap-4">

//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           onKeyDown={handleKey}   // ✅ har key press pe handleKey chalega
//           placeholder="Enter dabao ya button click karo"
//           className="border-2 border-blue-400 rounded-3xl px-4 py-2"
//         />

//         <button
//           onClick={addTodo}
//           className="bg-blue-400 rounded-3xl px-4 py-2"
//         >
//           Add
//         </button>

//         {list.map((item, index) => (
//           <p key={index}>{item}</p>
//         ))}

//       </div>
//     </>
//   )
// }

// export default State
// import { useState } from "react";

// function State() {
//   const [todo, setTodo] = useState("");
//   const [list, setList] = useState([]);

//   function addTodo() {
//     setList((prev)=>[...list, todo]);
//     setTodo("");
//   }
//   function handleKey(e) {
//     console.log(e.key)
//     if (e.key === "Enter") {
//       addTodo();
//     }
//   }

//   return (
//     <>
//       <div className="min-h-screen flex flex-col justify-center items-center gap-4">
//         <input
//           type="text"
//           value={todo}
//           placeholder="Text Add Karden"
//           onChange={(e) => setTodo(e.target.value)}
//           onKeyDown={handleKey}
//           className="border-2 border-blue-300 hover:outline-none rounded-3xl px-4 py-2 focus focus:border-blue-300 "
//         />

//         <button onClick={addTodo} className="bg-blue-400 rounded-3xl px-4 py-2">
//           Add
//         </button>

//         {list.map ((item,index) => (
//           <p key={index}>{item}</p>
//         ))}
//       </div>
//     </>
//   );
// }

// export default State;
import { useState } from "react";

function State() {
  const [isVisible, setIsVisible] = useState(false);
  function cardHandler() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4 pt-10">
        <div className="w-90 flex flex-wrap justify-center  border border-blue-400 rounded-3xl shadow hover:shadow-blue-800 space-y-2 ">
          {isVisible && (
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="py-3 w-80  bg-blue-300 rounded-3xl text-center mt-1">
                kaleem ullah
              </h2>
              <p className="py-2 w-70  bg-blue-300 rounded-3xl text-center">
                Quran Teacher
              </p>
              <p className="py-1 w-60  bg-blue-300 rounded-3xl text-center mb-1">
                4 years
              </p>
            </div>
          )}

          <button
            className="py-1 w-40 hover:-translate-y-1.5 hover:bg-blue-400 transition duration-300 bg-blue-400 rounded-3xl text-center "
            onClick={cardHandler}
          >
            {isVisible ? "Hide detail" : "Show Detail"}
          </button>
        </div>
      </div>
    </>
  );
}

export default State;
