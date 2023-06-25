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
