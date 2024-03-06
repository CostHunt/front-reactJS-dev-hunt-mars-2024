import React from 'react'

export default function Comment({ comments, post, clickLike, clickComment }) {
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
                            {likeClicked && <>Vous et</>} {post.likedByCount} autres personnes
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
                {commentClicked &&
                    <div className="commentsWrapper">
                        {comments.map((comment) => {
                            <div className="oneComment">
                                <div className="oneComment_content">
                                    <img src="public/assets/pdp/bobo.jpg" alt="" className="postProfileImg commentProfilepic" />
                                    <div className="eachContentComment">
                                        <span className="comment_username" >{comment?.account?.username}</span>
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
                            </div>
                        })}
                    </div>

                }
            </div>
        </div>
    )
}
