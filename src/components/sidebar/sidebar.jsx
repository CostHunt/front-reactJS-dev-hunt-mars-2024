import "./sidebar.css"
import { RssFeed } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MessageIcon from '@mui/icons-material/Message';
import HistoryIcon from '@mui/icons-material/History';

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <ArticleIcon className="sidebarIcon"/>
            <span className="sdebarListItemText">Actualité</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon"/>
            <span className="sdebarListItemText">Evènement</span>
          </li>
          <li className="sidebarListItem">
            <Diversity2Icon className="sidebarIcon"/>
            <span className="sdebarListItemText">Cercle d'étude</span>
          </li>
          <li className="sidebarListItem">
            <MessageIcon className="sidebarIcon"/>
            <span className="sdebarListItemText">Canaux</span>
          </li>
          <li className="sidebarListItem">
            <HistoryIcon className="sidebarIcon"/>
            <span className="sdebarListItemText">Emploi du temps</span>
          </li>
          
        </ul>

        <Button variant="contained" color="secondary">
          Show more
        </Button>        
    <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">L3 GB 2023 </span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">ENI English Club </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default sidebar