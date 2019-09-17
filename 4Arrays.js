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


    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's, use console.table to display the results


    const bornIn1500 = inventors.yearBorn.filter( inventors.yearBorn => 1600 > inventors.yearBorn >= 1500);


    console.log(bornIn1500);
 


    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    //console.table the results
   
 

   






