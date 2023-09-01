import React, {useState, useEffect} from 'react';
import CameraButton from './android/app/src/components/CameraButton';

import {SafeAreaView, StatusBar, View} from 'react-native';

import MyPictures from './android/app/src/components/MyPictures';
import Header from './android/app/src/components/Header';
import {layoutStyle} from './android/app/src/styles/app';
import {getPictures, updatePictures} from './android/app/src/utils/FsUtils';
import PictureProps from './android/app/src/interfaces/Pictures';

function App(): JSX.Element {
  const [pictures, setPictures] = useState<PictureProps[]>([]);

  const onHandleAsset = (filePath: string, fileName: string) => {
    updatePictures(filePath, fileName, setPictures);
  };

  useEffect(() => {
    getPictures(setPictures);
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={layoutStyle.safeView}>
        <Header />
        <View style={layoutStyle.myPictures}>
          <MyPictures pictures={pictures} />
        </View>
        <View style={layoutStyle.cameraButton}>
          <CameraButton onHandleAsset={onHandleAsset} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
