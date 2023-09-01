import React, {useState, useEffect} from 'react';
import CameraButton from './android/app/src/components/CameraButton';

import {SafeAreaView, StatusBar, View} from 'react-native';

import MyPictures from './android/app/src/components/MyPictures';
import Header from './android/app/src/components/Header';
import {layoutStyle} from './android/app/src/styles/app';
import {
  handlePicture,
  getFileContent,
  createFolder,
} from './android/app/src/helpers/FsHelper';
import {SHUTTERGRAM_FOLDER} from './android/app/src/constants';
import PictureProps from './android/app/src/interfaces/Pictures';

function App(): JSX.Element {
  const [pictures, setPictures] = useState<PictureProps[]>([]);

  const getPictures = async () => {
    const result = await getFileContent(SHUTTERGRAM_FOLDER);
    setPictures(result);
  };

  const handleAssetURI = (filePath: string, fileName: string) => {
    handlePicture(filePath, `${SHUTTERGRAM_FOLDER}/${fileName}`);
    getPictures();
  };

  useEffect(() => {
    createFolder();
    getPictures();
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
          <CameraButton handleAssetUri={handleAssetURI} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
