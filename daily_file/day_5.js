// It's Day 5 of my #365DaysOfCoding challenge! 
// Today, I did a quick JavaScript revision and practiced 
// for-in loops.  I also created a small program to apply what 
// I learned! 





const prompt = require("prompt-sync")();
// take input from user
let number = prompt("Enter a nutarual number ");
let format = parseInt(number);
let sum = 0;

for (let i = 0; i < format; i++) {
  sum += (i + 1);
}
console.log(sum);



letgranny = {
  harry: 56,
  tarry: 56,
  yarry: 56,
  tarry: 56,
  larry: 56
};

for (let a in granny) {
  console.log("marks of " + a + " is " +granny[a])
    
  }
