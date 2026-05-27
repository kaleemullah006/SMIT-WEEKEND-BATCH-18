import {Routes, Route} from "react-router-dom"
import "./app.css"
import SigninPage from "./pages/signin" 
import {Dashboard} from "./pages/dashboard"

function App (){

  return (
    <Routes>
      <Route path='/' element={<SigninPage/>}/>
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App