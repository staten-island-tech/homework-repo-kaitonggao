//best features in ES6 -> object + array destructuring.
// Take an array/object and break it up into smaller variables.

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

/* 

before to call just A or B you'd have to do

const a = alphabet[0]
const b = alphabet [1]

console.log(a);

However with DESTRUCTURING

you can have a = A or b = B with just

******
const [a,b] = alphabet.
console.log(a);
******

element on right side that you want to destructure : in this case it's alphabet.
Destructure alphabet array into constants: a , b (use [] array brackets b/ alphabet is an array)

The first element is called "a" 
The second element is called "b"

******
to skip:
const [a,,c] = alphabet.
no second element is called.
******

*/

//******SPREAD OPERATOR : ...

const [a,,c, ...rest] = alphabet 

// ... = spread operator. ... = all leftover elements are all called "rest".

console.log(a);
console.log(c);
console.log(rest);

//******COMBINING TWO ARRAYS : alphabet + numbers

const newArray = [...alphabet, ...numbers]
console.log(newArray);

//This makes a new array called "newArray" that has ALL alphabet array elements  AND numbers array elements.
// Side note: combinding arrays is doable with const newArray = alphabet.concat(numbers) not objects tho.

// use spread to combine objects + return more than 1 parameter per function.


// functions : you want to get values of both adding a and b and multiplying a and b

//**** REMEMBER for functions (ARROW FUNCTIONS TOO) what you put in () can be ANYTHING
//****** like e, or something. What matters is the value you give it when you call it.

function sumAndMultiply(a,b){ 
    return [a+b, a*b];
}

const array = sumAndMultiply(2,3);
console.log(array);

//******DESTRUCTURING: split it into two seperate values:

const [sum,multiply] = sumAndMultiply(2,3)
console.log(sum); //first function value = sum
console.log(multiply); //2nd = multiply


/* //****** NEW VARIABLES W/ DEFAULT VALUES.

******
const [sum,multiply, division = 'No division']
******

/ if  you never gave division a value: ex: in the function you didn't do a/b
/ then whne you deconstruct it you have nothing to deconstruct
/ console.log(division) gives you "No division"
*/

//******USING WITH OBJECTS

//**Note objects are basically extended "const"
//**Class is technically an object...
//**uh methods are functions in objects???

const personTwo = { 
    name: 'Kai',
    age: 17,
    address: {
        country: 'Japan',
        city: 'Tokyo'
    }
}

const {name,age} = personTwo
//console.log(name);
//console.log(age);
//no longer based on position but variable names in object must match


/* if you want to change variables -> set name value to "firstName" variable

******
const {name: firstName , age} = personTwo
console.log(firstName);
******
/just use a colon. Now when you called firstName, it matches the value you set for name.


//ADD NEW VALUES VIA DEFAULT

******
const {name: firstName , age, food = 'Onigiri'} = personTwo
******
console.log(food);

// you now have a new variable food with a value o: without changing anything in your object.
// but note that if you actually set it to a value in your object, that default value will be overridden.
*/


//******WHAT IS NESTING? 
/*when you have an object and variables inside a variable.
ex: address have nested values: city + country */


//DESTRUCTING nested objects:

//destructure and call city (object inside address)

/* *****
const { name: firstName , age, food = 'Onigiri', address: {city} } 
console.log(city);
***** */

//use ":{}" in a destructure.



//OVERIDDEN VALUES - if you share values and you combine arrays set only first listed if variables are shared.

const personOne= { 
    age: 18,
}

const personThree = {...personOne, ...personTwo}
// lists values of personOne first, ex: age, and then values of persoTwo. Anything personTwo also has gets overridden.


//EXAMPLE: FUNCTIONS
//start with:

/*function printUser(e){
    console.log(e)
    //if you only want name to be listed of personTwo? 
    console.log(`Name is: ${e.name}`)
}

printUser(personTwo); // lists whole object personTwo.

*/

// USE DESTRUCTING IN FUNCTIONS
//within printUser you split up object: (that you later call in function as personTwo) to just get name.

//how you do it. Use {} inside function name
//call whatever you split up later in the function. Don't forget ${}!

function printUser({name, favoriteFood = 'watermelon'}){
    //if you only want name to be listed of personTwo? 
    console.log(`Name is: ${name}. Fav food is ${favoriteFood}`)
}

printUser(personTwo); 

