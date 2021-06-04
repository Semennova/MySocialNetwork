import React from 'react'
import Loader from '../../../Loader/Loader'
import s from './ProfileInfo.module.css'
import defaultPhoto from '../../../../assets/img/defaultPhoto.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader />
    }
    return (
<div>

    <div className={s.descriptionBlock}>
   
        <img className={s.ava} src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}/>

    

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

      
    </div>
</div>
    )
}

export default ProfileInfo