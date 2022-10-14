const depsMap = new Map();

function track(key){
	let dep = depsMap.get(key);

	if(!dep) {
		depsMap.set(key, (dep = new Set())) // No dep yet, so let's create one
	}

	dep.add(effect); // Add this effect
	// Since it's a set, it won't add the effect again if it already exists
}

function trigger(key){
	let dep = depsMap.get(key); // Get the dep for this key
	if(dep){
		dep.forEach(effect => effect()) // If it exists, run each effect
	}
}

let product = {price: 5, quantity: 2};
let total = 0;

let effect = ()=> {
	total = product.price * product.quantity;
}


track('quantity');
effect();
console.log('total: ', total);

product.quantity = 3;
console.log('product.quantity: ', product.quantity);
trigger('quantity');
console.log('total: ', total);