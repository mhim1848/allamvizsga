import { useState, useEffect } from "react";

// stateful component with useState
export default function Toggle(props) {
  const [text, setText] = useState("");
  const [swap, setSwap] = useState({ status: true });

  // Jól fog jönni dark mode togglenél
  const swapHandler = (event) => {
    event.preventDefault();
    // by passing a callback function to useState
    // it receives the previous state as it's first parameter
    // previous state was an object with a status property
    // prevstate = { status: true }
    // ! is negation operator, so if true, then false, if false, then true
    setSwap((prevState) => ({
      status: !prevState.status,
    }));
  };

  return (
    <>
      <button
        type="submit"
        className="ml-3 bg-indigo-300/20 p-1 text-xl font-bold"
        onClick={swapHandler}
      >
        Submit
      </button>
      <p id="p-at-bottom" className="text-2xl font-bold">
        {/* if swap.status is true then swippity else swappity */}
        {swap.status ? "swippity" : "swappity"}
      </p>
    </>
  );
}
