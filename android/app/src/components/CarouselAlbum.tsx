import * as React from 'react';
import {Image} from 'react-native';
import {Asset} from 'react-native-image-picker';
import Carousel from 'react-native-reanimated-carousel';
import CarrouselProps from '../interfaces/Carrousel';
import { styles } from '../styles/carouselAlbum';
import { CARROUSEL_STATIC_PROPS } from '../constants';

const renderCarouselItem = ({item: {fileName, uri}}: {item: Asset}) => (
  <Image key={fileName} source={{uri}} style={styles.images} />
);

function CarouselAlbum({assets}: CarrouselProps): JSX.Element {
  return (
    <Carousel<Asset>
      {...CARROUSEL_STATIC_PROPS}
      data={assets}
      loop={assets.length > 1}
      style={styles.carrousel}
      renderItem={renderCarouselItem}
    />
  );
}

export default CarouselAlbum;
