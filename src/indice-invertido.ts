let documents = [
	"Hola mundo me gusta python",
	"Con la programación puedes hacerlo todo",
	"Con python puedo crear servicios web",
	"pildoras de programación moive!!!",
];

const results = [];
for (const doc in documents) {
	if (documents[doc].includes("python")) {
		results.push(documents[doc]);
	}
}
console.log({ results });

let users: any = [];
let products: any = [];

const keyBy = (arr: any, key: any) =>
	arr.reduce((acc: any, el: any) => {
		acc[el[key]] = el;
		return acc;
	}, {});

const elem = 50000;
for (let i = 0; i < elem; i++) {
	users.push({ id: i, name: `name-${i}` });
}

for (let i = 0; i < elem; i++) {
	products.push({
		id: i,
		name: `product-name-${i}`,
		user_id: Math.floor(Math.random() * elem),
	});
}

const keyedUsers = keyBy(users, "id");

console.time("1");
const mixed = products.map((x: any) => ({
	...x,
	user: keyedUsers[x.user_id], //users.find((y: any) => y.id === x.user_id),
}));
console.timeEnd("1");
console.log(mixed[0]);
