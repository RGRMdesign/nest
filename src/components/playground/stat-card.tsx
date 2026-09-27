import { View } from 'react-native';

import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { formatCount } from '@/lib/format';

type StatCardProps = {
  label: string;
  value: number;
  hint: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <View className="min-w-[140px] flex-1 gap-2 rounded-xl border border-border bg-card p-4">
      <Text size="sm" className="text-muted-foreground">
        {label}
      </Text>
      <Heading size="2xl" className="text-foreground">
        {formatCount(value)}
      </Heading>
      <Text size="xs" className="text-muted-foreground">
        {hint}
      </Text>
    </View>
  );
}
