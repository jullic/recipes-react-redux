const _api2 = '6852f3a58c6248f8839ba2d90de63e19';
const _api1 = '85ac0310e6b443a6a2c4d8d73723ec25';

export const getRandomRecipes = async (numberOfUploadedRecipes = 1) => {
    return await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${_api1}&number=${numberOfUploadedRecipes}`).then(res => res.json());
}; 

export const getRecipesByName = async (name, numberOfUploadedRecipes = 1, offset = 0) => {
    return await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${_api1}&query=${name}&maxFat=25&number=${numberOfUploadedRecipes}&offset=${offset}`).then(res => res.json());
}; 




export default getRandomRecipes;