import React from 'react'
import "../css/Story.css"
import {stories} from "./stories"
import { Avatar} from '@material-ui/core';
const Story = () => {
    return (
        <>
            {stories.map((story) => {
                const {id,title,profileSrc,image,display}=story
                return (
            <div style={{backgroundImage:`url(${image})`}} className={`story ${display}`} key={id}>
            <Avatar className="story__avatar" src={profileSrc} />
            <h4>{ title }</h4>
            </div>
                )
            }
            )}
        </>
    )
}

export default Story
