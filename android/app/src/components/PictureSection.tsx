import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import PictureAlbum from './PictureAlbum';
import {pictureSectionStyles} from '../styles/PictureStyles';
import PicturesProps from '../interfaces/Picture';
import PictureCard from './PictureCard';

function PictureSection({pictures, isEmpty}: PicturesProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  const PictureSectionContent = () =>
    loading ? (
      <Text style={pictureSectionStyles.placeholder}>Loading...</Text>
    ) : (
      <PictureAlbum pictures={pictures} />
    );

  useEffect(() => {
    if (pictures && pictures.length > 0) {
      setLoading(false);
    }
  }, [pictures]);

  return (
    <PictureCard>
      {isEmpty ? (
        <Text style={pictureSectionStyles.placeholder}>
          All pictures will be displayed here
        </Text>
      ) : (
        <PictureSectionContent />
      )}
    </PictureCard>
  );
}

export default PictureSection;
