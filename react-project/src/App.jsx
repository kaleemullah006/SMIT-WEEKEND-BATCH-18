import {Routes, Route} from "react-router-dom"
import Signin  from "./pages/signin"
import Dashboard from "./pages/dashboard"
import "./App.css"

function App(){

  return(
    
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path ='/dashboard' element={<Dashboard/>}/>
      </Routes>
    
  )
}

export default App