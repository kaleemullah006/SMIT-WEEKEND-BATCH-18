"use client"
import { useState } from "react";


export default function Counter(){
    const [value, setValue] = useState(0)

    return(<>
    
    <h1>value: {value}</h1>

    <button onClick={()=> setValue(value + 1)}>Update</button>
    
    
    
    
    
    
    </>)

}
