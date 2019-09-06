import React from "react";
import { Link } from "gatsby";

const NavLink = ({ to, children }) => (
  <Link
    activeStyle={{
      fontWeight: 700
    }}
    to={to}
  >
    {children}
  </Link>
);


export default NavLink;
