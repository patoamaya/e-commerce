import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/" className="link">
            Todos
          </Link>
          <Link to="/category/auto" className="link">
            Autos
          </Link>
          <Link to="category/suv" className="link">
            Suvs
          </Link>
        </ul>
        <div className="cart">
          <span>0</span>
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
