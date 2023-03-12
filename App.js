import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Bed220 from './assets/iconsSVG/bed_220';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'LilitaOne': require('./assets/fonts/LilitaOne.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'LilitaOne', fontSize: 30 }}>LilitaOne</Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
      <Bed220 />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CE6A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
