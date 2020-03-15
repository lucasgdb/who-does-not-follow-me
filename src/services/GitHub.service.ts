import axios from 'axios';

const GitHubAPI = axios.create({ baseURL: 'https://api.github.com/users' });

export default GitHubAPI;
