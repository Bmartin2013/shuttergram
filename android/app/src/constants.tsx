import {MediaType} from 'react-native-image-picker';
import {VARIABLES} from './styles/_variables';

export const CARROUSEL_STATIC_PROPS = {
  width: VARIABLES.photoSize,
  height: VARIABLES.photoSize,
  autoPlay: true,
};

export const HEADER_IMG_PATH = require('./img/header.png');

export const CAMERA_ERROR_MSG = 'Camera error:';

export const CAMERA_OPTIONS = {
  mediaType: 'photo' as MediaType,
};
