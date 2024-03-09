import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { IconButton } from "@mui/material";
import { useAuth } from "../../providers/AuthProvider";

import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


function topbar() {



    const navigate = useNavigate();
    const { logout } = useAuth()
    return (
        <div id='e'>
            <div className="topbarContainer">
                {/* <div className="topbarLeft">
                    <span className="logo">ENI.socialize</span>
                </div> */}
                <div className="topbarCenter">
                    <div className="searchbar">
                        <SearchIcon className="searchIcon" />
                        <input type="text" placeholder="Rechercher une information..." className="searchInput" />
                    </div>
                </div>
                <div className="">
                    {/* <div className="topbarLink">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div> */}
                    {/* <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Badge badgeContent={4} color="success">
                                <PersonIcon />
                            </Badge>
                        </div>
                        <div className="topbarIconItem">
                            <Badge badgeContent={3} color="success">
                                <MessageIcon />
                            </Badge>
                        </div>
                        <div className="topbarIconItem">
                            <Badge badgeContent={2} color="success">
                                <NotificationsIcon />
                            </Badge>
                        </div>
                    </div> */}
                    {/* <div className="topbarIconItem">
                        <IconButton onClick={logout}>
                            <LogoutIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </div> */}
                    <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                                <img className="topbarImg" src="/assets/pdp/costhuntLogo.png" alt="pdp" {...bindTrigger(popupState)} />
                                <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <div className="account-popover">
                                        <Typography className="account-popover-element" sx={{ p: 2 }} onClick={() => { navigate('/workspace') }}>Mes dossiers de travail</Typography>
                                        <Typography className="account-popover-element" sx={{ p: 2, color: 'red' }} onClick={logout}><LogoutIcon /> Se déconnecter</Typography>
                                    </div>
                                </Popover>
                            </div>
                        )}
                    </PopupState>

                </div>
            </div>
        </div>
    )
}

export default topbar