import { useDispatch, useSelector } from "react-redux";
import { addRecipesByName } from "../../redux/actions/actions";
import { getRecipesByName } from "../../services/recipesApi";
import Recipes from "../component/Recipes";

const SearchPage = () => {
    const {search, recipes, numberOfUploadedRecipes, isSearch, offset} = useSelector(state => state.search);
    
    const dispatch = useDispatch();

    const onAddRecipesByName = () => {
        dispatch(addRecipesByName(getRecipesByName, numberOfUploadedRecipes, search, offset));
    };

    return (
        <Recipes title={`Recipes on request: "${search}"`} addRecipesByName={onAddRecipesByName} loadMoreBtn={true} recipes={recipes} isSearch={isSearch} />
    )
}

export default SearchPage;

