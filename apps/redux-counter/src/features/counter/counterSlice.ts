import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    count1: 0,
    count2: 0,
  },
  reducers: {
    increment1: (state) => {
      state.count1++;
    },
    decrement1: (state) => {
      state.count1--;
    },
    incrementByAmount1: (state, action) => {
      state.count1 += action.payload;
    },
    decrementByAmount1: (state, action) => {
      state.count1 -= action.payload;
    },
    increment2: (state) => {
      state.count2++;
    },
    decrement2: (state) => {
      state.count2--;
    },
    incrementByAmount2: (state, action) => {
      state.count2 += action.payload;
    },
    decrementByAmount2: (state, action) => {
      state.count2 -= action.payload;
    },
  },
});

export const {
  decrementByAmount1,
  decrement1,
  increment1,
  incrementByAmount1,
  decrement2,
  decrementByAmount2,
  increment2,
  incrementByAmount2,
} = counterSlice.actions;

export default counterSlice.reducer;
