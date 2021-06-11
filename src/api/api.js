import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers: {"APY-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}
})


export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true, headers: {'API-KEY': '952cf46c-d9ba-4e3b-95bd-624df91bb6ed'}})
        .then(response => response.data)
    },


    follow(userId) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },

    unfollow(userId) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI oject')
        return profileAPI.getProfile(userId)
    }
 
}

export const profileAPI = {
    getProfile(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },

    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },

    updateStatus(status) {
        return axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', { status: status }, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },

    savePhoto(photoFile){
        const formData = new FormData();

        formData.append("image", photoFile);

        return instance.put('https://social-network.samuraijs.com/api/1.0/profile/photo', formData, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}
        })
    },

    saveProfile(profile){

        return instance.put('https://social-network.samuraijs.com/api/1.0/profile', profile, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}
        })
    }

}

export const authAPI = {
    authMe(){
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },
    login(email, password, rememberMe = false){
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {email, password, rememberMe}, {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    },
    logout(){
        return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login', {withCredentials: true, headers: {"API-KEY" : "952cf46c-d9ba-4e3b-95bd-624df91bb6ed"}})
    }
}

// headers: {
//     'Content-Type': 'multipart/form-data'}



