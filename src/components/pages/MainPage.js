import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandomRecipes, firstLoadingMainPage } from "../../redux/actions/actions";
import getRandomRecipes from "../../services/recipesApi";
import Recipes from "../component/Recipes";

const MainPage = () => {
    const {recipes, isFirstLoadingMainPage, numberOfUploadedRecipes} = useSelector(state => state.main);
    const dispatch = useDispatch();
    console.log(recipes);
    

    useEffect(() => {
        if (isFirstLoadingMainPage) {
            dispatch(addRandomRecipes(getRandomRecipes, numberOfUploadedRecipes));
            dispatch(firstLoadingMainPage());
            console.log(recipes);
        }
        
    }, []);

    return (
        <Recipes title='Random recipes' loadMoreBtn={true} recipes={recipes}/>
    )
}

export default MainPage;

