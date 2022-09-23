// const returnString = () => 'Acordando!!'

// const returnString2 = () =>'Bora tomar café!!'

// const returnString3 = () =>'Partiu dormir!!'

// console.log(returnString(), returnString2(), returnString3())

const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result)
};
doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);

