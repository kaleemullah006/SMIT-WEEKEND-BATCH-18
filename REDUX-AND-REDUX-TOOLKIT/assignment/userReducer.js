import { SET_NAME } from "./constants"

const initialUser = {
    name: "kaleem",
    age:25
}

function userReducer(state = initialUser, action) {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
               name: action.payload.name,
                age:  action.payload.age
            }
        
        default:
            return state
    }
}
 export default userReducer