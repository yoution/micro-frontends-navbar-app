/**
 * UserMenu component.
 *
 * Shows logged-in user with user menu with options like log-out.
 */
import React, { useState, useCallback } from "react";
import Avatar from "../Avatar";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import config from "../../../config";
import "./styles.css";

const UserMenu = ({ profile }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = useCallback(() => {
    setIsOpenMenu(false);
  }, [setIsOpenMenu]);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu, setIsOpenMenu]);

  const logoutUrl = `${config.URL.AUTH}/logout?retUrl=${encodeURIComponent(
    window.location.href.match(/[^?]*/)[0]
  )}`;

  return (
    <OutsideClickHandler onOutsideClick={closeMenu}>
      <div className="user-menu">
        <div
          className={cn("user-menu-handler", {
            "user-menu-handler-active": isOpenMenu,
          })}
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
        >
          <Avatar profile={profile} />
          <div className="user-menu-handle">{profile.handle}</div>
        </div>

        {isOpenMenu && (
          <div className="user-menu-popover-wrapper">
            <div
              className="user-menu-popover-overlay"
              onClick={closeMenu}
              role="button"
              tabIndex="-1"
            />
            <div className="user-menu-popover">
              <div className="user-menu-popover-arrow" />
              <div className="user-menu-popover-content">
                <ul className="user-menu-list">
                  <li>
                    <a href={logoutUrl}>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default UserMenu;
