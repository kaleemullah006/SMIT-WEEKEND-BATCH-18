import { Button, buttonBaseClasses } from "@mui/material";
import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
        },
      ];

    case "delete":
      return state.filter(function (item) {
        return item.id !== action.payload;
      });

    case "clear":
      return [];

    default:
      return state;
  }
}

function ReducerExcercise() {
  const [input, setInput] = useState("");

  function AddTodo() {
    if (input.trim() === "") {
      return;
    }
    dispatch({
      type: "add",
      payload: input,
    });
    setInput("");
  }

  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Text"
      />

      <button onClick={AddTodo}>Add Todo</button>
      <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>

      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
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
                      dispatch({ type: "delete", payload: todo.id })
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
  );
}

export default ReducerExcercise;
