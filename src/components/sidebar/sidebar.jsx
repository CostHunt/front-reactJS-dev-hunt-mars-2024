import { useNavigate } from "react-router-dom";

import "./sidebar.css"
import "./sidebar2.css"
import "./bootstrapSide.css"
import { Height, RssFeed } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MessageIcon from '@mui/icons-material/Message';
import HistoryIcon from '@mui/icons-material/History';

import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import { useAuth } from "../../providers/AuthProvider";




function sidebar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <ul className="sidebarList">
    //       {/* <li className="sidebarListItem">
    //         <ArticleIcon className="sidebarIcon"/>
    //         <span className="sdebarListItemText">Actualité</span> */}
    //         {/* <Button className="sidaber_btnNav" textAlign="left" sx={{width:"100%",height:'50px'}} startIcon={<ArticleIcon/>}>Home</Button> */}
    //       {/* </li> */}
    //       {/* <li>
    //         <Button className="sidaber_btnNav" textAlign="left" sx={{width:"100%",height:'50px'}} startIcon={<ArticleIcon/>}>COMPETITION</Button>
    //       </li> */}
    //     </ul>

    //     {/* <Button variant="contained" color="secondary">
    //       Show more
    //     </Button>         */}
    // {/* <hr className="sidebarHr"/> */}
    //     {/* <ul className="sidebarFriendList">
    //       <li className="sidebarFriend">
    //         <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
    //         <span className="sidebarFriendName">L3 GB 2023 </span>
    //       </li>
    //       <li className="sidebarFriend">
    //         <img src="/assets/pdp/costhuntLogo.png" alt="" className="sidebarFriendImg" />
    //         <span className="sidebarFriendName">ENI English Club </span>
    //       </li>
    //     </ul> */}
    //   </div>
    //   <ul className="sidebarList" >
    //     <li className="row" onClick={()=>{navigate('/home')}}>
    //       <div id="icon">
    //         <CalendarMonthIcon/>
    //       </div>
    //       <div id="title">
    //         Home
    //       </div>
    //     </li>
    //     <li className="row" onClick={()=>{navigate('/groupe')}}>
    //       <div id="icon">
    //         <CalendarMonthIcon/>
    //       </div>
    //       <div id="title">
    //         Groupe
    //       </div>
    //     </li>
    //     <li className="row">
    //       <div id="icon">
    //         <CalendarMonthIcon/>
    //       </div>
    //       <div id="title">
    //         Mes dossiers de travail
    //       </div>
    //     </li>
    //   </ul>
    // </div>
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" />
      <div id="nav-header"><div id="nav-title">ENI.S<i className="fab fa-codepen"></i>CIETY</div>
        <label for="nav-toggle"><span id="nav-toggle-burger"></span></label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button" onClick={() => { navigate('/home') }}><i className="fas fa-home"></i><span>Accueil</span></div>
        <div className="nav-button" onClick={() => { navigate('/workspace') }}><i className="fas fa-dumbbell"></i><span>Mon espace de travail</span></div>
        {/* <div className="nav-button"><i className="fas fa-thumbtack"></i><span>Groupe</span></div> */}
        <hr />
        <div className="nav-button" onClick={() => {
          localStorage.removeItem('code')
          localStorage.removeItem('id_project')
          localStorage.removeItem('language')
          localStorage.removeItem('nom_project')
          navigate('/Coding')
        }}><i className="fas fa-code"></i><span>Coder</span></div>
        {/* <div className="nav-button"><i className="fas fa-chart-line"></i><span>Trending</span></div>
    <div className="nav-button"><i className="fas fa-fire"></i><span>Challenges</span></div>
    <div className="nav-button"><i className="fas fa-magic"></i><span>Spark</span></div> */}
        <hr />
        <div className="nav-button" onClick={() => { navigate('/Faq') }}><i className="fas fa-info"></i><span>Informations</span></div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar"><img src="/assets/pdp/costhuntLogo.png" /></div>
          <div id="nav-footer-titlebox"><div id="nav-footer-title" target="_blank">{user.username}</div><span id="nav-footer-subtitle">{user.email}</span></div>
          <label for="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>
        </div>
        {/* <div id="nav-footer-content">
      <Lorem>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Lorem>
    </div> */}
      </div>
    </div>

  )
}

export default sidebar


