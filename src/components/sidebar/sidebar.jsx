import { useNavigate } from "react-router-dom";

import "./sidebar.css"
import "./sidebar2.css"
import { RssFeed } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MessageIcon from '@mui/icons-material/Message';
import HistoryIcon from '@mui/icons-material/History';

function sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* <li className="sidebarListItem">
            <ArticleIcon className="sidebarIcon"/>
            <span className="sdebarListItemText">Actualité</span> */}
            {/* <Button className="sidaber_btnNav" textAlign="left" sx={{width:"100%",height:'50px'}} startIcon={<ArticleIcon/>}>Home</Button> */}
          {/* </li> */}
          {/* <li>
            <Button className="sidaber_btnNav" textAlign="left" sx={{width:"100%",height:'50px'}} startIcon={<ArticleIcon/>}>COMPETITION</Button>
          </li> */}
        </ul>

        {/* <Button variant="contained" color="secondary">
          Show more
        </Button>         */}
    {/* <hr className="sidebarHr"/> */}
        {/* <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">L3 GB 2023 </span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">ENI English Club </span>
          </li>
        </ul> */}
      </div>
      <ul className="sidebarList" >
        <li className="row" onClick={()=>{navigate('/home')}}>
          <div id="icon">
            <CalendarMonthIcon/>
          </div>
          <div id="title">
            Home
          </div>
        </li>
        <li className="row" onClick={()=>{navigate('/groupe')}}>
          <div id="icon">
            <CalendarMonthIcon/>
          </div>
          <div id="title">
            Groupe
          </div>
        </li>
        <li className="row">
          <div id="icon">
            <CalendarMonthIcon/>
          </div>
          <div id="title">
            Calendrier
          </div>
        </li>
      </ul>
    </div>
  )
}

export default sidebar


