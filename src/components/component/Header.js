import { Link, NavLink } from "react-router-dom";

const Header = (props) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to='/' className="header__logo" style={{textDecoration: 'none'}}>Recipe</Link>
                    <div className="header__search">
                        <input type="text" className="header__input" />
                        <Link to={props.isSearch ? '/search' : '/'} className="header__input-search-btn">
                            <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1111 24.2222C19.2476 24.2222 24.2222 19.2476 24.2222 13.1111C24.2222 6.97461 19.2476 2 13.1111 2C6.97461 2 2 6.97461 2 13.1111C2 19.2476 6.97461 24.2222 13.1111 24.2222Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M27.0002 27L20.9585 20.9583" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="header__menu" >
                        <div className="header__btns">
                            <NavLink to='/your' className="header__btn btn btn-hover">
                                <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2H10.3333C11.8068 2 13.2198 2.58532 14.2617 3.62718C15.3036 4.66905 15.8889 6.08213 15.8889 7.55556V27C15.8889 25.8949 15.4499 24.8351 14.6685 24.0537C13.8871 23.2723 12.8273 22.8333 11.7222 22.8333H2V2Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M29.7776 2H21.4442C19.9708 2 18.5577 2.58532 17.5159 3.62718C16.474 4.66905 15.8887 6.08213 15.8887 7.55556V27C15.8887 25.8949 16.3277 24.8351 17.1091 24.0537C17.8905 23.2723 18.9503 22.8333 20.0553 22.8333H29.7776V2Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </NavLink>
                            <NavLink to='/bookmarks' className="header__btn btn btn-hover">
                                <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4444 27L11.7222 20.0556L2 27V4.77778C2 4.04107 2.29266 3.33453 2.81359 2.81359C3.33453 2.29266 4.04107 2 4.77778 2H18.6667C19.4034 2 20.1099 2.29266 20.6309 2.81359C21.1518 3.33453 21.4444 4.04107 21.4444 4.77778V27Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </NavLink>
                            <NavLink to='/favourites' className="header__btn btn btn-hover">
                                <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.4528 4.21018C27.7524 3.50949 26.9209 2.95365 26.0056 2.57442C25.0904 2.19519 24.1094 2 23.1187 2C22.128 2 21.147 2.19519 20.2318 2.57442C19.3165 2.95365 18.485 3.50949 17.7846 4.21018L16.3311 5.66368L14.8776 4.21018C13.4629 2.7955 11.5442 2.00073 9.54353 2.00073C7.54286 2.00073 5.62413 2.7955 4.20945 4.21018C2.79476 5.62487 2 7.54359 2 9.54426C2 11.5449 2.79476 13.4637 4.20945 14.8783L5.66295 16.3318L16.3311 27L26.9993 16.3318L28.4528 14.8783C29.1535 14.178 29.7093 13.3464 30.0885 12.4312C30.4678 11.5159 30.663 10.535 30.663 9.54426C30.663 8.55356 30.4678 7.57258 30.0885 6.65734C29.7093 5.7421 29.1535 4.91054 28.4528 4.21018V4.21018Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <button className="header__menu-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
