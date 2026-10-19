import { SET_NAME } from "./constant";



const initialName = {
    name:"kaleem"
}

function userReducer(state=initialName, action) {
    switch (action.type) {
        
        case SET_NAME:
            return { ...state, name: action.actionname }
        
        default:
            return state
    }
}

export default userReducer