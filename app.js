// Define ui variables 
const form = document.querySelector('.user-form');
const numInput = document.querySelector('#numInput');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

// Function to load event listener
loadEventListeners();

// Defining function to load event listeners
function loadEventListeners(){
  // Adding event listener to form
  document.addEventListener('submit', compute);
  // Adding event listener to numInput
  // Adding event listener to btn
  // Adding event listener to output
}

// Function for form validation and number conversion
function compute(e) {
  if(numInput.value.length > 8) {
    alert('Maximum number of digits allowed is 8!');
  }
  if(numInput.value === '') {
    alert('Input number first!');
  } // Form validation does not currently work. Figure out why!

  // Clear input field on submit
  numInput.value = '';

  e.preventDefault();
}