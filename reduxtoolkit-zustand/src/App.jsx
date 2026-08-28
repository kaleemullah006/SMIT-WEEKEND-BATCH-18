// // // // // import { addValue } from "./reduxtoolkit/valueSlice";
// // // // // import reactLogo from "./assets/react.svg";
// // // // // import viteLogo from "./assets/vite.svg";
// // // // // import heroImg from "./assets/hero.png";
// // // // // import "./App.css";
// // // // // import { useSelector, useDispatch } from "react-redux";
// // // // // import { useState } from "react";

// // // // // function App() {
// // // // //   const [value,setValue] = useState("")
// // // // //   const display = useSelector((state) => state.market.value);

// // // // //   const dispatch = useDispatch();

 
// // // // //   return (
// // // // //     <>
// // // // //       <h1>{display}</h1>
// // // // //       <input type="text" value={value}
// // // // //         onChange={(e) => setValue(e.target.value)}
// // // // //         onKeyDown={(e) => {
// // // // //           if (e.key === "Enter") {
// // // // //           dispatch(addValue(value))
// // // // //         }
// // // // //       }}/>
      
     
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import { addValue, clearValue, deleteValue } from "./reduxtoolkit/valueSlice";
// // // // import reactLogo from "./assets/react.svg";
// // // // import viteLogo from "./assets/vite.svg";
// // // // import heroImg from "./assets/hero.png";
// // // // import "./App.css";
// // // // import { useSelector, useDispatch } from "react-redux";
// // // // import { useRef, useState } from "react";

// // // // function App() {
// // // //   const valueRef = useRef()

// // // //   const display = useSelector((state) => state.market.value);

// // // //   const dispatch = useDispatch();

 
// // // //   return (
// // // //     <>
// // // //       <input type="text" ref={valueRef}
        
// // // //         onKeyDown={(e) => {
// // // //           if (e.key === "Enter") {
// // // //             dispatch(addValue(valueRef.current.value))
// // // //             valueRef.current.value = ""
// // // //         }
// // // //       }}/>
      
// // // //       {display.map((item, index) => (
// // // //         <div key={index}>
// // // //           <span>{item}</span>
// // // //           <button onClick={() => dispatch(deleteValue(item))}>delete</button>
          
// // // //        </div>
// // // //       ))}
// // // //        <button onClick={()=> dispatch(clearValue())}>clear All</button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;



// // // // import "./App.css";
// // // // import { useSelector, useDispatch } from "react-redux";
// // // // import { useRef } from "react";
// // // // import { addUser, clearUser, deleteUser } from "./TodoApp/todoApp";

// // // // function App() {
// // // //     const valueRef = useRef()
// // // //     const show = useSelector((state) => state.data.user)
// // // //     const dispatch = useDispatch()

 
// // // //   return (
// // // //     <>
         
// // // //           <input type="text" ref={valueRef}
// // // //               onKeyDown={(e) => {
// // // //                   if (e.key === "Enter") {
// // // //                       dispatch(addUser(valueRef.current.value))
// // // //                       valueRef.current.value = ""
// // // //               }
// // // //               }} />
          


// // // //           {show.map((item, index) => (
// // // //               <div key={index}>
// // // //                   <span>{index + 1 }.{item}</span>
// // // //                   <button onClick={()=>dispatch(deleteUser(item))}>delete</button>
// // // //               </div>
// // // //           ))}

// // // //           <button onClick={()=> dispatch(clearUser())}>clrear all</button>
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;

// // // import {useCounter} from "./zustand/zustandStore"

// // // function App (){
// // //     const count = useCounter((state)=> state.count)
// // //     const increment = useCounter((state)=>state.increment)
// // //     const decreament = useCounter((state)=>state.decrement)
// // //     const reset = useCounter((state)=>state.reset)
// // //     const manual= useCounter((state)=>state.manual)
// // //      const checkLimit = useCounter((state) => state.checkLimit);
// // //      const message = useCounter((state) => state.message);
// // //     return(<>
    
    
// // //     <h1>count:{count}</h1>
// // //     <button onClick={increment}>+1</button>
// // //     <button onClick={decreament}>-1</button>
// // //     <button onClick={reset}>0</button>
// // //     <button onClick={()=>manual(10)}>manual</button>
    
// // //        <button onClick={checkLimit}>Check Limit</button>

// // //       <p>{message}</p>
    
    
// // //     </>)
// // // }
// // // export default App



// // import { useWallet } from "./zustand/excercise";

// // function App (){
// //     const balance = useWallet((state)=> state.balance)
// //     const message = useWallet((state)=> state.message)

// //     const addMoney = useWallet((state)=> state.addMoney)
// //     const spendMoney = useWallet((state)=> state.spendMoney)
// //      return (<>
     
// //      <h1>{balance}</h1>

// //      <button onClick={()=> addMoney(50)}> AddMoney</button>
// //      <button onClick={()=> spendMoney(200)}>SpendMoney</button>
// //      <button onClick={()=> spendMoney(30)}>SpendMoney</button>
     
// //      <div>{message}</div>
// //      </>)
// // }

// // export default App

// import { useState } from "react";
// import { useCounter } from "./zustand/excercise";

// function App (){
// const count = useCounter((state)=> ((state.count)))

// const increment = useCounter((state)=> state.increment)
// const decrement = useCounter((state)=>state.decrement)
// const reset = useCounter((state)=>state.reset)

// const manual = useCounter((state)=>state.manual)

//    const [value, setValue] = useState("")

//    return (<>
   
//    <h1>Count: {count}</h1>

//    <input type="text"
//    value={value}
//    onChange={(e)=> setValue(e.target.value)}
//  />

//    <button onClick={()=> manual(Number(value))}>manual Add</button>
//    <button onClick={increment}>add</button>
//    <button onClick={decrement}>Minus</button>
//    <button onClick={reset}>reset</button>
   
   
   
//    </>)

// }

// export default App


import { useState } from "react";
import { useTodo } from "./zustand/zustandTodo";

function App (){
    const users = useTodo((state)=> state.users)

    const addUser = useTodo((state)=>state.addUser)
    const clearUser = useTodo((state)=>state.clearUser)
    const deleteUser = useTodo((state)=> state.deleteUser)
    const manual = useTodo((state)=> state.manual)
    
    const [value, setValue] = useState("")
    
    return(<>
    <input type="text" value={value}
    onChange={(e)=> setValue(e.target.value)} />

    <button onClick={()=> manual(value)}>addUser</button>

    
    
    {users.map((user,index)=>{
        return <div key={index}>
            <span>{index+1}.{user}</span>
            <button onClick={()=> deleteUser(user)}>deleeteuser</button>
        </div>
    })}
    <button onClick={clearUser}>clearuser</button>
    </>)

}

export default App