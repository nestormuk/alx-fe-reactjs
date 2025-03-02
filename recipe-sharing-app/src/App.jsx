import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
const App = () => {
    return (
        <Router>
          <SearchBar />
            <Routes>
                <Route path="/" element={<AddRecipeForm />} />
                <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
            </Routes>
        </Router>
    );
};

export default App;