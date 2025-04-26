// models/bmiModel.js
function calculateBMI(height, weight, unitType) {
  if (unitType === 'imperial') {
    return (weight * 703) / (height * height);
  } else {
    return weight / (height * height);
  }
}

function classifyBMI(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

function getHealthTip(category) {
  const tips = {
    'Underweight': 'Consider a nutritious diet to gain healthy weight.',
    'Normal': 'Keep up your balanced lifestyle!',
    'Overweight': 'Try to be more active and monitor your diet.',
    'Obese': 'Consult a healthcare provider for personalized advice.'
  };
  return tips[category] || '';
}

module.exports = { calculateBMI, classifyBMI, getHealthTip };
