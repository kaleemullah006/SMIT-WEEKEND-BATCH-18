import useTodo from "../context/TodoContext";
import { useState } from "react";
function Todo() {
    const [input, setInput] = useState("")
    const { todos, dispatch } = useTodo()
    
    function addTodo() {
        if (input.trim() === "") {
            return
        }

        dispatch({
            type: "add_todo",
            payload: input
        })
        setInput("")
    }
    return (<>
        <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo" />
        
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={() => dispatch({ type: "clear_todo" })}>Clear</button>
        
        <table border={3}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>TEXT</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(function (todo) {
                    return (
                      <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.text}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch({
                                type: "delete_todo",
                                payload: todo.id,
                              })
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                })}
            </tbody>
        </table>
        
    
    
    
    
    </>
    
  )
}

export default Todo