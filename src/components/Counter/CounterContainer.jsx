import { useEffect, useState } from "react";
import Counter from "./Counter";


const CounterContainer = ({ stock, onAdd, initial=1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial)
  }, [initial])
  
  
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("no hay mas mogolico cortala");
    }
  };
  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const reiniciar = () => {
    setCounter(1);
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
