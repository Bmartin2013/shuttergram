import { StyleSheet } from "react-native";
import { COLORS } from "./_colors";

const styles = StyleSheet.create({
    safeViewContainer: {
      flex: 1,
      backgroundColor: COLORS.backgroundGrey,
    },
    cameraButtonContainer: {
      flex: 1,
    },
    myPicturesContainer: {
      flex: 4,
    },
    containerAlignment: {
      justifyContent: 'center',
      padding: 20,
    },
  });
  
 export const layoutStyle = {
    safeView: styles.safeViewContainer,
    myPictures: [styles.myPicturesContainer, styles.containerAlignment],
    cameraButton: [styles.cameraButtonContainer, styles.containerAlignment],
  };