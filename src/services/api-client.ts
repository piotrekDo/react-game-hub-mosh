import axios from 'axios';
import create from './http-client'

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a5daf3d487fb4571997b56e8adcc557e',
  },
});

export interface Game {
  id: number;
  name: string;
}

export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default create<FetchGamesResponse>(apiClient, '/games')
