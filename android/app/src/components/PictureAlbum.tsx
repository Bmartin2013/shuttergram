import * as React from 'react';
import {Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { PictureAlbumStyles } from '../styles/pictureStyles';
import { CARROUSEL_STATIC_PROPS } from '../constants';
import PicturesProps from '../interfaces/Picture';
import PictureProps from '../interfaces/Picture';


const renderCarouselItem = ({item: {name, uri}}: {item: PictureProps}) => (
  <Image key={name} source={{uri}} style={PictureAlbumStyles.images} />
);

function PictureAlbum({pictures}: PicturesProps): JSX.Element {
  return (
    <Carousel<PictureProps>
      {...CARROUSEL_STATIC_PROPS}
      data={pictures || []}
      loop={ pictures && pictures.length > 1}
      style={PictureAlbumStyles.carrousel}
      renderItem={renderCarouselItem}
    />
  );
}

export default PictureAlbum;
