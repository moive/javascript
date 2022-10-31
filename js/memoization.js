"use strict";
const memoization = (fn) => {
    let results = {};
    return (arg) => {
        if (!results[arg]) {
            console.log(`results[${arg}] not saved`);
            results[arg] = fn(arg);
        }
        else {
            console.log(`results[${arg}] saved`);
        }
        return results[arg];
    };
};
const mult2 = memoization((x) => x * 2);
console.log(mult2(1));
console.log(mult2(1));
console.log(mult2(1));
const request = memoization(async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data;
});
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
request(2).then((r) => console.log(r));
const sumNumbers = memoization((limit) => {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        sum += i;
    }
    return sum;
});
console.time("sumNumbers");
console.log(sumNumbers(10000));
console.timeEnd("sumNumbers");
console.time("sumNumbers");
console.log(sumNumbers(10000));
console.timeEnd("sumNumbers");
console.time("sumNumbers");
console.log(sumNumbers(10000));
console.timeEnd("sumNumbers");
