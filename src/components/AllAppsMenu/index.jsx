/**
 * AllAppsMenu component
 *
 * Shows dropdown with applications.
 */
import React, { useCallback, useState } from "react";
import { Link } from "@reach/router";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import AllAppsMenuIcon from "../../assets/images/all-apps-menu.svg";
import { APPS } from "../../constants";
import "./styles.css";

const AllAppsMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, [setIsOpenMenu]);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu, setIsOpenMenu]);

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <div className="all-apps-menu">
        <div
          className={cn("all-apps-menu-handler", {
            "all-apps-menu-handler-active": isOpenMenu,
          })}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
        >
          <img src={AllAppsMenuIcon} alt="All Apps Icon" />
          <span>ALL APPS</span>
        </div>

        {isOpenMenu && (
          <div className="all-apps-menu-popover-wrapper">
            <div
              className="all-apps-menu-popover-overlay"
              onClick={closeMenu}
              role="button"
              tabIndex="-1"
            />
            <div className="all-apps-menu-popover">
              <div className="all-apps-menu-popover-arrow" />
              <div className="all-apps-menu-popover-content">
                <div className="all-apps-menu-list-title">ALL APPS</div>
                <ul className="all-apps-menu-list">
                  {APPS.map((app) => (
                    <li key={app.path}>
                      <Link to={app.path} onClick={closeMenu}>
                        <img src={app.icon} alt={`${app.title} Icon`} />
                        {app.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default AllAppsMenu;
