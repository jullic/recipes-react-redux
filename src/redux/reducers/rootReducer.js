import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import favouriteReducer from "./favouriteReducer";
import mainReducer from "./mainReducer";
import yourRecipes from "./yourRecipes";


const rootReducer = combineReducers({
    main: mainReducer,
    favourite: favouriteReducer,
    bookmarks: bookmarkReducer,
    your: yourRecipes,
})

export default rootReducer;