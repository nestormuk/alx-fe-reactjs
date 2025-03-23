import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    setRecipeList(recipes);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="text-right mb-4">
        <Link
          to="/add-recipe"
          className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition"
        >
          Add New Recipe
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeList.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
