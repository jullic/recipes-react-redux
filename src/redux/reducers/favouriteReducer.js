import { getDataFromLocalStorage } from "../../services/localStorage";

const initialState = {
    recipes: getDataFromLocalStorage('isFavourite') ? getDataFromLocalStorage('isFavourite') : []
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FAVOURITE_RECIPES': 
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return state;
    }
};

export default favouriteReducer;