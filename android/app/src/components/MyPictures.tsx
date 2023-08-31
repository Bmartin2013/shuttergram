import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import CarrouselProps from '../interfaces/Carrousel';
import CarouselAlbum from './CarouselAlbum';
import {styles} from '../styles/myPictures';

function MyPictures({assets}: CarrouselProps): JSX.Element {
  return (
    <View style={styles.cardContainer}>
      {assets.length > 0 ? (
        <CarouselAlbum assets={assets} />
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
