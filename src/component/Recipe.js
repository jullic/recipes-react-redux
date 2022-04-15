import React from 'react'
import RecipeHeader from './RecipeHeader';
import RecipeMain from './RecipeMain';
import RecipeDescr from './ResipeDescr';

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
