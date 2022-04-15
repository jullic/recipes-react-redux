import { useSelector } from "react-redux";
import Recipes from "../component/Recipes";

const FavouriteRecipesPage = () => {
    const {recipes} = useSelector(state => state.favourite);
    console.log(recipes);
    
    return (
        <Recipes title='Fivourite recipes' recipes={recipes}/>
    )
}

export default FavouriteRecipesPage;
