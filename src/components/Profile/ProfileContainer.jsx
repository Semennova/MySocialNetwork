import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../../src/hoc/withAuthRedirect'
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId; 
    if(!userId){
      userId = 16754
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render(){
   
    return (
      <div>
          <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )}
}





let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    
  }
}


export default compose(
  withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withAuthRedirect
)(ProfileContainer)


