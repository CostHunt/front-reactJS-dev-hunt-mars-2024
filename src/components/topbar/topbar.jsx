import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import Badge from '@mui/material/Badge';

function topbar() {
  return (
    <div>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">ENI-sociaux</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" placeholder="search..." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Badge badgeContent={4} color="success">
                            <PersonIcon/>
                        </Badge>
                    </div>
                    <div className="topbarIconItem">
                        <Badge badgeContent={3} color="success">
                            <MessageIcon/>
                        </Badge>
                    </div>
                    <div className="topbarIconItem">
                        <Badge badgeContent={2} color="success">
                            <NotificationsIcon/>
                        </Badge>
                    </div>
                </div>
            <img className="topbarImg" src="public/assets/pdp/costhuntLogo.png" alt="pdp" />
            </div>
        </div>
    </div>
  )
}

export default topbar