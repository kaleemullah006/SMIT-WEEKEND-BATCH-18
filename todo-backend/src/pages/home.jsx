import { useRef, useState } from "react";
import { supabase } from "../supabase";

export default function Home() {
  const [todos, setTodo] = useState([]);
  const [editText, setEditText] = useState(null);
  const textRef = useRef();

 async function addHandler() {
  const inputValue = textRef.current.value;

  if (!inputValue) return;

  // 👉 UPDATE MODE
  if (editText !== null) {
    const todoToEdit = todos[editText];

    const { data, error } = await supabase
      .from("todos")
      .update({ title: inputValue })
      .eq("id", todoToEdit.id)
      .select();

    if (error) {
      console.log(error.message);
      return;
    }

    const updatedTodos = [...todos];
    updatedTodos[editText] = data[0];

    setTodo(updatedTodos);
    setEditText(null);
  }

  // 👉 ADD MODE
  else {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title: inputValue }])
      .select();

    if (error) {
      console.log(error.message);
      return;
    }

    setTodo([...todos, data[0]]);
  }

  textRef.current.value = "";
}

  async function deleteHandler(id) {
    const { error } = await supabase.from("todos").delete().eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }

    // frontend update
    setTodo(todos.filter((todo) => todo.id !== id));
  }
function editHandler(index) {
  textRef.current.value = todos[index].title;
  setEditText(index);
}

  return (
    <>
      <h1>TODO LIST</h1>

      <input type="text" ref={textRef} placeholder="Enter Text" />
      <br />
      <br />
      <button onClick={addHandler}>Add Text</button>
      {todos.map((todo,index) => (
        <div key={todo.id}>
          <ul>
            <li>{todo.title}</li>
          </ul>

          <button onClick={() => deleteHandler(todo.id)}>Delete</button>

          <button onClick={() => editHandler(index)}>Edit</button>
        </div>
      ))}
    </>
  );
}
