const readline = require('readline-sync');
const BMI_MAX_AND_MIN = require('./data');

// const weightInKg = 80;
// const heigthInCm = 178;

function handleBMI(weight, heigth) {
    console.log(`Weight: ${weight}, Height: ${heigth}`);

    const heigthInMeters = heigth / 100;
    const heigthSquared = heigthInMeters ** 2;

    const bmi = weight / heigthSquared;

    return bmi;
}

function handleBMIResult(bmi) {
    const statuses = Object.keys(BMI_MAX_AND_MIN);
    
    const resultFind = statuses.find((status) => {
        const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];

        return bmi >= minBMI && bmi <= maxBMI;
    });

    return resultFind;
};


function main() {
    const weight = readline.questionFloat('What\'s your weight? (kg) ');
    const heigth = readline.questionInt('What\'s your height? (cm) ');

    const bmi = handleBMI(weight, heigth);
    const bmiResult = handleBMIResult(bmi)

    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(`${bmiResult}`);
};

main();