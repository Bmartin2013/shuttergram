import React, {useState} from 'react';
import Camera from './android/app/src/components/Camera';

import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Asset} from 'react-native-image-picker';
import MyPictures from './android/app/src/components/MyPictures';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleAssetURI = (asset: Asset) => {
    setAssets((prevAssets: Asset[]) => [...prevAssets, asset]);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={styles.headerContainer}>
          <Image source={require('./header.png')} />
        </View>
        <View style={styles.myPicturesContainer}>
          <MyPictures assets={assets} />
        </View>
        <View style={styles.cameraButtonContainer}>
          <Camera handleAssetUri={handleAssetURI} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  cameraButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeViewContainer: {
    flex: 1,
    backgroundColor: '#c9c7c7',
  },
  myPicturesContainer: {
    flex: 4,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
