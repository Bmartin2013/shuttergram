import { StyleSheet } from "react-native";
import { COLORS } from "./global/colors";
import { VARIABLES } from "./global/variables";

// PICTURE CARD
export const pictureCardStyles = StyleSheet.create({
    cardContainer: {
      shadowColor: COLORS.black,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      borderRadius: 5,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      paddingBottom: 40,
    },
    albumTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: COLORS.titleBlack,
      letterSpacing: 1,
    }
  });

// PICTURE SECTION
  export const pictureSectionStyles = StyleSheet.create({
    placeholder: {
      backgroundColor: COLORS.black,
      width: VARIABLES.photoSize,
      height: VARIABLES.photoSize,
      margin: 20,
      color: COLORS.white,
      fontWeight: 'bold',
      alignContent: 'center',
      padding: 40,
    },
  });


  // PICTURE ALBUM 
  export const PictureAlbumStyles = StyleSheet.create({
    images: {
      width: VARIABLES.photoSize,
      height: VARIABLES.photoSize,
    },
    carrousel: {
      margin: 20,
    },
  });


