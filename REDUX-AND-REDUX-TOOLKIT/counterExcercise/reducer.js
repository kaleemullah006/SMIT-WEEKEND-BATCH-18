import { INCREMENT, DECREMENT, RESET } from "../counterExcercise/constant";

const initialValue = {
    value:2
}


function counterReducer(state = initialValue, action) {
    switch (action.type) {

        case INCREMENT:
            return{...state, value:state.value + 1}
    
            case DECREMENT:
                if (state.value > 0) {
                    return{...state, value: state.value - 1}
                }
        case RESET:
            return{...state, value:0}
    
        default:
            return state
    }
}

export default counterReducer