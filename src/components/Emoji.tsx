import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import mech from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

export const Emoji = ({rating}: Props) => {
    if(rating < 3) return null;

    const emojiMap: {[key: number]: ImageProps} = {
        3 : {src: mech, alt: 'mech', boxSize: '25px'},
        4 : {src: thumbsUp, alt: 'recommended', boxSize: '25px'},
        5 : {src: bullsEye, alt: 'exeptional', boxSize: '35px'}
    }


  return (
    <Image {...emojiMap[rating]} marginBottom={1}></Image>
  )
}
