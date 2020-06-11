import axios from 'axios';

let initialState = {
    user: {},
    loading: false,
    isLoggedIn: false
}

const SET_USER = 'SET_USER'
const USER_SESSION = 'USER_SESSION'
const LOGGEDIN = 'LOGGEDIN'
const LOGGEDOUT = 'LOGGEDOUT'

export function setUser(user){
    // console.log('setUser',user)
    return {
        type: SET_USER,
        payload: user
    }
}


export function getSession(){
    let user = axios.get(`/auth/userSession`)
    // console.log('session', user)
    return{
        type: USER_SESSION,
        payload: user
    }
}

export function loggedIn(){
    return {
        type: LOGGEDIN,
        payload: {isLoggedIn: true}
    }
}

export function logOut(){
    return{
        type: LOGGEDOUT,
        payload: {isLoggedIn: false}
    }
}


export default function reducer(state = initialState, action){
    const {type, payload} = action;
// console.log('reducer', action)
    switch(type){
        case SET_USER:
            return {...state, user: payload, isLoggedIn: true};
        case USER_SESSION + '_PENDING':
            return {...state, loading: true}    
        case USER_SESSION + '_FULFILLED':
            return {...state, user: payload.data, isLoggedIn: true, loading: false}
        case USER_SESSION + '_REJECTED':
            return {...state, loading: false}
        case LOGGEDIN: 
            return  {...state, isLoggedIn: true}  
        case LOGGEDOUT: 
            return  {...state, isLoggedIn: false}      
        default:
            return state
    }
}

