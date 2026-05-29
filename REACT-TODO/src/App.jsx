import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
// import TodoItem from "./components/todoItem"
import "./app.css"


export default function App (){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      
    </Routes>
  )
}