import {Routes,Route} from "react-router-dom"
import Home from "./pages/home";
import "./app.css"
import Signup from "../signup/signup";
import Login from "../login/login"


export default function App(){
return(
  <Routes>
   
    <Route path='/' element={<Signup/>}/>
    <Route path="login" element ={<Login/>} />
    <Route path="home" element ={<Home/>} />

  </Routes>
)
}