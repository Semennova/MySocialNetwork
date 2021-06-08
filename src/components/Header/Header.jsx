import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
        <img alt="img-header" src="https://www.siggraph.org/wp-content/uploads/2012/12/org.flat_.logo_.400_0.jpg"/>
        <div className={s.loginBlock}>
          {props.isAuth ? 
          <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : 
          <NavLink to={'/login'}>Login</NavLink>}
          {/* <div>
          {props.id}
          </div> */}
         

        </div>
        

      </header>
    )
}


export default Header;