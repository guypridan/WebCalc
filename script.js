// Get references to HTML elements
const resultField = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Handle different button types (digits or operations)
    if (value === '=') {
      // Perform the calculation
      calculate();
    } else if (value === 'C') {
      // Clear the input field
      resultField.value = '';
    } else {
      // Append the clicked value to the input field
      resultField.value += value;
    }
  });
});

// Perform the calculation
function calculate() {
  try {
    const result = eval(resultField.value).toFixed(5);
    resultField.value = result;
  } catch (error) {
    // Handle any errors that occur during calculation
    resultField.value = 'Error';
  }
}
