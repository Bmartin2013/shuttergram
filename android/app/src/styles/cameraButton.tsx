import { StyleSheet } from "react-native";
import { COLORS } from "./_colors";

const styles = StyleSheet.create({
    cammeraButtonContainer: {
      elevation: 8,
      backgroundColor: COLORS.primaryPetroleum,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
      
    },
    appButtonText: {
      fontSize: 18,
      color: COLORS.white,
    },
    center:{
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  });


export const cameraButtonStyles = {
    container: styles.cammeraButtonContainer,
    label: [styles.appButtonText,styles.center]
}