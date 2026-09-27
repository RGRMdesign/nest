export type TaskStatus = 'open' | 'in-progress' | 'review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  project: string;
  owner: string;
  initials: string;
  due: string;
  status: TaskStatus;
  priority: TaskPriority;
};

export const tasks: Task[] = [
  {
    id: 'atlas-ia',
    title: 'Review onboarding copy for Atlas',
    project: 'Atlas',
    owner: 'Mila Vos',
    initials: 'MV',
    due: '2026-09-29',
    status: 'review',
    priority: 'high',
  },
  {
    id: 'harbor-api',
    title: 'Map Harbor API error states',
    project: 'Harbor',
    owner: 'Jonas Berg',
    initials: 'JB',
    due: '2026-09-30',
    status: 'in-progress',
    priority: 'medium',
  },
  {
    id: 'lumen-a11y',
    title: 'Check keyboard flow on Lumen filters',
    project: 'Lumen',
    owner: 'Sara Nair',
    initials: 'SN',
    due: '2026-10-01',
    status: 'open',
    priority: 'high',
  },
  {
    id: 'atlas-tokens',
    title: 'Document token aliases for partners',
    project: 'Atlas',
    owner: 'Ivo Hart',
    initials: 'IH',
    due: '2026-10-03',
    status: 'open',
    priority: 'low',
  },
  {
    id: 'harbor-qa',
    title: 'Prepare Harbor regression notes',
    project: 'Harbor',
    owner: 'Mila Vos',
    initials: 'MV',
    due: '2026-10-04',
    status: 'done',
    priority: 'medium',
  },
];

export const inboxItems = [
  {
    id: 'inbox-1',
    title: 'Design critique — Atlas empty states',
    meta: 'Vandaag · 14:10',
    tone: 'review' as const,
  },
  {
    id: 'inbox-2',
    title: 'Nieuwe token-aanvraag van Harbor',
    meta: 'Gisteren · 18:42',
    tone: 'open' as const,
  },
  {
    id: 'inbox-3',
    title: 'Lumen accessibility-notities',
    meta: 'Vrijdag · 09:05',
    tone: 'done' as const,
  },
];

export const stats = [
  { id: 'open', label: 'Open', value: 12, hint: '3 nieuw deze week' },
  { id: 'progress', label: 'In uitvoering', value: 5, hint: '2 wachten op review' },
  { id: 'review', label: 'Review', value: 4, hint: '1 is overdue' },
  { id: 'done', label: 'Afgerond', value: 18, hint: 'deze sprint' },
] as const;

export const statusLabel: Record<TaskStatus, string> = {
  open: 'Open',
  'in-progress': 'Bezig',
  review: 'Review',
  done: 'Klaar',
};

export const priorityLabel: Record<TaskPriority, string> = {
  low: 'Laag',
  medium: 'Normaal',
  high: 'Hoog',
};
