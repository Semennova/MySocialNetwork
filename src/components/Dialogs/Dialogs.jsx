import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from './DialogItem/DialogItem'
import Message from './Message/Message'
// import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../assets/FormControls/FormControls'
import { maxLengthCreator, required } from '../../utils/validators'


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs
    .map(dialog => <DialogItems name={dialog.name} id={dialog.id} />)
    
    let messagesElements = state.messages
    .map(message => <Message message={message.message} id={message.id} />)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
       
    }

    // if(!props.isAuth) {
    //     return <Redirect to='/login' />
    // }

    return (
        
    <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogElements}
        </div>

        <div className={s.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>  
   
    </div>
    )
}

const maxLength10 = maxLengthCreator(10)

export const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field validate={[required, maxLength10]} name='newMessageText' component={Textarea} placeholder='Enter your message'/>
        <button className={s.btn} >Add Message</button>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs