
//Exercise 1
//The following function returns true if the parameter age is greater than 18.

//Otherwise, it asks for a confirmation and returns its result.
//Rewrite it, to perform the same, 
//but without if...else, and using arrow function.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm ('Do you have your parents permission to access this page?');
  }
}


function checkAge(age) {
  return (age > 18) ? 'true' : 'Do you have your parents permission to access this page?';

}

console.log(checkAge(17))

//Exercise 2
//Write a function pow(x,n) that returns x in power n. Or, 
//in other words, multiplies x by itself n times and returns the result.
//P.S. In this task the function should support only natural values of n: integers up from 1.


//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...* 1 = 1
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = ("x?", '');
let n = ("n?", '');

if (n < 1) {
  (`Power ${n} is not supported, use a positive integer`);
} else {
  ( pow(x, n) );
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));



//Exercise 3
//Replace Function Expressions with arrow functions in the code:

//function ask(question, yes, no) {
  //if (confirm(question)) yes()
  //else no()
//}

//ask(
  //"Do you agree?",
  //function() { alert("You agreed.") },
  //function() { alert("You canceled the execution.") }
//)

const ask = (question, yes, no) => {
  if ((question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => { console.log("You agreed."); },
  () => { console.log("You canceled the execution."); }
);





//Exercise 4
//Create an object calculator with three methods:

//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

//let calculator = {
  // ... your code ...
//};

//calculator.read();
//alert( calculator.sum() );
//alert( calculator.mul() );

let calculator = {
  value1: 0,
  value2: 0,

  read: function () {
    this.value1 = parseFloat(("Enter the first value:"));
    this.value2 = parseFloat(("Enter the second value:"));
  },

  sum: function () {
    return this.value1 + this.value2;
  },

  mul: function () {
    return this.value1 * this.value2;
  },
};

calculator.read();
console.log("Sum: " + calculator.sum());
console.log("Multiplication: " + calculator.mul());






//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. 
//Use arrow function along with the question mark operator ?

const min = (a, b) => (a < b ? a : b);
console.log(min(6,4));
console.log(min(9,9));
