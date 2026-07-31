import { createContext, useReducer, useContext } from 'react'

const TodoContext = createContext()

const initialValue = [];

function reducer(state, action) {
    switch (action.type) {
     
        case "add_todo":
            return [...state, {
                id: Date.now(),
                text: action.payload

            }]
        
        case "delete_todo":
            return state.filter(function (item) {
                return item.id !== action.payload
            })
        
        case "clear_todo":
            return []
        
        default: return state;

 }    
}

export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initialValue)
    return (<>
      <h1>Todo App</h1>
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
      </TodoContext.Provider>
    
  </>
  )
}



export default function useTodo() {
    return useContext(TodoContext)
}