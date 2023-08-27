import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  // No más de 10 unidades. En vez de hardcodear el 10, podemos usar, trayendo de una base de datos, el stock disponible
  const sumar = () => {
    counter < 10 && setCounter(counter + 1);
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
      />
    </div>
  );
};

export default CounterContainer;
