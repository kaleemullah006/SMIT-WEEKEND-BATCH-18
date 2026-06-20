
import {Routes, Route} from "react-router-dom"
import StatsCard from "../pages/statsCard"
import Navbar from "../components/navbar"
import Dashboard from "../components/dashboard/dashboard"
import TestDarkMode from "../components/darkmood/darkmood"


function App() {
  

  return (
  <>

      <Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="navbar" element={<Navbar/>}/>
<Route path="statscard" element={<StatsCard/>}/>
<Route path="/test" element={<TestDarkMode />} />

      </Routes>
 
  </>
   
  )
}

export default App
