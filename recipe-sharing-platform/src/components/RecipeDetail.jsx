import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipes from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl font-semibold mt-10">Recipe not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={recipe.image} alt={recipe.title} className="w-full rounded-lg shadow-md" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-600 mt-2">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Cooking Instructions</h2>
      <ol className="list-decimal list-inside mt-2 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetail;
