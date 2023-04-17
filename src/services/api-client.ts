import axios from 'axios';
import create from './http-client';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a5daf3d487fb4571997b56e8adcc557e',
  },
});

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export default create<FetchGamesResponse>(apiClient, '/games');
