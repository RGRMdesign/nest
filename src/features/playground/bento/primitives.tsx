import type { ReactNode } from 'react'
import { SizableText, Switch, XStack, YStack } from 'tamagui'

import { Avatar } from '~/interface/avatars/Avatar'

/** Bento-style preference row */
export function PreferenceRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string
  description?: string
  checked: boolean
  onCheckedChange: (value: boolean) => void
}) {
  return (
    <XStack items="center" justify="space-between" gap="$3" py="$2">
      <YStack flex={1} gap="$1">
        <SizableText size="$4" fontWeight="600">
          {label}
        </SizableText>
        {description ? (
          <SizableText size="$3" color="$color10">
            {description}
          </SizableText>
        ) : null}
      </YStack>
      <Switch
        size="$3"
        checked={checked}
        onCheckedChange={onCheckedChange}
        bg={checked ? '$green9' : '$color6'}
      >
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  )
}

/** Bento-style list row */
export function ListRow({
  title,
  subtitle,
  right,
  onPress,
  avatarName,
}: {
  title: string
  subtitle?: string
  right?: ReactNode
  onPress?: () => void
  avatarName?: string
}) {
  return (
    <XStack
      items="center"
      gap="$3"
      py="$3"
      px="$1"
      cursor={onPress ? 'pointer' : undefined}
      pressStyle={onPress ? { opacity: 0.75 } : undefined}
      onPress={onPress}
    >
      {avatarName ? <Avatar size={44} name={avatarName} image={null} /> : null}
      <YStack flex={1} gap="$1">
        <SizableText size="$4" fontWeight="600">
          {title}
        </SizableText>
        {subtitle ? (
          <SizableText size="$3" color="$color10" numberOfLines={1}>
            {subtitle}
          </SizableText>
        ) : null}
      </YStack>
      {right}
    </XStack>
  )
}

/** Bento-style stat card */
export function StatCard({
  label,
  value,
  delta,
}: {
  label: string
  value: string
  delta?: string
}) {
  return (
    <YStack
      flex={1}
      minW={140}
      bg="$color2"
      borderWidth={1}
      borderColor="$color5"
      rounded="$5"
      p="$4"
      gap="$2"
    >
      <SizableText size="$3" color="$color10">
        {label}
      </SizableText>
      <SizableText size="$7" fontWeight="700">
        {value}
      </SizableText>
      {delta ? (
        <SizableText size="$2" color="$green10" fontWeight="600">
          {delta}
        </SizableText>
      ) : null}
    </YStack>
  )
}

/** Bento-style chip / pill tag */
export function Chip({ children, active }: { children: ReactNode; active?: boolean }) {
  return (
    <XStack
      px="$3"
      py="$1.5"
      rounded="$10"
      bg={active ? '$color9' : '$color3'}
      borderWidth={1}
      borderColor={active ? '$color9' : '$color5'}
    >
      <SizableText size="$2" fontWeight="600" color={active ? '$color1' : '$color11'}>
        {children}
      </SizableText>
    </XStack>
  )
}
