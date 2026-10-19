// #region simple redux store //////////////////////////////////////////////////////

// import { createStore,combineReducers } from "redux";

// import countReducer from "./counterReducer";
// import userReducer from "./userReducer";

// const rootStore = combineReducers({
//     souter: countReducer,
//     same: userReducer
// })

//  export const store = createStore(rootStore)



// #region persist redux store //////////////////////////////////////////////////////////////////////////////


// import { createStore, combineReducers } from "redux";
// import counterReducer from "./reducer";
// import userReducer from "./userReducer";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootStore = combineReducers({
//   value: counterReducer,
//   user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootStore);

// const store = createStore(persistedReducer);

// export const persister = persistStore(store);


// #region persist redux 2 store ///////////////////////////////////////////////////////////





import { createStore, combineReducers } from "redux"

import userReducer from "./userReducer"
import counterReducer from "./counterReducer"

import { persistStore, persistReducer } from "redux-persist"
import storageModule from "redux-persist/lib/storage";

const storage = storageModule.default || storageModule;





const rootStore = combineReducers({
    souter: counterReducer,
    same:userReducer
})

const persistConfig = {
    key: "root",
    storage:storage,
}

const persistedReducer = persistReducer(
    persistConfig,
    rootStore
)

const store = createStore(persistedReducer)
 

 const persistor = persistStore(store)
export {store, persistor}
