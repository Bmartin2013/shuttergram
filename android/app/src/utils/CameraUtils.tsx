import {
  Asset,
  ImagePickerResponse,
  MediaType,
  launchCamera,
} from 'react-native-image-picker';

export const CAMERA_ERROR_MSG = 'Camera error:';

export const CAMERA_OPTIONS = {
  mediaType: 'photo' as MediaType,
};

export const handleImagePickerResponse = (
  response: ImagePickerResponse,
  onHandleAsset: (fileName: string, destPath: string) => void,
) => {
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

export const launchImagePickerCamera = async (
  onHandlePicture: (fileName: string, filePath: string) => void,
) => {
  try {
    const response = await launchCamera(CAMERA_OPTIONS);
    handleImagePickerResponse(response, onHandlePicture);
  } catch (error) {
    console.error(CAMERA_ERROR_MSG, error);
  }
};
