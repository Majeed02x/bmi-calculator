// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { handleBMICalculation } = require('./controllers/bmiController');

const app = express();
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Simple HTML UI


app.post('/calculate-bmi', handleBMICalculation);

app.listen(PORT, () => {
  console.log(`BMI Calculator app running at http://localhost:${PORT}`);
});
