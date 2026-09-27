import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  type TabListProps,
  type TabTriggerSlotProps,
} from 'expo-router/ui';
import { Pressable, View } from 'react-native';

import { ThemeToggle } from '@/components/theme-toggle';
import { Text } from '@/components/ui/text';

export default function AppTabs() {
  return (
    <View className="min-h-full flex-1 bg-background">
      <Tabs>
        <TabList asChild>
          <WebTabList>
            <TabTrigger name="home" href="/" asChild>
              <WebTabButton>Start</WebTabButton>
            </TabTrigger>
            <TabTrigger name="components" href="/components" asChild>
              <WebTabButton>Componenten</WebTabButton>
            </TabTrigger>
            <TabTrigger name="playground" href="/playground" asChild>
              <WebTabButton>Playground</WebTabButton>
            </TabTrigger>
          </WebTabList>
        </TabList>
        <TabSlot style={{ flex: 1, height: '100%' }} />
      </Tabs>
    </View>
  );
}

function WebTabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable
      {...props}
      accessibilityRole="tab"
      accessibilityState={{ selected: !!isFocused }}
      className={`min-h-11 items-center justify-center rounded-full px-4 ${
        isFocused ? 'bg-primary' : 'bg-transparent'
      }`}>
      <Text className={isFocused ? 'text-primary-foreground' : 'text-muted-foreground'} size="sm">
        {children}
      </Text>
    </Pressable>
  );
}

function WebTabList(props: TabListProps) {
  return (
    <View className="sticky top-0 z-20 border-b border-border bg-background/95 px-6 py-4">
      <View className="mx-auto w-full max-w-5xl flex-col gap-3 md:flex-row md:items-center">
        <Text className="text-foreground md:mr-auto" bold>
          Playground
        </Text>
        <View className="flex-row flex-wrap items-center gap-2 rounded-full border border-border bg-card p-1">
          {props.children}
        </View>
        <ThemeToggle />
      </View>
    </View>
  );
}
