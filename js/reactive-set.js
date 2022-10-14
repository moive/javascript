let price = 5;
let quantity = 2;
let total = 0;

let dep = new Set(); // To store our effects

let effect = () => {
	total = price * quantity;
	console.log(total);
};

function track() { dep.add(effect)} // Add the code

function trigger() {dep.forEach(effect=> effect())} // Re-run all the code in storage

track();
effect();

quantity = 3;

trigger()