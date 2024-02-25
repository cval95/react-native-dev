import { Stack} from "expo-router";
import {AmaticSC_700Bold, AmaticSC_400Regular} from '@expo-google-fonts/amatic-sc';
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      })
    
      useEffect(() =>{
        if(fontsLoaded || fontError) {
          SplashScreen.hideAsync();
        }
      }, [fontError, fontsLoaded]);
    
      if (!fontsLoaded || !fontError) {
        return null;  
      }

    return (
    <Stack screenOptions={{title: 'Dev'}}>
        <Stack.Screen name="index" options={{title: 'Dev'}} />
    </Stack>
    )
}