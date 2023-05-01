import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: string) => 
  useData<Game>('/games', {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id,
      ordering: selectedOrder
    }}, 
    [selectedGenre?.id, selectedPlatform?.id, selectedOrder]);

export default useGames;
