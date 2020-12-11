/**
 * Notification menu component
 * Dropdown / model not implemented yet
 */

import React, {} from "react";
import "./styles.css";
import bellIcon from '../../assets/images/bell.svg';

const NotificationsMenu = () => {
  return (
    <div className="notifications-menu">
        <div className="notifications-number-container">
            <span className="notifications-number">3</span>
        </div>
        <img className="notifications-icon" src={bellIcon} alt="Notifications"/>
    </div>
  );
};

export default NotificationsMenu;
