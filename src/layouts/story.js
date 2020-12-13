import { Avatar } from '@material-ui/core'
import React from 'react'
import './story.css'

function Story({image, profilesrc, title}){
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story">
            <Avatar src={profilesrc} className="story__Avatar"/>
            <h4>{title}</h4>

        </div>
    )
}

export default Story
