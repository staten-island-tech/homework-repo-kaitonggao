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