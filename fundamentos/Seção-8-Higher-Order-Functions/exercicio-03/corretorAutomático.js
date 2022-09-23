const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    } if (studentAnswers === 'N.A') {
        return 0;
    }
    return -0, 5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
    let counter = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        counter += actionReturn;
    }
    return `Resultado final: ${counter} pontos.`
}
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));