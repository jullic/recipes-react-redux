const initialState = {
    recipes: [],
    search: '',
    offset: 0,
    isSearch: false,
    loadingStatus: 'idle',
    loadingPage: 'idle',
    numberOfUploadedRecipes: 1
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_VALUE': 
            return {
                ...state,
                search: action.payload,
                isSearch: action.payload === '' ? false : true
            }
        case 'NEW_SEARCH': 
            return {
                ...state,
                recipes: []
            }
        case 'ADD_RECIPES_BY_NAME_FETCHING': 
        console.log('loading');
            return {
                ...state,
                loadingStatus: 'loading',
                loadingPage: 'loading',
                offset: state.offset + state.numberOfUploadedRecipes,
            }
        case 'ADD_RECIPES_BY_NAME_FETCHED': 
        console.log(action.payload);
        
            return {
                ...state,
                loadingStatus: 'idle',
                loadingPage: 'idle',
                recipes: [...state.recipes, ...action.payload.map(recipe => ({...recipe, isFavourite: false, isBookmark: false}))]
            }
        case 'ADD_RECIPES_BY_NAME_FETCHING_ERROR': 
        console.log('err');
        
            return {
                ...state,
                loadingStatus: 'error',
                loadingPage: 'error',
            }
        default:
            return state;
    }
};

export default searchReducer;