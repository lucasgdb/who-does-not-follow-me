const { whoDoesNotFollowMe } = require('./whoDoesNotFollowMe');

exports.beautifyNotFollowers = async username => {
	console.log(
		`\x1b[32mChecking the followers of \x1b[37m${username}\x1b[32m...\x1b[0m`,
	);

	const { thesePeopleDoNotFollowMe, message } = await whoDoesNotFollowMe(
		username,
	);

	if (thesePeopleDoNotFollowMe === undefined) console.log(message);
	else if (thesePeopleDoNotFollowMe.length) {
		console.log(
			`${
				thesePeopleDoNotFollowMe.length === 1
					? 'This person does'
					: 'These people do'
			} not follow ${username} on GitHub: [${
				thesePeopleDoNotFollowMe.length
			}] \x1b[31m${thesePeopleDoNotFollowMe.join(
				'\x1b[0m, \x1b[31m',
			)}\x1b[0m`,
		);
	} else console.log('Everyone you are following follows you.');
};
