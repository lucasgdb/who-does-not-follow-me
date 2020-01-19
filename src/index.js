const { beautifyNotFollowers } = require('./utils/beautifyNotFollowers');
const { whoDoesNotFollowMe } = require('./utils/whoDoesNotFollowMe');

beautifyNotFollowers({ username: 'lucasnaja' });

module.exports = { beautifyNotFollowers, whoDoesNotFollowMe };
