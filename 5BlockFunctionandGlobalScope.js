//Global Scope

var a = 1;
let b = 2;
const c = 3;
/* 
function test() {
    var a = 4;
    let b = 5
    const c = 6;
    console.log('Function Scope:', a, b, c)
}

test (); // this is how you call/run a funtion btw. */

if(true){
    //Block Scope
    var a = 4;
    let b = 5
    const c = 6;
    console.log('If Scope: ', a, b, c)
}

//If scope and global scope cancel each other out. 
// if you console.log both, the global scope changes from 1 to 4.
// var a changed however, "let" (b) and "const" (c) did not  


//var is weird because it can cause confusion and security risk.
// if you have the same variable under var things can get messed up

// for loop


for(let a=0; a < 10; a++){ 
    console.log(`Loop: ${a}`);
    )
}

// if you did "var" = 0...  instead of "let" a = 0
// var changes in the Global Scope if you run the loop

//So BASICALLY VAR IS NOT GOOD.
//LET AND CONST ARE DIFFERENT THAN VAR
//LET AND CONST HAVE A BLOCK LEVEL SCOPE AND VAR HAS A FUNCTION SCOPE.

console.log('Global Scope: ', a, b, c)

//If you console.log these variables, they equal and display different values ex: 1, 2, 3 and also 4, 5, 6 even tho "a, b, c" is stated twice and being set to different values