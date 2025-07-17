import React, { useState } from 'react';
import { Header } from './components/Header';
import { RecipeList } from './components/RecipeList';
import { BookingForm } from './components/BookingForm';
import { BookingConfirmation } from './components/BookingConfirmation';
import { recipes } from './data/recipes';
import { Recipe, BookingFormData, Booking } from './types';

type AppState = 'recipes' | 'booking' | 'confirmation';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const handleBookRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setCurrentState('booking');
  };

  const handleBookingSubmit = (bookingData: BookingFormData) => {
    // In a real app, this would make an API call
    const booking: Booking = {
      ...bookingData,
      id: `BK-${Date.now()}`,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      totalPrice: (selectedRecipe?.price || 0) * bookingData.numberOfPeople
    };
    
    setConfirmedBooking(booking);
    setCurrentState('confirmation');
  };

  const handleBackToRecipes = () => {
    setCurrentState('recipes');
    setSelectedRecipe(null);
    setConfirmedBooking(null);
  };

  const handleBackFromBooking = () => {
    setCurrentState('recipes');
    setSelectedRecipe(null);
  };

  const getCurrentPageName = () => {
    switch (currentState) {
      case 'booking': return 'booking';
      case 'confirmation': return 'confirmation';
      default: return 'recipes';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={getCurrentPageName()} />
      
      {currentState === 'recipes' && (
        <RecipeList 
          recipes={recipes} 
          onBook={handleBookRecipe}
        />
      )}
      
      {currentState === 'booking' && selectedRecipe && (
        <BookingForm
          recipe={selectedRecipe}
          onBack={handleBackFromBooking}
          onSubmit={handleBookingSubmit}
        />
      )}
      
      {currentState === 'confirmation' && confirmedBooking && (
        <BookingConfirmation
          booking={confirmedBooking}
          onBackToRecipes={handleBackToRecipes}
        />
      )}
    </div>
  );
}

export default App;