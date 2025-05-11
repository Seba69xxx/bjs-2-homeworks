"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  if (a === 0) {
    return arr;
  }

  const discriminant = b ** 2 - 4 * a * c

  if (discriminant < 0) {
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push (x1, x2)
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthInterestRate = (percent / 100) / 12;
  const loanBody = amount - contribution;

  if (loanBody <=0 ) {
    return 0;
  }

  if (countMonths === 0) {
    return parseFloat(loanBody.toFixed(2));
  }

  let totalPaidToBank;

  if (monthInterestRate === 0){
    totalPaidToBank = loanBody;
  } else {
    const S = loanBody;
    const P = monthInterestRate;
    const n = countMonths;

    const monthlyPayment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
    totalPaidToBank = monthlyPayment * n;
  }

  const roundedTotalPaidToBank = Math.round(totalPaidToBank * 100) / 100;

  return roundedTotalPaidToBank;
}