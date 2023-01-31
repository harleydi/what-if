const prompt = require('prompt-sync')({sigint: true});

let randomNum = prompt('What is your random number: ')

if (randomNum % 3 && randomNum % 5) {
    console.log('fizz buzz')
} else if (randomNum % 3) {
    console.log('fizz')
} else if (randomNum % 5) {
    console.log('buzz')
}