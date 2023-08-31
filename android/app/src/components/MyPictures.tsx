import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Carrousel from './Carrousel';
import CarrouselProps from '../interfaces/Carrousel';

function MyPictures({assets}: CarrouselProps): JSX.Element {
  return (
     <View style={styles.cardContainer}>
         {assets.length > 0 ? (
        <Carrousel assets={assets} />
      ) : (
        <Text style={styles.blackCard}> All pictures will be displayed here</Text>
      )}
     <View>
      <Text style={styles.albumTitle}>My Pictures</Text>
     </View>
     </View>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius:5,
    backgroundColor: 'white',
    alignItems: "center",
    paddingBottom:40
  },
  albumTitle:{
    fontSize:20,
    fontWeight: 'bold',
    color:"#312f2f",
    letterSpacing:1
  },
  blackCard:{
    backgroundColor:"black",
    width:300,
    height:300,
    margin: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignContent: "center",
    padding:40
  }
});

export default MyPictures;
