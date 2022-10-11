import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrement2,
  increment2,
  incrementByAmount2,
  decrementByAmount2,
} from "./counterSlice";

const Counter2 = () => {
  const countValue = useSelector((state: RootState) => state.counter.count2);
  const dispatch = useDispatch();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        Counter2: {countValue}
      </h1>
      <div className="grid gap-2">
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              dispatch(increment2());
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement2());
            }}
          >
            decrement
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              dispatch(incrementByAmount2(10));
            }}
          >
            increment By 10
          </button>
          <button
            onClick={() => {
              dispatch(decrementByAmount2(10));
            }}
          >
            decrement By 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter2;
