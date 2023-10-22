import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          envioDeFormulario(e);
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={userData.nombre}
          name="nombre"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={userData.apellido}
          name="apellido"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;
