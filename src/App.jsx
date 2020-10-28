/**
 * Main App component
 */
import React from "react";
import MainMenu from "./components/MainMenu";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import { APPS } from "./constants";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="main-menu-wrapper">
        <Router>
          {APPS.map((app) => (
            <MainMenu key={app.path} path={app.path + "/*"} app={app} />
          ))}
        </Router>
      </div>
    </>
  );
};

export default App;
