import RNFS, {ReadDirItem} from 'react-native-fs';
import PictureProps from '../interfaces/Pictures';
export const DOWNLOAD_PATH = RNFS.ExternalStorageDirectoryPath;
export const PICTURES_FOLDER =`file://${DOWNLOAD_PATH}/Pictures`;
export const SHUTTERGRAM_FOLDER =`${PICTURES_FOLDER}/shuttergram`;

const getFileContent = async (path: string): Promise<PictureProps[]> => {
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

const createFolder = async () => {
  try {
    RNFS.mkdir(SHUTTERGRAM_FOLDER);
    return true; // created
  } catch (e) {
    console.error(e);
    return false;
  }
};

const handlePicture = async (filePath: string, destPath: string) => {
  try {
    RNFS.moveFile(filePath, destPath);
    return true; // moved
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const updatePictures = (
  filePath: string,
  fileName: string,
  setPictures: any,
) => {
  handlePicture(filePath, `${SHUTTERGRAM_FOLDER}/${fileName}`);
  getPictures(setPictures);
};

export const getPictures = async (setPictures: any) => {
  createFolder();
  const result = await getFileContent(SHUTTERGRAM_FOLDER);
  setPictures(result);
};
