import { Badge, BadgeText } from '@/components/ui/badge';
import { priorityLabel, statusLabel, type TaskPriority, type TaskStatus } from '@/lib/tasks';

const statusClassName: Record<TaskStatus, string> = {
  open: 'bg-secondary border-border',
  'in-progress': 'bg-primary/10 border-transparent',
  review: 'bg-accent border-transparent',
  done: 'bg-muted border-transparent',
};

const statusTextClassName: Record<TaskStatus, string> = {
  open: 'text-secondary-foreground',
  'in-progress': 'text-primary',
  review: 'text-accent-foreground',
  done: 'text-muted-foreground',
};

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <Badge className={statusClassName[status]}>
      <BadgeText className={statusTextClassName[status]}>{statusLabel[status]}</BadgeText>
    </Badge>
  );
}

export function PriorityBadge({ priority }: { priority: TaskPriority }) {
  return (
    <Badge className={priority === 'high' ? 'bg-destructive/10' : 'bg-muted'}>
      <BadgeText className={priority === 'high' ? 'text-destructive' : 'text-muted-foreground'}>
        {priorityLabel[priority]}
      </BadgeText>
    </Badge>
  );
}
