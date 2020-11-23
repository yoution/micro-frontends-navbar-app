/**
 * Main App component
 */
import React, {useState, useCallback} from "react";
import MainMenu from "./components/MainMenu";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import { APPS } from "./constants";
import {
  createHistory,
  LocationProvider
} from "@reach/router"

// History for location provider
let history = createHistory(window)

const App = () => {
  // Left sidebar collapse state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  // Toggle left sidebar callback
  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(!sidebarCollapsed);
  }, [sidebarCollapsed, setSidebarCollapsed]);

  return (
    <LocationProvider history={history}>
      <NavBar />
      <div className="main-menu-wrapper">
        <Router>
          {APPS.map((app) => (
            <MainMenu sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} key={app.path} path={app.path + "/*"} app={app} />
          ))}
        </Router>
      </div>
    </LocationProvider>
  );
};

export default App;
