import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import favouriteReducer from "./favouriteReducer";
import mainReducer from "./mainReducer";
import searchReducer from "./searchReducer";
import yourRecipes from "./yourRecipes";


const rootReducer = combineReducers({
    main: mainReducer,
    favourite: favouriteReducer,
    bookmarks: bookmarkReducer,
    your: yourRecipes,
    search: searchReducer
})

export default rootReducer;