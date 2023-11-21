import { useEffect, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";



const CounterContainer = ({ stock, onAdd, initial=1, marca, modelo }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial)
  }, [initial])
  
  
  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        position: "center",
        background:"rgb(131, 70, 85)",
        color:"#c8b273",
        title: `Ha excedido el límite en existencia de ${marca} ${modelo}, (${stock})`,
        showConfirmButton: true,
      });
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
