import {
    EDIT_BOOK,
} from "./ActionTypes";


export const editBook= (payload) => {
    return {
        type: EDIT_BOOK,
        payload
    };
};