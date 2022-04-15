import RecipesRecipe from "./RecipesRecipe";

const Recipes = (props) => {

    return (
        <main className="recipes">
            <div className="container">
                <div className="recipes__wrapper">
                    <h1 className="recipes__title">{props.title}</h1>
                    <div className="recipes__grid">
                        {props.recipes && props.recipes.map(recipe => <RecipesRecipe key={recipe.id} recipe={recipe}/>)}
                    </div>
                    {props.loadMoreBtn ? <button onClick={props.addRandomRecipes} className="recipes__main-btn">Load more</button> : null}
                </div>
            </div>
        </main>
    )
}

export default Recipes;
