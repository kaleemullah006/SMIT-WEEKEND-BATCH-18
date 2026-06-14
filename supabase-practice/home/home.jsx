import { useState,useRef } from "react"


export default function Home(){
    const textRef = useRef()
    const [todo, setTodo] = useState([])

    function addHandler(){
        const textValue = textRef.current.value 
        setTodo([...todo, textValue])
        textRef.current.value = ""
    }

    function deleteHandler(index){
        const neWTodo = todo.filter((item,i)=> i !== index )

        setTodo(neWTodo)
    }
    function editHandler(){
        
    }



    return(
        <>
        <h1>Home</h1>

        <input type="text" ref={textRef} placeholder="Enter text" />
        <br /><br />
        <button onClick={addHandler}>Add</button>
        {todo.map((item , index)=>{
       
          return <div key={index}>
             <p>{item}</p>
             <button onClick={()=> deleteHandler(index)}>Delete</button>
             <button onClick={()=> editHandler()}>Edit</button>
            </div>
})}





        </>
    )
}