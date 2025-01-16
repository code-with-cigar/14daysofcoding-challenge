const prompt = require("prompt-sync")();
// take input from user
let capital = prompt("Enter a capital => ");

//format_capital
let format_ca = parseInt(capital);

let interest_rate = prompt("Enter interest_rate => ");

//format_interest_rate
let format_inr = parseInt(interest_rate);

let time = prompt("Enter time => ");

//format_time
let format_t = parseInt(time);

let interest = prompt("Enter interest money => ");

//format_interest
let format_in = parseInt(interest);

const calculate_interest = (p,r,t) => (p*r*t)/100;

//!calculate interest

if (interest == "no") {
    console.log(calculate_interest(format_ca,format_inr,format_t))
} 