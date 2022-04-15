import { useSelector } from "react-redux";
import Recipes from "../component/Recipes";

const BookmarksPage = () => {
    const {recipes} = useSelector(state => state.bookmarks);
    console.log(recipes);
    
    return (
        <Recipes title='Bookmarks' recipes={recipes}/>
    )
}

export default BookmarksPage;
