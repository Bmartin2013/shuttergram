import {useEffect, useState} from 'react';
import {
  SHUTTERGRAM_FOLDER,
  createFolder,
  getFileContent,
  handlePicture,
} from '../utils/FsUtils';
import PictureProps from '../interfaces/Picture';

const usePictures = () => {
  const [pictures, setPictures] = useState<PictureProps[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const onHandlePicture = (filePath: string, fileName: string) => {
    updatePictures(filePath, fileName);
  };

  useEffect(() => {
    getPictures(setPictures);
  }, []);

  const updatePictures = (filePath: string, fileName: string) => {
    handlePicture(filePath, `${SHUTTERGRAM_FOLDER}/${fileName}`);
    getPictures(setPictures);
  };

  const getPictures = async (
    setPictures: (pictures: PictureProps[]) => void,
  ) => {
    createFolder();
    const result = await getFileContent(SHUTTERGRAM_FOLDER);
    result.length > 0 && setPictures(result);
    setIsEmpty(result.length === 0);
  };

  return {
    isEmpty,
    pictures,
    onHandlePicture,
  };
};

export default usePictures;
