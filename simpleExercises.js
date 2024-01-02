// Write code that solves the following problems.
// Run script => node simpleExercises.js

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




/*
Tap A can drain a pool in 3 hours, tap B in 8 hours, and tap C in 12 hours.
Accordingly, if 3 taps are opened at the same time, how long does it take to fill the pool?


time = 1/3 + 1/8 - 1/12
console.log(`It fills in ${1/parseFloat(time)*60} minutes`)


/*
Write the code that performs the following operation by reading the numbers a, b and c from the user.
a2 + b2 + c2
*/

/*
rl.question("Enter the number A. ", function(a) {
    rl.question("Enter the number B. ", function(b) {
        rl.question("Enter the number C. ", function(c) {
            
            x = a**2 + b**2 + c**2
            console.log(`${x}, exponentiation`);
            rl.close();

        })
    });
});
*/


// Write code that finds the date of birth in years by taking today's date and how old the user is.

rl.question("Today's date?", function(date) {
    rl.question("Your Date of Birth?", function(birthday) {
        x = date - birthday
        console.log(`You are ${x} years old.`);
        rl.close();
    });
});
