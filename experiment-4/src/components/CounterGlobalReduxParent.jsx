import { useDispatch, useSelector } from "react-redux"; 

export default function CounterReduxParent(props) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid green', marginTop: '10px' }}>
      <h3>{props.cno} : Global State (Redux) Count: {count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}