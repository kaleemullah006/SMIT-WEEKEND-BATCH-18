import {Routes, Route} from "react-router-dom"
import Signup from "../signup/signup"
import Login from "../login/login"
import Home from "../home/home"

function App() {
  

  return (
   
   <Routes>
    <Route path='/' element={<Signup/>}  />
    <Route path='login' element={<Login/>}  />
    <Route path='home' element={<Home/>}/>
   </Routes>
    
  )
}

export default App
