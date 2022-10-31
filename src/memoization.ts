const memoization = (fn: Function) => {
	let results: any = {};

	return (arg: any) => {
		if (!results[arg]) {
			console.log(`results[${arg}] not saved`);
			results[arg] = fn(arg);
		} else {
			console.log(`results[${arg}] saved`);
		}

		return results[arg];
	};
};

const mult2 = memoization((x: number) => x * 2);

console.log(mult2(1));
console.log(mult2(1));
console.log(mult2(1));

const request = memoization(async (id: number) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const data = await res.json();
	return data;
});

request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
request(2).then((r: any) => console.log(r));
