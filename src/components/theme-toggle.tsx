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
      className="min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card px-3">
      <Text size="sm" className="text-foreground">
        {labels[preference]}
      </Text>
    </Pressable>
  );
}
