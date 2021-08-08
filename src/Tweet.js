import React, {useState, useEffect} from 'react'
import Post from './Post'
import './Tweet.css'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Tweet() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    return (
        <>
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
                <TweetBox/>
                <FlipMove>
            {posts.sort(function(x, y){
    return x.timestamp - y.timestamp;
}).slice().reverse().map(post => (
                <Post
                key ={post.text}
                displayName={post.displayName}
                username={post.username} 
                verified={post.verified} 
                text={post.text}
                avatar={post.avatar}
                timestamp={post.timestamp}
                time = {post.time}
                ></Post>
            ))}
            </FlipMove>
        </div>   
        </>
        /**/
    )
}

export default Tweet
