import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    
    return (
        <div>
            {filteredRecipes.map(recipe => (
                <div key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <Link to={`/recipe/${recipe.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;