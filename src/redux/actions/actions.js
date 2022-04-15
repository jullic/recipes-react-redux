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
    dispatch({type: 'UPDATE_RANDOM_RECIPES', payload: {recipe, filter}});
}