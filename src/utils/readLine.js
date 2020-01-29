const readline = require('readline');

const getLine = () => {
	const input = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	const getLineGen = (async function* get() {
		process.stdout.write("Type here your GitHub's username: ");
		for await (const line of input) {
			input.close();
			yield line;
		}
	})();

	return async () => (await getLineGen.next()).value;
};

module.exports = getLine;
