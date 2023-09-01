import React from 'react';

import {Text, View} from 'react-native';

import CarouselAlbum from './CarouselAlbum';
import {styles} from '../styles/myPictures';
import PicturesProps from '../interfaces/Pictures';

function MyPictures({pictures}: PicturesProps): JSX.Element {
  return (
    <View style={styles.cardContainer}>
       { pictures && pictures.length > 0 ? (
        <CarouselAlbum assets={pictures} />
      ) : (
        <Text style={styles.blackCard}>
          All pictures will be displayed here
        </Text>
      )}
      <View>
        <Text style={styles.albumTitle}>My Pictures</Text>
      </View>
    </View>
  );
}

export default MyPictures;
