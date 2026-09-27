import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { DynamicColorIOS, Platform, useColorScheme } from 'react-native';

import { palette } from '@/lib/colors';

export default function AppTabs() {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = palette[scheme];

  return (
    <NativeTabs
      labelStyle={{
        default: {
          color: Platform.OS === 'ios' ? DynamicColorIOS({ light: palette.light.mutedForeground, dark: palette.dark.mutedForeground }) : colors.mutedForeground,
        },
        selected: {
          color:
            Platform.OS === 'ios'
              ? DynamicColorIOS({ light: palette.light.foreground, dark: palette.dark.foreground })
              : colors.foreground,
        },
      }}
      tintColor={
        Platform.OS === 'ios' ? DynamicColorIOS({ light: palette.light.primary, dark: palette.dark.primary }) : colors.primary
      }
      backgroundColor={
        Platform.OS === 'ios'
          ? DynamicColorIOS({ light: palette.light.background, dark: palette.dark.background })
          : colors.background
      }
      indicatorColor={
        Platform.OS === 'ios'
          ? DynamicColorIOS({ light: palette.light.secondary, dark: palette.dark.secondary })
          : colors.secondary
      }>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Start</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="components">
        <NativeTabs.Trigger.Label>Componenten</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="square.grid.2x2.fill" md="dashboard" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="playground">
        <NativeTabs.Trigger.Label>Playground</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="rectangle.split.3x1.fill" md="view_sidebar" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
