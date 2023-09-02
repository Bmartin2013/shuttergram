import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, View, Image} from 'react-native';

import {HEADER_IMG_PATH} from './android/app/src/constants';

import {getPictures, updatePictures} from './android/app/src/utils/FsUtils';
import PictureProps from './android/app/src/interfaces/Picture';
import PictureSection from './android/app/src/components/PictureSection';
import CameraButton from './android/app/src/components/CameraButton';

import {layoutStyle} from './android/app/src/styles/app';

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
        <View style={layoutStyle.header}>
          <Image source={HEADER_IMG_PATH} />
        </View>
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
