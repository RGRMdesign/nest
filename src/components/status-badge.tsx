import { Badge, BadgeText } from '@/components/ui/badge';
import { priorityLabel, statusLabel, type TaskPriority, type TaskStatus } from '@/lib/tasks';

const statusClassName: Record<TaskStatus, string> = {
  open: 'bg-secondary border-border',
  'in-progress': 'bg-primary/10 border-transparent',
  review: 'bg-accent/15 border-transparent',
  done: 'bg-success/15 border-transparent',
};

const statusTextClassName: Record<TaskStatus, string> = {
  open: 'text-secondary-foreground',
  'in-progress': 'text-primary',
  review: 'text-accent',
  done: 'text-success',
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <Badge className={`rounded-full px-2.5 py-1 ${statusClassName[status]}`}>
      <BadgeText className={`text-xs font-medium ${statusTextClassName[status]}`}>
        {statusLabel[status]}
      </BadgeText>
    </Badge>
  );
}

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  return (
    <Badge
      className={`rounded-full px-2.5 py-1 ${
        priority === 'high' ? 'bg-destructive/10' : 'bg-muted'
      }`}>
      <BadgeText
        className={`text-xs font-medium ${
          priority === 'high' ? 'text-destructive' : 'text-muted-foreground'
        }`}>
        {priorityLabel[priority]}
      </BadgeText>
    </Badge>
  );
}
