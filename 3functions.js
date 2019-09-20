//Functions: defines code that can be recalled later on.

//FUNCTION DECLARATIONS 


function greet(firstName){
   // console.log(`Hello`); 
    return `Hello ` + firstName; // usually we return functions.
}

console.log(greet('John'));

    // you can put as many parameters in a function as you want. 
    //Ex: function greet(firstName, lastName)
    // then  return `Hello` + firstName + lastName;
    //and console.log(greet('John' , 'Davis'));
    
    //Assigning default values for functions:
    // function greet(firstNam = 'John' ), lastName = 'Doe') {} ; 


//FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x;
};

console.log(square(8)); 
// 3 is out default


//IIFEs = Immediately ivokable function expressions = IIFEs
//function you declare and run at the same time

(function(name){
    console.log('Hello ' + name); 

}) ('Brad'); //add extra paratheses in the end in order to run it.
//put function in parathenses
//name is defined here

//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..')
    }, //comma
    edit: function(id){
        console.log(`Edit todo ${id}`);
    
    }
}

todo.add(); //callingthe function here
todo.edit(22);


// More function examples!
//And how to do it w/ =>

function sayHi(greeting){ 
    return greeting;}

sayHi('Hello!');


//How to do it via arrow functions (it makes sense I think!)

var sayHi = greeting => greeting
sayHi('Hello!');



// so here you have a function, called sayHi, and greeting is inside paratheses because you're doing something with it, you're returnin it.
// to run a function, you just need to write the function name: sayHi('xxxxx'); Put whatever you want your variable to actually be ex: greeting -> now is replaced with 'Hello'!