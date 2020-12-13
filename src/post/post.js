import { Avatar } from '@material-ui/core'
import React from 'react'
import './post.css'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilepic,image,username,timestamp, message}) {
    return (
        <div className="post">
        <div className="post__top">
              <Avatar src={profilepic} className="post__avatar" />
              <div className="post__topinfo">
                 <h3>{username}</h3>
                 <p>{new Date (timestamp?.toDate()).toUTCString()}</p>
              </div>
        </div>

        <div className="post__bottom">
        <p>{message}</p>
        </div>
        <div className="post__image">
            <img src={image} alt="postimg" />
        </div>

        <div className="post__options">
            <div className="post__option">
           <ThumbsUpDownIcon />
           <p>Like</p>
           

            </div>
            <div className="post__option">
           
           <ChatBubbleIcon />
           <p>Comment</p>

            </div>
            <div className="post__option">
           <NearMeIcon />
           <p>Share</p>

            </div>
            <div className="post__option">
            <AccountCircleIcon />
            <ExpandMoreIcon />

            </div>
        </div>
            
        </div>
    )
}

export default Post
