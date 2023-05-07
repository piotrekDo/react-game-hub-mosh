import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if(!children) return null

  if (children.length <= length) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Text>
      {expanded ? children : summary + '...'}  
      <Button marginLeft={5} size={'xs'} fontWeight={'bold'} colorScheme='yellow' onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read more'}</Button>
    </Text>
  );
};
