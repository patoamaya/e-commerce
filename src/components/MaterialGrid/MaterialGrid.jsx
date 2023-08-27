import { Box, Grid, Typography } from "@mui/material";
import React from "react";

let estilosBox = { border: { xs: "2px solid black", sm: "2px solid red" } };

const MaterialGrid = () => {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box sx={estilosBox}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
              >
                Hola
              </Typography>
              <h4>esto esta en el box</h4>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h3 style={{ border: "3px solid black" }}>Hola</h3>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MaterialGrid;
