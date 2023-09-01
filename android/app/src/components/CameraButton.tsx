import React, {useState} from 'react';
import {TouchableOpacity, Text, PermissionsAndroid} from 'react-native';
import CameraProps from '../interfaces/Camera';
import {cameraButtonStyles} from '../styles/cameraButton';
import {handleLaunchCamera} from '../utils/CameraUtils';

function CameraButton({onHandleAsset}: CameraProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [cameraRejected, setCameraRejected] = useState(false);

  const handleRequestCameraAccess = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraRejected(false);
        handleLaunchCamera(setLoading, onHandleAsset);
      } else {
        setCameraRejected(true);
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
