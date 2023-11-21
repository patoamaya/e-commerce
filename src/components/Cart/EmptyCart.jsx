import { Grid, Box, Button } from "@mui/material"
import  pngCarrito from "../../assets/pngCarrito.png"
import "./Cart.css"
const EmptyCart = () => {
  return (
    <Grid container className="container">
        <Grid item xs={10} sm={7} md={4} className="cartContainer">
           <Box className="description">
            <h3>Su carrito está vacío</h3>
           </Box>
           <Box >
            <img src={pngCarrito} className="png" alt="" />
           </Box>
        </Grid>

    </Grid>
    
    )
}

export default EmptyCart
    // <div className="container">
    //    <div className="cardContainer">
    //    <h3>Su carrito está vacío</h3>
    //   <img className="png" src={pngCarrito} alt="Carrito vacío" />
    //     </div>
      
    // </div>