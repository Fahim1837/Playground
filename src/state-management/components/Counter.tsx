import useCounterStore from "../stores/counter-store";

function Counter() {
  const {counter, increment, reset} = useCounterStore ()

  return (
    <>
      <h1 className="m-4">Counter: {counter}</h1>
      <button
        className="btn btn-primary mx-2"
        onClick={increment}
      >
        {`Count Up`}
      </button>
      <button
        className="btn btn-primary"
        onClick={reset}
      >
        {`Reset`}
      </button>
    </>
  );
}

export default Counter;
