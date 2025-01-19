const prompt = require("prompt-sync")();

//?what you want
let what_you_want = prompt("Enter what_you_want => ");

//*calculate funtion
const calculate_interest = (p, r, t) =>  (p * r * t) / 100;

const calculate_capital = (i, r, t) => 
 (i * 100) / (r * t);

const calculate_time = (i, p, r) =>  (i * 100) / (p * r);

const calculate_interest_rate = (i, p, t) =>  (i * 100) / (p * t);


//!calculate capital

if (what_you_want === "capital") {
  let interest = prompt("Enter interest money => ");
  let interest_rate = prompt("Enter interest rate => ");
  let time = prompt("Enter time => ");

  let format_interest = parseInt(interest);
  let format_t = parseInt(time);
  let format_interest_rate = parseInt(interest_rate);

  console.log(
    calculate_capital(format_interest, format_interest_rate, format_t)
  );
}
//!calculate interest rate
if (what_you_want === "interest rate") {
  let interest = prompt("Enter interest money => ");
  let capital = prompt("Enter capital => ");
  let time = prompt("Enter time => ");

let format_ca = parseInt(capital);
  let format_t = parseInt(time);
  let format_inr = parseInt(interest);

  console.log(
    calculate_interest_rate(format_inr, format_ca, format_t)
  );
}

//!calculate time
else if (what_you_want === "time") {
  let capital = prompt("Enter capital => ");
  let interest_rate = prompt("Enter interest rate => ");
  let interest = prompt("Enter interest money => ");

  let format_ca = parseInt(capital);
  let format_inr = parseInt(interest);
  let format_interest_rate = parseInt(interest_rate);
  console.log(calculate_time(format_ca, format_interest_rate, format_inr));
}

//!calculate interest
else {
  let capital = prompt("Enter capital => ");

  let interest_rate = prompt("Enter interest rate => ");
  let time = prompt("Enter time => ");

  let format_ca = parseInt(capital);
  let format_t = parseInt(time);
  let format_interest_rate = parseInt(interest_rate);
  console.log(calculate_interest(format_ca, format_interest_rate, format_t));
}
