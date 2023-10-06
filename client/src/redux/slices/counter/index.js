import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: a => {
      console.log("incriment called");
      return a + 1;
    },
    decrement: a => {
      console.log("decriment called");
      return a - 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
