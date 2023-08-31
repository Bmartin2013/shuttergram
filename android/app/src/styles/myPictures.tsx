import { StyleSheet } from "react-native";
import { COLORS } from "./_colors";
import { VARIABLES } from "./_variables";

export const styles = StyleSheet.create({
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
    },
    blackCard: {
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