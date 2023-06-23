// console.log("Hello From Me To JavaScript");
// let age = 1985;

// if (1 + 1 === 2){
//     console.log("True as norms")
// }

// if (2 + 2 ===6){
//     console.log("Never Display")
// }

// let number = 10;

// if (number > 11) {
//     console.log("The Number Is Good To GO!");
// } else {
//     console.log("The Number Isn't Good To Go!")
// }

// const dayOfTheWeek = 'Friday';

// if (dayOfTheWeek === 'Monday') {
//     console.log("Nah, Not Today, Fuck!!")
// } else if (dayOfTheWeek === 'Friday') {
//     console.log("Great Day To Be Alive")
// }

// Example Using const, if and else if;

// 0 - 5 - free
// 5 - 10 Child $10
// 10 - 65 Adult $20
// 65+ Senior $10

// const age = 120;

// if (age < 5) {
//     console.log("You are a baby. You get in for free.")
// } else if (age < 10) {
//     console.log ("You are a child. Your bill is $10.")
// } else if (age < 65) {
//     console.log ("You are an adult. Your biil is $20.")
// } else {
//     console.log ("You are a senior. Your bill is $10.")
// }

// let getColor = phrase;

//   if (phrase === 'stop') {
//     console.log ("red");
// } else if (phrase === 'slow') {
//     console.log ("yellow");
// } else if (phrase ==== 'go') {
//     console.log ("green");
// } else {
//     console.log ("purple");
// }

// const password = prompt("Please, create a new password");

// if (password.length >= 8) {
//     if(password.indexOf(' ') === -1){
//         console.log("Valid Password!!")
//     } else {
//         console.log("Password Cannot Contain Spaces!")
//     }
// } else {
//     console.log("Passsword too short! Must contain 8+ charaters")
// }

// PRACTICE

// const num = 79; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// if (num <= 100) {
//   if (num >= 50) {
//     console.log("HEY!");
//   }
// } else {
//   if (num < 103) {
//     if (num % 2 === 0) {
//       console.log("YOU GOT ME!");
//     }
//   }
// }

// --TRUTHY AND FALSY VALUES--

// const userInput = prompt("Type Something");

// if(userInput) {
//   console.log("Truthy!")
// } else {
//   console.log("Falsy!")
// }

// const userInput = prompt("Type Something");

// if(undefined) {
//   console.log("Truthy!")
// } else {
//   console.log("Falsy!")
// }

// --LOGICAL OPERATIONS--

// AND &&

// const password = prompt("Enter A Password");

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("Valid Password!");
// } else {
//   console.log("Invalid Password!");
// }

// OR ||

// 0 - 5 - free
// 5 - 10 Child $10
// 10 - 65 Adult $20
// 65+ Senior $10

// const age = 75;
// if(age < 5 || age >= 65) {
//   console.log("FREE");
// } else if (age < 10) {
//   console.log("$10")
// } else if (age < 65) {
//   console.log("$20")
// }

// console.log(!true)
// console.log(!false)

// const firstName = prompt("Enter your first name");
// if (!firstName) {
//     firstName = prompt("Try Again!!!")
// }

// USING SWITCH STATEMENT

// const day = 71;
//     switch (day){
//     case 1:
//         console.log("It's Monday!");
//         break;
//     case 2:
//         console.log("It's Tuesday!");
//         break;
//     case 3:
//         console.log("It's Wednesday!");
//         break;
//     case 4:
//         console.log("It's Thursday!");
//         break;
//     case 5:
//         console.log("It's Friday!");
//         break;
//     case 6:
//         console.log("It's Saturday!");
//         break;
//     case 7:
//         console.log("It's Sunday!");
//         break;
//     default:
//         console.log("Invalid Day Of The Week!!")
//     }

// JavaScript Arrays--

// const color = ["rad", "orange", "yalloww"];
// color[0] = "red";
// color[2] = "yellow";

// Types of Array comonly used:
// 1. .push
// 2. .pop
// 3. .shift
// 4. .unshift
// OTHERS
// 5. .concat
// 6. .includes
// 7. .indexOf
// 8. .join
// 9. .reverse
// 10. .slice
// 11. .splice
// 12. .sort

OBJECTS

Objects are a fundamental data type used to represent and store collections of key-value pairs.
Objects in JavaScript are dynamic, meaning that properties can be added, modified, or removed from them at any time.
Objects can be created using object literals, constructors, or the Object.create() method.

const person = {
  firstName: "Earl",
  lastName: "Morningstar",
  age: "17",
  location: "Dave ft Burna Boy",
};
