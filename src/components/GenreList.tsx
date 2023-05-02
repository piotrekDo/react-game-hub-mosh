import useGenres, { Genre } from '../hooks/useGenres';
import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { GerneSkeleton } from './GerneSkeleton';


interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
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
            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
