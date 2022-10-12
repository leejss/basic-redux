import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addTodo, toggleTodo } from "./todosSlice";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input
              type="checkbox"
              name="done"
              checked={todo.done}
              onChange={() => {
                dispatch(toggleTodo(todo.id));
              }}
            />
          </li>
        ))}
      </ul>
      <AddTodo />
    </div>
  );
};

export default TodoList;

const AddTodo = () => {
  const dispath = useDispatch();
  const [title, setTitle] = useState("");
  return (
    <div>
      <label>
        <span>title</span>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <button
        onClick={() => {
          dispath(
            addTodo({
              id: Date.now(),
              done: false,
              title,
            })
          );
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
};
