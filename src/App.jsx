/**
 * Main App component
 */
import React, { useState, useCallback, useMemo } from "react";
import _ from "lodash";
import MainMenu from "./components/MainMenu";
import NavBar from "./components/NavBar";
import { Router, createHistory, LocationProvider } from "@reach/router";
import { useSelector } from "react-redux";

// History for location provider
let history = createHistory(window);

const App = () => {
  // all menu options
  const menu = useSelector((state) => state.menu);
  // flat list of all apps (only updated when menu updated in the Redux store)
  const apps = useMemo(() => _.flatMap(menu, "apps"), [menu]);
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
          {apps.map((app) => (
            <MainMenu
              sidebarCollapsed={sidebarCollapsed}
              toggleSidebar={toggleSidebar}
              key={app.path}
              path={app.path + "/*"}
              app={app}
            />
          ))}
        </Router>
      </div>
    </LocationProvider>
  );
};

export default App;
