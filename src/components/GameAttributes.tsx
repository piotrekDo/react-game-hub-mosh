import { Game } from '../entities/Game';
import { DefinitionItem } from '../components/DefinitionItem';
import { CriticScore } from '../components/CriticScore';
import { SimpleGrid, Text } from '@chakra-ui/react';

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map(p => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term='Genre'>
        {game.genres.map(genre => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publisher'>
        {game.publishers?.map(publisher => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
