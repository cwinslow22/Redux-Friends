import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, FRIENDS_SAVED, SAVING_FRIENDS } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetchingFriends: true } );
        case ERROR:
            return Object.assign({}, state, { 
                fetchingFriends: false,
                error: action.payload
             } );
        case FRIENDS_FETCHED:
            return Object.assign({}, state, { 
                friends: [...state.friends, ...action.payload],
                fetchingFriends: false,
                friendsFetched: true
             } );
        case SAVING_FRIENDS:
             return Object.assign({}, state, {
                savingFriends: true
             });
        case FRIENDS_SAVED:
             return Object.assign({}, state, {
                 friends: [...action.payload],
                 savingFriends: false,
                 friendsSaved: true
             })
        default:
            return state;
    }
}