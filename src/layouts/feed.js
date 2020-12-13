import React from 'react'
import MessageSender from '../messagesender/messagesender'
import './feed.css'
import StoryReel from './storyReel'
import Post from '../post/post'
import db from '../fbConfig'
import {useState, useEffect } from 'react'

function Feed() {
    const[posts,setPosts]=useState([]);
    useEffect(()=>
    {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
           setPosts(snapshot.docs.map((doc)=>({id:doc.id ,data:doc.data()})))
            );
    },[]);
    
        //const[posts , setPosts]=useState([]);
      //  useEffect(()=>{

          //  db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
               // setPosts(snapshot.docs.map(doc=>({
               //     id: doc.id,
               //     data: doc.data()
              //  })))
            //))
      //  }, [])

         // profilepic="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg2NDMzNTExMTM1/osama-bin-laden-born-march-10-1957-member-of-the-prominent-saudi-bin-laden-family-and-the-founder-of-the-islamic-extremist-organization-al-qaeda-best-known-for-the-september-11-attacks-on-the-unite.jpg"
          //  message="this shld work"
    // timestamp="time wen u applied"
    //username="osama bin laden"
    //image="https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2011/5/3/1304439099847/Osama-bin-Laden-007.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=e8877c8cc146e3e5d54d4b1fb5fa4240" />

    //<Post
   // key={post.id}
         //profilepic={post.data.profilePic}
       // message={post.data.message}
        //timestamp={post.data.timestamp}
       // username={post.data.username}
        //image={post.data.image} />
        //))}
    
    return (
        <div className="feed">
        <StoryReel/>
        <MessageSender />
        {posts.map((post)=>(
               <Post 
               key={post.id}
               profilepic={post.data.profilePic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}
               />
           ))}
            
        
        
      
        
            
        </div>
    )
    
}

export default Feed
