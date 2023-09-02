import React, {useState, useEffect} from 'react';
import CameraButton from './android/app/src/components/CameraButton';

import {SafeAreaView, StatusBar, View} from 'react-native';

import Header from './android/app/src/components/Header';
import {layoutStyle} from './android/app/src/styles/app';
import {
  getPictures,
  updatePictures,
} from './android/app/src/utils/FsUtils';
import PictureProps from './android/app/src/interfaces/Picture';
import PictureSection from './android/app/src/components/PictureSection';

function App(): JSX.Element {
  const [pictures, setPictures] = useState<PictureProps[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const onHandleAsset = (filePath: string, fileName: string) => {
    updatePictures(filePath, fileName, setPictures, setIsEmpty);
  };

  useEffect(() => {
    getPictures(setPictures, setIsEmpty);
  }, []);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={layoutStyle.safeView}>
        <Header />
        <View style={layoutStyle.myPictures}>
          <PictureSection isEmpty={isEmpty} pictures={pictures} />
        </View>
        <View style={layoutStyle.cameraButton}>
          <CameraButton onHandleAsset={onHandleAsset} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
