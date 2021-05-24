import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
                   <img className={s.img} src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>  
                <NavLink className={s.link} to={path}>{`${props.name}`}</NavLink> 
            </div>
    )
}

export default DialogItem