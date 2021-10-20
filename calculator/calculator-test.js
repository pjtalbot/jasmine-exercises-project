
it('should calculate the monthly rate correctly', function () {

  const values = { amount: 500, years: 2, rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('21.94');

  // ...
});


it("should return a result with 2 decimal places", function() {
  const values = { amount: 20000, years: 3, rate: 4};

  expect(calculateMonthlyPayment(values)).toEqual('590.48');
});

/// etc
it("should return the result as a string", function() {

  const values = { amount: 20000, years: 3, rate: 4};

  let str = calculateMonthlyPayment(values);
  let result = calculateMonthlyPayment(values);

  console.log(str);
  console.log(result);

  expect(str.toString() === result).toBe(true);
})