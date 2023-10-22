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
import { Link } from "react-router-dom";

const ItemCard = ({ item, updateProduct, deleteProduct }) => {
  return (
    <Link to={`/${item.id}`} className="link">
      <Card className="card" key={item.id}>
        <CardMedia className="cardImg" image={item.img} title={item.modelo} />
        <CardContent className="rere">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="title"
          >
            {item.marca} {item.modelo}
          </Typography>
          <Typography variant="body3">$ {item.precio}</Typography>
          <Typography variant="body2">Año: {item.año}</Typography>
          <Typography variant="body2">Kms: {item.KMS}</Typography>
          <Typography variant="body2">Ubicacion: {item.ubicacion}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ItemCard;
