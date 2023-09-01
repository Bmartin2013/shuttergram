import {
  Asset,
  ImagePickerResponse,
  MediaType,
  launchCamera,
} from 'react-native-image-picker';

const CAMERA_ERROR_MSG = 'Camera error:';

const CAMERA_OPTIONS = {
  mediaType: 'photo' as MediaType,
};

export const handleLaunchCamera = async (setLoading: any, onHandleAsset: any) => {
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

const handleImagePickerResponse = (
  response: ImagePickerResponse,
  onHandleAsset: any,
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
