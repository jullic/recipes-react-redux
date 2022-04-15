import { Route, Routes } from "react-router";
import Header from "./components/component/Header";
import YourRecipesPage from './components/pages/YourRecipesPage';
import BookmarksPage from './components/pages/BookmarksPage';
import FavouriteRecipesPage from './components/pages/FavouriteRecipesPage';
import RecipePage from "./components/pages/RecipePage";
import Page404 from "./components/pages/Page404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";


function App() {
  const {isSearch} = useSelector(state => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'LOAD'});
  }, []);
  return (
    <div className="App">
          <div className="app">
            <Header isSearch={isSearch}/>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path="/search" element={<SearchPage />}/>
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

