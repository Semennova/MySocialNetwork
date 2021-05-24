import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navBarReducer from './navbar-reducer';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", likeCount: 19}, 
                {id: 2, message: "It's my first post", likeCount: 30},
                {id: 3, message: "Hey you!!", likeCount: 30},
                {id: 4, message: "Ain't no sunshine when she's gone", likeCount: 30} 
            ],
            newPostText: 'it-kamasutra'
        },
    
        dialogsPage: {
            
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
        ],
        
        newMessageText: ''
        
        }, 
        navbarElements: {
            navbar: [
                {id: 1, name: 'Anka'}, 
                {id: 2, name: 'MicStuck'},
                {id: 3, name: 'Gabster'}
            ]
        }
      
    },

    _callSubscriber() {
        console.log('State is changed')
    },

    getState(){
      
        return this._state;
    },

    subscribe(obsever) {
        this._callSubscriber = obsever; //pattern observer
    },

    dispatch(action) { 

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.navbarElements = navBarReducer(this._state.navbarElements, action);


        this._callSubscriber(this._state)

        }

    }



    






window.store = store;

export default store;


 