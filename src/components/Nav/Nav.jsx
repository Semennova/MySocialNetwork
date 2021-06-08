import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Nav.module.css';





const Nav = (props) => {

  // <Friend />

  // let friendElement = props.state.navbar
  // .map(friend => <Friend name={friend.name} id={friend.id}/>)
   
  return (

<nav className={s.nav}>

    <div className={s.item}><NavLink className={s.link} to="/profile" activeClassName={s.active}>Profile</NavLink></div>
    
    <div className={s.item}><NavLink className={s.link} to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>

    <div className={s.item}><NavLink className={s.link} to="/users" activeClassName={s.active}>Users</NavLink></div>
    
    <div className={s.item}><NavLink className={s.link} to="/news" activeClassName={s.active}>News</NavLink></div>
    
    <div className={s.item}><NavLink className={s.link} to="/music" activeClassName={s.active}>Music</NavLink></div>
    
    <div className={s.item}><NavLink className={s.link} to="/settings" activeClassName={s.active}>Settings</NavLink></div>

    <div className={s.item}><NavLink className={s.link} to="/login" activeClassName={s.active}>Login</NavLink></div>



    
    {/* <section className={s.section}>
      <NavLink className={s.friends}  to="/dialogs" activeClassName={s.active}>FRIENDS</NavLink>
          <div className={s.flex}>
          {friendElement}
          </div>
            </section> */}
  
</nav>




  )
}

export default Nav;