// console.log("Hello From Me To JavaScript");
// let age = 1985;

// if (1 + 1 === 2){
//     console.log("True as norms")
// }

// if (2 + 2 === 6){
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
//     console.log("Nah, Not Today!!")
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

// OBJECTS

// Objects are a fundamental data type used to represent and store collections of key-value pairs.
// Objects in JavaScript are dynamic, meaning that properties can be added, modified, or removed from them at any time.
// Objects can be created using object literals, constructors, or the Object.create() method.

// const person = {
//   firstName: "Earl",
//   lastName: "Morningstar",
//   age: "17",
//   location: "Dave ft Burna Boy",
// }

// FOR LOOPS!!

// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     console.log("I'm 'For Loop' example!")
// }

// for (let i = 1; i <=6; i++){
//     console.log(i);
//     console.log('Da ba dee da ba daa');
// }

// FOR COUNTDOWN IN LOOPS!!

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// INFINITE LOOPS!!

// for(let i = 20; i >= 0; i++) {
//     console.log(i)
// }

// Don't try this!! For practice, add ';'

// LOOPING OVER ARRAYS!!

// const animals = [
//     "Aardvark",
// "Albatross",
// "Alligator",
// "Alpaca",
// "Ant",
// "Anteater",
// "Antelope",
// "Ape",
// "Armadillo",
// "Baboon",
// "Badger",
// "Barracuda",
// "Bat",
// "Bear",
// "Beaver",
// "Bee",
// "Beetle",
// "Bird",
// "Bison",
// "Blackbird",
// "Bluebird",
// "Boar",
// "Buffalo",
// "Butterfly",
// "Camel",
// "Caribou",
// "Cat",
// "Caterpillar",
// "Cheetah",
// "Chicken",
// "Chimpanzee",
// "Cobra",
// "Cockroach",
// "Cod",
// "Condor",
// "Coot",
// "Cow",
// "Coyote",
// "Crab",
// "Crane",
// "Cricket",
// "Crocodile",
// "Crow",
// "Deer",
// "Dingo",
// "Dog",
// "Dolphin",
// "Donkey",
// "Dragonfly",
// "Duck",
// "Eagle",
// "Eel",
// "Elephant",
// "Elk",
// "Emu",
// "Falcon",
// "Ferret",
// "Finch",
// "Fish",
// "Flamingo",
// "Fly",
// "Fox",
// "Frog",
// "Gazelle",
// "Gecko",
// "Gerbil",
// "Giraffe",
// "Gnat",
// "Goat",
// "Goose",
// "Gorilla",
// "Grasshopper",
// "Groundhog",
// "Gull",
// "Hamster",
// "Hare",
// "Hawk",
// "Hedgehog",
// "Heron",
// "Hippopotamus",
// "Honeybee",
// "Hornet",
// "Horse",
// "Hummingbird",
// "Hyena",
// "Ibex",
// "Iguana",
// "Impala",
// "Jackal",
// "Jaguar",
// "Jellyfish",
// "Kangaroo",
// "Koala",
// "Komodo dragon",
// "Ladybug",
// "Lemur",
// "Leopard",
// "Lion",
// "Llama",
// "Lobster",
// "Locust",
// "Louse",
// "Macaw",
// "Magpie",
// "Mallard",
// "Manta ray",
// "Mantis",
// "Marmot",
// "Meerkat",
// "Mole",
// "Monkey",
// "Moose",
// "Mosquito",
// "Moth",
// "Mouse",
// "Mule",
// "Muskrat",
// "Nighthawk",
// "Nightingale",
// "Octopus",
// "Opossum",
// "Orangutan",
// "Ostrich",
// "Otter",
// "Owl",
// "Ox",
// "Oyster",
// "Panda",
// "Panther",
// "Parrot",
// "Peacock",
// "Pelican",
// "Penguin",
// "Pheasant",
// "Pig",
// "Pigeon",
// "Piranha",
// "Platypus",
// "Porcupine",
// "Possum",
// "Prairie dog",
// "Quail",
// "Rabbit",
// "Raccoon",
// "Ram",
// "Rat",
// "Raven",
// "Rhinoceros",
// "Roadrunner",
// "Robin",
// "Rooster",
// "Salmon",
// "Sandpiper",
// "Sardine",
// "Scorpion",
// "Seagull",
// "Seahorse",
// "Seal",
// "Shark",
// "Sheep",
// "Shrimp",
// "Skunk",
// "Sloth",
// "Snail",
// "Snake",
// "Sparrow",
// "Spider",
// "Sponge",
// "Squid",
// "Squirrel",
// "Starfish",
// "Stork",
// "Swan",
// "Swordfish",
// "Tarantula",
// "Termite",
// "Tiger",
// "Toad",
// "Tortoise",
// "Toucan",
// "Trout",
// "Turkey",
// "Turtle",
// "Vulture",
// "Walrus",
// "Wasp",
// "Weasel",
// "Whale",
// "Wolf",
// "Wolverine",
// "Wombat",
// "Woodpecker",
// "Worm",
// "Wren",
// "Yak",
// "Zebra"]

