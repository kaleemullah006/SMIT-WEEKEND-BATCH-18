import { DECREMENT, INCREMENT, RESET, SET_NAME } from "./constants";

const increment = () => {
    return{
        type:INCREMENT
    }
}
const decrement = () => {
  return{
       type:DECREMENT 
  }
   }

const reset = () => {
    return{
        type:RESET
    }
}
const set_name = (payload) => {
    return{
        type: SET_NAME,
        payload:payload
        
    }
}

export {increment,decrement,reset, set_name}