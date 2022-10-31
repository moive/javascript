// 1) Turn an array of numbers into a total of all the numbers
const arr = [1, 2, 3];
var voters = [
	{ name: "Bob", age: 30, voted: true },
	{ name: "Jake", age: 32, voted: true },
	{ name: "Kate", age: 25, voted: false },
	{ name: "Sam", age: 20, voted: false },
	{ name: "Phil", age: 21, voted: true },
	{ name: "Ed", age: 55, voted: true },
	{ name: "Tami", age: 54, voted: true },
	{ name: "Mary", age: 31, voted: false },
	{ name: "Becky", age: 43, voted: false },
	{ name: "Joey", age: 41, voted: true },
	{ name: "Jeff", age: 30, voted: true },
	{ name: "Zack", age: 19, voted: false },
];

var wishlist = [
	{ title: "Tesla Model S", price: 90000 },
	{ title: "4 carat diamond ring", price: 45000 },
	{ title: "Fancy hacky Sack", price: 5 },
	{ title: "Gold fidgit spinner", price: 2000 },
	{ title: "A second Tesla Model S", price: 90000 },
];

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const total = arr.reduce((acc, elem) => acc + elem, 0);
console.log("total: ", total);

// 2) Turn an array of numbers into a long string of all those numbers.
const stringConcat = arr.reduce(
	(acc, elem) => acc.toString() + elem.toString(),
	""
);
console.log("stringConcat: ", stringConcat);

// 3) Turn an array of voter objects into a count of how many people voted
const totalVotes = voters.reduce((acc, curr) => acc + (curr.voted ? 1 : 0), 0);
console.log("totalVotes:", totalVotes);

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const shoppingSpree = wishlist
	.map((item) => item.price)
	.reduce((acc, ele) => acc + ele, 0);

console.log("shoppingSpree", shoppingSpree);

// 5) Given an array of arrays, flatten them into a single array

const flatten = arrays.flat();
// const flatten = arrays.reduce((acc, item) => acc.concat(item), []);
console.log("flatten", flatten);

// 6) Given an array of potential voters, return an object representing the results of the vote

/* Include how many of the potential voters were in the ages 18-25,
how many from 26-35, how many from 36-55, 
and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties. 

Returned value shown below:
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
} */

const voterResults = voters.reduce(
	(acc, item) => {
		if (item.age >= 18 && item.age <= 25 && item.voted) {
			acc.numYoungVotes++;
		}

		if (item.age >= 18 && item.age <= 25) {
			acc.numYoungPeople++;
		}

		if (item.age >= 26 && item.age <= 35 && item.voted) {
			acc.numMidVotesPeople++;
		}

		if (item.age >= 26 && item.age <= 35) {
			acc.numMidsPeople++;
		}

		if (item.age >= 36 && item.age <= 55 && item.voted) {
			acc.numOldVotesPeople++;
		}

		if (item.age >= 36 && item.age <= 55) {
			acc.numOldsPeople++;
		}

		return { ...acc };
	},
	{
		numYoungVotes: 0,
		numYoungPeople: 0,
		numMidVotesPeople: 0,
		numMidsPeople: 0,
		numOldVotesPeople: 0,
		numOldsPeople: 0,
	}
);
console.log("voterResults", voterResults);

// https://dev.to/rakshithbellare/array-reduce-method-in-javascript-330d
// https://coursework.vschool.io/array-reduce-exercises/
