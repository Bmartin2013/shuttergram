import React from 'react';
import {Text, View} from 'react-native';
import {pictureCardStyles} from '../styles/pictureStyles';

interface PictureCardProps {
  children: React.ReactNode;
}

function PictureCard({children}: PictureCardProps) {
  return (
    <View style={pictureCardStyles.cardContainer}>
      <View>{children}</View>
      <View>
        <Text style={pictureCardStyles.albumTitle}>My Pictures</Text>
      </View>
    </View>
  );
}

export default PictureCard;
