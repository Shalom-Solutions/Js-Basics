/*let name = 'Juwon'; //string literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedValue = null;


//Objects
let person = {
    neme: 'Juwon', 
    age: 30
};
console.log(person);
//Dot notation
person.name = 'Samson';


//Bracket Notation
person['name'] = 'Ehis';
console.log (person.name);


let selectedColors = ['red', 'blue'];
//console.log(selectedColors[0]);
//adding another element to the array
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);

//Functions
//Performing a task
function greet(name, lastName) {
console.log('Hello ' + name + '' + lastName);
}

greet('John', 'Smith');
greet('Mary');

//Calculating a value
function square(number) {
    return number * number;
}
   

//let number = square(2);
//console.log(number);
console.log(square(2));

let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / ;y);
// console.log(x % y);
// console.log(x ** y);

//Increment (++)
console.log(++x);
console.log(x++);
console.log(x);



//Decrement
console.log(--x);
console.log(x--);
console.log(x);


// Assignment operators
let x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;

console.log(x);

//Comparison Operators
//Relational
let x = 1;
 console.log(x > 0);
 console.log(x >= 1);
 console.log( x < 1);
 console.log( x <= 1);

 //Equality
console.log(x === 1);
console.log (x !== 1);

//Strict equality operator (Type + Value)
console.log(1 === 1);
console.log('1' === 1);

//Lose Equality (Value)
console.log( 1 == 1);
console.log('1' == 1);
console.log(true == 1);


//Tenary or Conditional Operators
//If a customer has more than 100 points,
//they are a 'gold customer', otherwise,
//they are a 'silver customer'.

let points = 90;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


//Logical Operators AND &&
//Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(true && false);

//example
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoad = highIncome && goodCreditScore;

console.log(eligibleForLoad);

//Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoad = highIncome || goodCreditScore;

console.log('Eligible', eligibleForLoad);

// NOT (!)
let applicationRefused = !eligibleForLoad;

console.log('Application Refused', applicationRefused);


// Falsy (false)
// undefined 
// null
// 0
// false
// '' - empty string
// NaN

// Anything that is not Falsy -> Truthy

//short- circuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);


// Bitwise Operators 

// Swapping the values of two operators
let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


// Conditional Statements
// Hour
// If hour is between 6am and 12pm : Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;

if (hour >= 6 && hour < 12) 
    console.log('Good morning!');
else if (hour >= 12 && hour < 18) 
    console.log('Good afternoon!');
else
    console.log('Good evening!');


// Switch case
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
        
    case 'moderator':
        console.log('Moderator User');
        break;
        
    default:
        console.log('Unknown User');
    }


// Loops - repeat an action a number of times
// for, While, Do-while, for-in, For-of
// For statement
for (let i = 5; i >= 1; i--) {
   if (i % 2 !== 0) console.log(i);
}


// While loop
let i = 0
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do-while 
let i = 0;


//For-in loop

const person = {
    name: 'Juwon',
    Age: 26
}

for (let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
console.log(index, colors[index]);

// for-off loop is the ideal way to iterate over arrays
for (let color of colors)
console.log(color);


let i = 0;
while (i <= 10) {
   // if (i === 5) break;
    if (i % 2 === 0){
        i++;
        continue
    }
    console.log(i);
    i++;
}
//With the break key word we jump out of a loop and with the continue key word we jump to the next iteration


let x = 2;
let y = 3;

if ( x> y){
    console.log('x is grater than y');
}
else
console.log('y is greater than x');

let numbe = max(5, 10);
console.log(number);

function max(a,b) {
   // if (a > b) return a;
   // return b;

    //(condition) ? a : b
    return (a > b) ? a : b;
}


console.log(isLandscape(101, 20));

function isLandscape(width, height){

    return (width > height);
}



//Fizzbuzz challenge
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
    return NaN;
    
    if (((input % 3) && (input % 5)) === 0)
    return 'FizzBuzz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 3 === 0)
    return 'Fizz';

    if (input % 5 === 0)
    return 'Buzz';


    return input;
};


showNumbers(10);

function showNumbers(limit){
    for (let i=0; i <= limit; i++) {
      //  if (i % 2 === 0)
        //    console.log(i, 'EVEN');
          //  else console.log(i, 'ODD');

           const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
           console.log(i, message);
    }
}

const movie = {
    title: 'a',
    releaseYear: 2020,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);


function showProperties(obj) {
    for (let key in obj){
       // console.log(key);
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);
    }
}

//Exercise 8 -Sum of multiples of 3 and 5
console.log(sum(10));

// Multiples of 3: 3,6.9
// Multiples of 5: 5,10

function sum(limit){
    let sum = 0; //initialization

   for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;

}


//Calculating grade
const array = [80,80,50];

// Average = 70
// 1-59: F
// 60-69: D
// 70-79: c
// 80-89: B
// 90-100: A leonardo davinci -simplicity is the ultimate sufistication

console.log(calculateGrade(array));

function calculateGrade(marks){
   const average = calculateAverage(marks);
    if (average < 60)
    return 'F';
    if (average < 70)
    return 'D';
    if (average < 80)
    return 'C';
    if (average < 90)
    return 'B';
    return 'A';
    //simple responsibility principle
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array)
    sum += value;
   return sum / array.length;
}

showStars(5);

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
        pattern += '*';

        console.log(pattern);
    }
}
*/

// Show prime Numbers
showPrimes(20);

// Prime (whose factors are only 1 and itself)
// Composite

// 12 = 1, 2, 3, 4, 6, 12

function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
         if (isPrime(number)) console.log(number)

}

function isPrime(number) {
    for ( let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    
    return true;
}
