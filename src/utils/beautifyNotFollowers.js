const beautify = require('beautify.log');

const { whoDoesNotFollowMe } = require('./whoDoesNotFollowMe');

exports.beautifyNotFollowers = async ({
	username,
	client_id,
	client_secret,
}) => {
	beautify.log(
		`{fgGreen}Checking the followers of {fgWhite}${username}{fgGreen}...`,
	);

	const { thesePeopleDoNotFollowMe, message } = await whoDoesNotFollowMe({
		username,
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
			} not follow ${username} on GitHub: [${
				thesePeopleDoNotFollowMe.length
			}] {fgRed}${thesePeopleDoNotFollowMe.join('{fgWhite}, {fgRed}')}`,
		);
	} else console.log('Everyone you are following follows you.');
};
