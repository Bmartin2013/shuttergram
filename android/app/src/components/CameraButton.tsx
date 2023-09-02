import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CameraProps from '../interfaces/Camera';
import {CAMERA_ERROR_MSG, CAMERA_OPTIONS} from '../constants';

import {
  launchCamera,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';

import {handleCameraPermission} from '../utils/PermissionUtils';

import {cameraButtonStyles} from '../styles/CameraStyles';

function CameraButton({onHandleAsset}: CameraProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [cameraRejected, setCameraRejected] = useState(false);

  const handleLaunchCamera = async () => {
    setLoading(true);

    try {
      const response = await launchCamera(CAMERA_OPTIONS);
      handleImagePickerResponse(response);
    } catch (error) {
      console.error(CAMERA_ERROR_MSG, error);
    } finally {
      setLoading(false);
    }
  };

  const handleImagePickerResponse = (response: ImagePickerResponse) => {
    if (response.errorMessage) {
      console.error(`${CAMERA_ERROR_MSG} ${response.errorMessage}`);
      return;
    }

    if (response.assets && response.assets.length > 0) {
      response.assets.forEach((asset: Asset) => {
        if (asset.uri && asset.fileName) {
          onHandleAsset(asset.uri, asset.fileName);
        }
      });
    }
  };

  const onCameraApproved = () => {
    setCameraRejected(false);
    handleLaunchCamera();
  };

  const handleRequestCameraAccess = () =>
    handleCameraPermission(onCameraApproved, () => setCameraRejected(true));

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
