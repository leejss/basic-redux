import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const initialState: {
  todos: Todo[];
} = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
