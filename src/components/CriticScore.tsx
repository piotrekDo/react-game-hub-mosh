import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const getColor = () => {
    if (score < 40) return 'red';
    return score < 85 ? 'yellow' : 'green';
  };
  return <Badge fontSize={'14px'} paddingX={2} borderRadius={'5px'} colorScheme={getColor()}>{score}</Badge>;
};
