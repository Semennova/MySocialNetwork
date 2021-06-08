import React from 'react'
import s from './Post.module.css';


const Post = (props) => {
    return (
    <div>
        <div className={s.item}>
            <img alt="post-img" src="https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg"/>
           { props.message }
            <div>
           
            <span>  {`Likes: ${props.likeCount} `}</span>
            
            </div>
        </div>
    </div>
    )
}

export default Post;