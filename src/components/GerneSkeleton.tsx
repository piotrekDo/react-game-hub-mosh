import { Card, CardBody, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'


export const GerneSkeleton = () => {
  return (
    <HStack   marginY={'5px'}>
        <Skeleton height={'30px'} width={'100px'}></Skeleton>
        <SkeletonText></SkeletonText>
    </HStack>
  )
}
