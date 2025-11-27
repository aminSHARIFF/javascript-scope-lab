// Write your solution in this file!

// Global Scope Variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function Scope
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block Scope
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Update Featured Drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}
