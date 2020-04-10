declare module 'who-does-not-follow-me' {
	export default function whoDoesNotFollowMe({
		username,
		client_id,
		client_secret,
	}?: {
		username?: string | undefined;
		client_id?: string | undefined;
		client_secret?: string | undefined;
	}): Promise<
		| {
				thesePeopleDoNotFollowMe: undefined;
				message: any;
		  }
		| {
				thesePeopleDoNotFollowMe: string[];
				message?: undefined;
		  }
	>;
}
