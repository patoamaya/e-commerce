import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // counter < stock seria lo logico
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const restart = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, restart };
};

export default useCounter;
