import React from "react";
import "./Nav.css"; // Assure-toi de créer un fichier CSS séparé (Sidebar.css) pour y définir les styles.
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar() {
  return (
    <div className="sidebar-container">
      <ul>
        <li> <ChatIcon className="NavItem"/> </li>
        <li> <CampaignIcon className="NavItem"/> </li>
        <li> <NotificationsIcon className="NavItem"/> </li>
        <hr/>
        <li> <SettingsIcon className="NavItem"/> </li>
        <li> <LogoutIcon className="Logout"/> </li>
      </ul>
    </div>
  );
}

export default Sidebar;
