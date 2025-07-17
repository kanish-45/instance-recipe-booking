import React from 'react';
import { Clock, Users, Star, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onBook: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onBook }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs font-medium text-gray-700">{recipe.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
            {recipe.name}
          </h3>
          <span className="text-lg font-bold text-orange-600">${recipe.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.cookingTime}min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <ChefHat className="h-4 w-4" />
            <span className="text-xs">{recipe.cuisine}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {recipe.reviews} reviews
          </div>
          <button 
            onClick={() => onBook(recipe)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Book Experience
          </button>
        </div>
      </div>
    </div>
  );
};