import { profileAPI, usersAPI } from '../api/api';
import {stopSubmit} from 'redux-form'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "Hi! How are you?", likeCount: 19}, 
        {id: 2, message: "It's my first post", likeCount: 30},
        {id: 3, message: "Hey you!!", likeCount: 30},
        {id: 4, message: "Ain't no sunshine when she's gone", likeCount: 30} 
    ],
    profile: null,
    status: ''
}


const profileReducer  = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
        let newPost = {
            id: 5,
            message: action.newPostText,
            likeCount: 0
        }
        return {
            ...state,
            posts: [newPost, ...state.posts],
        };
    }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
    

            default: 
            return state
    }
}


export const AddPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})


export const getUserProfile = (userId) => async(dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async(dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async(dispatch) => {
   let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

}

export const savePhoto = (file) => async(dispatch) => {
    let response = await profileAPI.savePhoto(file)
             if(response.data.resultCode === 0) {
             dispatch(savePhotoSuccess(response.data.data.photos))
         }
 
 }

 export const saveProfile = (profile) => async(dispatch, getState) => {
     const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)
             if(response.data.resultCode === 0) {
              dispatch(getUserProfile(userId))
         } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
             dispatch(stopSubmit("edit-profile", {_error: message} 
             ));
         }
 
 }

export default profileReducer;

//response.data.messages[0]