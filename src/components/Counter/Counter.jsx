import { Button } from "@mui/material";
import "./Counter.css"


const Counter = ({ sumar, restar, counter, reiniciar, onAdd }) => {
  return (
    <div>
      <div className="sumaRestaContainer">
      <Button
       color="secondary"
        variant="outlined"
         onClick={sumar}>
          Sumar
          </Button>
      <h3>{counter}</h3>
      <Button
       variant="outlined"
        color="secondary"
         onClick={restar}>
          Restar
          </Button>
      </div>
      {/* <button onClick={reiniciar}>Reiniciar</button> */}
      
      <Button
       variant="contained"
        color="primary"
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al carrito
      </Button>
      
    </div>
  );
};
export default Counter;
