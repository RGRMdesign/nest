import { SizableText, Separator, YStack } from 'tamagui'

import { ButtonLoading } from '~/components/bento/animation/buttons/ButtonLoading'
import { AvatarsTooltip } from '~/components/bento/animation/avatars/AvatarsTooltip'
import { AnimatedNumbers } from '~/components/bento/animation/microinteractions/NumberSlider'
import { SlideInDemo } from '~/components/bento/animation/slide/SlideIn'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function AnimationPage() {
  return (
    <PlaygroundShell
      title="Animation"
      subtitle="Bento animation — loading, slide-in, tooltip avatars, slider"
    >
      <YStack gap="$2">
        <SectionLabel>Button loading</SectionLabel>
        <Surface>
          <ButtonLoading />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Slide in</SectionLabel>
        <Surface>
          <SlideInDemo />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Avatars tooltip</SectionLabel>
        <Surface>
          <AvatarsTooltip />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Number slider</SectionLabel>
        <Surface>
          <AnimatedNumbers />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · animation/*
      </SizableText>
    </PlaygroundShell>
  )
}
