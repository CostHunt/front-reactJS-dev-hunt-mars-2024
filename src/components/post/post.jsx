import "./post.css"
import { bottomBtnGroup, bottomBtnGroup_child } from "./componentStyle"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../dummyData';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";


// material import
import { Button, ButtonGroup, Box, TextField, IconButton } from "@mui/material";
import Modal from '@mui/material/Modal';
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
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

import { getUser } from "../../utils/account";
import { deletePost, isResolved, likePost } from "../../utils/post";
import { comment, getComment } from "../../utils/comment";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

    const [ResponseLikeClicked, setResponseLikeClicked] = useState(false);

    const [comments, setComments] = useState([])

    const [commentVal, setCommentVal] = useState('')

    const [resolved, setResolved] = useState(false)

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const getDate = () => {
        const postDate = new Date() - new Date(post.date_publication)
        if ((postDate / 60000) < 5) return "A l'instant"
        if ((postDate / 60000) < 60) return "Il y a " + Math.floor(postDate / 60000) + "min"
        if ((postDate / 60000) > 60) return "Il y a " + Math.floor(postDate / 60000 / 60) + "h"
        if ((postDate / 60000 / 60) > 24) return "Il y a " + Math.floor(postDate / 60000 / 60) + "j"
    }

    const { token, user } = useAuth()
    const isMyPost = post.id_account == user.id

    const handleComment = () => {
        comment(token, user.id, post.id, commentVal).then((resp) => {
            setComments((c) => [...c, resp])
        })
    }

    const handleDelete = () => {
        deletePost(token, post.id).then((resp) => {
            window.location.reload()
        })
    }

    const clickLike = () => {
        likePost(token, user.id, post.id).then((resp) => {
            console.log(resp)
        })
        setLikeClicked(!likeClicked);
    }
    const clickComment = () => {

        getComment(token, post.id).then((resp) => {
            setOpen(true);
            if (resp?.message) {
                setComments([])
            } else {
                setComments(resp)
            }

        })
    }
    const clickAdvice = () => {
        setResponseLikeClicked(!ResponseLikeClicked);
    }

    const handleResolved = () => {
        isResolved(token, post.id).then(() => {
            console.log("success")
        })
        if (resolved) setResolved(false)
        else setResolved(true)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={(post?.account?.image_profile != null) ? post?.account?.image_profile : '/assets/pdp/no-picture.webp'} alt="XXX" className="postProfileImg" />
                        <span className="postUsername">{post?.account?.username}</span>
                        <span className="postDate">{getDate()}</span>
                    </div>
                    {isMyPost ?
                        <div className="postTopRight">
                            <IconButton onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </div> : null}
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
                        {(isMyPost) ? <Button variant="text" onClick={handleResolved} color={(resolved) ? "success" : "originalBtnColour"} style={bottomBtnGroup_child} startIcon={<DoneOutlineRoundedIcon />}>Résolu</Button> : null}
                    </div>
                </ThemeProvider>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                >
                    <Box sx={{
                        ...style, "@media (max-width: 992px)": {
                            width: "100%"
                        }
                    }}>
                        <div className="post">
                            <div className="postWrapper">
                                <div className="postTop">
                                    <div className="postTopLeft">
                                        <img src={(post?.account?.image_profile != null) ? post?.account?.image_profile : '/assets/pdp/no-picture.webp'} alt="XXX" className="postProfileImg" />
                                        <span className="postUsername">{post?.account?.username}</span>
                                        <span className="postDate">{getDate()}</span>
                                    </div>
                                    <div className="postTopRight">
                                        <IconButton onClick={handleClose}>
                                            <CloseIcon />
                                        </IconButton>
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
                                        {(isMyPost) ? <Button variant="text" onClick={handleResolved} color={(resolved) ? "success" : "originalBtnColour"} style={bottomBtnGroup_child} startIcon={<DoneOutlineRoundedIcon />}>Résolu</Button> : null}
                                    </div>
                                </ThemeProvider>
                                <div className="commentsWrapper">
                                    <div style={{ display: 'flex' }}>
                                        <TextField value={commentVal} onChange={(e) => setCommentVal(e.target.value)} fullWidth placeholder="Ajouter commentaire..." sx={{ marginBottom: '10px' }} />
                                        <IconButton onClick={handleComment}>
                                            <SendIcon style={{ fontSize: 35 }} />
                                        </IconButton>
                                    </div>
                                    {(comments.length > 0) ?
                                        comments.map((comment) => <div key={comment.id} className="oneComment">
                                            <div className="oneComment_content">
                                                <img src="public/assets/pdp/bobo.jpg" alt="" className="postProfileImg commentProfilepic" />
                                                <div className="eachContentComment">
                                                    <span className="comment_username" >{comment.account?.username}</span>
                                                    <span className="comment_content" >
                                                        {comment.contenu}
                                                    </span>

                                                </div>
                                            </div>
                                            <div className="oneComment_advice">
                                                {!ResponseLikeClicked ? (
                                                    <>
                                                        {/* boutton pas cliqué */}
                                                        <ThumbUpAltOutlinedIcon onClick={clickAdvice} color="warning" />
                                                        <span color="warning">42</span>
                                                    </>
                                                ) : (<>
                                                    {/* boutton cliqué */}
                                                    <ThumbUpIcon color="anger" onClick={clickAdvice} />
                                                    <span color="warning">43</span>
                                                </>
                                                )}

                                            </div>
                                        </div>) : <div className="commentsWrapper" style={{ textAlign: 'center' }}> Aucun Commentaires </div>}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div >
        </div>
    )
}

export default Post