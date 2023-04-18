import axios from 'axios';
import create from './http-client';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a5daf3d487fb4571997b56e8adcc557e',
  },
});

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  const: number;
  results: Genre[];
}

export default create<FetchGenresResponse>(apiClient, '/genres');
