import React from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  id: number;
}

export const GameScreenshots = ({ id }: Props) => {
  const { data, error, isLoading } = useScreenshots(id);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={2}
    >
      {data?.results.map(file => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
