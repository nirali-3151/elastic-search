import {
    EDIT_BOOK
} from '../Actions/ActionTypes';

const initialState = {
    book:[]
}

function UserReducer(state = initialState, action) {

    switch (action.type) {
        case EDIT_BOOK: {
            return {
                ...state,
                book: action.payload
            }
        }

        default:
            return state
    }

}

export default UserReducer

