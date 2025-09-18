const myArr = {A:"apple", B:"ball", C:"cat"}

console.log(typeof(myArr));

const myArrAsString = JSON.stringify(myArr)

console.log(typeof(myArrAsString));

const sample = JSON.parse(myArrAsString)
console.log(typeof(sample));