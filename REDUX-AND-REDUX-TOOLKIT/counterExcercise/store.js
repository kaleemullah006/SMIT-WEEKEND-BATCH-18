// #region simple redux store //////////////////////////////////////////////////////////////////

import { createStore, combineReducers } from "redux"
import counterReducer from "./reducer"
import userReducer from "./userReducer"

const rootStore = combineReducers({
   value: counterReducer,
    user: userReducer
})

export const store = createStore(rootStore)

