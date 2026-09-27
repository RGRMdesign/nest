import type { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { layout } from '@/lib/theme';

type ScreenScaffoldProps = {
  children: ReactNode;
  scroll?: boolean;
  maxWidth?: number;
};

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
    return (
      <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
        {content}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="grow"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        {content}
      </ScrollView>
    </SafeAreaView>
  );
}
