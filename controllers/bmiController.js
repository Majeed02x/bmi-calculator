// controllers/bmiController.js

const { bmiResultView, errorView } = require('../views/bmiView');

exports.handleBMICalculation = (req, res) => {
  // 1. Extract raw inputs
  const rawHeight = req.body.height;
  const rawWeight = req.body.weight;
  const unitType  = req.body.unitType;

  // 2. Debug log incoming values
  console.log('INPUTS:', { rawHeight, rawWeight, unitType });

  // 3. Parse to numbers
  const heightCm = parseFloat(rawHeight);
  const weightKg = parseFloat(rawWeight);

  // 4. Validate
  if (
    isNaN(heightCm) || isNaN(weightKg) ||
    heightCm <= 0    || weightKg <= 0
  ) {
    return res
      .status(400)
      .send(errorView('Invalid input! Height and weight must be positive numbers.'));
  }

  // 5. Convert & calculate
  let bmi;
  if (unitType === 'imperial') {
    // assuming rawHeight is inches and rawWeight is pounds
    bmi = (weightKg / (heightCm * heightCm)) * 703;
  } else {
    // Metric: user gave height in cm, convert to metres
    const heightM = heightCm / 100;
    console.log('Converted height (m):', heightM);
    bmi = weightKg / (heightM * heightM);
  }

  // 6. Round and log
  const roundedBMI = Number(bmi.toFixed(2));
  console.log('CALCULATED BMI:', roundedBMI);

  // 7. Classify & tip
  const { classifyBMI, getHealthTip } = require('../models/bmiModel');
  const category = classifyBMI(roundedBMI);
  const tip      = getHealthTip(category);

  // 8. Render result
  res.send(bmiResultView(roundedBMI, category, tip));
};
