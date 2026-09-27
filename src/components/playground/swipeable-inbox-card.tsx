import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import * as Haptics from 'expo-haptics';

import { StatusBadge } from '@/components/status-badge';
import { Text } from '@/components/ui/text';
import { swipe } from '@/lib/theme';
import { shouldCommitSwipe } from '@/lib/swipe';
import type { TaskStatus } from '@/lib/tasks';

const EASE_OUT = Easing.bezier(0.23, 1, 0.32, 1);

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
  const x = useSharedValue(0);
  const context = useSharedValue(0);
  const reduced = useReducedMotion();
  const [width, setWidth] = useState(320);

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .activeOffsetX([-10, 10])
        .onStart(() => {
          context.set(x.get());
        })
        .onUpdate((event) => {
          x.set(Math.min(0, context.get() + event.translationX));
        })
        .onEnd((event) => {
          if (shouldCommitSwipe(x.get(), event.velocityX, swipe.threshold)) {
            scheduleOnRN(Haptics.impactAsync, Haptics.ImpactFeedbackStyle.Medium);
            x.set(
              withTiming(-width, { duration: reduced ? 1 : 200, easing: EASE_OUT }, (finished) => {
                if (finished) {
                  scheduleOnRN(onArchive, item.id);
                }
              })
            );
            return;
          }

          x.set(
            withSpring(0, {
              duration: reduced ? 1 : 300,
              dampingRatio: 1,
              velocity: event.velocityX,
            })
          );
        }),
    [item.id, onArchive, reduced, width]
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.get() }],
  }));

  const revealStyle = useAnimatedStyle(() => ({
    opacity: Math.min(1, Math.abs(x.get()) / swipe.threshold),
  }));

  return (
    <View
      className="overflow-hidden rounded-xl"
      onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
      <Animated.View
        pointerEvents="none"
        style={revealStyle}
        className="absolute inset-0 items-end justify-center bg-destructive px-5">
        <Text className="text-destructive-foreground" bold>
          Archiveren
        </Text>
      </Animated.View>
      <GestureDetector gesture={pan}>
        <Animated.View
          accessibilityRole="button"
          accessibilityLabel={`${item.title}. Veeg naar links om te archiveren.`}
          accessibilityHint="Veeg voorbij de drempel om te archiveren"
          style={cardStyle}
          className="flex-row items-start gap-3 rounded-xl border border-border bg-card p-4">
          <View className="flex-1 gap-1">
            <Text className="text-foreground" bold>
              {item.title}
            </Text>
            <Text size="sm" className="text-muted-foreground">
              {item.meta}
            </Text>
          </View>
          <StatusBadge status={item.tone} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
