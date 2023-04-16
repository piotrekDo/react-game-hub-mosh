import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

export const GameGrid = () => {
const {games, error, isLoading, setGames, setError, setIsloading} = useGames();

  return (
    <>
      {isLoading && <p>Fetching...</p>}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};