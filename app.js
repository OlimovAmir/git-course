const sum1 = [1, 2, 3, 5];

const resultSum1 = sum1.reduce((previous, current) =>{
    return  previous + current
    },0);
console.log(resultSum1);