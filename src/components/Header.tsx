import React from 'react';
import { ChefHat, Calendar, Star } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Instance Recipe</h1>
              <p className="text-xs text-gray-500">Premium Cooking Experiences</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#recipes" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'recipes' 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Star className="h-4 w-4" />
              <span>Recipes</span>
            </a>
            <a 
              href="#bookings" 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'bookings' 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>My Bookings</span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};