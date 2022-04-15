import { checkRecipeInLocalStorage, getDataFromLocalStorage } from "../../services/localStorage";

export const addRandomRecipes = (getRandomRecipes, numberOfUploadedRecipes) => (dispatch) => {
    dispatch({type: 'ADD_RANDOM_RECIPES_FETCHING'});
    getRandomRecipes(numberOfUploadedRecipes)
        .then(result => dispatch({type: 'ADD_RANDOM_RECIPES_FETCHED', payload: result.recipes}))
        .catch(err => dispatch({type: 'ADD_RANDOM_RECIPES_FETCHING_ERROR'}))
};

export const firstLoadingMainPage = () => {
    return {
        type: 'FIRST_LOADING_MAIN_PAGE'
    }
};

export const toggleFiterBtn = (recipe, filter) => (dispatch) => {
    checkRecipeInLocalStorage(recipe, 'isFavourite', filter);
    checkRecipeInLocalStorage(recipe, 'isBookmark', filter);
    dispatch({type: 'UPDATE_RANDOM_RECIPES', payload: {recipe, filter}});
    dispatch({type: 'UPDATE_FAVOURITE_RECIPES', payload: getDataFromLocalStorage('isFavourite')});
    dispatch({type: 'UPDATE_BOOKMARKS_RECIPES', payload: getDataFromLocalStorage('isBookmark')});
}

export const changeInputValue = (value) => {
    return {
        type: 'CHANGE_INPUT_VALUE',
        payload: value
    }
};

export const addRecipesByName = (getRecipesByName, numberOfUploadedRecipes, name) => (dispatch) => {
    dispatch({type: 'ADD_RECIPES_BY_NAME_FETCHING'});
    getRecipesByName(name, numberOfUploadedRecipes)
        .then(result => dispatch({type: 'ADD_RECIPES_BY_NAME_FETCHED', payload: result.results}))
        .catch(err => dispatch({type: 'ADD_RECIPES_BY_NAME_FETCHING_ERROR'}))
};