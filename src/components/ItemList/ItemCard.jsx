import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ItemList.css";

const ItemCard = ({ item, updateProduct, deleteProduct }) => {
  return (
    <Card className="card" key={item.id}>
      <CardMedia className="cardImg" image={item.img} title={item.modelo} />
      <CardContent className="rere">
        <Typography gutterBottom variant="h5" component="div" className="title">
          {item.marca} {item.modelo}
        </Typography>
        <Typography variant="body3">$ {item.precio}</Typography>
        <Typography variant="body2">Año: {item.año}</Typography>
        <Typography variant="body2">Kms: {item.KMS}</Typography>
        <Typography variant="body2">Ubicacion: {item.ubicacion}</Typography>
      </CardContent>
      <CardActions className="rere">
        <Button variant="contained" size="small" color="secondary">
          Ver más
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => updateProduct(item.id, { marca: "Modificado" })}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => deleteProduct(item.id)}
        >
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
};
export default ItemCard;
