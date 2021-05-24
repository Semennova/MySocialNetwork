import React from 'react'
import s from './../Dialogs.module.css'



const Message = (props) => {
    return (
        <div className={s.message}>
                   <img className={s.img} src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg"/>  
            {props.message}
        </div>
    )
}


export default Message