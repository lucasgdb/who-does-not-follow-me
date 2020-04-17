# Who does not follow me

![CRAN/METACRAN](https://img.shields.io/github/license/lucasnaja/who-does-not-follow-me)

## Description

A Node.js script to check who does not follow you on GitHub. (based on your following and followers)

## How to use

-   type `yarn add who-does-not-follow-me` or `npm i who-does-not-follow-me -s`

## Parameters

-   username (github's username)
-   client_id (github's oauth app token for make more requests)
-   client_secret (github's oauth app token for make more requests)

## Code

Clean output:

```js
import whoDoesNotFollowMe from 'who-does-not-follow-me';

async function notFollowers(
	username: string,
	clientId?: string,
	clientSecret?: string,
) {
	const { thesePeopleDoNotFollowMe } = await whoDoesNotFollowMe({
		username,
		client_id: clientId,
		client_secret: clientSecret,
	});

	console.log(thesePeopleDoNotFollowMe);
}

notFollowers('lucasgdb'); // []
```

## Image

![who-does-not-follow-me](./images/who-does-not-follow-me.png)

## Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasnaja</sub>](https://github.com/lucasnaja) |
| :------------------------------------------------------------------------------------------------------------------------------: |