// for(let i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// }

// FOR THE REVERSE CASE!!

// for(let i = animals.length -1; i >= 0; i--){
//     console.log(i, animals[i]);
// }

// NESTED LOOPS!!

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffery', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for(let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for(let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }

// WHILE LOOP

// let count = 0;
// while (count < 20){
// console.log(count)
// count++;
// }

// let count = 0;
// while (count < 15) {
//   count++;
//   console.log(count);
// }

// MAIN USE OF WHILE LOOP: EXAMPLE;
// EXAMPLE 1:

// const SECRET_CODE = "BabyFishGold";

// let guess = prompt("Enter The Secret Code...");
// while(guess !== SECRET_CODE){
//     guess = prompt("Enter The Secret Code...");
// }
// console.log("Congrats, You've Got The Secret!!!")

// EXAMPLE 2:

// let input = prompt("Hello, say Something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "Stop Copying Me");
//   break;
// }
// console.log("Okay, You Win!!");

// const name = "Johnson";
// const age = "35";
// const address = "Orangutan Close, Zoo Estate, Animal Kingdom Street";
// const job = "Professional Zoo Keeper";

// console.log(`My name  is ${name} and I am ${age} years old. I am currently located at ${address} and lastly I am a ${job}, thank you!!`);

// let a = 5;
// let b = 10;

// let result = (`The sum of ${a} and ${b} is equal to ${a + b}`);
// console.log(result);

// const greetings = "hello javasxcript";
// console.log(greetings);

// const newGreetings = greetings.replace('hello', 'Hello');
// console.log(newGreetings);

// const newGreetingTexts = newGreetings.replace('javasxcript', 'JavaScript');
// console.log(newGreetingTexts);

// const cars = "Honda ";

// let newCars = cars.repeat(3);
// console.log(newCars);

// let guess = Math.floor(Math.random() * 200);
// console.log(guess);

// const numbers = 2468;

// const parsedNumbers = parseInt(numbers);
// console.log(parsedNumbers);

// const userName = prompt("Enter your username here");

// if (userName.length <= 6) {
//   console.log("Username must contain 8 characters or more!");
// } else {
//   console.log("Confirmed!! Valid Username.");
// }

// const day = 5;

// switch (day) {
//     case 1:
//         console.log("Monday!");
//         break;
//     case 2:
//         console.log("Tuesday!");
//         break;
//     case 3:
//         console.log("Wednesday!");
//         break;
//     case 4:
//         console.log("Thursday!");
//         break;
//     case 5:
//         console.log("Friday!");
//         break;
//     case 6:
//         console.log("Saturday!");
//         break;
//     case 7:
//         console.log("Sunday!");
//         break;
//     default:
//         console.log("I dont know that!");
// }

// GUESSING GAME!!

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   guess = parseInt(guess);
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//     attempts++;
//   } else if (guess < targetNum) {
//     guess = prompt("Too low! Enter a new guess:");
//     attempts++;
//   } else {
//     guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT!");
// } else {
//   console.log("CONGRATS YOU WIN!");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// FOR OF LOOP!!

// let fullNames = [
//     ["Earl","Josh","Great"],
//     ["Elvis","Rex","Daniel"],
//     ["Nickolas","Pedro", "Xavi"]
// ];

// for (let roll of fullNames) {
//     for(let names of roll)
//   console.log(names);
// }

// const surNames = ["Onyeabor", "Udo", "Ugo", "Mammam", "Mbomson"];
// for (let po of surNames) {
//   console.log(po);
// }

