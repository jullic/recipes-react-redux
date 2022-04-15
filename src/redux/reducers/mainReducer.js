const initialState = {
    recipes: [],
    loadingStatus: 'idle',
    isFirstLoadingMainPage: true,
    numberOfUploadedRecipes: 1
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRST_LOADING_MAIN_PAGE':
            return {
                ...state,
                isFirstLoadingMainPage: false
            }
        case 'ADD_RANDOM_RECIPES_FETCHING': 
            return {
                ...state,
                loadingStatus: 'loading',
            }
            case 'ADD_RANDOM_RECIPES_FETCHED': 
            
            return {
                ...state,
                loadingStatus: 'idle',
                recipes: [...state.recipes, ...action.payload.map(recipe => ({...recipe, isFavourite: false, isBookmark: false}))]
            }
        case 'ADD_RANDOM_RECIPES_FETCHING_ERROR': 
            return {
                ...state,
                loadingStatus: 'error'
            }
        default:
            return state;
    }
};

export default mainReducer;