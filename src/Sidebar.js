import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExploreIcon from '@material-ui/icons/Explore';
import {Button} from "@material-ui/core"
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
            <div className="sidebar">
                <TwitterIcon className="sidebar__twitterIcon"/>
                <Link className="linkButton" to="/"><SidebarOption active text="Home" Icon={HomeIcon}/></Link>
               <Link className="linkButton" to ="/Explore">  <SidebarOption text="Explore" Icon={ExploreIcon}/></Link>
              <Link className="linkButton" to="/Notifications"> <SidebarOption text="Notifications" Icon={NotificationsIcon}/></Link>
              <Link className="linkButton" to="/Messages"> <SidebarOption text="Messages" Icon={MailOutlineIcon}/></Link>
              <Link className="linkButton" to="/Bookmarks"><SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon}/></Link>
              <Link className="linkButton" to="/Lists">  <SidebarOption text="Lists" Icon={FormatListBulletedIcon}/></Link>
              <Link className="linkButton" to="/Profiles"> <SidebarOption text="Profiles" Icon={PersonOutlineIcon}/></Link>
              <Link className="linkButton" to="/More">  <SidebarOption text="More" Icon={MoreHorizIcon}/></Link>
                <Button variant="outlined" className="tweet" fullWidth>Tweet</Button>
            </div>

    )
}

export default Sidebar