  // Q1.READ ALL THE INSTRUCTIONS CAREFULLY
  // Select all the list items on the page and convert to array (array.from)

  //How to convert list items to arrays

  const list = Array.from(document.querySelectorAll('li')); // Use Array.from to make your selections into an array
  console.log(list); // you get an array of values


  /* Instead of Array.from you can also use: Array.prototype.slice.call

  Array.prototype.slice.call makes a copy of the array, and values before the # you specify

  const listArray = Array.prototype.slice.call(list, 0); 

  You have an array called listArray which is modified o: 
 
*/


  ///////// Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)


// list = array values
// e in .map is just a variable for the elements in your array.

  const flexboxArray =   list.filter( list=> list.textContent == "Flexbox Video")
  .map(e=>e.dataset.time) //If you put brackets {} you treat it like a function and you must add "return".
  //dataset.time gives you the values dataset.time
  .map(timeCode => {
    const times = timeCode.split(':'); //splits things before + after the colon.
   console.log(times); 
    return (parseInt(times[0] * 60)) + parseInt(times[1]); //after you use split, you get a arrays that have the # before : as times[0] and the # after as times[1];
    //parse makes whatever you write into something else. Ex: parseInt string -> integer
  }).reduce((acc, cv) => acc + cv,0)
  console.log(flexboxArray);

  //whenever you use an arrow function, your variables can be anything if you relist them. But how does the computer know what you're asking for. 

  //reduce -> reduces your array into one value with is total of all your values. and seconds,0 is the value you want.

  //const reducer = (accumulator, currentValue) => accumlator + currentValue.




  // reduce to get total....This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!


  //How to chain them, don't use ; at the end of a line. const filtered = array method
  //.array method
  //.array method
  //etc.
  



  //Q2
  //Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`

 // LITERALLY THE ONLY THING I HAD A CLUE HOW TO DO

 const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92]
console.log(`${numbers}`); 

const numbersOver70 = numbers.filter(e => e>70);
console.log(numbersOver70);

