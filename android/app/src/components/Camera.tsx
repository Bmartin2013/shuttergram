import React, {useState} from 'react';
import {Button} from 'react-native';
import {
  launchCamera,
  ImagePickerResponse,
  MediaType,
  Asset,
} from 'react-native-image-picker';

interface CameraProps {
  handleAssetUri: (asset: Asset) => void;
}

const CAMERA_ERROR_MSG = 'Camera error:';
const USER_CANCEL_MSG = 'User canceled image picker by pressing back button';

function Camera({handleAssetUri}: CameraProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);

  const handleLaunchCamera = async () => {
    setLoading(true);

    const cameraOptions = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo' as MediaType,
    };

    try {
      const response = await launchCamera(cameraOptions);
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
    <Button
      title={isLoading ? 'Loading...' : 'Take Picture'}
      onPress={isLoading ? undefined : handleLaunchCamera}
      disabled={isLoading}
    />
  );
}

export default Camera;
