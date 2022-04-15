import { getDataFromLocalStorage } from "../../services/localStorage";

const initialState = {
    recipes: getDataFromLocalStorage('isBookmark') ? getDataFromLocalStorage('isBookmark') : []
};

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKMARKS_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return state;
    }
};

export default bookmarkReducer;