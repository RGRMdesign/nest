import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import AppTabs from '@/components/navigation/app-tabs';
import { AppThemeProvider, useAppTheme } from '@/hooks/use-app-theme';
import '../../styles/global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    void SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppThemeProvider>
        <ThemedApp />
      </AppThemeProvider>
    </GestureHandlerRootView>
  );
}

function ThemedApp() {
  const { preference, resolved } = useAppTheme();

  return (
    <GluestackUIProvider mode={preference}>
      <ThemeProvider value={resolved === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar style={resolved === 'dark' ? 'light' : 'dark'} />
        <AppTabs />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
