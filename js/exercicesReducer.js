// 1) Turn an array of numbers into a total of all the numbers
const arr = [1, 2, 3];
const total = arr.reduce((acc, elem) => acc + elem, 0);
console.log("total: ", total);

// 2) Turn an array of numbers into a long string of all those numbers.
const stringConcat = arr.reduce(
	(acc, elem) => acc.toString() + elem.toString(),
	""
);
console.log("stringConcat: ", stringConcat);

// 3) Turn an array of voter objects into a count of how many people voted
// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// 5) Given an array of arrays, flatten them into a single array
// 6) Given an array of potential voters, return an object representing the results of the vote
