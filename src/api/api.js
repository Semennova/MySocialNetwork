import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"APY-KEY" : "f94f7938-acb5-4040-a437-b012bb3a9897"}
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },

    follow(userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {withCredentials: true, headers: {"API-KEY" : "f94f7938-acb5-4040-a437-b012bb3a9897"}})
    },

    unfollow(userId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true, headers: {"API-KEY" : "f94f7938-acb5-4040-a437-b012bb3a9897"}})
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI oject')
        return profileAPI.getProfile(userId)
    }
 
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', { status: status }, {withCredentials: true, headers: {"API-KEY" : "f94f7938-acb5-4040-a437-b012bb3a9897"}})
    }
}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}



