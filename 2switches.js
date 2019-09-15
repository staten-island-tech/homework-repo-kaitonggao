//Switches = a much more quicker way to write if else statements.

const color = 'red'

//focus: color as the variable
//cases = each instance color is a certain value
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    //default statement if neither is true
    default:
        console.log('Color is not red or blue');
    }

//Use switches for situations with many cases.

//.getDay gets the date in number form with 0 = Sunday.

switch(new Date().getDay()) {
    case 0: 
        day = 'Sunday';
            break;
    case 1:
        day = 'Monday';
            break;
    case 2:
        day = 'Tuesday';
            break;
    case 3:
        day = 'Wednesday';
            break;
    case 4:
        day = 'Thursday';
            break;
    case 5:
        day = 'Friday';
            break;
    case 6:
        day = 'Saturday';
            break;

}

console.log(`Today is ${day}`);