import RNFS, {ReadDirItem} from 'react-native-fs';
import PictureProps from '../interfaces/Picture';
export const DOWNLOAD_PATH = RNFS.ExternalStorageDirectoryPath;
export const PICTURES_FOLDER = `file://${DOWNLOAD_PATH}/Pictures`;
export const SHUTTERGRAM_FOLDER = `${PICTURES_FOLDER}/shuttergram`;

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
    const exists = await RNFS.exists(SHUTTERGRAM_FOLDER);
    if (!exists) {
      RNFS.mkdir(SHUTTERGRAM_FOLDER);
    }
  } catch (e) {
    console.error(e);
  }
};

export const handlePicture = async (filePath: string, destPath: string) => {
  try {
    RNFS.moveFile(filePath, destPath);
  } catch (e) {
    console.error(e);
  }
};

export const existsFolder = async () => {
  try {
    const exists = await RNFS.exists(SHUTTERGRAM_FOLDER);
    return exists;
  } catch (e) {
    console.error(e);
  }
};
