import { INCREMENT, DECREMENT, RESET } from "./constant"


const initialValue = {
    count: 0
};

function counterReducer(state = initialValue, action) {
    
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };

      case DECREMENT:
        if (state.count > 0) {
          return {...state, count: state.count - 1}
        }

        case RESET:
        return { ...state, count: 0 }
      
      default:
        return state
    }

    


    
}

export default counterReducer