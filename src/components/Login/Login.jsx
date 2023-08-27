import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   Va a setear el estado con setShowPassword con lo distinto que tenga en él = (!showPassword). Flag o estado bandera se llama esto. Como un switch
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <h2>Ingrese</h2>
      <form action="">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </form>
      <Button variant="contained" color="primary">
        Ingresar
      </Button>
    </div>
  );
};

export default Login;
