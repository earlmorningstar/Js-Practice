// console.log("Hello From Me To JavaScript");
// let age = 1985;

// if (1 + 1 === 2){
//     console.log("True as norms")
// } else {
//     console.log("Nada");
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

// let phrase = "go";

//   if (phrase === 'stop') {
//     console.log ("red");
// } else if (phrase === 'slow') {
//     console.log ("yellow");
// } else if (phrase === 'go') {
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

// const num = 65; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

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

// const form = document.querySelector("#searchForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;
//   const config = { params: { q: searchTerm } }; //You can add other params. Eg: Joel: 'is funny'
// //   const configTwo = {headers: {accept: 'application/json'}};
//   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//   makeImages(res.data);
//   form.elements.query.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

// <!-- ---Tv Show Search Ends--- -->

// ----PROTOTYPES - How it works----

// String.prototype.yell = function() {
//     return `OMG!!! ${this.toUpperCase()}!!!! ARRRRGGHH!!`;
// };

// console.log('i love you'.yell());  // OMG!!! I LOVE YOU!!!! ARRRRGGHH!!

// ---CONSTRUCTOR FUNCTION---

// function Color (r, g, b) {
//     this.r =r;
//     this.g =g;
//     this.b  =b;
//     console.log(this);
// }

// new Color (255, 40, 100);

// ---USING JAVASCRIPT CLASSES INSTEAD---

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
// }

// const color1 = new Color(255, 150, 100, 'Orange');

// ---USING THE KEYWORD "extends" and "super"---

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating!`;
//   }
// }

// class Cat extends Pet {
//   meow() {
//     return "Meow";
//   }
// }

// class Dog extends Pet {
//   bark() {
//     return "Woof!";
//   }
// }

// Normal Practice---

// let msg = "leave me alone  ";

// let trimmedMsg = msg.trim().toUpperCase();

// let msgTwo = "lol you're funny";

// let replacedMsg = msgTwo.replace("lol", "lmao");

// console.log(replacedMsg);

// const name = "Earl";
// const age = 88;

// console.log(`My name is ${name} and I'm ${age} years old.`);

// let a = 10;
// let b = 15;
// let c = 20;

// console.log(`The sum of ${a}, ${b} and also ${c} will give you ${a + b + c}.`);

// const score = 55;

// const newScore = score + 10;

// console.log(newScore);

// let str = "Hello ";
// let repeatedStr = str.repeat(4);
// console.log(repeatedStr);

// const randNumb = Math.random() * 15;
// console.log(randNumb);

// const flooredRandNumb = Math.floor(Math.random() * 200);
// console.log(flooredRandNumb);

// const password = prompt("Please, input your password");

// if(password.length <= 6) {
//     console.log("Password too short. Must contain 6+ characters");
// } else {
//     console.log("Congrats!! You're in");
// }

// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Congrats, No spaces, You're in");
//     } else {
//         console.log("password cannot contain spaces");
//     }
// } else {
//     console.log("Password too short");
// }

// ---Using && (and) Operator---

// if(password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log ("Valid password");
// } else {
//     console.log ("Invalid Password!!");
// }

// ---Using || (or) Operator---

// const ageGrade = 11;

// if (ageGrade < 5 || ageGrade > 65) {
//   console.log("FREE");
// } else if (ageGrade < 10) {
//   console.log("$10");
// } else if (ageGrade < 65) {
//   console.log("$20");
// }

// let firstName = prompt("Enter your First name");

// if (!firstName) {
//   firstName = prompt("Try Again");
//   // console.log(firstName);
// }

// Switch Statement----

// const dayOfTheWeek = 4;

// switch (dayOfTheWeek) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//         default: console.log("Sorry, I don't know that");
// }

// Revisiting Arrays---

// const colors = [
//   "rad",
//   "bleu",
//   "griin",
//   "yellow",
//   "purple",
//   "orange",
//   "pink",
//   "brown",
//   "cyan",
//   "magenta",
//   "teal",
//   "lime",
//   "indigo",
//   "maroon",
//   "navy",
//   "olive",
//   "orchid",
//   "peru",
//   "plum",
//   "salmon",
// ];

//     colors[0] = "red";
//     colors[1] = "blue";
//     colors[2] = "green";
//     // Updating an array---
//     colors[20]= "color20";
//     colors[21] = "color21";

