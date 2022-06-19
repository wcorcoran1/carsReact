import React from "react";
import { Link } from "react-router-dom";

const NavBar= () => {

  return (
    <div>
      <h1>Hello Nav</h1>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/cars">Cars</Link>
    </div>
  );
};

export default NavBar;