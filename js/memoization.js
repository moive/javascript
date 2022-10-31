"use strict";
const memoization = (fn) => {
    let results = {};
    return (arg) => {
        if (!results[arg]) {
            results[arg] = fn(arg);
        }
        return results[arg];
    };
};
