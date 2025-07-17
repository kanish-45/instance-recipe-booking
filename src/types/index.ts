export interface Recipe {
  id: string;
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number;
  servings: number;
  cuisine: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  price: number;
  rating: number;
  reviews: number;
}

export interface BookingFormData {
  recipeId: string;
  recipeName: string;
  customerName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  numberOfPeople: number;
  specialRequests: string;
  dietaryRestrictions: string[];
}

export interface Booking extends BookingFormData {
  id: string;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice: number;
}