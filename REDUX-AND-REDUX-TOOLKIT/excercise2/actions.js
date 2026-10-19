import { INCREMENT, DECREMENT, RESET, SETNAME } from "./constant";


const increment = () =>{
    return {
        type:INCREMENT
    }
}

const decrement = () => {
    return {
         type:DECREMENT
     }
}
 
const reset = ()=> {
    return {
        type:RESET
    }
}

const setName = (babu) => {
    return {
        type: SETNAME,
        baba: babu
    }
}


export  {increment, decrement, reset, setName}