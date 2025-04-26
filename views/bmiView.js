// views/bmiView.js

/**
 * Renders the HTML snippet for a successful BMI result.
 * @param {number} bmiValue  The rounded BMI (e.g. 24.58)
 * @param {string} category  The BMI category (e.g. "Normal")
 * @param {string} tip       A health tip string
 * @returns {string} HTML to send back to the client
 */
function bmiResultView(bmiValue, category, tip) {
  return `
    <p>Your BMI is ${bmiValue.toFixed(2)}</p>
    <p>Category: <strong>${category}</strong></p>
    <p>Tip: ${tip}</p>
  `;
}

/**
 * Renders an error message.
 * @param {string} message  The error text
 * @returns {string} HTML snippet
 */
function errorView(message) {
  return `<p style="color:red;">${message}</p>`;
}

module.exports = {
  bmiResultView,
  errorView
};
