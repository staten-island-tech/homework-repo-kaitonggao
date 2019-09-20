//arrow functions = easy way to write functions in E6

// ex: var timesTwo = params => parmas *2


//timesTwo(4) //8

// Here, you are stating that 4 = to params, and the arrow function means that you are taking parms multiplying it by two.
//much shorter way to run fuctions - emits curcly braces and return

/*

Different Syntaxes aka ways to use:

//
NO PARAMETERS //I'm confused why you'd use this tbh
() => 42  If there are no parameters you can place empty parenthses.
or no parathesis owo

//

ONE PARAMETER // why would I use this? is x = 42? owo

x => 42 || (x) => 42

//

MULTIPLE PARAMETERS
(x,y) => 42

//

LOOK AT THIS EXAMPLE

var feedTheCat = (cat) => {
    if (cat === 'hungry'){
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}

//console.log(feedTheCat('nothungry')); //gives do not feed the cat o:
// console.log(feedTheCat('hungry')); //gives feed the cat

//By using => you no longer have to write function(cat)
//You name it var = (feedTheCat) because that's how you're gonna run it (console.log(feedTheCat))

//

BLOCK BODY 

// if function is in a block you have to state return.

// What are blocks? The item that is made up of statements inside {} the curly braces 


var addValues = (x, y) => {
  return x + y
}

// I feel like a genius owo How to run functions 101 solved O:
// console.log(addValues(1,2));

//

OBJECT LITERALS 

//Plz ask what an object literal is 

An object literal (whatever that is, must be wrapped in parathesis.)

x =>({ y: x })


//

NOTES

- arrow functions are not named (aren't they like specificed with "var" tho?) LIke other functions????
- benefit of arrow functions means that you don't have to us "this"


///

Extra:

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};

// usually... you'd write "function(){
                           stuff I want done   }




  var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

//but with arrow functions you don't? 

//I'm pretty confused on why sometimes functions have a variable inside and sometimes they don't?
Are variables like not required? Are they like only required if you're doing something w/ it and it then needs to be stated??? 

*/

// The below (without the green) gives an error, because the function, description, doesn't know where to get "this.owner" from.
// this.owner = undefined

//the green are 2 different solutions: either adding pets so it knows to call it from pets or "bind" this.

var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      return this.names.map(function(pet){
        return `${this.owner} knows an awesome dog named ${pet}.`
    }, /* pets */ // or add pets at the end so this.owner -> function calls owner FROM pets
     /*.bind(this) */   )} // add .bind to fix 
  };
  
console.log(pets.description())
  
  
