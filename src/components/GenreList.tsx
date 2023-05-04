import useGenres from '../hooks/useGenres';
import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { GerneSkeleton } from './GerneSkeleton';
import useGameQueryStore from '../store';

export const GenreList = () => {
  const selectedGenreId = useGameQueryStore(s=> s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s=> s.setGenreId);
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <HStack key={skeleton}>
            <GerneSkeleton />
          </HStack>
        ))}
      {data?.results.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} onClick={() => setGenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
