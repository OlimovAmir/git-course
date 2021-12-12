const sum = [1, 2, 3, 5];

const resultSum = sum.reduce((previous, current) =>{
    return  previous + current
    },0);
console.log(resultSum);