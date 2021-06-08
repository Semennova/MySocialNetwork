import {usersAPI} from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    // portionSize: 0
}


const usersReducer  = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if(u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if(u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u
                // })
            }
        case SET_USERS:
            return{
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
            ...state,
            totalCount: action.count
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userId] : 
                state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: 
            return state
    }
}


export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowSuccess = (userId) => ({
    type:  UNFOLLOW,
    userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setTotalCount = (count) => ({
    type: SET_TOTAL_COUNT,
    count
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount))
 
    }
}

export const follow = (userId) => {
 return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await usersAPI.follow(userId)
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
    dispatch(toggleFollowingProgress(false, userId))
     
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
       dispatch(toggleFollowingProgress(true, userId))
       let response = await usersAPI.unfollow(userId)
               if(response.data.resultCode === 0){
                   dispatch(unfollowSuccess(userId))
               }
       dispatch(toggleFollowingProgress(false, userId))
       
       }
   }






export default usersReducer; 