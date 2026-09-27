import { Pressable } from 'react-native';

import { useAppTheme } from '@/hooks/use-app-theme';
import { Text } from '@/components/ui/text';

const labels = {
  system: 'Systeem',
  light: 'Licht',
  dark: 'Donker',
} as const;

export function ThemeToggle() {
  const { preference, cyclePreference } = useAppTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Thema: ${labels[preference]}. Tik om te wisselen.`}
      onPress={cyclePreference}
      className="items-center justify-center rounded-md border border-border bg-card px-3 py-2">
      <Text size="sm" className="text-foreground">
        {labels[preference]}
      </Text>
    </Pressable>
  );
}
