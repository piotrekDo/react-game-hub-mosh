import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Game } from "../entities/Game";
import { Emoji } from './Emoji';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={'20px'} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link> 
        <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  );
};
