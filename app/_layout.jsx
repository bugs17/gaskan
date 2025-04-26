import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import {COLOR, COLORS} from '../lib/constant'




SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
  <>

    <StatusBar style="dark" />
    <Stack>
      <Stack.Screen name="(protected)" options={{
        headerShown:false,
        animation:"none"
      }} />
      <Stack.Screen name="login" options={{
        headerShown:false,
        animation:"none"
      }} />
      <Stack.Screen name="syarat-ketentuan" options={{
        animation:"default",
        title:'Syarat & Ketentuan',
        headerStyle:{
          backgroundColor:COLORS.backgroundCardGray
        }
      }} />
    </Stack>
  </>
  
  )
}
  // <ClerkProvider tokenCache={tokenCache}>

  //  </ClerkProvider>
