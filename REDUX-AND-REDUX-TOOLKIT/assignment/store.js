import { createStore, combineReducers } from "redux"

import userReducer from "./userReducer"
import counterReducer from "./counterReducer"

import { persistStore, persistReducer } from "redux-persist"
import storageModule from "redux-persist/lib/storage"

const storage = storageModule.default || storageModule

const rootStore = combineReducers({
    counter: counterReducer,
    user: userReducer,
})

const persistConfig = {
    key: "root",
    storage,

}

const persistedReducer = persistReducer(
    persistConfig,
    rootStore
)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {store, persistor}