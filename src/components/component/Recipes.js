import RecipesRecipe from "./RecipesRecipe";

const Recipes = (props) => {

    console.log(props.isSearch);
    
    return (
        <main className="recipes">
            <div className="container">
                <div className="recipes__wrapper">
                    <h1 className="recipes__title">{props.title}</h1>
                    <div className="recipes__grid">
                        {props.recipes && props.recipes.map(recipe => <RecipesRecipe key={recipe.id} recipe={recipe}/>)}
                        {(props.loadingStatus && props.loadingStatus === 'loading') ? new Array(props.numberOfUploadedRecipes).fill().map((item, i) => <RecipesRecipe recipes={null} key={i} isLoading={true}/> ) : null}
                    </div>
                    {props.loadMoreBtn ? <button disabled={props.loadingStatus === 'loading'} onClick={props.isSearch ? props.addRecipesByName : props.addRandomRecipes} className="recipes__main-btn">Load more</button> : null}
                </div>
            </div>
        </main>
    )
}

export default Recipes;
