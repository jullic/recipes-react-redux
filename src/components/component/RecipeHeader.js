import React from 'react'

const RecipeHeader = () => {
    return (
        <div className="recipe__header">
            <div className="recipe__header-btns">
                <button className="recipe__header-btn btn btn-hover btn-hover_black">
                    <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.4528 4.21018C27.7524 3.50949 26.9209 2.95365 26.0056 2.57442C25.0904 2.19519 24.1094 2 23.1187 2C22.128 2 21.147 2.19519 20.2318 2.57442C19.3165 2.95365 18.485 3.50949 17.7846 4.21018L16.3311 5.66368L14.8776 4.21018C13.4629 2.7955 11.5442 2.00073 9.54353 2.00073C7.54286 2.00073 5.62413 2.7955 4.20945 4.21018C2.79476 5.62487 2 7.54359 2 9.54426C2 11.5449 2.79476 13.4637 4.20945 14.8783L5.66295 16.3318L16.3311 27L26.9993 16.3318L28.4528 14.8783C29.1535 14.178 29.7093 13.3464 30.0885 12.4312C30.4678 11.5159 30.663 10.535 30.663 9.54426C30.663 8.55356 30.4678 7.57258 30.0885 6.65734C29.7093 5.7421 29.1535 4.91054 28.4528 4.21018V4.21018Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </button>
                <button className="recipe__header-btn btn btn-hover btn-hover_black">
                    <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4444 27L11.7222 20.0556L2 27V4.77778C2 4.04107 2.29266 3.33453 2.81359 2.81359C3.33453 2.29266 4.04107 2 4.77778 2H18.6667C19.4034 2 20.1099 2.29266 20.6309 2.81359C21.1518 3.33453 21.4444 4.04107 21.4444 4.77778V27Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </button>
                <button className="recipe__header-btn recipe__header-btn-edit">Edit</button>
            </div>
            <div className="recipe__header-btn recipe__header-back-btn">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 14L14 22L22 30" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30 22H14" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
            </div>
        </div>
    )
}

export default RecipeHeader;
