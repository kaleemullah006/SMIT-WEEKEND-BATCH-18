import {useRef, useState} from "react"


export default function Home(){
      const textRef = useRef()
 const [todos, setTodos] = useState([])

      


    function addOnClickHandler(){
const textValue = textRef.current.value
 setTodos([...todos, textValue])


 
}
function deleteHandler(index){
   const newTodos = todos.filter((todo, i) => i !== index)
   setTodos(newTodos)
}
    return(
        <div>

        <input type="text"  ref={textRef} placeholder="Enter Text..." />
        <br />
        <button onClick={addOnClickHandler}>Add</button>
       {todos.map((todo, index) => (
    <div key={index}>
        <p>{todo}</p>
        <button onClick={() => deleteHandler(index)}>Delete</button>
    </div>
))}
        </div>
        
    )
}