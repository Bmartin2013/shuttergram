import RNFS, {ReadDirItem} from 'react-native-fs';
import PictureProps from '../interfaces/Picture';
export const DOWNLOAD_PATH = RNFS.ExternalStorageDirectoryPath;
export const PICTURES_FOLDER = `file://${DOWNLOAD_PATH}/Pictures`;
export const SHUTTERGRAM_FOLDER = `${PICTURES_FOLDER}/shuttergram`;

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
  setPictures: (pictures: PictureProps[]) => void,
  setIsEmpty: (isEmpty: boolean) => void,
) => {
  handlePicture(filePath, `${SHUTTERGRAM_FOLDER}/${fileName}`);
  getPictures(setPictures, setIsEmpty);
};

export const getPictures = async (
  setPictures: (pictures: PictureProps[]) => void,
  setIsEmpty?: (isEmpty: boolean) => void,
) => {
  const existsFolder = await RNFS.exists(SHUTTERGRAM_FOLDER);
  if (!existsFolder) {
    createFolder();
  }
  const result = await getFileContent(SHUTTERGRAM_FOLDER);
  result.length > 0 && setPictures(result);
  setIsEmpty && setIsEmpty(result.length === 0);
};
