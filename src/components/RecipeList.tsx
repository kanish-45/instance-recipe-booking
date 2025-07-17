import React, { useState, useMemo } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import { Recipe } from '../types';
import { RecipeCard } from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
  onBook: (recipe: Recipe) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes, onBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const cuisines = useMemo(() => {
    return Array.from(new Set(recipes.map(recipe => recipe.cuisine))).sort();
  }, [recipes]);

  const difficulties = ['Easy', 'Medium', 'Hard'];

  const filteredAndSortedRecipes = useMemo(() => {
    let filtered = recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = !selectedCuisine || recipe.cuisine === selectedCuisine;
      const matchesDifficulty = !selectedDifficulty || recipe.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCuisine && matchesDifficulty;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'time':
          return a.cookingTime - b.cookingTime;
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [recipes, searchTerm, selectedCuisine, selectedDifficulty, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Premium Cooking Experiences
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Book exclusive cooking sessions with world-class chefs and learn to create extraordinary dishes
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Cuisines</option>
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="time">Sort by Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredAndSortedRecipes.length} of {recipes.length} recipes
        </p>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onBook={onBook}
          />
        ))}
      </div>

      {filteredAndSortedRecipes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No recipes found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};