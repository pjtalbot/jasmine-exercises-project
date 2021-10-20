window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

    const values = {amount: 1000, years: 10, rate: 4.5};

    let amountInput = document.getElementById('loan-amount');
    amountInput.value = values.amount;
    let yearsInput = document.getElementById('loan-years')
    yearsInput.value = values.years
    let rateInput = document.getElementById('loan-rate');
    rateInput.value = values.rate;

    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let monthlyRate = (values.rate * 0.01) / 12;
  let numberOfPayments = values.years * 12;

  let num = (values.amount * monthlyRate) / (1 - (1 + monthlyRate) ** (-numberOfPayments))
  let numFixed = num.toFixed(2);
  let monthlyPayment = numFixed.toString();

  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  let monthlyUI = document.getElementById('monthly-payment')

  monthlyUI.innerText = '$' + monthlyPayment;

}
