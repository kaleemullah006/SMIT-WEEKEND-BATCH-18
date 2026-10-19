import { useDispatch, useSelector } from "react-redux"

import { increment,decrement,reset, set_name } from "../assignment/actions"

import './App.css'






function App() {

  const jaat = useSelector((state) => state.counter.value);

  const laam = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);

  const dispatch = useDispatch();
  
  function incHandle() {
  dispatch(increment())
  }
  
  function decHandle() {
    dispatch(decrement())
  }
  function resHandle() {
     dispatch(reset())
   }
  
 function setHandle() {
   dispatch(
     set_name({
       name: "Haroon",
       age: 30,
     }),
   );
 }


  return (
    <>
      <h1 className="border bg-yellow-400 px-4 py-2 ">Count: {jaat}</h1>
      <button
        className="border bg-purple-400 px-4 py-2 mr-2 text-lg"
        onClick={incHandle}
      >
        inc
      </button>
      <button
        className="border bg-purple-400 px-4 py-2 mr-2 text-lg"
        onClick={decHandle}
      >
        dec
      </button>
      <button
        className="border bg-purple-400 px-4 py-2 mr-2 text-lg"
        onClick={resHandle}
      >
        res
      </button>

      <h1 className="border bg-yellow-400 px-4 py-2 ">name: {laam}</h1>
      <h1 className="border bg-yellow-400 px-4 py-2 ">Age: {age}</h1>

      <button
        className="border bg-purple-400 px-4 py-2 mr-2 text-lg"
        onClick={setHandle}
      >
        set
      </button>
    </>
  );
}

export default App

