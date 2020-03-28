// Define ui variables 
const form = document.querySelector('.form');
const numInput = document.querySelector('#numInput');
const finalOutputDiv = document.querySelector('#finalOutput');

// Function to load event listener
loadEventListeners();

// Defining function to load event listeners
function loadEventListeners(){
  // Adding event listener to form
  form.addEventListener('submit', compute);
  // Adding event listener to numInput
  numInput.addEventListener('keyup', onInput);
  // Adding event listener to btn
  // Adding event listener to output
}

// Function to clear out final output div on start of new user input
function onInput() {
  finalOutputDiv.innerHTML = '';
}

// Function for form validation and number conversion
function compute(e) {
  if(numInput.value === '') {
    alert('Input number first!');
  } else{
    // Converting string that user enters into a number
    var binary = parseInt(numInput.value);
    // Converting entered binary number into decimal numbersystem
    var answer = parseInt(binary, 2);
  
    // Creating p element
    const p = document.createElement('p');
    // Assigning class to p 
    p.className = 'output lead w-100 pt-3';
    // Adding styling (this is essentially bad practice i think)
    p.style.marginTop = '7px';
    // Adding text node to contain answer
    p.appendChild(document.createTextNode(answer)) 
    // Appending p to parent div
    finalOutputDiv.appendChild(p);
  }
  if(numInput.value.length > 8) {
    alert('The maximum number of digits you can enter is 8');
  }


  // Clear input field on submit
  numInput.value = '';

  e.preventDefault();
}