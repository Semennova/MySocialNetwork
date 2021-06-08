import { AddMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
// import { withAuthRedirect } from '../../../src/hoc/withAuthRedirect'
import { compose } from 'redux'





const mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
       

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMsgText) => {
            dispatch(AddMessageActionCreator(newMsgText))
        }
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Dialogs)

