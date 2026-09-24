import { SETNAME } from "./constant";

const initialName = {
    namee: "zamin"
}

function userReducer(state = initialName, action) {
    
    switch (action.type) {
        case SETNAME:
            return { ...state, namee: action.baba }
        
        default: 
            return state
    }
}

export default userReducer