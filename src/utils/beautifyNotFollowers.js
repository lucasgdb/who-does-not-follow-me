const beautify = require('beautify.log');
const getLine = require('./readLine');

const { whoDoesNotFollowMe } = require('./whoDoesNotFollowMe');

exports.beautifyNotFollowers = async ({
	username,
	client_id,
	client_secret,
} = {}) => {
	let user = username;

	if (!user) user = await getLine()();

	beautify.log(
		`{fgGreen}Checking the followers of {fgWhite}${user}{fgGreen}...`,
	);

	const { thesePeopleDoNotFollowMe, message } = await whoDoesNotFollowMe({
		username: user,
		client_id,
		client_secret,
	});

	if (thesePeopleDoNotFollowMe === undefined) console.log(message);
	else if (thesePeopleDoNotFollowMe.length) {
		beautify.log(
			`{fgWhite}${
				thesePeopleDoNotFollowMe.length === 1
					? 'This person does'
					: 'These people do'
			} not follow ${user} on GitHub: [${
				thesePeopleDoNotFollowMe.length
			}] {fgRed}${thesePeopleDoNotFollowMe.join('{fgWhite}, {fgRed}')}`,
		);
	} else console.log('Everyone you are following follows you.');
};
