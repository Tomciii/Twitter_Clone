import React from 'react'
import Sidebar from './Sidebar'
import Tweet from './Tweet'
import Widgets from './Widgets'
import './App.css';

function Explore() {
    return (
        <div className="App">
            <Sidebar />
            <h2 style={{width: "500px"}}>Explore</h2>
            <Widgets/>
        </div>
    )
}

export default Explore
