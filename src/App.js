import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Loader from './components/Loader/Loader';



class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }
 
  render() {
    if(!this.props.initialized) {
     return  <Loader />
    }

    return (
    <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        
        <div className="app-wrapper-content">
            
            <Route path='/dialogs' render={()=> <DialogsContainer  />}/>
            <Route path='/profile/:userId?' render={()=> <ProfileContainer />} />
            <Route path='/users' render={()=> <UsersContainer />} />
            <Route path='/news' render={()=> <News />} />
            <Route path='/music' render={()=> <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/login' render={() => <Login />} />


        </div>
    </div>

    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
