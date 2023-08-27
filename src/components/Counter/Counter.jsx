const Counter = ({ sumar, restar, counter, reiniciar }) => {
  return (
    <div>
      <h2>Este es el counter</h2>
      <button onClick={sumar}>Sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};
export default Counter;
