import { useFonts } from "@expo-google-fonts/inter";
import { Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppLoading from 'expo-app-loading';
import { Home } from './screens/Home';
import React from "react";


export default function App(){
    const [fontLoaded] = useFonts({
        Inter_700Bold,
        Inter_400Regular,
    });

    if(!fontLoaded){
        return <AppLoading/>
    }

    return(
        <View>
            <Home/>
            <StatusBar style="auto" />
        </View>
    )
}

registerRootComponent(App);