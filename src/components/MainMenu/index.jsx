/**
 * MainMenu component
 *
 * Show side menu for particular application.
 */
import React, { useState, useCallback } from "react";
import Menu from "../Menu";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import "./styles.css";

const MainMenu = ({ app }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu, setIsOpenMenu]);

  return (
    <div className="main-menu">
      <div className="main-menu-header">
        <img
          src={app.icon}
          alt={`${app.title} Icon`}
          className="main-menu-logo"
        />
        <div
          className={cn("main-menu-title", {
            "main-menu-title-up": isOpenMenu,
          })}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
        >
          {app.title}
        </div>
      </div>

      {isMobile ? (
        isOpenMenu && (
          <div className="main-menu-mobile">
            <Menu options={app.menu} />
          </div>
        )
      ) : (
        <Menu options={app.menu} />
      )}
    </div>
  );
};

export default MainMenu;
