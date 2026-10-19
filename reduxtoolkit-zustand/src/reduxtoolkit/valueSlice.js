import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const shopSlice = createSlice({
  name: "shop",

  initialState,

  reducers: {
    addValue: (state, action) => {
      state.value.push(action.payload);
    },

    deleteValue: (state, action) => {
      state.value = state.value.filter((item) => item !== action.payload);
    },

    clearValue: (state, action) => {
      state.value = [];
    },
  },
});

export const { addValue, deleteValue, clearValue } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
