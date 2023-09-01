import {MediaType} from 'react-native-image-picker';
import {VARIABLES} from './styles/_variables';
import RNFS from 'react-native-fs';

export const DOWNLOAD_PATH = RNFS.ExternalStorageDirectoryPath;
export const PICTURES_FOLDER =`file://${DOWNLOAD_PATH}/Pictures`;
export const SHUTTERGRAM_FOLDER =`${PICTURES_FOLDER}/shuttergram`;

export const CARROUSEL_STATIC_PROPS = {
  width: VARIABLES.photoSize,
  height: VARIABLES.photoSize,
  autoPlay: true,
};

export const HEADER_IMG_PATH = require('./img/header.png');

export const CAMERA_ERROR_MSG = 'Camera error:';

export const CAMERA_OPTIONS = {
  saveToPhotos: true,
  mediaType: 'photo' as MediaType,
};
