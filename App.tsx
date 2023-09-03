import React from 'react';
import {SafeAreaView, StatusBar, View, Image} from 'react-native';
import PictureSection from './android/app/src/components/PictureSection';
import CameraButton from './android/app/src/components/CameraButton';

import {layoutStyle} from './android/app/src/styles/appStyles';
import usePictures from './android/app/src/hooks/usePictures';

export const HEADER_IMG_PATH = require('./android/app/src/img/header.png');

function App(): JSX.Element {
  const {isEmpty, pictures, onHandlePicture} = usePictures();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={layoutStyle.safeView}>
        <View style={layoutStyle.header}>
          <Image source={HEADER_IMG_PATH} />
        </View>
        <View style={layoutStyle.myPictures}>
          <PictureSection isEmpty={isEmpty} pictures={pictures} />
        </View>
        <View style={layoutStyle.cameraButton}>
          <CameraButton onHandlePicture={onHandlePicture} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
