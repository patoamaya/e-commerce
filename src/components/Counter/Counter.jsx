const Counter = ({ sumar, restar, counter, reiniciar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default Counter;
