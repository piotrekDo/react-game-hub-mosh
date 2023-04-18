import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3d8d42eb241543cc8ee5a4f02d22383f',
  },
});

