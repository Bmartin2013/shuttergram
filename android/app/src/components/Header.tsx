import React from 'react';

import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { HEADER_IMG_PATH } from '../constants';
import { styles } from '../styles/header';

function Header(): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <Image source={HEADER_IMG_PATH} />
    </View>
  );
}

export default Header;
