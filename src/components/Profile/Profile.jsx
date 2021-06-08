import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
      <div>
          <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} id={props.id} />
          <MyPostsContainer />
      </div>
    )
}

export default Profile;