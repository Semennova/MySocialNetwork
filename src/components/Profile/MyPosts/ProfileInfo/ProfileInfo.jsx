import React, { useState } from 'react'
import Loader from '../../../Loader/Loader'
import s from './ProfileInfo.module.css'
import defaultPhoto from '../../../../assets/img/defaultPhoto.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, isOwner, updateStatus, savePhoto, status, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);


    if(!profile) {
        return <Loader />
    }

    const onMainPhotoSaved = (e) => {
        if(e.target.files.length) {
           savePhoto(e.target.files[0])
        }
    }
     const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false)
     }
    
    return ( 
<div>
    <div className={s.descriptionBlock}>
        <img alt="profile-avatar" className={s.ava} src={profile.photos.large || defaultPhoto}/>
        {isOwner && <input type={"file"} onChange={onMainPhotoSaved}/>}

                
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        {editMode ? 
        <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
        : <ProfileData goToEditMode={()=> {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
    </div>
</div>
    )
}



const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (
        <div>
              {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

            <div><b>Full name:</b> {profile.fullName}
                </div>
                <div><b>Looking for job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
                </div> 
               
                <div>
                    <b>My professional skills:</b> {profile.lookingForAJobDescription}
                </div>

                <div>
                    <b>About me:</b> {profile.aboutMe}
                </div>

                <div>
                    <div className={s.contacts}><b>Contacts:</b></div> {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle= {key} contactValue={profile.contacts[key]}/>
                })}
                </div>
            
        </div>    

    )
}







export const Contacts = ({contactTitle, contactValue}) => {
    
    return (
        <div className={s.socialMedia}>
            <b>{contactTitle}:</b>{contactValue}
        </div>
    )
}

export default ProfileInfo