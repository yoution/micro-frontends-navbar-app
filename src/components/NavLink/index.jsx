/**
 * NavLink component.
 *
 * General component to show a link with ability to define active className.
 */
import React from "react";
import { Link } from "@reach/router";
import cn from "classnames";

const NavLink = ({ to, className, activeClassName, children }) => (
  <Link
    to={to}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: cn(className, { [activeClassName]: isCurrent }),
      };
    }}
  >
    {children}
  </Link>
);

export default NavLink;
