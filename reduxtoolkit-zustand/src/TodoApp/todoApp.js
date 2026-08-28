import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
const todo = createSlice({
  name: "todoapp",
  initialState,
  reducers: {
      addUser: (state, action) => {
          if (action.payload.trim() === "") {
              alert("enter value ")
              return
          }
      state.user.push(action.payload);
      },
      
      deleteUser: (state, action) => {
          state.user = state.user.filter((item)=> item !== action.payload)
      },

      clearUser: (state, action) => {
          state.user = []
      }
  },
});

export const todoReducer = todo.reducer;
export const { addUser, deleteUser, clearUser } = todo.actions;