//     colors.push("color22");
//     colors.pop();
//     colors.shift();
//     colors.unshift("red");
//     colors.reverse();
//     colors.reverse();
//     colors.splice(15, 0, "onomatopoeia-onomatopoeia-onomatopoeia-onomatopoeia");

//     let newColors = colors;

//     console.log(newColors);

// for(let i = 0; i < colors.length; i++){
//     console.log(i, colors[i]);
// }

// console.log(colors[9]);

// Revisiting Objects---

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     email: "john.doe@example.com"
//   };

//   const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Silver"
//   };

//   const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//     yearPublished: 1925
//   };

//   const animal = {
//     species: "Tiger",
//     habitat: "Jungle",
//     averageLifespan: 15,
//     diet: "Carnivore"
//   };

//   console.log(person.lastName);
//   console.log(book['genre']);

//   Nesting Array and Objects---

//   const classroom = {
//     className: "Math 101",
//     students: [
//       { name: "Alice", age: 18 },
//       { name: "Bob", age: 19 },
//       { name: "Charlie", age: 17 }
//     ],
//     teacher: {
//       firstName: "Mr.",
//       lastName: "Smith"
//     }
//   };

//   const charlieAge = classroom.students[2].name;
//   console.log(charlieAge);

//   (Infinite Loop - Changing the i-=100 to i+=100)
// for(i = 4100; i >= 0; i-= 100) {
//     console.log(i);
// }
//   (Infinite Loop - Changing the i-=100 to i+=100)

//   const arrayOfNamesArrays = [
//     ["Tobe", "Evenlny", "Dre"],
//     ["apple", "banana", "cherry"],
//     ["Steph", "Drey", "Curry"]
//   ];

//   for(let i = 0; i < arrayOfNamesArrays.length; i++) {
//     const row = arrayOfNamesArrays[i];
//     console.log(`Row # ${i + 1}`);
//     for(let j = 0; j < row.length; j++){
//         console.log(row[j]);
//     }
//   }

// While Loop----

//   let count = 0;

//   while(count < 40) {
//     count ++;
//     console.log(count);
//   }

// const code = "Babyfish";

//  let guess = prompt("Enter your code");

//  while(guess !== code){
//     if(guess === null){
//         console.log("Please, enter the correct code");
//          break;
//     }
//  }
//  if(guess === code){
//      console.log("Valid Code");
//  }

//  const code = "Babyfish";

//  let guess = prompt("Enter your code");

//  while (guess !== code) {
//    if (guess === null) {
//      console.log("Code entry canceled.");
//      break;
//    }
//    guess = prompt("Please, enter your code");
//  }

//  if (guess === code) {
//    console.log("Valid Code");
//  }

// let maximum = parseInt(prompt("Enter a Maximum number"));
//         while(!maximum) {
//             maximum = parseInt(prompt("Enter a Valid number"));
//         }

// Ternary Operator---

// const isAuthenticated = false;
// const userStatus = isAuthenticated ? "Logged In" : "Logged Out";
// console.log(userStatus);

// const age = 25;
// const message = age >= 18 ? "Adult" : "Minor";
// console.log(message);

// For OF Loop---

// let fullNames =  ["Steph", "Drey", "Curry"];

// for(let full of fullNames) {
//     console.log(full);
// }

// Iterating Over Object using 'For in loop'---

// const testScores = {
//         Keenan: 29,
//         Damon: 67,
//         Kim: 89,
//         Earl: 92
//       };

//       for(let person in testScores){
//         console.log(`${person} scored ${testScores[person]}`);
//       }

//       const newLine = testScores.Keenan;
//       console.log(newLine);

// Using Function---

// function scores(firstName) {
//   const testScores = {
//             Keenan: 29,
//             Damon: 67,
//             Kim: 89,
//             Earl: 92
//           };
//   console.log(testScores);
// }

// scores(`${'firstName'}`);

// function sum(x, y) {
//   if(typeof x !== 'number' || typeof y !== 'number') {
//     return false;
//   }
//   return (x + y);
// }

// console.log(sum(56, 22));

// function callTwice(func){
//   func();
//   func();
// }

