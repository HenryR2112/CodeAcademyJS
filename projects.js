// set temp for today
var kelvin = 0;
//conversion of kelvin to C is subtract 273
var celsius = kelvin - 273;
//conversion equation of C to F
var fahrenheit = celsius * (9/5) + 32;
// conversion gives decimal so floor removes
Fahrenheit = Math.floor(fahrenheit)
var Newton = celsius * (33/100);
// conversion gives decimal so floor removes
newton = Math.floor(Newton);
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton`)



var myAge = 19
var earlyYears = 2
earlyYears = earlyYears * 10.5
var laterYears = myAge - 2
laterYears *= 4
console.log(earlyYears)
console.log(laterYears)
 myAgeInDogYears = earlyYears + laterYears
myName = 'Henry'.toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)



var userName = ''
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!')
var userQuestion = ''
console.log(`I will now answer: ${userQuestion}, ${userName}`)
var randomNumber = Math.floor(Math.random() * 8)
var eightBall = ''
switch (randomNumber){
    case 0: 
      console.log('It is certain')
      break;
    case 1:
      console.log('It is decidedly so')
      break;
    case 2: 
      console.log( 'Reply hazy try again')
      break;
    case 3: 
      console.log( 'Cannot predict now')
       break;
    case 4: 
        console.log( 'Do not count on it')
        break;
    case 5: 
      console.log( 'My sources say no')
      break;
   case 6: 
    console.log( 'Outlook not so good')
    break;
    case 7:
     console.log( 'Signs point to yes')
    break;
}
console.log(eightBall)


let raceNumber = Math.floor(Math.random() * 1000);
var earlyCheck = (false);
var runnerAge = 18;
if (runnerAge > 18){
  raceNumber += 1000
}
if ( runnerAge > 18 && earlyCheck === true){
  console.log(`Your Race time is 9:30 AM! Your race number is: ${raceNumber}`)
}
else if ( runnerAge > 18 && earlyCheck === false){
  console.log(`Your Race time is 11:00 AM! Your race number is: ${raceNumber}`)
}
else if (runnerAge < 18){
   console.log(`Your Race time is 12:30 PM! Your race number is: ${raceNumber}`)
}
else if (runnerAge === 18){
   console.log("Please come to the Registration desk before 9:30AM!")
}









const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};

const getComputerChoice = (randomNumber) => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The Round was a TIE";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Computer WON";
    } else {
      return "The Human WON";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer WON";
    } else {
      return "The Human WON";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Computer WON";
    } else {
      return "The Human WON";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(`Your Selection ${userChoice}`);
  console.log(`I selected ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();






const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 9;
  } else if (day === "saturday") {
    return 10;
  } else if (day === "sunday") {
    return 11;
  }
};
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 9 * 7;
  return idealHours;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the Perfect amount of Sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You are getting " +
        (actualSleepHours - idealSleepHours) +
        " hours MORE Sleep then you need!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You are getting " +
        (idealSleepHours - actualSleepHours) +
        " hours Less Sleep then you need!"
    );
  }
};

calculateSleepDebt();



// The scope of `random` is too loose

const getRandEvent = () => {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight
const name = "Nala";
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);



let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to');
secretMessage.push('Program');
secretMessage[7] = 'right'
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '))



//WHALE TALK
const input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }

  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
