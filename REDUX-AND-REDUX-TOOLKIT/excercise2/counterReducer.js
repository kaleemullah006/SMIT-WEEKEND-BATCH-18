
import { INCREMENT, DECREMENT , RESET } from "./constant";

const initialValue = {
    value: 2
}

function countReducer(state = initialValue, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 }
        
        
        case DECREMENT: 
            return { ...state, value: state.value - 1 }
        
        case RESET:
            return { ...state, value: 100 }
        
        default:
            return state
        
     
    }
    

}

export default countReducer