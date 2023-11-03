//Exercises 1 - ECMAScript6
//Exercise 1

//JAVASCRIPT
let user={
   name:"John",
    years:30
};

//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)

let {name, years, isAdmin = false } = user;

console.log(name);
console.log(years);
console.log(isAdmin);

//Exercise 2
//1.Create the variable with the name of our planet.
// Create the variable to store the name of the current visitor.
 
let ourPlante  = "life";
let currentVisitor  = "Wafa";
console.log(ourPlante);
console.log(currentVisitor);

//Exercise 3
//Look at the code. 
//What will be result of the call at the last line and why?
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
   // alert(`${phrase}, ${user}`)

  }
}

sayHi()
//it will be alert Hello,John,
// because if is true and its true

//Exercise 4
//1.Create an empty object user.
//2.Add the property name with the value John.
//3.Add the property surname with the value Smith.
//4.Change the value of the name to Pete.
//5.Remove the property name from the object.
const user1 = {};
user1.name = "John";
user1.surname = "Smith";
user1.name = "Pete";
delete user1.name 

console.log(user1);

//Exercise 5
//Is it possible to change an object declared with const,
// how do you think and why?
const user2 = {
  name: "John"
}
console.log(user2)
// does it work?
user2.name = "Pete"
console.log(user2);
//yes , its possible to change an object declared with const


//Exercise 6
//Write a code to sum all salaries and store in the variable sum. 
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
let sum = 0;
for(let key in salaries){sum += salaries[key]};
console.log(sum);
//If salaries is empty, then the result must be 0.
let salaries1 = ""
if (salaries1 == '') {
   Sum = 0;
}
console.log ( Sum) 

//Exercise 7
//Rewrite this if using the ternary operator '?':


//if (a + b < 4) {
 // result = 'Below';
//} else {
// result = 'Over';
//}
let a = 1
let b = 4
let result = (a + b < 4) ? "Below" : "Over";
console.log (result);

//Exercise 8
//Rewrite if..else using multiple ternary operators '?'.

//let message;

//if (login == 'Employee') {
 // message = 'Hello';
//} else if (login == 'Director') {
//  message = 'Greetings';
//} else if (login == '') {
 // message = 'No login';
//} else {
 // message = '';
//}

let login = "Employee";
let message = (login=="Employee") ? "Hello" :(login == 'Director')
 ?"Greetings" : (login == '') ? "No login" : "";
 console.log(message);

 
 