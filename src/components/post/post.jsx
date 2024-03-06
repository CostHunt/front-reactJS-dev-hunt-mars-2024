import "./post.css"
import { bottomBtnGroup, bottomBtnGroup_child } from "./componentStyle"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";


// material import
import { Button, ButtonGroup, Box } from "@mui/material";
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

import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

import { getUser } from "../../utils/account";
import { likePost } from "../../utils/post";
import { getComment } from "../../utils/comment";


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


function Post({ post }) {

    const [likeClicked, setLikeClicked] = useState(false);
    const [commentClicked, setCommentClicked] = useState(false);

    const [ResponseLikeClicked, setResponseLikeClicked] = useState(false);

    const [comments, setComments] = useState([])

    const getDate = () => {
        const postDate = new Date() - new Date(post.date_publication)
        if ((postDate / 60000) < 10) return "A l'instant"
        if ((postDate / 60000) < 60) return Math.floor(postDate / 60000) + "min"
        if ((postDate / 60000) > 60) return Math.floor(postDate / 60000 / 60) + "h"
        if ((postDate / 60000 / 60) > 24) return Math.floor(postDate / 60000 / 60) + "j"
    }

    const { token, user } = useAuth()

    const clickLike = () => {
        likePost(token, user.id, post.id).then((resp) => {
            console.log('success')
        })
        setLikeClicked(!likeClicked);
    }
    const clickComment = () => {
        getComment(token, post.id).then((resp) => {
            if (resp?.message) {
                setComments(resp)
            } else {
                setComments([])
            }

            // console.log(resp)
        })
        setCommentClicked(!commentClicked);
    }
    const clickAdvice = () => {
        setResponseLikeClicked(!ResponseLikeClicked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={(post?.account?.image_profile != null) ? post?.account?.image_profile : '/assets/pdp/no-picture.webp'} alt="XXX" className="postProfileImg" />
                        <span className="postUsername">{post?.account?.username}</span>
                        <span className="postDate">Il y a {getDate()}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.description}</span><br />
                    <div className="postImages">
                        <img src={post?.attachedfiles?.url} alt="" className="postImg" />
                    </div>
                </div>
                <ThemeProvider theme={theme}>
                    <div className="postBottom">
                        <span className="postLikeCounteur">
                            {likeClicked && <>Vous et</>} {post.likesCount} autres personnes
                        </span>
                        <div className="postCommentText"><ChatFilledcon sx={{ width: "18px", bottom: "0" }} />{post.commentsCount}</div>
                    </div>
                    <div className="postBottom" style={bottomBtnGroup}>
                        {!likeClicked ? (
                            // blue
                            <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} onClick={clickLike} startIcon={<PanToolOutlinedIcon />}>Moi aussi</Button>
                        ) : (
                            // gris
                            <Button variant="text" color="primary" style={bottomBtnGroup_child} onClick={clickLike} startIcon={<PanToolIcon />}>Moi aussi</Button>
                        )
                        }
                        <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} onClick={clickComment} startIcon={<ChatBubbleOutlineRoundedIcon />}>Réponses</Button>
                        <Button variant="text" color="originalBtnColour" style={bottomBtnGroup_child} startIcon={<DoneOutlineRoundedIcon />}>Résolu</Button>
                    </div>
                </ThemeProvider>
                {/* {commentClicked &&
                    <div className="commentsWrapper">
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
                                        boutton pas cliqué 
                <ThumbUpAltOutlinedIcon onClick={clickAdvice} color="warning" />
                <span color="warning">42</span>
            </>
            ) : (<>
                boutton cliqué 
                <ThumbUpIcon color="anger" onClick={clickAdvice} />
                <span color="warning">43</span>
            </>
                                )}

        </div>
                        </div >
         fin boucle
                    </div >
                } */}

            </div >
        </div >

    )
}

export default Post