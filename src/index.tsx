import React from 'react';

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Routes from './routes';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={{ backgroundColor: '#0D0D0D', flex: 1 }}>
        <StatusBar style="light" />
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}

registerRootComponent(App);
