import {useState} from 'react';
import {handleCameraPermission} from '../utils/PermissionUtils';
import {launchImagePickerCamera} from '../utils/CameraUtils';
import CameraProps from '../interfaces/Camera';

const useCamera = (
  onHandlePicture: CameraProps
) => {
  const [isLoading, setLoading] = useState(false);
  const [cameraRejected, setCameraRejected] = useState(false);

  const onCameraApproved = () => {
    setCameraRejected(false);
    handleLaunchCamera(setLoading, onHandlePicture);
  };

  const handleRequestCameraAccess = () =>
    handleCameraPermission(onCameraApproved, () => setCameraRejected(true));

  const handleLaunchCamera = async (
    setLoading: (isLoading: boolean) => void,
    {onHandlePicture}: CameraProps,
  ) => {
    setLoading(true);
    launchImagePickerCamera(onHandlePicture);
  };

  return {
    cameraRejected,
    isLoading,
    handleRequestCameraAccess,
  };
};

export default useCamera;
