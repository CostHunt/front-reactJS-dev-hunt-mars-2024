import "./post.css"
import {bottomBtnGroup,bottomBtnGroup_child}  from "./componentStyle"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";


// material import
import { Button,ButtonGroup,Box } from "@mui/material";
// icons
import MarkChatReadRoundedIcon from '@mui/icons-material/MarkChatReadRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import BackHandIcon from '@mui/icons-material/BackHand';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PanToolIcon from '@mui/icons-material/PanTool';
import ChatFilledcon from '@mui/icons-material/ChatOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'; //like outline
import ThumbUpIcon from '@mui/icons-material/ThumbUp';//like filled

import { useState } from "react";


const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
    originalBtnColour: createColor("#8f8d99"),
    inheritBtnLikeComment: createColor("#8f8d99"),
    },
});
  

function post({post}) {

    const [likeClicked, setLikeClicked] = useState(false);
    const [commentClicked, setCommentClicked] = useState(false);
    
    const [ResponseLikeClicked, setResponseLikeClicked] = useState(false);

    

  const clickLike=()=>{
    setLikeClicked(!likeClicked);
  }
  const clickComment=()=>{
    setCommentClicked(!commentClicked);
  }
  const clickAdvice=()=>{
    setResponseLikeClicked(!ResponseLikeClicked);
  }
  
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span><br />
                <div className="postImages">
                    <img src={post.photo} alt="" className="postImg" />
                    {/* <img src="assets/pdp/costhuntLogo.png" alt="" className="postImg" /> */}
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <div className="postBottom">
                    <span className="postLikeCounteur">
                        {likeClicked && <>Vous et</>} 33 autres personnes
                    </span>
                    <div className="postCommentText"><ChatFilledcon sx={{width:"18px",bottom:"0"}}/>9</div>
                </div>
                    <div className="postBottom" style={bottomBtnGroup}>
                        { !likeClicked ?  (
                                // blue
                                <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} onClick={clickLike} startIcon={<PanToolOutlinedIcon/>}>Moi aussi</Button>
                            ):(
                                // gris
                                <Button variant="text" color="primary" style={bottomBtnGroup_child} onClick={clickLike} startIcon={<PanToolIcon/>}>Moi aussi</Button>
                            )
                        }
                        <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} onClick={clickComment}  startIcon={<ChatBubbleOutlineRoundedIcon/>}>Réponses</Button>
                        <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} startIcon={<DoneOutlineRoundedIcon/>}>Résolu</Button>
                    </div>
            </ThemeProvider>
            {commentClicked && 
                    <div className="commentsWrapper">
                    {/* debut boucle */}
                    <div className="oneComment">
                        <div className="oneComment_content">
                            <img src="public/assets/pdp/bobo.jpg" alt="" className="postProfileImg commentProfilepic" />
                            <div className="eachContentComment">
                                <span className="comment_username" >Bobo</span>
                                    <span className="comment_content" >
                                        Fa firy taona zany maître ty no nanomboka nilona tanaty musique e? Hainao daholo v ranga le 😭,mampitsiriritra mitsy
                                    </span>

                            </div>
                        </div>
                        <div className="oneComment_advice">
                        {!ResponseLikeClicked ? (
                            <>  
                                {/* boutton pas cliqué */}
                                <ThumbUpAltOutlinedIcon onClick={clickAdvice} color="warning"/>
                                <span color="warning">42</span>
                            </>
                        ): (<>
                                {/* boutton cliqué */}
                                <ThumbUpIcon color="anger" onClick={clickAdvice}/>
                                <span color="warning">43</span>
                            </>
                        ) }

                        </div>
                    </div>
                    {/* fin boucle */}
                    </div>
            }
 
        </div>
    </div>
    
  )
}

export default post