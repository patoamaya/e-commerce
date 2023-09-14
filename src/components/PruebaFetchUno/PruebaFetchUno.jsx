import React from "react";
import useFetch from "../../utils/hooks/useFetch";

const PruebaFetchUno = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users", []);

  return (
    <div>
      {data?.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
};

export default PruebaFetchUno;
