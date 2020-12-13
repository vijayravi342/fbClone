import React,{useState} from 'react'
import './Msg.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import {useStateValue} from '../Stateprovider'
import db from '../fbConfig'
import firebase from 'firebase'

function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input,setInput]= useState(" ");
    const [imageUrl, setImageUrl]= useState(" ");
    const HandleSubmit=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
        setInput(" ");
        setImageUrl(" ");

    }
    return (
        <div className="msg">
         <div className="messagesender__top">
         <Avatar src={user.photoURL} />
         <form>
             <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} placeholder="yolo" />
             <input  type="text" value ={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Get lost" />
             <button onClick={HandleSubmit} type="submit">Hidden Submit</button>
         </form>
         </div>

    
         <div className="messagesender_bottom">
            <div className="messagesender__option">
              <VideocamIcon style={{color:"red"}} />
              <h3>Live Video</h3>
              </div>
              <div className="messagesender__option">
              <PhotoLibraryIcon style={{color:"green"}} />
              <h3>Photos/Videos</h3>
              </div>
              <div className="messagesender__option">
              <InsertEmotionIcon style={{color:"orange"}} />
              <h3>Feeling</h3>
              </div>
              </div>

            
         </div>
        
      

        
            
        
        
    )
}

export default MessageSender
