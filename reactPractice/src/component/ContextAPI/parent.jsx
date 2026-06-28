import {useState} from "react"
import ChildContext from "./child"
import NameContext from "../Context/NameContext";

function ParentContext() {
const [name, setName] = useState("khan je")
const [age, setAge] = useState(5)
  return (
    <>
    <NameContext.Provider value={{name,age}}>
<ChildContext/>
    </NameContext.Provider>
    

    
    
    
    
    </>
    
  )
}

export default ParentContext