// FUNCTIONS!!

// function myself() {
//   console.log("Earl");
// }

// myself();
// myself();
// myself();
// myself();
// myself();
// myself();

// function myOnlyName(){
//     console.log('Earl');
// }

// myOnlyName();
// myOnlyName();
// myOnlyName();

// function student(studentName, studentCourse) {
//   const details = `${studentName} is a student at Axia Africa studying ${studentCourse}.`;
//   return details;
// }

// const studentData1 = student("Earl", "Front-End Dev");
// console.log(studentData1);

// const studentData2 = student("Great", "Back-End Dev");
// console.log(studentData2);

// Todo List Project!!

// let input = prompt('what would like to do?');
// const todos = ['Clean the house', 'Do my laundry'];
// while(input !== 'quit' && input !== 'q') {
//     if(input === 'list'){
//        console.log('***********')
//        for(let i = 0; 1 < todos.length; i++) {
//         console.log(`${i}: ${todos[i]}`);
//        }
//        console.log('***********')
//     } else if (input === 'new'){
//         const newTodo = prompt('okay, What is your new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} has been added to the list`)
//     } else if(input === 'delete'){
//         const index = parseInt(prompt('Okay, enter an index to delete:'));
//         if (!Number.isNaN(index)){
//         // const index = parseInt(indexStr);
//         const deleted = todos.splice(index, 1);
//         console.log(`Okay, you deleted ${deleted[0]}`);
//     } else {
//         console.log('Unknown Index')
//     }

//     }
//     input = prompt('what would like to do?')
// }
// console.log('Okay, You Quit The App!!');

// function myName() {
//     console.log('My name is Earl.');
//     // console.log('His name is Great.');
//     // console.log('Their names is Josh and Elvis.');
// }

// myName();

// function myName(firstName) {
//     console.log(`My name is ${firstName}`);
// }

// myName(Earl);

// Multiple Argument In Function!!

// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// repeat("How are you? ", 5);

// USE OF RETURN STATEMENT!!

// EXAMPLE 1

// function sum(x, y){
// if(typeof x !== 'number' || typeof y !== 'number'){
//   return false;
// }
// return x + y;
// }

// // EXAMPLE 2

// function addNumbers(a, b){
//   return a + b;
// }

// const result = addNumbers(14, 55);
// console.log(result);

// DOM MANIPULATION!!

// const firstBox = document.getElementById('firstDiv').innerText;
// console.log(firstBox);

// const secondBox = document.getElementsByClassName('second-div');
// console.log(secondBox[1].innerText);

// MORE INTO FUNCTION!!

// BLOCK SCOPE

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14;
//   let circ = 2 * PI * radius;
// }

// console.log(radius); //8
// console.log(PI); //NOT DEFINED. NOTE: USING var CAN ACCESS IT.
// console.log(circ); //NOT DEFINED. NOTE: USING var CAN ACCESS IT.

// LEXICAL SCOPE

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
//   function cryForHelp() {
//     for (let hero of heroes) {
//       console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//     }
//   }
//   // cryForHelp();
// }

// const square = function (num) {
//   return num * num;
// };

// square(7);
// console.log(square);

// Higher Order Functions: Functions that operates on/with other functions.
// They accept other functions as arguments.

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// Returning Functions

// function makeMyMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("Congrats");
//         }
//     } else {
//         return function(){
//             console.log('Dissapointed!!');
//         }
//     }
// }

// console.log(makeMyMysteryFunc());

// Factory Function: A funtion that would make other functions for you.

// function makeNewFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isChild = makeNewFunc(1, 18);
// const isAdult = makeNewFunc(19, 65);
// const isSenior = makeNewFunc(66, 120);

// console.log(isChild(19));
// console.log(isAdult(23));
// console.log(isSenior(120));

// DEFINING METHODS - Adding functions as property to an Object.

// const myCalculator = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// console.log(myCalculator.square(5));
// console.log(myCalculator.cube(5));

// const fullDetails = {
//   firstName: "Earl",
//   lastName: "Morningstar",
//   age: 187,
//   eyeColor: "Grey",
//   comment() {
//     console.log(`${this.firstName} says Hello!`);
//   },
// };

// console.log(fullDetails.comment());

// FOR EACH

