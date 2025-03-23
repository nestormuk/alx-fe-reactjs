import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setError("All fields are required!");
      return;
    }

    const ingredientList = ingredients.split("\n").filter((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("At least two ingredients are required.");
      return;
    }

    const stepList = steps.split("\n").filter((item) => item.trim());

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: `${title} - A new delicious recipe!`,
      image: "https://via.placeholder.com/150",
      ingredients: ingredientList,
      instructions: stepList,
    };

    onAddRecipe(newRecipe); // Pass data to parent component
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients (one per line)</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="E.g., 1 cup flour\n2 eggs"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps (one per line)</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            rows="4"
            placeholder="Step 1: Mix the ingredients\nStep 2: Bake for 30 minutes"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
