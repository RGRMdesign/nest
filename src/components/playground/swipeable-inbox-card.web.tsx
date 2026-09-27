import { Pressable, View } from 'react-native';

import { StatusBadge } from '@/components/status-badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import type { TaskStatus } from '@/lib/tasks';

type InboxItem = {
  id: string;
  title: string;
  meta: string;
  tone: TaskStatus;
};

type SwipeableInboxCardProps = {
  item: InboxItem;
  onArchive: (id: string) => void;
};

export function SwipeableInboxCard({ item, onArchive }: SwipeableInboxCardProps) {
  return (
    <View className="group flex-row items-start gap-3 rounded-xl border border-border bg-card p-4">
      <View className="flex-1 gap-1">
        <Text className="text-foreground" bold>
          {item.title}
        </Text>
        <Text size="sm" className="text-muted-foreground">
          {item.meta}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <StatusBadge status={item.tone} />
        <Pressable>
          <Button
            variant="outline"
            size="sm"
            className="min-h-11 opacity-100 group-hover:opacity-100"
            onPress={() => onArchive(item.id)}
            accessibilityLabel={`Archiveer ${item.title}`}>
            <ButtonText>Archiveren</ButtonText>
          </Button>
        </Pressable>
      </View>
    </View>
  );
}
