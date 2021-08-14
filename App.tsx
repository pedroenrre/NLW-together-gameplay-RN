import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes';
import { BackGround } from './src/components/BackGround';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <BackGround>
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </BackGround>
  );
}

