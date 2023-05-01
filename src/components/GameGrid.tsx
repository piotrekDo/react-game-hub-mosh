import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import { GameCard } from './GameCard';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GameCardContainer } from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props{
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedOrder: string,
  searchText: string
}

export const GameGrid = ({selectedGenre, selectedPlatform, selectedOrder, searchText}: Props) => {
  const { data, error, isLoading, setData, setError, setLoading } = useGames(selectedGenre, selectedPlatform, selectedOrder, searchText);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
