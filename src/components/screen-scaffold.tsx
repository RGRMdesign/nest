import type { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

import { layout } from '@/lib/theme';

type ScreenScaffoldProps = {
  children: ReactNode;
  scroll?: boolean;
  maxWidth?: number;
};

/**
 * Screen shell for NativeTabs / web tabs.
 *
 * NativeWind v5 does not style SafeAreaView from react-native-safe-area-context
 * (third-party native view). Use View/ScrollView so className works, and let
 * NativeTabs apply safe-area insets via contentInsetAdjustmentBehavior.
 */
export function ScreenScaffold({
  children,
  scroll = true,
  maxWidth = layout.pageMaxWidth,
}: ScreenScaffoldProps) {
  const content = (
    <View className="w-full flex-1 self-center px-5 py-6 web:px-8" style={{ maxWidth }}>
      {children}
    </View>
  );

  if (!scroll) {
    return <View className="flex-1 bg-background">{content}</View>;
  }

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="grow"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
      collapsable={false}>
      {content}
    </ScrollView>
  );
}
