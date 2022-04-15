import { useDispatch, useSelector } from "react-redux";
import { addRecipesByName } from "../../redux/actions/actions";
import { getRecipesByName } from "../../services/recipesApi";
import Recipes from "../component/Recipes";

const SearchPage = () => {
    const {search, recipes, numberOfUploadedRecipes, isSearch} = useSelector(state => state.search);
    
    const dispatch = useDispatch();

    const onAddRecipesByName = () => {
        dispatch(addRecipesByName(getRecipesByName, numberOfUploadedRecipes, search));
    };

    return (
        <Recipes title={`Recipes on request: "${search}"`} addRecipesByName={onAddRecipesByName} loadMoreBtn={true} recipes={recipes} isSeach={isSearch} />
    )
}

export default SearchPage;

