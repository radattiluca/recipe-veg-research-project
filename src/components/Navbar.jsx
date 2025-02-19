import React from "react";
import { Link } from "react-router-dom";

function Navbar({ className, children }) {
  return (
    <div className={className}>
      <Link to={"/"}>{children}</Link>
    </div>
  );
}

export default Navbar;

//componente navbar che verrà trasposrtato in tutte le pagine
