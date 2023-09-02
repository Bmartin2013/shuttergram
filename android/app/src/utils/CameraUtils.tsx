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

const handleImagePickerResponse = (
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

export const handleLaunchCamera = async (
  setLoading: (isLoading: boolean) => void,
  onHandleAsset: (fileName: string, destPath: string) => void,
) => {
  setLoading(true);

  try {
    const response = await launchCamera(CAMERA_OPTIONS);
    handleImagePickerResponse(response, onHandleAsset);
  } catch (error) {
    console.error(CAMERA_ERROR_MSG, error);
  } finally {
    setLoading(false);
  }
};
