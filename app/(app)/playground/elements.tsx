import { SizableText, Separator, YStack } from 'tamagui'

import { ButtonLoading } from '~/components/bento/animation/buttons/ButtonLoading'
import { AvatarsGrouped } from '~/components/bento/elements/avatars/AvatarsGrouped'
import { ButtonsWithLeftIcons } from '~/components/bento/elements/buttons/ButtonsWithLeftIcons'
import { Chips } from '~/components/bento/elements/chips/Chips'
import { ChipsWithIcon } from '~/components/bento/elements/chips/ChipsWithIcon'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function ElementsPage() {
  return (
    <PlaygroundShell
      title="Elements"
      subtitle="Bento elements — buttons, chips, avatars"
    >
      <YStack gap="$2">
        <SectionLabel>Buttons with left icons</SectionLabel>
        <Surface>
          <ButtonsWithLeftIcons />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Loading buttons</SectionLabel>
        <Surface>
          <ButtonLoading />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Chips</SectionLabel>
        <Surface>
          <Chips />
          <ChipsWithIcon />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Grouped avatars</SectionLabel>
        <Surface>
          <AvatarsGrouped />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · elements/*
      </SizableText>
    </PlaygroundShell>
  )
}
