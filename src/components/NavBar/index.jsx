/**
 * NavBar component.
 *
 * Shows global top navigation bar with all apps menu, logo and user menu.
 */
import React from "react";
import UserMenu from "../UserMenu";
import AllAppsMenu from "../AllAppsMenu";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";
import TCLogo from "../../assets/images/tc-logo.svg";
import config from "../../../config";
import "./styles.css";

const NavBar = () => {
  const auth = useSelector((state) => state.auth);
  const loginUrl = `${config.URL.AUTH}/member?retUrl=${encodeURIComponent(
    window.location.href.match(/[^?]*/)[0]
  )}`;

  return (
    <div className="navbar">
      <div className="navbar-left">
        <AllAppsMenu />
      </div>

      <div className="navbar-center">
        <Link to="/">
          <img src={TCLogo} alt="Topcoder Logo" />
        </Link>
      </div>

      <div className="navbar-right">
        {auth.isInitialized &&
          (auth.tokenV3 ? (
            auth.profile && <UserMenu profile={auth.profile} />
          ) : (
            <a href={loginUrl} className="navbar-login">
              Login
            </a>
          ))}
      </div>
    </div>
  );
};

export default NavBar;
