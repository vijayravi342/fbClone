import React from 'react'
import SidebarRow from './sidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
//import {ExpandMoreOutLined} from '@material-ui/icons'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../Stateprovider'

function Sidebar() {
       const[{user},dispatch] = useStateValue();
       
    return (
       <div className="sidebar">
          <SidebarRow src={user.photoURL} title={user.displayName}/>
           <SidebarRow Icon={LocalHospitalIcon} title="Hospital"/>
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           <SidebarRow Icon={PeopleIcon} title="Friends"/>
           <SidebarRow Icon={ChatBubbleIcon} title="Messenger"/>
           <SidebarRow Icon={StorefrontIcon} title="Market Place"/>
           <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
           <SidebarRow Icon={ExpandMoreIcon} title="Market Place"/>
          
       </div>
    )

}

export default Sidebar

