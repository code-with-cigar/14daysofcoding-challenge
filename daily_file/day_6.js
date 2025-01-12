// Day 6 of my #365DaysOfCoding challenge!  Today, I dived deep into the world of arrays  and unlocked new concepts . Wrote a few practice programs  to strengthen my understanding . Every line of code takes me closer to my goal . Learning never stops! #KeepCoding 

function Avg(x, y) {
    return 1 + (x + y) / 2
  }

function sum(a, b) {
    return a + b
  }
  let a = 1;
  let b = 2;
  let c = 3;

  

  console.log("One plus Average of a and b is ", Avg(a, b))
  console.log("One plus Average of b and c is ", Avg(b, c))
  console.log("One plus Average of a and c is ", Avg(a, c))
  console.log("sum of 9 and 7 is =>",sum(9, 7))
  
  
  
  
  {
  let num = [1, 2, 3, 34, 4]
  let f = num.toString() // b is now a string 
  console.log(b, typeof b)
  let d = num.join(" and ")
  console.log(c, typeof c)
  // let r = num.pop() // pop returns the popped element
  // console.log(num, r)
  // let r = num.push(56) // push returns the new array length
  // console.log(num, r)
  // let r = num.shift()
  // console.log(r, num) // Removes an element from the start of the array
  
  let r = num.unshift(78)
  console.log(r, num)
  console.log(r)
  }


  //? in pogress
  // const prompt = require("prompt-sync")();
  // // take input from user
  // let number = prompt("Enter a number ");
  // let format = parseInt(number);