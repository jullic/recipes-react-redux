import React from 'react'
import RecipeHeader from './component/RecipeHeader';
import RecipeMain from './component/RecipeMain';
import RecipeDescr from './component/ResipeDescr';

const Recipe = () => {
    return (
        <main className="recipe">
            <div className="container">
                <div className="recipe__wrapper">
                    <RecipeHeader/>
                    <RecipeMain/>
                    <RecipeDescr/>
                </div>
            </div>
        </main>
    )
}

export default Recipe;
