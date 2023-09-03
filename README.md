# Shuttergram
Show and share your memories with this camera app. Create a cool album with sliding photos.📷✨


https://github.com/Bmartin2013/shuttergram/assets/3893598/3bd9833a-cc45-4bf2-aac9-3981604b376c


https://github.com/Bmartin2013/shuttergram/assets/3893598/10ae3706-25a8-422e-b02b-63c5189a1f1c


![Screenshot 2023-09-03 001214](https://github.com/Bmartin2013/shuttergram/assets/3893598/a45bdeba-79f5-4f50-82ea-7e374badcf7f)





### Core features
- Take pictures with your camera and display them on the app
- Display one or more pictures with a fancy carousel.
- Store those pictures in a special folder called `shuttergram`, inside `Pictures`
- Preview your photo before uploading and accept/reject it. If it's rejected, go back to the home page

## Motivation
This react-native photo album was intended to test and try the following:

- React-Native/ReactJS coding skills
- Typescript coding skills
- Mobile design
- Camera manipulation
- 3rd party library integration
- Permissions
- File system manipulation

## Core dependencies 
- react-native 0.72.4
- react-native-fs 2.20.0
- react-native-image-picker 5.6.1
- react-native-reanimated-carousel 3.4.2
- react-native-splash-screen 3.3.0

## Installation
Before installing, make sure you already installed the following tools

- nvm-windows (if you are using windows, otherwise look for the right nvm version that fits with your OS)
- Open JDK v11.0.2 Download [here]([url](https://jdk.java.net/archive/)https://jdk.java.net/archive/)
- Android studio
- Android SDK
- Android SDK Platform
- Android Virtual Device
- node version 16.13.1

### Environment setup
Before running this app locally, make sure you have all the required setup for react-native. Otherwise, please start setting up the environment mentioned [here]([url](https://reactnative.dev/docs/environment-setup)https://reactnative.dev/docs/environment-setup) before going on the installation.

* **NOTE**: Follow the tutorial until you reach to the **Creating a new application** title. It is not mandatory to follow that section but recommended to check if your environment was correctly setup.

### Download and run 
To download this project, open a terminal where it should be placed and run the following  command: 

```git clone https://github.com/Bmartin2013/shuttergram.git```

Then, move to the `shuttergram` folder by running:

```cd shuttergram``` 

And open a new terminal to install the libraries with 

```npm install```

Once you've installed all the packages, start the [Metro](https://facebook.github.io/metro/) bundler with

```npm start```. 

You should see the following screen:

![Screenshot 2023-09-03 203018](https://github.com/Bmartin2013/shuttergram/assets/3893598/7b97d2af-0d96-4191-ac56-b00db49b5758)


Then, open a new tab and step into the project's folder by running 

```cd your_project_path/shuttergram```

Finally, run:

```npm run android```

The virtual device previously setup during the `Environment setup` step will launch. If everything's ok, you should see the following prints
![Screenshot 2023-09-02 192146](https://github.com/Bmartin2013/shuttergram/assets/3893598/2dd291d9-02f8-4d17-9225-ed8c47c88250)
![Screenshot 2023-09-02 191722](https://github.com/Bmartin2013/shuttergram/assets/3893598/65d16356-526e-456f-87c1-dbecfdc306c7)

And this is the app running for the first time 

![Screenshot 2023-09-02 192449](https://github.com/Bmartin2013/shuttergram/assets/3893598/8a623372-7c77-4666-ac76-88a145e6e36c)

### Run with android studio (OPTIONAL)
You can also run the app from android studio. Go to android studio > Device manager and clic play on your selected android device to start running it.

![Screenshot 2023-09-02 192727](https://github.com/Bmartin2013/shuttergram/assets/3893598/18ff9e56-51ce-440e-8681-7cf2fe2567c3)

Then run the project with `npm start` and press `a` in the Metro terminal to link your app with the selected device.

**And that's it!** now you can enjoy your app on a virtual device.

### Build a debug-apk

Once you are happy with your new code version, you can create a debug apk to try it in your phone. 

To do so, go to the project folder and run the following command 

```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```

Then, move to the android folder (`cd android`) and run:

```./gradlew assembleDebug```

And done! now you can check your app-debug.apk in the `./android/app/build/outputs/apk/debug` folder





