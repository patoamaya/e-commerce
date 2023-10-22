import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("no hay mas mogolico cortala");
    }
  };
  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reiniciar = () => {
    setCounter(0);
  };

  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        counter={counter}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
