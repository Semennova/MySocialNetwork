import React from 'react'
import Loader from '../../../Loader/Loader'
import s from './ProfileInfo.module.css'
import defaultPhoto from '../../../../assets/img/defaultPhoto.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader />
    }

    const onMainPhotoSaved = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        
<div>

    <div className={s.descriptionBlock}>
   
        <img alt="profile-avatar" className={s.ava} src={props.profile.photos.large || defaultPhoto}/>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSaved}/>}

    

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

      
    </div>
</div>
    )
}

export default ProfileInfo