import {Permission, PermissionsAndroid} from 'react-native';

const handlePermission = async (
  permission?: Permission,
  callbackAccepted?: any,
  callbackRejected?: any,
) => {
  try {
    const granted =
      permission && (await PermissionsAndroid.request(permission));
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      callbackAccepted();
    } else {
      callbackRejected();
    }
  } catch (err) {
    console.warn(err);
  }
};

export const handleCameraPermission = (
  callbackAccepted?: any,
  callbackRejected?: any,
) =>
  handlePermission(
    PermissionsAndroid.PERMISSIONS.CAMERA,
    callbackAccepted,
    callbackRejected,
  );
