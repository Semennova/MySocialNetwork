import React from 'react'
import s from './Users.module.css'
import defaultPhoto from '../../assets/img/defaultPhoto.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pageCount = Math.ceil(props.totalCount/props.pageSize);
    let pages = [];

    for(let i=1; i<=pageCount; i++){
    pages.push(i)
}
    
    return <div>
    <div>

        {pages.map(p => {
            return <span key={p.id} className={props.currentPage === p ? s.selectedPage : s.pageNum} onClick={(e)=> props.onPageChange(p)}>{p}</span>
        })}

        </div>
    {
        props.users.map(u => <div key={u.id} className={s.flex}>
                <span className={s.PhotoSpan}>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : defaultPhoto} className={s.img}/>
                    </NavLink>
                    
                        {u.followed ? 
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {
                            props.unfollow(u.id)
                        }} className={s.btn}>Unfollow</button> 
                        
                        :

                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={()=> {
                           props.follow(u.id)
                 
                }} className={s.btn}>Follow</button>
                }
                        
                
                </span>
                <span className={s.textSpan}>
                    <span>
                        <div>Name: {u.name}</div>
                     
                        <div>Status: {u.status}</div>
                    </span>
                    <span>
                        <div>Country: {'u.location.country'}</div>
                        <div>City: {'u.location.city'}</div>
                    </span> 
                 </span>
            </div>
        )
    }
</div> 
}

export default Users






                    