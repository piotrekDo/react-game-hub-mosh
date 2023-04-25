import React from 'react';
import useGenres from '../hooks/useGenres';
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { GameCardSkeleton } from './GameCardSkeleton';
import { GerneSkeleton } from './GerneSkeleton';

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  // if(isLoading) return <Spinner/>

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <HStack key={skeleton}>
            <GerneSkeleton />
          </HStack>
        ))}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
