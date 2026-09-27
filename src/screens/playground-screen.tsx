import { useMemo, useState } from 'react';
import { Platform, Pressable, View } from 'react-native';

import { ScreenScaffold } from '@/components/screen-scaffold';
import { ThemeToggle } from '@/components/theme-toggle';
import { SwipeableInboxCard } from '@/components/playground/swipeable-inbox-card';
import { StatCard } from '@/components/playground/stat-card';
import { TaskRow } from '@/components/playground/task-row';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { inboxItems, stats, tasks, type TaskStatus } from '@/lib/tasks';
import { useToast, Toast, ToastDescription, ToastTitle } from '@/components/ui/toast';

const filters: { id: 'all' | TaskStatus; label: string }[] = [
  { id: 'all', label: 'Alles' },
  { id: 'open', label: 'Open' },
  { id: 'in-progress', label: 'Bezig' },
  { id: 'review', label: 'Review' },
  { id: 'done', label: 'Klaar' },
];

export function PlaygroundScreen() {
  const toast = useToast();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]['id']>('all');
  const [inbox, setInbox] = useState(inboxItems);

  const visibleTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesFilter = filter === 'all' || task.status === filter;
      const haystack = `${task.title} ${task.project} ${task.owner}`.toLowerCase();
      return matchesFilter && haystack.includes(query.trim().toLowerCase());
    });
  }, [filter, query]);

  const archiveItem = (id: string) => {
    setInbox((current) => current.filter((item) => item.id !== id));
    toast.show({
      placement: 'top',
      render: ({ id: toastId }) => (
        <Toast nativeID={`toast-${toastId}`} action="muted" variant="solid">
          <ToastTitle>Bericht gearchiveerd</ToastTitle>
          <ToastDescription>Het item is uit de inbox gehaald.</ToastDescription>
        </Toast>
      ),
    });
  };

  const createTask = () => {
    toast.show({
      placement: 'top',
      render: ({ id }) => (
        <Toast nativeID={`toast-${id}`} action="success" variant="solid">
          <ToastTitle>Nieuwe taak</ToastTitle>
          <ToastDescription>In een echte app opent dit een formulier.</ToastDescription>
        </Toast>
      ),
    });
  };

  return (
    <ScreenScaffold>
      <View className="gap-8 md:flex-row">
        <View className="hidden w-60 shrink-0 gap-6 md:flex">
          <View className="gap-1">
            <Text size="sm" className="text-muted-foreground">
              Werkruimte
            </Text>
            <Heading size="lg">Noordlicht</Heading>
          </View>
          <View className="gap-1">
            {['Overzicht', 'Taken', 'Inbox', 'Team'].map((item, index) => (
              <Pressable
                key={item}
                accessibilityRole="button"
                className={`justify-center rounded-lg px-3 ${
                  index === 0 ? 'bg-secondary' : ''
                }`}>
                <Text className={index === 0 ? 'text-foreground' : 'text-muted-foreground'}>
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="min-w-0 flex-1 gap-8">
          <View className="flex-row items-start justify-between gap-4">
            <View className="flex-1 gap-2">
              <Text size="sm" className="text-muted-foreground">
                Dashboard
              </Text>
              <Heading size="2xl" className="text-foreground">
                Taken deze week
              </Heading>
              <Text className="text-muted-foreground">
                Een realistisch scherm in plaats van losse componenten: header, filters,
                statistieken, lijst en een inbox-interactie.
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              {Platform.OS !== 'web' ? <ThemeToggle /> : null}
              <Button onPress={createTask}>
                <ButtonText>Nieuwe taak</ButtonText>
              </Button>
            </View>
          </View>

          <View className="gap-3 md:flex-row">
            {stats.map((stat) => (
              <StatCard key={stat.id} label={stat.label} value={stat.value} hint={stat.hint} />
            ))}
          </View>

          <View className="gap-4 rounded-xl border border-border bg-card p-4 md:p-5">
            <View className="gap-3 md:flex-row md:items-center">
              <Input className="flex-1">
                <InputField
                  value={query}
                  onChangeText={setQuery}
                  placeholder="Zoek op taak, project of persoon"
                  accessibilityLabel="Taken zoeken"
                />
              </Input>
              <View className="flex-row flex-wrap gap-2">
                {filters.map((item) => {
                  const selected = filter === item.id;
                  return (
                    <Pressable
                      key={item.id}
                      accessibilityRole="button"
                      accessibilityState={{ selected }}
                      onPress={() => setFilter(item.id)}
                      className={`items-center justify-center rounded-md px-3 py-2 ${
                        selected ? 'bg-primary' : 'bg-secondary'
                      }`}>
                      <Text
                        size="sm"
                        className={selected ? 'text-primary-foreground' : 'text-secondary-foreground'}>
                        {item.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            <View>
              {visibleTasks.length === 0 ? (
                <Text className="py-6 text-muted-foreground">Geen taken voor deze filter.</Text>
              ) : (
                visibleTasks.map((task) => <TaskRow key={task.id} task={task} />)
              )}
            </View>
          </View>

          <View className="gap-3">
            <View className="gap-1">
              <Heading size="lg">Inbox</Heading>
              <Text className="text-muted-foreground">
                {Platform.OS === 'web'
                  ? 'Op desktop web is archiveren een zichtbare knop. Swipe is hier geen natuurlijke interactie.'
                  : 'Veeg een kaart naar links. Onder de drempel veert hij terug; voorbij de drempel archiveert hij.'}
              </Text>
            </View>
            <View className="gap-3">
              {inbox.map((item) => (
                <SwipeableInboxCard key={item.id} item={item} onArchive={archiveItem} />
              ))}
              {inbox.length === 0 ? (
                <Text className="text-muted-foreground">Inbox is leeg.</Text>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </ScreenScaffold>
  );
}
