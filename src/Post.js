import React, {forwardRef} from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(
    ({
    displayName,
    username,
    verified,
    text,
    avatar,
    timestamp,
    time
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <CheckCircleIcon className="post__badge"></CheckCircleIcon>}
                            @{username} {time}
                            </span>
                         </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon></RepeatIcon>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <PublishIcon></PublishIcon>
                </div>
            </div>
        </div>
    )
})

export default Post
