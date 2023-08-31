import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Asset} from 'react-native-image-picker';
import Carousel from 'react-native-reanimated-carousel';
import CarrouselProps from '../interfaces/Carrousel';

const carrouselOptions = {
  width: 300,
  height: 300,
  autoPlay: true,
};

const renderCarouselItem = ({item: {fileName, uri}}: {item: Asset}) => (
  <Image key={fileName} source={{uri}} style={styles.images} />
);

function Carrousel({assets}: CarrouselProps): JSX.Element {
  return (
    <Carousel<Asset>
      {...carrouselOptions}
      data={assets}
      loop={assets.length > 1}
      style={styles.carrousel}
      renderItem={renderCarouselItem}
    />
  );
}

const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: '100%',
  },
  carrousel: {
    margin: 20,
  },
});

export default Carrousel;
