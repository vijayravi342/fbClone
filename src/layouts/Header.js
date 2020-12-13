import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../Stateprovider'


function Header() {
    
   
       const[{user},dispatch] = useStateValue();
       
        return (
            <div className="header">
              <div className="header__left">
                  <img src="https://s30113.pcdn.co/wp-content/uploads/2020/04/Facebook-logo-new.png" alt="Logo" />

                  <div className="header__input">
                  <SearchIcon className="search" />
                   <input type="text"  placeholder="search facebook" />
                  </div>
              </div>






              <div className="header__middle">
              <div className="options header__option__active">
               <HomeIcon />
              </div>
              <div className="options">
               <FlagIcon />
              </div>
              <div className="options">
               <SubscriptionsIcon />
              </div>
              <div className="options">
               <StorefrontIcon />
              </div>
              <div className="options">
               <SupervisedUserCircleIcon />
              </div>
                
              </div>





              <div className="header_right ">
                   <div className="info">
                   <Avatar src={user.photoURL} />
                   <h4>{user.displayName}</h4>
                   </div>
                   
                   <IconButton>
                  <AddIcon />
               </IconButton>

              <IconButton>
                  <ForumIcon />
              </IconButton>

              <IconButton>
                  <NotificationsActiveIcon />
              </IconButton>
              
              <IconButton>
                  <ExpandMoreIcon />
              </IconButton>
            
              </div>

             
            </div>
        )
    
}

export default Header
