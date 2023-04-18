import React from 'react';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card width={'300px'} borderRadius={'20px'} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
