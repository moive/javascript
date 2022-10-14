const targetMap = new WeakMap(); // For storing the dependencies for each reactive object

function track(target, key){
	let depsMap = targetMap.get(target); // Get the current depsMap for this target (reactive object)
	if(!depsMap){
		targetMap.set(target, (depsMap = new Map())); // If it doesn't exist, create it
	}

	let dep = depsMap.get(key); // Get the dependency object for this property

	if(!dep){depsMap.set(key, (dep = new Set()))} // If it doesn't exist, create it

	dep.add(effect); // Add the effect to the dependency
}

function trigger(target, key){
	const depsMap = targetMap.get(target); // Does this object have any properties that have dependencies?

	if(!depsMap) return; // If no, return from the function immediately

	let dep = depsMap.get(key); // Otherwise, check it this property has a dependency

	if(dep){
		dep.forEach(effect=>{effect()}) // Run those
	}
}

let product = {price: 5, quantity: 2};
let total = 0;
let effect = ()=>{
	total = product.price * product.quantity;
}
track(product, 'quantity');
effect();
console.log('total: ', total)
product.quantity = 3;
console.log('product.quantity: ', product.quantity);

trigger(product, 'quantity');
console.log('total: ', total)

// targetMap:-> where wen store the dependencies associated with each reactive object's properties
// depsMap:-> Where we store the dependencies for each property
// dep:-> A dependency which is a set of effects that should get re-run when values change