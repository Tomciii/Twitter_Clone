import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
}from "react-twitter-embed"
import { Search } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets__input">
               <SearchIcon className="widgets_searchIcon"></SearchIcon>
               <input placeholder="Search Twitter" tpye="text"></input>
           </div>
           
           <div className="widgets__widgetContainer">
               <h2>What's happening</h2>
               <TwitterTweetEmbed tweetId={"701914501126471681"}></TwitterTweetEmbed>
           </div>
        </div>
    )
}

export default Widgets
