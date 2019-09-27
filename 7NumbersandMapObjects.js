const num1 = 100;
const num2 = 50;
let val;

  
//simple math with numbers 

console.log(val);
    
val = num1 + num2; //150
    
val = num1 * num2; //5000
    
val = num1 - num2; //50
    
val = num1 / num2; //2
    
 val = num1 % num2; //Modulus Gives remainder.
    
    
    
//Math is an object, has properties + methods
// properity = attribute, method = function.

// Basically these values/functions are already defined. 

val = Math.PI; // gives value pi
val = Math.E;   // euler's number

val = Math.round(2.8); //rounds to 3
val = Math.round(2.4); //rounds to 2

// specify whether to round up or down...
//cell = round up
//floor = round down

val = Math.cell(2.4); //3
val = Math.floor(2.8) // 2

//More Math stuffs

val = Math.sqrt(64); 
val = Math.abs(-3);
val = Math.pow(8, 2); //gives power of something 8^2
    
val = Math.min(2, 243, 342, 234, 43, -2); // returns only minimum #

val = Math.max(2, 243, 342, 234, 43, -2); // returns only max
    
val = Math.random(); // gives random decimal


//RANDOM WHOLE NUMBER ALWAYS
val = Math.floor(Math.random() * 20 + 1); //*20 + 1 means you get a random # between 1 and 20, it's always a whole # because it's rounded fown
    
    
console.log(val);
    
