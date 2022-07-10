import {
    ADD_POST,
    ADD_POSTS,
    SET_ERROR,
    SET_LOADING
} from './posts-action';


const initialState = {
    status: '',
    list: [],
    error: null,
    totalPost: 0,
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                list: [...state.list, action.payload],
                totalPost: state.list.length + 1,
            }
        case ADD_POSTS:
            return {
                ...state,
                list: action.payload,
                status: 'addied',
            }
        case SET_LOADING:
            return {
                ...state,
                status:'loading',
            }
        case SET_ERROR:
            return {
                ...state,
                error:'error',
            }
        default:
            return state;
    }
}