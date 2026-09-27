import { Circle, SizableText, Theme, XStack, YStack } from 'tamagui'

import { useIsDark } from '~/features/theme/useIsDark'
import {
  THEME_COLOR_OPTIONS,
  THEME_COLOR_SWATCHES,
  type ThemeColorId,
} from '~/features/theme/themeColors'
import { useThemeColor } from '~/features/theme/ThemeColorContext'

type ThemeColorPickerProps = {
  /** Compact strip for headers; full grid for theme studio */
  variant?: 'compact' | 'grid'
}

export function ThemeColorPicker({ variant = 'grid' }: ThemeColorPickerProps) {
  const { colorId, setColorId } = useThemeColor()
  const isDark = useIsDark()

  if (variant === 'compact') {
    return (
      <XStack gap="$1.5" items="center" flexWrap="wrap" maxW={220} justify="flex-end">
        {THEME_COLOR_OPTIONS.map((option) => (
          <ColorSwatch
            key={option.id}
            id={option.id}
            active={colorId === option.id}
            isDark={isDark}
            onPress={() => setColorId(option.id)}
            size={18}
          />
        ))}
      </XStack>
    )
  }

  return (
    <XStack gap="$2" flexWrap="wrap">
      {THEME_COLOR_OPTIONS.map((option) => {
        const active = colorId === option.id
        const swatch = THEME_COLOR_SWATCHES[option.id]
        const preview = isDark ? swatch.dark : swatch.light

        return (
          <YStack
            key={option.id}
          width="46%"
          $sm={{ width: 140 }}
            p="$3"
            gap="$2"
            rounded="$5"
            borderWidth={2}
            borderColor={active ? '$color10' : '$color5'}
            bg={active ? '$color3' : '$color2'}
            cursor="pointer"
            hoverStyle={{ bg: '$color3', borderColor: '$color7' }}
            pressStyle={{ opacity: 0.85 }}
            onPress={() => setColorId(option.id)}
            aria-label={`Kleurthema ${option.label}`}
            role="button"
          >
            <XStack items="center" gap="$2">
              <Circle size={28} bg={preview as any} borderWidth={1} borderColor="$color6" />
              <YStack flex={1} gap="$0.5">
                <SizableText size="$3" fontWeight="700">
                  {option.label}
                </SizableText>
                <SizableText size="$1" color="$color10" numberOfLines={2}>
                  {option.description}
                </SizableText>
              </YStack>
            </XStack>
            {option.id !== 'base' && option.id !== 'accent' ? (
              <Theme name={option.id as any}>
                <XStack gap="$1">
                  {(['$color3', '$color6', '$color9', '$color11'] as const).map((token) => (
                    <Circle key={token} size={14} bg={token} />
                  ))}
                </XStack>
              </Theme>
            ) : null}
          </YStack>
        )
      })}
    </XStack>
  )
}

function ColorSwatch({
  id,
  active,
  isDark,
  onPress,
  size,
}: {
  id: ThemeColorId
  active: boolean
  isDark: boolean
  onPress: () => void
  size: number
}) {
  const swatch = THEME_COLOR_SWATCHES[id]
  const bg = isDark ? swatch.dark : swatch.light

  return (
    <Circle
      size={size}
      bg={bg as any}
      borderWidth={active ? 2 : 1}
      borderColor={active ? '$color12' : '$color6'}
      cursor="pointer"
      pressStyle={{ scale: 0.9 }}
      onPress={onPress}
      aria-label={id}
      role="button"
      outlineWidth={active ? 2 : 0}
      outlineColor="$color10"
      outlineStyle="solid"
    />
  )
}
