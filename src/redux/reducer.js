import axios from 'axios';

let initialState = {
    user: {},
    loading: false
}

const SET_USER = 'SET_USER'
const USER_SESSION = 'USER_SESSION'

export function setUser(user){
    return {
        type: SET_USER,
        payload: user
    }
}


export function getSession(){
    let user = axios.get(`/auth/userSession`)
    return{
        type: USER_SESSION,
        payload: user.data
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case SET_USER:
            return {...state, user: payload};
        case USER_SESSION + '_PENDING':
            return {...state, loading: true}    
        case USER_SESSION + '_FULFILL':
            return {user: payload, loading: false}
        case USER_SESSION + '_REJECTED':
            return {...state, loading: true}
        default:
            return state
    }
}