import {StyleSheet} from 'react-native';
import {COLORS} from './global/colors';

// GENERAL APP STYLES
const appStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundGrey,
  },
  cameraButtonContainer: {
    flex: 1,
  },
  myPicturesContainer: {
    flex: 3,
  },
  containerAlignment: {
    justifyContent: 'center',
    padding: 20,
  },
});

// APP HEADER
const headerStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryPetroleum,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const layoutStyle = {
  safeView: appStyles.safeViewContainer,
  myPictures: [appStyles.myPicturesContainer, appStyles.containerAlignment],
  cameraButton: [appStyles.cameraButtonContainer, appStyles.containerAlignment],
  header: [headerStyles.headerContainer],
};
