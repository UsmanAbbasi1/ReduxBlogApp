import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions/index";

export default function(state = {}, action){
    switch(action.type) {
        case FETCH_POSTS:
            // get "id" from every item in first param passed,
            // create new object(key: value) and make it the key for the new object
            // this way, we will get object containing "key:value" pairs where keys will be "ids" and value will be each item in action.payload.data
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            //        Do this
            // const newState = {...state};
            // newState[action.payload.data.id] = action.payload.data;
            //          OR
            return {...state, [action.payload.data.id]: action.payload.data};
        case DELETE_POST:
            // omit() deletes the record from object with given key.
            // Here action.payload contain id of the deleted post
            return _.omit(state, action.payload);
            // if our state had list instead of object containing he list,
            // then we would do something like this:
            // return _.reject(state, post => post.id === action.payload );
        default:
            return state;
    }
}