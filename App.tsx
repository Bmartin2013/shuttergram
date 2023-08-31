import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import Camera from './android/app/src/components/Camera';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Asset} from 'react-native-image-picker';
import MyPictures from './android/app/src/components/MyPictures';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleAssetURI = (asset: Asset) => {
    setAssets((prevAssets: Asset[]) => [...prevAssets, asset]);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Take picture">
    //         <Camera handleAssetUri={handleAssetURI} />
    //       </Section>
    //      <MyPictures assets={assets}/>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView style={styles.safeViewContainer}>
        <View style={{flex: 1, backgroundColor: '#fe945d'}}></View>
        <View style={styles.myPicturesContainer}>
          <MyPictures assets={assets} />
        </View>
        <View style={styles.cameraButtonContainer}>
          <Camera handleAssetUri={handleAssetURI} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  cameraButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  safeViewContainer:{
    flex:1,
    backgroundColor: '#c9c7c7'
  },
  myPicturesContainer: {
    flex: 4,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
