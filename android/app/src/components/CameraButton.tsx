import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CameraProps from '../interfaces/Camera';

import {
  launchCamera,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';
import { CAMERA_ERROR_MSG, CAMERA_OPTIONS } from '../constants';
import { cameraButtonStyles } from '../styles/cameraButton';


function CameraButton({handleAssetUri}: CameraProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);

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
        if (asset.uri) {
          handleAssetUri(asset);
        }
      });
    }
  };

  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={isLoading ? undefined : handleLaunchCamera}
      style={cameraButtonStyles.container}>
      <Text style={cameraButtonStyles.label}>
        {isLoading ? 'Loading...' : 'Take Picture'}
      </Text>
    </TouchableOpacity>
  );
}

export default CameraButton;
