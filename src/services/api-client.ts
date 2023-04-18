import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a5daf3d487fb4571997b56e8adcc557e',
  },
});

