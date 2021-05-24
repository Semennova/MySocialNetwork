import React from 'react'
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import store from '../../redux/redux-store'



const Profile = (props) => {
    return (
      <div>
          <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} id={props.id} />
          <MyPostsContainer />
      </div>
    )
}

export default Profile;