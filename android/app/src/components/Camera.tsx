import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import CameraProps from '../interfaces/Camera';

import {
  launchCamera,
  ImagePickerResponse,
  MediaType,
  Asset,
} from 'react-native-image-picker';

const CAMERA_ERROR_MSG = 'Camera error:';

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
    <TouchableOpacity
      disabled={isLoading}
      onPress={isLoading ? undefined : handleLaunchCamera}
      style={styles.cammeraButtonContainer}>
      <Text style={styles.appButtonText}>
        {isLoading ? 'Loading...' : 'Take Picture'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cammeraButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
    
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Camera;
