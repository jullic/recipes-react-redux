export const getDataFromLocalStorage = (filter) => {
    return JSON.parse(localStorage.getItem(filter));
}

export const setDataToLocalStorage = (filter, data) => {
    localStorage.setItem(filter, JSON.stringify(data));
}

export const checkRecipeInLocalStorage = (recipe, filter, changeableFilter) => {
    const recipes = getDataFromLocalStorage(filter) || [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id === recipe.id) {
            if (filter === changeableFilter) {
                recipes.splice(i, 1);
                setDataToLocalStorage(filter, recipes);
                return;
            }
            recipes[i][changeableFilter] = !recipes[i][changeableFilter];
            setDataToLocalStorage(filter, recipes);
            return;
        }
    }
    if (filter === changeableFilter) {
        recipes.push({...recipe, [changeableFilter]: !recipe[changeableFilter]});
    }
    setDataToLocalStorage(filter, recipes);
}