import { NativeTabs } from 'expo-router/unstable-native-tabs';

/**
 * Platform defaults only — no custom tab bar colors.
 * On iOS 26+ NativeTabs draws Liquid Glass from the content behind the bar;
 * backgroundColor / blur props are ignored there.
 */
export default function AppTabs() {
  return (
    <NativeTabs>
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
