import GitHubAPI from '../services/GitHub.service';
import {
	per_page,
	client_id as clientId,
	client_secret as clientSecret,
} from '../config/configuration.json';

export default async function whoDoesNotFollowMe({
	username = '',
	client_id = clientId,
	client_secret = clientSecret,
} = {}) {
	const followers: string[] = [];
	const following: string[] = [];

	try {
		let page = 1;

		do {
			const { data } = await GitHubAPI.get(`/${username}/following`, {
				params: {
					page,
					per_page,
					client_id,
					client_secret,
				},
			});

			following.push(
				...data.map(({ login }: { login: string }) => login),
			);

			if (data.length < 100) break;
			else page++;
		} while (true);

		page = 1;

		do {
			const { data } = await GitHubAPI.get(`/${username}/followers`, {
				params: {
					page,
					per_page,
					client_id,
					client_secret,
				},
			});

			followers.push(
				...data.map(({ login }: { login: string }) => login),
			);

			if (data.length < 100) break;
			else page++;
		} while (true);
	} catch ({
		response: {
			data: { message = 'Malformed request' },
		},
	}) {
		return { thesePeopleDoNotFollowMe: undefined, message };
	}

	const thesePeopleDoNotFollowMe = following.filter(
		(login) => !followers.includes(login),
	);

	return { thesePeopleDoNotFollowMe };
}
