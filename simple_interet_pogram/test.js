const prompt = require("prompt-sync")();

// let fr = "Aditya"
// let n = fr.length;
// console.log(n)
// for (let i = 0; i < n; i++){
//   console.log(fr[i])
// }

let name = prompt("Enter Your Name");
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}