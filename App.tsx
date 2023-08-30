/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {Button, Image} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function ImagePickerSection(): JSX.Element {
  const [photo, setPhotoURI] = useState<string | null>(null);

  function handleLaunchImage(): any {
    const cameraOptions = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo' as ImagePicker.MediaType,
    };

    ImagePicker.launchImageLibrary(
      cameraOptions,
      (response: ImagePicker.ImagePickerResponse) => {
        console.log('Response = ', response, response.assets);
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setPhotoURI(uri);
          }
        }
        if (response.didCancel) {
          console.warn('User canceled image picker by pressing back button');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets) {
          console.warn('User selected these images: ', response.assets);
          if (response.assets && response.assets.length > 0) {
            const uri = response.assets[0].uri;
            if (uri) {
              setPhotoURI(uri);
            }
          }
        } else {
          console.log('response??', JSON.stringify(response.assets)); // fix this
        }
      },
    );
  }

  return (
    <View style={styles.sectionContainer}>
      <Button title="Select image" onPress={handleLaunchImage} />
      {photo && (
        <Image source={{uri: photo}} style={{width: 300, height: 300}} />
      )}
    </View>
  );
}

function CameraSection(): JSX.Element {
  function handleLaunchCamera(): any {
    const cameraOptions = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo' as ImagePicker.MediaType,
    };

    ImagePicker.launchCamera(
      cameraOptions,
      (response: ImagePicker.ImagePickerResponse) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User canceled image picker by pressing back button');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets) {
          console.log('Photo taken: ', response.assets);
        } else {
          console.log('response', JSON.stringify(response));
        }
      },
    );
  }

  return (
    <View style={styles.sectionContainer}>
      <Button title="Take Picture" onPress={handleLaunchCamera} />
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Take picture">
            <CameraSection />
          </Section>
          <Section title="Select image from folder">
            <ImagePickerSection />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
