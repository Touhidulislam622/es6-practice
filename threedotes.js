const age1 = [15, 12, 13, 14, 15];
const age2 = [16, 17, 18, 19, 20, 21, 22];
const age3 = [15, 12, 13, 15];
// const allages = age1.concat(age2).concat([5]).concat(age3);
const allages2 = [...age1, ...age2, 5, ...age3]
// console.log(allages);
console.log(allages2);