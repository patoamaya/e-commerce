import React, { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const envioDeFormulario = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          envioDeFormulario(e);
          console.log(e);
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          name="nombre"
          onChange={(e) => {
            setNombre(e.target.value);
            console.log(nombre);
          }}
        />
        <input type="text" placeholder="Apellido" />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;
