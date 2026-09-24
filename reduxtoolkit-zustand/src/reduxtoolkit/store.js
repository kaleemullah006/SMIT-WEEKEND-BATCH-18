import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./valueSlice";

export const store = configureStore({
    reducer: {
        
        market:shopReducer
    }
})