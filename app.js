const readline = require('readline');
const { Add } = require('./string-calculator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to String Calculator!");
console.log("Enter a string (e.g. '1,2' or '//[***]\\n1***2***3'):");

rl.question("Your input: ", function (input) {
    try {
        const result = Add(input);
        console.log(`Result: ${result}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
    rl.close();
});
