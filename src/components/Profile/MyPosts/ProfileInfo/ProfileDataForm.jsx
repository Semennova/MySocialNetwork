import React from 'react';
import { Input, Textarea } from '../../../../assets/FormControls/FormControls';
import s from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form'

const ProfileDataForm = ({ handleSubmit, profile, error}) => {
    debugger
    return (
           <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>

            {error && 
            <div className={s.formSummeryError}>
                {error}
            </div>
            }

            <div>
                <b>Full name:</b>  <Field placeholder={'Full name'} name={'fullName'} component={Input} validate={[]}/>
            </div>

            <div>
                <b>Looking for job:</b> <Field placeholder={''} name={'lookingForAJob'} component={Input} type={'checkbox'} validate={[]}/>
            </div> 
            <div>
                <b>My professional skills:</b><Field placeholder={'Enter your professional skills'} name={'lookingForAJobDescription'} component={Textarea} validate={[]}/>
            </div>

            <div>
                <b>About me:</b><Field placeholder={'About me'} name={'aboutMe'} component={Textarea} validate={[]}/>
            </div>

            <div>
                    <div className={s.contacts}><b>Contacts:</b></div> {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contacts}>
                        <b>{key}:</b><Field placeholder={key} name={'contacts' + key} component={Input} validate={[]}/>
                    </div>
                })}
                </div>
            
        </form>     

    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm




