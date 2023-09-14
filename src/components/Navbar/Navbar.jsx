import React, { Children } from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dx4qsxcb7/image/upload/v1692822093/facebook_cover_photo_1_yvwe2w.png"
          alt="logo"
        />
        <ul>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
        <div className="cart">
          <span>0</span>
          <CartWidget />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
