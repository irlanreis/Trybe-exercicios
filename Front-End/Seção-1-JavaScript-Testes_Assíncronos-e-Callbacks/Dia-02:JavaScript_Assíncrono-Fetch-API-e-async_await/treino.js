const obj = [
    {
        key: {
            key1: 5, 
            key2: 5,
        }
    }
]

const vaso = obj.map(({ key : {key1, key2} }) => key1 +  key2);
console.log(vaso);