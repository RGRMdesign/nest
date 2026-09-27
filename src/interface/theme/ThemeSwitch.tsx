import { useUserScheme, type SchemeSetting } from '@vxrn/color-scheme'
import { SizableText, XStack, YStack, type SizeTokens } from 'tamagui'

import { Button } from '~/interface/buttons/Button'
import { CircleHalfIcon } from '~/interface/icons/phosphor/CircleHalfIcon'
import { MoonStarsIcon } from '~/interface/icons/phosphor/MoonStarsIcon'
import { SunIcon } from '~/interface/icons/phosphor/SunIcon'

const SCHEME_OPTIONS: {
  id: SchemeSetting
  label: string
  Icon: typeof SunIcon
}[] = [
  { id: 'light', label: 'Light', Icon: SunIcon },
  { id: 'dark', label: 'Dark', Icon: MoonStarsIcon },
  { id: 'system', label: 'System', Icon: CircleHalfIcon },
]

type ThemeSwitchProps = {
  size?: SizeTokens
  /** compact = icon cycle (header); segmented = explicit light/dark/system */
  variant?: 'compact' | 'segmented'
}

/**
 * Dark / light / system mode switch.
 * Compact cycles; segmented shows all options (theme builder style).
 */
export function ThemeSwitch({ size = '$2', variant = 'compact' }: ThemeSwitchProps) {
  const userScheme = useUserScheme()
  const toggle = useToggleTheme()

  if (variant === 'segmented') {
    return (
      <XStack
        bg="$color3"
        borderWidth={1}
        borderColor="$color5"
        rounded="$4"
        p="$1"
        gap="$1"
        items="center"
        flexWrap="wrap"
      >
        {SCHEME_OPTIONS.map(({ id, label, Icon }) => {
          const active = userScheme.setting === id
          return (
            <Button
              key={id}
              size="$3"
              variant={active ? 'default' : 'transparent'}
              bg={active ? '$color5' : 'transparent'}
              onPress={() => userScheme.set(id)}
              icon={<Icon size={16} />}
              px="$3"
              aria-label={`${label} mode`}
              aria-pressed={active}
            >
              <SizableText size="$2" fontWeight={active ? '700' : '500'}>
                {label}
              </SizableText>
            </Button>
          )
        })}
      </XStack>
    )
  }

  const { onPress, setting } = toggle
  const iconSize = size === '$1' ? 16 : size === '$2' ? 20 : size === '$3' ? 24 : 28
  const ActiveIcon =
    setting === 'system' ? CircleHalfIcon : setting === 'dark' ? MoonStarsIcon : SunIcon

  return (
    <YStack items="center" gap="$1">
      <Button
        onPress={onPress}
        transition="medium"
        circular
        pressStyle={{ scale: 0.9, opacity: 0.8 }}
        hoverStyle={{ scale: 1.05 }}
        aria-label={`Theme: ${setting}. Klik om te wisselen.`}
        icon={<ActiveIcon size={iconSize} />}
      />
    </YStack>
  )
}

export function useToggleTheme() {
  const userScheme = useUserScheme()
  const Icon =
    userScheme.setting === 'system'
      ? CircleHalfIcon
      : userScheme.setting === 'dark'
        ? MoonStarsIcon
        : SunIcon

  return {
    setting: userScheme.setting,
    scheme: userScheme.value,
    Icon,
    onPress: () => {
      const order: SchemeSetting[] = ['light', 'dark', 'system']
      const currentIndex = order.indexOf(userScheme.setting)
      const next = order[(currentIndex >= 0 ? currentIndex + 1 : 0) % order.length]!
      userScheme.set(next)
    },
  }
}

ThemeSwitch.title = 'Theme Switch'
