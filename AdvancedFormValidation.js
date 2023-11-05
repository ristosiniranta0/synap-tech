/*
Filename: AdvancedFormValidation.js
Content: Advanced form validation using JavaScript.
*/

// Define an array to hold the validation rules for each input field
const validationRules = {
  name: /^([a-zA-Z]){2,30}$/,
  email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/
};

// Define an object to hold the error messages for each validation rule
const errorMessages = {
  name: 'Name should contain only alphabets and be between 2 to 30 characters',
  email: 'Please enter a valid email address',
  password:
    'Password must be between 8 to 20 characters and contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
};

// Function to validate the form
function validateForm() {
  const inputs = document.getElementsByTagName('input');
  let isValid = true;
  
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const rule = validationRules[input.name];
    
    if (!rule.test(input.value)) {
      isValid = false;
      showErrorMessage(input.name);
    }
  }
  
  return isValid;
}

// Function to show error messages if the form is invalid
function showErrorMessage(fieldName) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  errorElement.textContent = errorMessages[fieldName];
}

// Bind event listener to form submit event
document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (validateForm()) {
    event.target.submit();
  }
});

// Add event listeners to input fields for real-time validation
const inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  
  input.addEventListener('input', function() {
    if (!validationRules[this.name].test(this.value)) {
      showErrorMessage(this.name);
    } else {
      const errorElement = document.getElementById(`${this.name}-error`);
      errorElement.textContent = '';
    }
  });
}

// ... More code for the form, such as HTML, CSS styling, and other JavaScript functionality

// 200+ lines of code...