import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Users, AlertCircle, Check } from 'lucide-react';
import { Recipe, BookingFormData } from '../types';

interface BookingFormProps {
  recipe: Recipe;
  onBack: () => void;
  onSubmit: (booking: BookingFormData) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ recipe, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    recipeId: recipe.id,
    recipeName: recipe.name,
    customerName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    numberOfPeople: 1,
    specialRequests: '',
    dietaryRestrictions: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Nut-Free',
    'Keto',
    'Low-Sodium'
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time';
    }

    if (formData.numberOfPeople < 1 || formData.numberOfPeople > 12) {
      newErrors.numberOfPeople = 'Number of people must be between 1 and 12';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleDietaryChange = (option: string, checked: boolean) => {
    const newRestrictions = checked
      ? [...formData.dietaryRestrictions, option]
      : formData.dietaryRestrictions.filter(r => r !== option);
    
    handleInputChange('dietaryRestrictions', newRestrictions);
  };

  const totalPrice = recipe.price * formData.numberOfPeople;

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Recipes</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recipe Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>Duration</span>
                </div>
                <span className="font-medium">{recipe.cookingTime} minutes</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span>Base Servings</span>
                </div>
                <span className="font-medium">{recipe.servings} people</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Price per person</span>
                <span className="font-medium">${recipe.price}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Number of people</span>
                <span className="font-medium">{formData.numberOfPeople}</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold text-orange-600 border-t pt-2">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Book Your Experience</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange('customerName', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.customerName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.customerName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Session Details */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Session Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="date"
                        min={minDate}
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          errors.preferredDate ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white ${
                          errors.preferredTime ? 'border-red-300' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of People *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        min="1"
                        max="12"
                        value={formData.numberOfPeople}
                        onChange={(e) => handleInputChange('numberOfPeople', parseInt(e.target.value) || 1)}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          errors.numberOfPeople ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.numberOfPeople && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.numberOfPeople}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Dietary Restrictions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dietaryOptions.map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.dietaryRestrictions.includes(option)}
                        onChange={(e) => handleDietaryChange(option, e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Any special requests or notes for the chef..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-6 border-t">
                <div className="text-sm text-gray-600">
                  <p>* Required fields</p>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <Check className="h-4 w-4" />
                  <span>Confirm Booking - ${totalPrice}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};