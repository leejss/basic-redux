import Counter1 from "./features/counter/Counter1";
import "./App.css";
import Counter2 from "./features/counter/Counter2";

const App = () => {
  return (
    <div className="app">
      <Counter1 />
      <Counter2 />
    </div>
  );
};

export default App;
