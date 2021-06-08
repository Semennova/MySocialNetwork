import React from 'react'
import s from './Users.module.css'
import defaultPhoto from '../../assets/img/defaultPhoto.jpg'
import { NavLink } from 'react-router-dom';


let User = ({user, followingInProgress, follow, unfollow}) => {
    return <div className={s.flex}>
                <span className={s.PhotoSpan}>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt="user-avatar" src={user.photos.small != null ? user.photos.small : defaultPhoto} className={s.img}/>
                    </NavLink>
                    
                        {user.followed ? 
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={()=> {
                            unfollow(user.id)
                        }} className={s.btn}>Unfollow</button> 
                        
                        :

                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={()=> {
                           follow(user.id)
                 
                }} className={s.btn}>Follow</button>
                }
                        
                
                </span>
                <span className={s.textSpan}>
                    <span>
                        <div>Name: {user.name}</div>
                     
                        <div>Status: {user.status}</div>
                    </span>
                    <span>
                        <div>Country: {'u.location.country'}</div>
                        <div>City: {'u.location.city'}</div>
                    </span> 
                 </span>
            </div>
       

}

export default User






                    