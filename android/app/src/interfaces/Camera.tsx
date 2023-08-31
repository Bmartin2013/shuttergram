import { Asset } from "react-native-image-picker";

export default interface CameraProps {
    handleAssetUri: (asset: Asset) => void;
  }