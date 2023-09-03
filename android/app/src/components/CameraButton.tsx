import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {cameraButtonStyles} from '../styles/cameraStyles';
import useCamera from '../hooks/useCamera';
import CameraProps from '../interfaces/Camera';

function CameraButton(
  onHandlePicture: CameraProps,
): JSX.Element {
  const {cameraRejected, isLoading, handleRequestCameraAccess} =
    useCamera(onHandlePicture);
  return (
    <>
      {cameraRejected ? (
        <Text style={cameraButtonStyles.cameraRejected}>
          Please enable the "take picture" button by manually granting camera
          permissions from settings
        </Text>
      ) : (
        <TouchableOpacity
          disabled={isLoading}
          onPress={isLoading ? undefined : handleRequestCameraAccess}
          style={cameraButtonStyles.container}>
          <Text style={cameraButtonStyles.label}>
            {isLoading ? 'Loading...' : 'Take Picture'}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default CameraButton;
