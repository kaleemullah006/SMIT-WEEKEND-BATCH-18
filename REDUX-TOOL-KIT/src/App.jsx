import { increment,decrement, reset } from '../practice/createSlice'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from "react-redux"


function App() {

  const count = useSelector((state) => state.counter.count)
  
  const dispatch = useDispatch()


  return (
    <>
      <h1>Counter: {count}</h1>
      
      <button onClick={()=> dispatch(increment())}>add</button>
      <button onClick={()=> dispatch(decrement())}>subtract</button>
      <button onClick={()=> dispatch(reset())}>reset</button>
      
    </>
  )
}

export default App
