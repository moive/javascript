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
