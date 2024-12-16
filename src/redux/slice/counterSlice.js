import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.count++;
    },
    decrease: (state, action) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = 0;
    },
  },
});
export default counterSlice.reducer;
export const { increase, decrease, reset } = counterSlice.actions;
