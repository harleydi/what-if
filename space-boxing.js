const prompt = require('prompt-sync')({sigint: true});

let earthWeight = prompt('What is your Earth weight: ')
let planet = prompt('What planet are you visiting ')

if (planet === 'Venus') {
    let newWeight = earthWeight * 0.78
    console.log(`Your weight will be ${newWeight}`)
} else if (planet === 'Mars') {
    let newWeight = earthWeight * 0.39
    console.log(`Your weight will be ${newWeight}`)
} else if (planet === 'Jupiter') {
    let newWeight = earthWeight * 2.65
    console.log(`Your weight will be ${newWeight}`)
} else if (planet === 'Saturn') {
    let newWeight = earthWeight * 1.15
    console.log(`Your weight will be ${newWeight}`)
} else if (planet === 'Uranus') {
    let newWeight = earthWeight * 1.05
    console.log(`Your weight will be ${newWeight}`)
} else if (planet === 'Neptune') {
    let newWeight = earthWeight * 1.23
    console.log(`Your weight will be ${newWeight}`)
} 
