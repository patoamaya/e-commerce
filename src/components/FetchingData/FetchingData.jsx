import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
    obtenerPost
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const crearNuevoPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        authorization: "accesTokenEjemplo123",
        "content-type": "aplication-json",
      },
      body: JSON.stringify({
        userId: 5,
        title: "Creando un posteo",
        descrption: "Prueba de verbo POST",
      }),
    });
  };

  const editarUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "PATCH",
      body: JSON.stringify({
        name: "Holiwis",
      }),
    });
  };

  console.log(post);

  return (
    <div>
      <h1>Peticiones</h1>
      <button onClick={crearNuevoPost}>Crear producto</button>
      <button onClick={editarUser}>editar producto</button>
    </div>
  );
};

export default FetchingData;