// const numbers = ["Gull",
// "Hamster",
// "Hare",
// "Hawk",
// "Hedgehog",
// "Heron",
// "Hippopotamus",
// "Honeybee",
// "Hornet",];

// function print(element){
//   console.log(element);
// }

// numbers.forEach(print);

// OR

// for(let el of numbers){
//   console.log(el);
// }

// MAP

// const animals = [
//   "Gull",
//   "Hamster",
//   "Hare",
//   "Hawk",
//   "Hedgehog",
//   "Heron",
//   "Hippopotamus",
//   "Honeybee",
//   "Hornet",
// // ]; NOT AN ARRAY BUT OBJECT IN AN ARRAY SHOULD BE USED!!

// const animalsName = animals.map(function (names) {
//   return names.animals;
// });

// ARROW FUNCTION! Refer to notes//

// setTimeout and setInterval(clearInterval)//

// console.log("Hello there...");
// setTimeout(() => {
//     console.log("...Are you still there?")
// }, 3000)

// ADD EVENT LISTENER  .addEventListener()

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", () => {
//   const newColor = randomColor();
//   document.body.style.backgroundColor = newColor;
//   h1.textContent = newColor;
// });

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Ping Pong Game!!!  <!-- Score Keeper Game -->

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const playerOneScore = document.querySelector('#playerOneScore');
// const playerTwoScore = document.querySelector('#playerTwoScore');
// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playTo');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 5;
// let isGameOver = false;

// // Updating The Player 1 Button!

// p1Button.addEventListener('click', () => {
//     if(!isGameOver){
//         p1Score += 1;
//         if (p1Score === winningScore){
//             isGameOver = true;
//         }
//         playerOneScore.textContent = p1Score;
//     }
// })

// // Updating The Player 2 Button!

// p2Button.addEventListener('click', () => {
//     if(!isGameOver){
//         p2Score += 1;
//         if (p2Score === winningScore){
//             isGameOver = true;
//         }
//         playerTwoScore.textContent = p2Score;
//     }
// })

// winningScoreSelect.addEventListener('change', () => {
//     winningScore = parseInt(this.value);
//     reset();
// })

// // Adding The Reset Button!!

// resetButton.addEventListener('click', reset);

// function reset()  {
//         isGameOver = false;
//         p1Score = 0;
//         p2Score = 0;
//         playerOneScore.textContent = 0;
//         playerTwoScore.textContent = 0;
//     }

// ChechOut To Complete Soon.  <!-- Score Keeper Game -->

// Learning Promises!!!
// Example:

// const fakeRequestPromises = (url) => {
//     return new Promise ((resolved, reject) => {
//     const delay = Math.floor(Math.randomn() * (4500)) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             reject ('Connection Timeout:(')
//         } else {
//             resolved(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// })
// }

// fakeRequestPromises('yelp.com/api/coffee/page1')
// .then(() => {
//     console.log("It Worked for request 1");
//    return fakeRequestPromises('yelp.com/api/coffee/page2')
// })
// .then(() => {
//     console.log("It Workedfor request 2");
//     return fakeRequestPromises('yelp.com/api/coffee/page3')
// })
// .then(() => {
//     console.log("It Worked for request 3");
// })
// .catch(() =>  {
//     console.log("Oh No!! Error!!");
// })

// const zt = ['Great', 'David', 'Bocks'];
// const bele = zt.length;
// console.log(bele);

// zt.push('Earl', 'Josh', 'Bani');
// console.log (zt);

// zt[6] = 'Bash';
// console.log(zt);

// const seatingChart = [
//     ['Great', 'David', 'Bocks'],
//     ['Earl', 'Josh', 'Bani'],
//     ['Somto', 'Daniel', 'Vera']
// ];

// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`row # &{i+1}`);
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j]);
//     }
// }

// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count);
// }

// ---ASYNC & AXIOS---

// const getStarWarsPerson = async (id) => {
//     try {
//         const response = await axios.get (`https://swapi.dev/api/people/${id}`);
//         console.log(response.data);
//         // const character = response.data;
//         // console.log(character.birth_year);
//     } catch(e) {
//         console.log("Error", e);
//     };
// }

// getStarWarsPerson(2);
// getStarWarsPerson(10);

// <!-- ---Tv Show Search--- -->

const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } }; //You can add other params. Eg: Joel: 'is funny'
//   const configTwo = {headers: {accept: 'application/json'}};
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
