/* Model  for filtering + sorting + mapping I found here: https://www.javascripttutorial.net/javascript-array-filter/

var cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

 cities.filter(e => e.population < 3000000) 
      .sort((a, b) => (b.population - a.population))
      .map(e => console.log(e.name + ':' + e.population));
 */



const inventors = [
    { first: 'Albert', last: 'Einstein', yearBorn: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', yearBorn: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', yearBorn: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', yearBorn: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', yearBorn: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', yearBorn: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', yearBorn: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', yearBorn: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', yearBorn: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', yearBorn: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', yearBorn: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', yearBorn: 1829, passed: 1909 }
  ];


  //basic filter command using "e", the shorter way of saying inventors or the array name.

 inventors.filter(e => e.yearBorn < 1600 & 1500 <= e.yearBorn) //note to list two terms, you must put & between them. 1500 < e.yearBorn < 1600 did not work.
 .sort((a, b) => (b.yearBorn - a.yearBorn)) //sorts it based on the lenght of numbers.
 .map(e => console.log(e.first + ' ' +  e.last + ': ' + e.yearBorn));
  

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's, use console.table to display the result

 /*

    inventors.filter(e => e.yearBorn < 1600 & 1500 <= e.yearBorn) is the filter only. 
       YOU MUST name it as a var/const so you can call it in console.log

 */

  const bornIn1500s = inventors.filter(e => e.yearBorn < 1600 & 1500 <= e.yearBorn) //
  console.table(bornIn1500s); //console.table lists your terms in a table.

    
    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    //console.table the results


  const mapvalues = inventors.map(e => e.first + ' ' + e.last);
  console.table(mapvalues);

  //map is basically another way to list things that looks a lot like filtering, that states/does stuff for each element in your array.
  //can you map a filter? You bet you can, look at your inventor.filter w/ map commands at the bottom O: which lists stuff for each element of your filter. 






