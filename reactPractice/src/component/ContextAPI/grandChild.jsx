import { useContext } from "react"
import NameContext from "../Context/NameContext"


function GrandChildContext() {
    const {name ,age}= useContext(NameContext)
    
  return (
    <>
    <div>GrandChild</div>


    <h1>Age: {name}</h1>
    <h1>Age: {age}</h1>

    </>
  )
}

export default GrandChildContext