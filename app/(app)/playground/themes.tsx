import { useUserScheme } from '@vxrn/color-scheme'
import { Circle, Separator, SizableText, Theme, XStack, YStack } from 'tamagui'

import { ThemeColorPicker } from '~/features/theme/ThemeColorPicker'
import { THEME_COLOR_OPTIONS } from '~/features/theme/themeColors'
import { useThemeColor } from '~/features/theme/ThemeColorContext'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { ThemeSwitch } from '~/interface/theme/ThemeSwitch'
import { Button } from '~/interface/buttons/Button'
import { H3 } from '~/interface/text/Headings'

export function ThemesPage() {
  const userScheme = useUserScheme()
  const { colorId } = useThemeColor()

  return (
    <PlaygroundShell
      title="Themes"
      subtitle="Dark/light mode + Tamagui theme builder kleuren"
    >
      <Surface theme="blue">
        <H3 size="$4">Theme studio</H3>
        <SizableText size="$4" color="$color11" opacity={0.9}>
          Zelfde kleurthema’s als{' '}
          <SizableText fontWeight="700">createV5Theme</SizableText> / de Tamagui Theme Builder:
          light & dark, accent (inverse), en child colors (blue, red, green, …). Keuze blijft
          bewaard in localStorage.
        </SizableText>
      </Surface>

      <YStack gap="$2">
        <SectionLabel>Mode</SectionLabel>
        <Surface>
          <SizableText size="$3" color="$color10" mb="$2">
            Actief: {userScheme.setting} → resolved {userScheme.value}
          </SizableText>
          <ThemeSwitch variant="segmented" />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Kleurthema</SectionLabel>
        <Surface>
          <SizableText size="$3" color="$color10" mb="$3">
            Actief: {colorId === 'base' ? 'base (geen child theme)' : colorId}
          </SizableText>
          <ThemeColorPicker variant="grid" />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Live preview</SectionLabel>
        <Surface>
          <XStack gap="$2" flexWrap="wrap">
            <Button theme="accent" size="$4">
              Accent CTA
            </Button>
            <Button size="$4">Primary</Button>
            <Button variant="outlined" size="$4">
              Outlined
            </Button>
          </XStack>
          <XStack gap="$2" mt="$3" flexWrap="wrap">
            {(['$color2', '$color4', '$color6', '$color8', '$color10', '$color12'] as const).map(
              (token) => (
                <YStack key={token} items="center" gap="$1">
                  <Circle size={36} bg={token} borderWidth={1} borderColor="$color5" />
                  <SizableText size="$1" color="$color10">
                    {token.replace('$', '')}
                  </SizableText>
                </YStack>
              )
            )}
          </XStack>
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Alle child themes</SectionLabel>
        <XStack gap="$2" flexWrap="wrap">
          {THEME_COLOR_OPTIONS.filter((o) => o.id !== 'base' && o.id !== 'accent').map(
            (option) => (
              <Theme key={option.id} name={option.id as any}>
                <YStack
                  width={100}
                  p="$3"
                  gap="$2"
                  rounded="$4"
                  bg="$color3"
                  borderWidth={1}
                  borderColor="$color6"
                >
                  <SizableText size="$2" fontWeight="700" color="$color12">
                    {option.label}
                  </SizableText>
                  <XStack gap="$1">
                    <Circle size={12} bg="$color5" />
                    <Circle size={12} bg="$color8" />
                    <Circle size={12} bg="$color11" />
                  </XStack>
                </YStack>
              </Theme>
            )
          )}
        </XStack>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/docs/guides/theme-builder · createV5Theme
      </SizableText>
    </PlaygroundShell>
  )
}
