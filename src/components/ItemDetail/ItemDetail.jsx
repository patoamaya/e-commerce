import { Box, Grid } from "@mui/material";
import React from "react";
import "./ItemDetail.css";
const ItemDetail = ({ product }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={9}>
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
