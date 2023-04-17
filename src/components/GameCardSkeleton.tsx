import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


export const GameCardSkeleton = () => {
  return (
    <Card width={'300px'}>
        <Skeleton height={'200px'}></Skeleton>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}
