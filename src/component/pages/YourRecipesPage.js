import { useSelector } from "react-redux";
import Recipes from "../Recipes";

function YourRecipesPage() {
    return (
        <Recipes title="Your recipes" recipes={[]}/>
    )
}

export default YourRecipesPage;
