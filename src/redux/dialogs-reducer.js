const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    messages: [
        {id: 1, message: "Hi!"}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hey there'},
        {id: 5, message: 'Good morning!'}
    ],
    dialogs: [
        {id: 1, name: 'Anka'}, 
        {id: 2, name: 'MicStuck'},
        {id: 3, name: 'Gabster'},
        {id: 4, name: 'Gussi'},
        {id: 5, name: 'Valera'}
    ]
}


const dialogsReducer  = (state = initialState, action) => {
    // let stateCopy;
   
    switch (action.type) {
        
        case ADD_MESSAGE: 
            let newMessage = action.newMsgText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}],
            }
        
        default: 
            return state;
    }

}


export const AddMessageActionCreator = (newMsgText) => ({
    type: ADD_MESSAGE,
    newMsgText
})



export default dialogsReducer