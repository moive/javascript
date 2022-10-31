const memoization = (fn: Function) => {
	let results: any = {};

	return (arg: any) => {
		if (!results[arg]) {
			results[arg] = fn(arg);
		}
		return results[arg];
	};
};
