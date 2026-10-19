import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoApp";

export const store = configureStore({
    reducer: {
        data:todoReducer
    }
})