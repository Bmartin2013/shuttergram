import React, {useState} from 'react';
import CameraButton from './android/app/src/components/CameraButton';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Asset} from 'react-native-image-picker';
import MyPictures from './android/app/src/components/MyPictures';
import Header from './android/app/src/components/Header';
import { layoutStyle } from './android/app/src/styles/app';

function App(): JSX.Element {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleAssetURI = (asset: Asset) => {
    setAssets((prevAssets: Asset[]) => [...prevAssets, asset]);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={layoutStyle.safeView}>
        <Header />
        <View style={layoutStyle.myPictures}>
          <MyPictures assets={assets} />
        </View>
        <View style={layoutStyle.cameraButton}>
          <CameraButton handleAssetUri={handleAssetURI} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
