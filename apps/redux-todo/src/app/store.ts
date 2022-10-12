import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todos/todosSlice";

// const getPreloadedTodos = () => {}

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
  preloadedState: {
    todos: {
      todos: [{ id: 1, title: "hello?", done: true }],
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
