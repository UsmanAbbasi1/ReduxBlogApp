import _ from 'lodash';

export default function(state, action){
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(state.payload, 'id');
        default:
            retutn state;
    }
}