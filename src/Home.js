import React from 'react'
import Sidebar from './Sidebar'
import Tweet from './Tweet'
import Widgets from './Widgets'
import './App.css';

function Home() {
    return (
        <div className="App">
            <Sidebar />
            <Tweet />
            <Widgets/>
        </div>
    )
}

export default Home