// function rolldie() {
//   const roll = Math.floor(Math.random() * 15) + 1;
//   console.log(roll);
// }

// callTwice (rolldie);

// function callTenTimes(f) {
//   for(let i = 0; i < 10; i++){
//     f();
//   }
// }

// callTenTimes(rolldie);

// Function Expression---

// const addedNumber = function(num){
//   return num + num;
// }

// console.log(addedNumber(6));

// const square = (num) => {
//   return num * num;
// }

// console.log(square(6));

// Using the keyword 'This'---

// const earlDetails = {
//   firstName: 'John',
//   lastName: 'Stones',
//   age: 18,
//   address: '14 Campus street, Olympic Marselle, Egypt, cairo',
//   email: 'onlyyouwakacome@gmail.com',
//   eyeColor: 'grey',
//   details(){
//     console.log(`${this.firstName} ${this.lastName} says hello!!`);
//   }
// }

// console.log(earlDetails.details());

// const colors = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "purple",
//     "orange",
//     "pink",
//     "brown",
//     "cyan",
//     "magenta",
// ]

// function print(element){
//   console.log(element);
// }

// colors.forEach(print);

// const names = document.getElementById("name");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   let messages = [];

//   // console.log(messages, "tttt");
//   if (names.value === "" || names.value == null) {
//     messages.push("Name cannot be blank");
//   } else if (password.value.length <= 6) {
//     messages.push("Password must be longer than 6 characters");
//   } else if (password.value.length >= 20) {
//     messages.push("Password  must be less than 20 characters");
//   } else if (password.value === "password") {
//     messages.push("Password cannot be password");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(",");
//   }
// });

// const firstName = document.getElementById("firstname");
// const lastName = document.getElementById("lastname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm-password");
// const tel = document.getElementById("tel");
// const form = document.getElementById("form");
// const errorMsg = document.getElementById("errorMsg");

// form.addEventListener("submit", (e) => {
//   let messages = [];

//   if (firstName.value === "" || firstName.value == null) {
//     messages.push("Please input a first name");
//   }

// //   if (firstName.indexOf("") === -1) {
// //     messages.push("Firstname field cannot contain space");
// //   }

//   if (lastName.value === "" || lastName.value == null) {
//     messages.push("Please input a last name");
//   }

//   if (email.value === "" || email.value == null) {
//     messages.push("Please input your email address");
//   }

//   if (password.value === "" || password.value == null) {
//     messages.push("Please input your password");
//   }

//   if (password.value.length <= 4) {
//     messages.push("Password cannot be less than 4 characters");
//   }

//   if (password.value.length >= 20) {
//     messages.push("Password cannot be more than 20 characters");
//   }

//   if (password.value === "password") {
//     messages.push("Password cannot be password");
//   }

//   if (confirmPassword.value !== password.value) {
//     messages.push("Password does not match");
//   }

//   if (confirmPassword.value === "" || confirmPassword.value == null) {
//     messages.push("Confirm your password");
//   }

//   if (tel.value === "" || tel.value == null) {
//     messages.push("Input your phone number");
//   }

//   if (isNaN(tel.value)) {
//     messages.push("Number field can only accepts numerals");
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorMsg.innerText = messages.join(", ");
//   }
// });


//Carousel Slide Practice Starts Here----

