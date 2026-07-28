// // #region Counter App

// // import { useReducer } from "react";

// // function reducer(state, action){
// //     if(action.type === "increment"){
// //         return state + 1

// //     }
// //     if(action.type === "decrement" && state > 0){
// //         return state - 1

// //     }
// //     if(action.type === "reset"){
// //         return 0

// //     }
// //     return state;
// // }
// //     export default function MyFoo(){
// //         const [count, dispatch] = useReducer(reducer, 0)

// //         return(<>
// //         <h1>{count}</h1>

// //         <button onClick={()=> dispatch({type: "increment"})}>+</button>
// //         <button onClick={()=> dispatch({type: "decrement"})}>-</button>
// //         <button onClick={()=> dispatch({type: "reset"})}>Reset</button>

// //         </>)
// //     }

// // #region Todo App

// // import { useReducer, useState } from "react";

// // function reducer(state, action) {
// //   if (action.type === "ADD_TODO") {
// //     return [
// //       ...state,
// //       {
// //         id: Date.now(),
// //         text: action.payload
// //       }
// //     ];
// //   }

// //   if (action.type === "DELETE_TODO") {
// //     return state.filter(function (todo) {
// //       return todo.id !== action.payload;
// //     });
// //   }

// //   if (action.type === "CLEAR_TODOS") {
// //     return [];
// //   }

// //   return state;
// // }

// // function App2() {
// //   const [input, setInput] = useState("");

// //   const [todos, dispatch] = useReducer(reducer, []);

// //   function addTodo() {
// //     if (input.trim() === "") {
// //       return;
// //     }

// //     dispatch({
// //       type: "ADD_TODO",
// //       payload: input
// //     });

// //     setInput("");
// //   }

// //   return (
// //     <div>
// //       <h1>Todo App</h1>

// //       <input
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //         placeholder="Enter Todo"
// //       />

// //       <button onClick={addTodo}>
// //         Add Todo
// //       </button>

// //       <button onClick={() => dispatch({ type: "CLEAR_TODOS" })}>
// //         Clear All
// //       </button>

// //       {todos.map(function (todo) {
// //         return (
// //           <div key={todo.id}>
// //             <span>{todo.text}</span>

// //             <button
// //               onClick={() =>
// //                 dispatch({
// //                   type: "DELETE_TODO",
// //                   payload: todo.id
// //                 })
// //               }
// //             >
// //               Delete
// //             </button>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // export default App2;

// //  #region Excercise Todo App

// import { Box } from "@mui/material";
// import { useReducer, useState } from "react";

// function reducer (state, action){
//   switch(action.type){
//     case "add_todo":
//     return[...state, {
//       id:Date.now(),
//       text:action.payload
//     }]

// case "clear_all":
//   return[]

//   case "delete_todo":
//     return state.filter(function(item){
//       return item.id !== action.payload
//     })
//     default:
//       return state

//   }

// }

// function Todo(){
//     const [input, setInput] = useState("")

//     const [todos, dispatch] = useReducer(reducer,[])

//     function AddTodo(){
//         if(input.trim() === ""){
//             return
//         }

//         dispatch({
//             type: "add_todo",
//             payload: input
//         })
//         setInput("")
//     }

//     return (
//         <>
//         <h1>ToDo App</h1>

//         <input type="text"
//         value={input}
//         onChange={(e)=> setInput(e.target.value)}
//         placeholder="Enter Todo" />



//         <button onClick={AddTodo}>Add Todo</button>
//         <button onClick={()=>dispatch({type:"clear_all"})}>Clear Todo</button>


//        {todos.map(function(todo){
//         return(
//           <div key={todo.id}>
//             <span>{todo.text}</span>

//             <button onClick={()=> dispatch({type:"delete_todo",payload: todo.id})}>Delete Todo</button>
//           </div>
//         )
//        })}

        
        
        
        
        
       
        
     
        
        
//         </>
//     )
// }
// export default Todo

import { useReducer,useState } from "react"


 function reduce(state, action){
    switch(action.type){
      case ("add_todo"):
        return[...state,{
          id:Date.now(),
          text:action.payload
        }]

        case("delete_todo"):
        return state.filter(function(item){
          return item.id !== action.payload
        })

        case ("clear_todo"):
          return[]

        default:
          return state
    }
    
  }

function Todo() {
  const [input , setInput] = useState("")



function AddTodo(){
  if(input.trim() === ""){
    return
  }

dispatch({
  type: "add_todo",
  payload:input

})
setInput("")

}

const [todos, dispatch] = useReducer(reduce,[])
 
  return (<>
  
  
  
  <input type="text" 
  value={input}
  onChange={(e)=> setInput(e.target.value)}
   placeholder="Enter Todo"/>
  
  <button onClick={AddTodo}>Add Todo</button>
  <button onClick={()=>dispatch({type:"clear_todo"})}>Clear All</button>

  
<table border="1">
  <thead >
    <tr>
    <th>ID</th>
    <th>TEXT</th>
    <th>ACTIN</th></tr></thead>
    <tbody>
      {todos.map(function(todo){
return(

  <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.text}</td>
        <td>
          <button onClick={()=> dispatch({type: "delete_todo", payload:todo.id})} >
Delete
          </button>
        </td>
      </tr>
      )
      })}
    </tbody>
</table>
  
  </>
    
  )
}

export default Todo