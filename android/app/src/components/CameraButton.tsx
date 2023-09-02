import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CameraProps from '../interfaces/Camera';

import {handleCameraPermission} from '../utils/PermissionUtils';

import {cameraButtonStyles} from '../styles/CameraStyles';
import {handleLaunchCamera} from '../utils/CameraUtils';

function CameraButton({onHandleAsset}: CameraProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [cameraRejected, setCameraRejected] = useState(false);

  const onCameraApproved = () => {
    setCameraRejected(false);
    handleLaunchCamera(setLoading, onHandleAsset);
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
