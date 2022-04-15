import { useDispatch } from "react-redux";
import { toggleFiterBtn } from "../../redux/actions/actions";
import spinner from './../../resources/spinner.gif'
const RecipesRecipe = (props) => {
    const {recipe} = props;
    const dispatch = useDispatch();

    if (props.isLoading) {
        return (
            <div className="recipes__grid-item">
                <img className='spinner' src={spinner} alt="spinner" />
            </div>
        )
    }


    const onToggleFiterBtn = (filter) => {
        dispatch(toggleFiterBtn(recipe, filter));
    };

    return (
        <div className="recipes__grid-item">
            <div className="recipes__grid-item-btns">
                <button onClick={() => onToggleFiterBtn('isFavourite')} className={`recipes__grid-item-btn btn btn-hover like-btn${recipe.isFavourite ? ' active' : ''}`}>
                    <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.4528 4.21018C27.7524 3.50949 26.9209 2.95365 26.0056 2.57442C25.0904 2.19519 24.1094 2 23.1187 2C22.128 2 21.147 2.19519 20.2318 2.57442C19.3165 2.95365 18.485 3.50949 17.7846 4.21018L16.3311 5.66368L14.8776 4.21018C13.4629 2.7955 11.5442 2.00073 9.54353 2.00073C7.54286 2.00073 5.62413 2.7955 4.20945 4.21018C2.79476 5.62487 2 7.54359 2 9.54426C2 11.5449 2.79476 13.4637 4.20945 14.8783L5.66295 16.3318L16.3311 27L26.9993 16.3318L28.4528 14.8783C29.1535 14.178 29.7093 13.3464 30.0885 12.4312C30.4678 11.5159 30.663 10.535 30.663 9.54426C30.663 8.55356 30.4678 7.57258 30.0885 6.65734C29.7093 5.7421 29.1535 4.91054 28.4528 4.21018V4.21018Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button onClick={() => onToggleFiterBtn('isBookmark')} className={`recipes__grid-item-btn btn btn-hover btn-bookmark${recipe.isBookmark ? ' active' : ''}`}>
                    <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4444 27L11.7222 20.0556L2 27V4.77778C2 4.04107 2.29266 3.33453 2.81359 2.81359C3.33453 2.29266 4.04107 2 4.77778 2H18.6667C19.4034 2 20.1099 2.29266 20.6309 2.81359C21.1518 3.33453 21.4444 4.04107 21.4444 4.77778V27Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <img src={recipe.image} alt={recipe.title} className="recipes__grid-item-img" />
            <h3 className="recipes__grid-item-title">{recipe.title.length > 30 ? recipe.title.slice(0, 30).trim() + '...' : recipe.title}</h3>
        </div>
    )
}

export default RecipesRecipe;
