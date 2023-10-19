import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container-navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dx4qsxcb7/image/upload/v1692822093/facebook_cover_photo_1_yvwe2w.png"
            alt="logo"
          />
        </Link>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Todos
          </NavLink>
          <NavLink
            to="/category/auto"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Autos
          </NavLink>
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/category/auto")}
          >
            Autos
          </Button> */}
          <NavLink
            to="category/suv"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Suvs
          </NavLink>
        </ul>
        <div className="cart">
          <Link to="/cart" className="link">
            <span>0</span>
            <CartWidget />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
