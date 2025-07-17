import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice cooked with white wine, finished with black truffle and Parmesan cheese',
    difficulty: 'Hard',
    cookingTime: 45,
    servings: 4,
    cuisine: 'Italian',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '2 cups Arborio rice',
      '6 cups warm chicken stock',
      '1/2 cup white wine',
      '1 onion, finely chopped',
      '3 cloves garlic, minced',
      '2 oz black truffle, shaved',
      '1 cup Parmesan cheese, grated',
      '4 tbsp butter',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat stock in a separate pan and keep warm',
      'Sauté onion and garlic in butter until translucent',
      'Add rice and stir for 2 minutes until coated',
      'Add wine and stir until absorbed',
      'Add stock one ladle at a time, stirring constantly',
      'Continue for 18-20 minutes until rice is creamy',
      'Stir in Parmesan and truffle shavings',
      'Season with salt and pepper, serve immediately'
    ],
    price: 85,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Beef Wellington',
    description: 'Tender beef fillet wrapped in pâté and puff pastry, served with red wine jus',
    difficulty: 'Hard',
    cookingTime: 90,
    servings: 6,
    cuisine: 'British',
    image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '2 lbs beef tenderloin',
      '8 oz mushroom duxelles',
      '6 oz pâté de foie gras',
      '1 sheet puff pastry',
      '8 thin slices prosciutto',
      '2 egg yolks for wash',
      'Fresh thyme',
      'Salt and black pepper'
    ],
    instructions: [
      'Sear beef tenderloin on all sides until golden',
      'Let cool and brush with mustard',
      'Wrap in prosciutto and pâté',
      'Spread mushroom duxelles on pastry',
      'Wrap beef in pastry, sealing edges',
      'Brush with egg wash',
      'Bake at 400°F for 25-30 minutes',
      'Rest for 10 minutes before slicing'
    ],
    price: 120,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Lobster Thermidor',
    description: 'Classic French dish with lobster meat in a rich, creamy sauce, gratinéed to perfection',
    difficulty: 'Hard',
    cookingTime: 60,
    servings: 2,
    cuisine: 'French',
    image: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '2 whole lobsters (1.5 lbs each)',
      '4 tbsp butter',
      '2 shallots, minced',
      '1/4 cup cognac',
      '1 cup heavy cream',
      '2 egg yolks',
      '1/4 cup Gruyère cheese',
      'Fresh tarragon',
      'Cayenne pepper'
    ],
    instructions: [
      'Boil lobsters for 8 minutes, then cool',
      'Remove meat and reserve shells',
      'Sauté shallots in butter',
      'Add cognac and flambé',
      'Add cream and reduce by half',
      'Temper egg yolks with cream mixture',
      'Combine with lobster meat',
      'Fill shells, top with cheese, and broil'
    ],
    price: 95,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Duck Confit',
    description: 'Slow-cooked duck legs in their own fat, served with garlic potatoes and cherry gastrique',
    difficulty: 'Medium',
    cookingTime: 180,
    servings: 4,
    cuisine: 'French',
    image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '4 duck legs',
      '2 cups duck fat',
      '6 garlic cloves',
      '2 bay leaves',
      'Fresh thyme sprigs',
      '2 lbs fingerling potatoes',
      '1 cup fresh cherries',
      '2 tbsp balsamic vinegar',
      'Coarse sea salt'
    ],
    instructions: [
      'Cure duck legs with salt overnight',
      'Rinse and pat dry',
      'Submerge in duck fat with herbs',
      'Cook at 225°F for 2.5 hours',
      'Crisp skin under broiler',
      'Roast potatoes with garlic',
      'Make cherry gastrique',
      'Serve with potatoes and sauce'
    ],
    price: 75,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '5',
    name: 'Paella Valenciana',
    description: 'Traditional Spanish rice dish with saffron, chicken, rabbit, and seasonal vegetables',
    difficulty: 'Medium',
    cookingTime: 50,
    servings: 8,
    cuisine: 'Spanish',
    image: 'https://images.pexels.com/photos/16743489/pexels-photo-16743489.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '3 cups Spanish rice (Bomba)',
      '6 cups chicken stock',
      '1/2 tsp saffron threads',
      '1 whole chicken, cut up',
      '1 lb rabbit, cut up',
      '1 cup green beans',
      '1 cup lima beans',
      '2 red peppers, sliced',
      'Spanish olive oil'
    ],
    instructions: [
      'Heat oil in paella pan',
      'Brown chicken and rabbit pieces',
      'Add vegetables and sauté',
      'Add rice and stir to coat',
      'Add hot saffron stock',
      'Simmer without stirring for 20 minutes',
      'Let rest for 5 minutes',
      'Garnish with lemon wedges'
    ],
    price: 65,
    rating: 4.5,
    reviews: 178
  },
  {
    id: '6',
    name: 'Chocolate Soufflé',
    description: 'Light and airy chocolate dessert that rises magnificently, served with vanilla ice cream',
    difficulty: 'Hard',
    cookingTime: 35,
    servings: 6,
    cuisine: 'French',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '6 oz dark chocolate (70%)',
      '6 large eggs, separated',
      '1/3 cup granulated sugar',
      '2 tbsp all-purpose flour',
      '1 cup whole milk',
      '3 tbsp butter',
      'Vanilla extract',
      'Powdered sugar for dusting'
    ],
    instructions: [
      'Preheat oven to 375°F',
      'Butter ramekins and dust with sugar',
      'Melt chocolate with butter',
      'Whisk in egg yolks one at a time',
      'Beat egg whites to soft peaks',
      'Gradually add sugar to whites',
      'Fold whites into chocolate mixture',
      'Bake for 12-15 minutes until risen'
    ],
    price: 45,
    rating: 4.8,
    reviews: 267
  }
];