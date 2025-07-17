import React from 'react';
import { CheckCircle, Calendar, Clock, Users, Mail, Phone, ArrowLeft, Download } from 'lucide-react';
import { Booking } from '../types';

interface BookingConfirmationProps {
  booking: Booking;
  onBackToRecipes: () => void;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ 
  booking, 
  onBackToRecipes 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600">
          Your cooking experience has been successfully booked
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Booking Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Details</h2>
            
            <div className="space-y-6">
              {/* Recipe Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Recipe Experience</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{booking.recipeName}</h4>
                  <p className="text-sm text-gray-600 mt-1">Booking ID: {booking.id}</p>
                </div>
              </div>

              {/* Session Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Session Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-medium">{formatDate(booking.preferredDate)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-medium">{formatTime(booking.preferredTime)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Participants</p>
                      <p className="font-medium">{booking.numberOfPeople} people</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">$</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Cost</p>
                      <p className="font-medium text-orange-600">${booking.totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{booking.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{booking.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dietary Restrictions */}
              {booking.dietaryRestrictions.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Dietary Restrictions</h3>
                  <div className="flex flex-wrap gap-2">
                    {booking.dietaryRestrictions.map(restriction => (
                      <span 
                        key={restriction}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {restriction}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Requests */}
              {booking.specialRequests && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Special Requests</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">{booking.specialRequests}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBackToRecipes}
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Recipes</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg">
              <Download className="h-4 w-4" />
              <span>Download Confirmation</span>
            </button>
          </div>
        </div>

        {/* Next Steps */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Confirmation Email</p>
                  <p className="text-sm text-gray-600">You'll receive a detailed confirmation email within 5 minutes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Chef Contact</p>
                  <p className="text-sm text-gray-600">Our chef will contact you 24 hours before your session</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Preparation List</p>
                  <p className="text-sm text-gray-600">You'll receive a list of items to prepare beforehand</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Enjoy Your Experience</p>
                  <p className="text-sm text-gray-600">Arrive 15 minutes early and enjoy your cooking session!</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Need Help?</h4>
              <p className="text-sm text-blue-700 mb-3">
                Contact our support team if you have any questions or need to make changes.
              </p>
              <div className="space-y-1 text-sm text-blue-700">
                <p>📧 support@instancerecipe.com</p>
                <p>📞 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};