import React, { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <a
              href={`#/recipe/${recipe.id}`}
              className="mt-4 inline-block text-blue-500 hover:text-blue-700"
            >
              View Recipe →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;