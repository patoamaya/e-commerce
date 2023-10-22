import { Box, Grid, Button } from "@mui/material";
import React from "react";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
const ItemDetail = ({ product }) => {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={9}>
        <Box className="volver">
          <Button variant="contained" color="secondary" onClick={goBack}>
            volver
          </Button>
        </Box>
        <Box className="box-img">
          <img src={product.img} alt="{product.modelo}" className="img" />
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box className="box-desc">
          <h1>
            {product.marca} {product.modelo}
          </h1>
          <h1>${product.precio}</h1>
          <h2>{product.año}</h2>
          <h2>{product.KMS} kms</h2>
          <h2>{product.ubicacion} </h2>
        </Box>
        <Box></Box>
      </Grid>
    </Grid>

    // <div>
    //   <h3>
    //     {product.marca} {product.modelo}
    //   </h3>
    // </div>
  );
};

export default ItemDetail;
