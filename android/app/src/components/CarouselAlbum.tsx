import * as React from 'react';
import {Image} from 'react-native';
import {Asset} from 'react-native-image-picker';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from '../styles/carouselAlbum';
import { CARROUSEL_STATIC_PROPS } from '../constants';

const renderCarouselItem = ({item: {name, uri}}: {item: any}) => (
  <Image key={name} source={{uri}} style={styles.images} />
);

function CarouselAlbum({assets}: any): JSX.Element {
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
