import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  return (
      <Router>
          <SearchBar />
          <Routes>
              <Route path="/" element={<><AddRecipeForm /><RecipeList /><FavoritesList /><RecommendationsList /></>} />
              <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
      </Router>
  );
};

export default App;