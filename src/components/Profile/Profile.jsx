import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
      <div>
          <ProfileInfo savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} id={props.id} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
          <MyPostsContainer />
      </div>
    )
}

export default Profile;