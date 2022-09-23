const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor(Math.random() * 5 + 1);
    console.log(number)
    return callback(myNumber, number) ? 'lucky day, you won!' : 'Try again!';
};

console.log(lotteryResult(2 , numberChecker));