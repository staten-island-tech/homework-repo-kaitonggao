  // Q1.READ ALL THE INSTRUCTIONS CAREFULLY
  // Select all the list items on the page and convert to array (array from)

  //How to convert list items to arrays

  const list = document.querySelectorAll('li'); // selects all items  <li> and automatically makes it an array
  console.log(list); // you get an array of values


  // Array.prototype.slice.call makes a copy of the array, and values before the # you specify
  const listArray = Array.prototype.slice.call(list, 0); //lists items called in array list , # calls all values after it. 
 


  ///////// Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)



/*
https://www.freecodecamp.org/news/how-to-call-javascript-code-on-multiple-div-elements-without-the-id-attribute-59596e570fcf/
*/

  const flexboxArray =   listArray.filter( e=> e.textContent == "Flexbox Video")// filter only works on a copy of the array i guess or if you put it all together...

  .map(e=> console.log(e));
  //.map(liNode => liNode.getAttribute('data-time')) I know it works but I don't know why ;w;
  console.log(flexboxArray);



    
  // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 



  
  // map to an array of seconds, 
 /*.map(timeCode => {
    const parts = timeCode.split(':').seconds);
    //console.log(parts); 
    return seconds
}) */




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

