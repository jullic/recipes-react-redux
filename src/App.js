import { Route, Routes } from "react-router";
import Header from "./component/Header";
import YourRecipesPage from './component/pages/YourRecipesPage';
import BookmarksPage from './component/pages/BookmarksPage';
import FavouriteRecipesPage from './component/pages/FavouriteRecipesPage';
import RecipePage from "./component/pages/RecipePage";
import Page404 from "./component/pages/Page404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MainPage from "./component/pages/MainPage";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'LOAD'});
  }, []);
  return (
    <div className="App">
          <div className="app">
            <Header/>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/your" element={<YourRecipesPage />} />
              <Route path="/bookmarks" element={<BookmarksPage />} />
              <Route path="/favourites" element={<FavouriteRecipesPage />} />
              <Route path="/recipe/:recipeId" element={<RecipePage />} />
              <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    </div>
  );
}
export default App;