// const reviews = [
//   {
//     id: 1,
//     name: "John Doe",
//     job: "Web Developer",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fportrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg&tbnid=eH4qafLuLpiPYM&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygEegQIARBW..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Frandom-person&docid=anAi59N_Ek2IpM&w=626&h=417&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygEegQIARBW",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna nec enim consequat, eu suscipit est feugiat. Maecenas viverra non leo ac hendrerit. Fusce ut leo nec ex vehicula vulputate.",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     job: "Graphic Designer",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525134479668-1bee5c7c6845%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=TFRIh9iEa4C21M&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygDegQIARBU..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-people&docid=6Q5jdwScsUw-qM&w=1000&h=1499&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygDegQIARBU",
//     text: "Suspendisse in libero non ipsum hendrerit aliquam. Praesent fringilla dolor ac odio vulputate, id volutpat dolor dapibus. Vestibulum id efficitur justo, eget bibendum neque.",
//   },
//   {
//     id: 3,
//     name: "David Johnson",
//     job: "Software Engineer",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1539571696357-5a69c17a67c6%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=-oY7miZTUt20kM&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygCegQIARBS..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-people&docid=6Q5jdwScsUw-qM&w=1000&h=1500&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygCegQIARBS",
//     text: "Cras vel bibendum quam. Nulla facilisi. Donec vel justo vel eros luctus lacinia. Proin eget tincidunt odio, nec pellentesque nisl. Nunc nec lacus ac libero.",
//   },
//   {
//     id: 4,
//     name: "Mec manny",
//     job: "Insta Editor",
//     image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1438761681033-6461ffad8d80%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=BWbn9tI650PW6M&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygBegQIARBQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-people&docid=6Q5jdwScsUw-qM&w=1000&h=667&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygBegQIARBQ",
//     text: "Vel justo vel eros luctus lacinia. Proin eget tincidunt odio, nec pellentesque nisl. Nunc nec lacus ac libero. Cras vel bibendum quam. Nulla facilisi.",
//   },
//   {
//     id: 5,
//     name: "Elneny Job",
//     job: "Farmer and Engineer",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1499996860823-5214fcc65f8f%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=l5xiTX_WDwWEAM&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygHegQIARBd..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-people&docid=6Q5jdwScsUw-qM&w=1000&h=1245&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygHegQIARBd",
//     text: "Donec vel justo vel eros luctus lacinia. Proin eget tincidunt odio, nec pellentesque nisl. Nunc nec lacus ac libero. Cras vel bibendum quam. Nulla facilisi.",
//   },
//   {
//     id: 6,
//     name: "Ismailer Monna",
//     job: "Fountain of life",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1506794778202-cad84cf45f1d%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww%26w%3D1000%26q%3D80&tbnid=9sbMvuKuTNGVBM&vet=12ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygRegQIARBy..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom-people&docid=6Q5jdwScsUw-qM&w=1000&h=1500&q=hd%20random%20people%20images&ved=2ahUKEwjB74rX98eBAxV1nCcCHdnuBfAQMygRegQIARBy",
//     text: "Justo vel eros luctus lacinia. Proin eget tincidunt odio, nec pellentesque nisl. Nunc nec lacus ac libero. Cras vel bibendum quam. Nulla facilisi.",
//   },
//   {
//     id: 7,
//     name: "Earl Morningstar",
//     job: "Front-End Engineer",
//     image:
//       "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F04%2F2ndSaint-58f797b9ac1a7__880.jpg&tbnid=JSPtbWOdd1DdgM&vet=10CC8QMyh4ahcKEwjg47rZ98eBAxUAAAAAHQAAAAAQAw..i&imgrefurl=https%3A%2F%2Fwww.boredpanda.com%2Five-photographed-random-people-from-random-places%2F&docid=rj1myoy1CaNM4M&w=880&h=1320&q=hd%20random%20people%20images&ved=0CC8QMyh4ahcKEwjg47rZ98eBAxUAAAAAHQAAAAAQAw",
//     text: "Eros luctus lacinia. Proin eget tincidunt odio, nec pellentesque nisl. Nunc nec lacus ac libero. Cras vel bibendum quam. Nulla facilisi.",
//   },
// ];

// const img = document.getElementById("customer-img");
// const author = document.getElementById("author");
// const job = document.getElementById("job");
// const info = document.getElementById("info");

// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// const randomBtn = document.getElementById("randomBtn");

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", () => {
//   showPerson();
// });

// function showPerson(){
//   const item = reviews[currentItem];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }

// nextBtn.addEventListener('click', ()=> {
//   currentItem++;
//   if(currentItem > reviews.length -1){
//     currentItem = 0;
//   }
//   showPerson();
// })


// prevBtn.addEventListener('click', ()=> {
//   currentItem--;
//   if(currentItem < 0){
//     currentItem = reviews.length - 1;
//   }
//   showPerson();
// })

// randomBtn.addEventListener('click', ()=> {
//   currentItem = Math.floor(Math.random() * reviews.length);
//   showPerson();
// });

//Carousel Slide Practice Ends Here----



//-----------------------------------REACT PRACTICES BEGINS HERE-----------------------------------











//-----------------------------------REACT PRACTICES ENDS HERE-----------------------------------
