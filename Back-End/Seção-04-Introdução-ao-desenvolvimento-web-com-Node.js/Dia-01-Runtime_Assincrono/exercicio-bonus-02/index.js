function doMath(a, b, c) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
            return reject(new Error('Enter number only!'));

        const result = (a + b) * c;

        if (result < 50) {
            return reject(new Error('Very low value'))
        }

        return(result);
    }); 
};

async function firstResolve() {
    try {
        const resolve = await doMath(10, 10, 10);
        console.log(resolve);
    } catch (error) {
        console.log(error.message);
    }
;}

firstResolve();

async function secondResolve() {
    try {
        const resolve = await doMath(1, 1, 'a');
        console.log(resolve);
    } catch (error) {
        console.log(error.message);
    }
};

secondResolve();

async function thirdResolve() {
    try {
        const resolve = await doMath(1, 1, 1);
    } catch (error) {
        console.log(error.message);
    }
};

thirdResolve();
