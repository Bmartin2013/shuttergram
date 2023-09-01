import RNFS, {ReadDirItem} from 'react-native-fs';
import PictureProps from '../interfaces/Pictures';
import {SHUTTERGRAM_FOLDER} from '../constants';

export const getFileContent = async (path: string): Promise<PictureProps[]> => {
  try {
    const reader = (await RNFS.readDir(path)).filter((item: ReadDirItem) =>
      item.isFile(),
    );
    const result = reader.map(({name, path}: ReadDirItem) => ({
      name,
      uri: `file://${path}`,
    }));

    return result;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const createFolder = async () => {
  try {
    console.log(await RNFS.exists(SHUTTERGRAM_FOLDER));
    !(await RNFS.exists(SHUTTERGRAM_FOLDER)) && RNFS.mkdir(SHUTTERGRAM_FOLDER);
    return true;
  } catch (e) {
    console.error(e);
  }
};

export const handlePicture = (filePath: string, destPath: string) => {
  try {
    console.log('filepath', filePath, 'destiny', destPath);
    RNFS.moveFile(filePath, destPath);
  } catch (e) {
    console.error(e);
  }
};
