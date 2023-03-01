import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header data-testid='navbar'>
      <Link to="/">EVENTIFY</Link>
    </header>
  );
};

export default Navbar;
