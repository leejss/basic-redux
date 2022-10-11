import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
// create root store

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
