import { View } from 'react-native';

import { PriorityBadge, StatusBadge } from '@/components/status-badge';
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import { formatShortDate } from '@/lib/format';
import type { Task } from '@/lib/tasks';

export function TaskRow({ task }: { task: Task }) {
  return (
    <View
      accessibilityRole="none"
      className="flex-row items-center gap-3 border-b border-border py-3 last:border-b-0 native:min-h-14">
      <Avatar className="bg-secondary">
        <AvatarFallbackText className="text-secondary-foreground">{task.initials}</AvatarFallbackText>
      </Avatar>
      <View className="min-w-0 flex-1 gap-1">
        <Text className="text-foreground" bold>
          {task.title}
        </Text>
        <Text size="sm" className="text-muted-foreground">
          {task.project} · {task.owner} · {formatShortDate(task.due)}
        </Text>
      </View>
      <View className="hidden flex-row items-center gap-2 md:flex">
        <PriorityBadge priority={task.priority} />
        <StatusBadge status={task.status} />
      </View>
      <View className="md:hidden">
        <StatusBadge status={task.status} />
      </View>
    </View>
  );
}
