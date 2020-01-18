const axios = require('axios');

const GitHubAPI = axios.create({ baseURL: 'https://api.github.com/users' });

module.exports = GitHubAPI;
