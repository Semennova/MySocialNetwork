import React, { Suspense } from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Loader from './components/Loader/Loader';
//lazy
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));



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


            <Route path='/profile/:userId?' render={()=> <ProfileContainer />} />
            
            <Suspense fallback={<div><Loader /></div>}>
                <Route path='/users' render={()=> <UsersContainer />} />
    
                <Route path='/dialogs' render={()=> <DialogsContainer  />}/>
            </Suspense>

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
