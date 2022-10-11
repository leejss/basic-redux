import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrement1,
  increment1,
  incrementByAmount1,
  decrementByAmount1,
} from "./counterSlice";

const Counter1 = () => {
  const countValue = useSelector((state: RootState) => state.counter.count1);
  const dispatch = useDispatch();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        Counter1: {countValue}
      </h1>
      <div className="grid gap-2">
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              dispatch(increment1());
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch(decrement1());
            }}
          >
            decrement
          </button>
        </div>
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => {
              dispatch(incrementByAmount1(10));
            }}
          >
            increment By 10
          </button>
          <button
            onClick={() => {
              dispatch(decrementByAmount1(10));
            }}
          >
            decrement By 10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
