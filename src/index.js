const { whoDoesNotFollowMe } = require('./utils/whoDoesNotFollowMe');

const person = 'lucasnaja';

async function main() {
	console.log(
		`\x1b[32mVerifying the followers from \x1b[37m${person}\x1b[32m...\x1b[0m`,
	);

	const data = await whoDoesNotFollowMe(person);

	if (data.length) {
		console.log(
			`${
				data.length === 1 ? 'This person does' : 'These people do'
			} not follow you on GitHub: \x1b[31m${data.join(
				'\x1b[0m, \x1b[31m',
			)}\x1b[0m`,
		);
	} else console.log('Everyone you are following follows you.');
}

main();
