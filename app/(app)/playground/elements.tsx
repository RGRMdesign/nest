import { SizableText, Theme, XStack, YStack } from 'tamagui'

import { Chip } from '~/features/playground/bento/primitives'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { Avatar } from '~/interface/avatars/Avatar'
import { Button } from '~/interface/buttons/Button'

const themes = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'yellow'] as const

export function ElementsPage() {
  return (
    <PlaygroundShell title="Elements" subtitle="Buttons, avatars, chips en themes">
      <YStack gap="$2">
        <SectionLabel>Buttons</SectionLabel>
        <Surface>
          <XStack gap="$2" flexWrap="wrap">
            <Button theme="blue" size="$4">
              Primary
            </Button>
            <Button variant="outlined" size="$4">
              Outlined
            </Button>
            <Button variant="floating" size="$4">
              Floating
            </Button>
            <Button variant="transparent" size="$4">
              Ghost
            </Button>
            <Button theme="red" size="$4">
              Danger
            </Button>
          </XStack>
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Avatars</SectionLabel>
        <Surface>
          <XStack gap="$3" items="center" flexWrap="wrap">
            {['Alex', 'Maya', 'Jordan', 'Sam', 'Riley'].map((name) => (
              <YStack key={name} items="center" gap="$2">
                <Avatar size={48} name={name} image={null} />
                <SizableText size="$2" color="$color10">
                  {name}
                </SizableText>
              </YStack>
            ))}
          </XStack>
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Chips</SectionLabel>
        <Surface>
          <XStack gap="$2" flexWrap="wrap">
            <Chip active>Active</Chip>
            <Chip>Design</Chip>
            <Chip>Native</Chip>
            <Chip>Web</Chip>
            <Chip>Bento</Chip>
          </XStack>
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Theme swatches</SectionLabel>
        <XStack gap="$2" flexWrap="wrap">
          {themes.map((theme) => (
            <Theme key={theme} name={theme}>
              <YStack
                width={72}
                height={72}
                rounded="$5"
                bg="$color5"
                borderWidth={1}
                borderColor="$color7"
                items="center"
                justify="center"
              >
                <SizableText size="$1" fontWeight="700" color="$color11">
                  {theme}
                </SizableText>
              </YStack>
            </Theme>
          ))}
        </XStack>
      </YStack>
    </PlaygroundShell>
  )
}
