let x = 2 + '2';

//'' = string ; string - a sequence of characters or whatever is inside '' becomes a character. //

console.log(x);

//console logs 22 --> When you try to add a # and a string, Javascript converts it the easiest way. A # + a string it would put a number w/ the string (b/ if the string is a word like hello, it's hard to combine them together//


let x = 2 + 2  + '2';

//console logs 42: left --> right, would add 2+2 = 4 and a string. So 4 becomes a string and they are placed together//

console.log(x);


let x = 2 + true;

// console logs 3 b/ boolean: true = 1 ; false = 0;//
//In this scenario booleans are always converted to a #//

console.log(x);


let x = 2 + true + '2';

//console logs 32 (Got that one right whew!)//

console.log(x);


let x = true + '2';

//console logs true2 ; In this case boolean becomes a string, eaiser than converting the string to boolean//

console.log(x);


let x = Number('2')

//Explict conversion --> String to a # via Number('2') = 2 ; If you put 'Hello' you will get NaN (error) b/ Hello is not a number//

console.log(x);


let x = Number('Hello')

// You'd get NaN in your log but if you look at the type it is a number//

console.log(typeof(x));


let x = Boolean(1);

//You'd get true because 1 = true. Boolean(5) also equals 1. ONLY Boolean(0) = false ; so letters, words also equals true. 

console.log(x);

//also false : let x = Boolean(''); (Boolean an empty string) If not empty it's true;//
//also false : null , undefined , 0 //


//Using the information to your advantage//

let x = '';

if(x) {

}

//means the same as below?? Just ^ will check if it's not undefined, null or 0 //

if(( x !==undefined) || (x !== null) || (x !== 0)) { 

}



//!== means not equal to//



