import { create } from 'zustand';

// Zustand Store
const useRecipeStore = create((set) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })),
    deleteRecipe: (recipeId) => set((state) => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
    })),
    setSearchTerm: (term) => set({ searchTerm: term }),
    filterRecipes: () => set((state) => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
}));

export default useRecipeStore;