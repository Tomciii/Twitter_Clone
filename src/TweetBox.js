import React, {useState} from 'react'
import {Avatar, Button} from "@material-ui/core";
import './TweetBox.css'
import db from './firebase.js'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");

    const getTime = () => {
        const time = new Date();
        const hours = (time.getHours() > 9 ? time.getHours().toString() : "0" + time.getHours().toString());
        const minutes = (time.getMinutes() > 9 ? time.getMinutes().toString() : "0" + time.getMinutes().toString());
               
        return hours + ":" + minutes;
    }

    const sendTweet = (e) => {
        e.preventDefault();
     
        if (tweetMessage != "")
        {
            db.collection("posts").add({
                displayName: 'Thomas Horvath',
                username: 'tomcii',
                verified: true,
                text: tweetMessage,
                avatar: "https://pbs.twimg.com/profile_images/1245286518744330240/Wezk8al7_400x400.jpg",
                timestamp: new Date().getTime(),
                time: getTime(),
               });
        }
        
           setTweetMessage("");
    };
     
    return (
        <div className="tweetBox">
           <form>
               <div className="tweetBox__input">
                   <Avatar src="https://pbs.twimg.com/profile_images/1245286518744330240/Wezk8al7_400x400.jpg"/>
                   <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} placeholder="Whats happening?" type="text"></input>
               </div>
               <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
           </form>
        </div>
    )
}

export default TweetBox
