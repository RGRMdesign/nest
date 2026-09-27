import { SizableText, Separator, YStack } from 'tamagui'

import { InputWithLabelDemo } from '~/components/bento/forms/inputs/InputWithLabel'
import { CheckboxCards } from '~/components/bento/forms/checkboxes/CheckboxCards'
import { GroupedRadio } from '~/components/bento/forms/radiogroups/GroupedRadio'
import { SwitchCustomIcons } from '~/components/bento/forms/switches/SwitchCustomIcons'
import { WritePreviewAction } from '~/components/bento/forms/textareas/WritePreviewAction'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function FormsPage() {
  return (
    <PlaygroundShell
      title="Forms"
      subtitle="Bento forms — inputs, switches, radio, checkboxes, textarea"
    >
      <YStack gap="$2">
        <SectionLabel>Input with label</SectionLabel>
        <Surface>
          <InputWithLabelDemo labelText="E-mail" />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Switch with custom icons</SectionLabel>
        <Surface>
          <SwitchCustomIcons size="$4" />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Grouped radio</SectionLabel>
        <Surface>
          <GroupedRadio />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Checkbox cards</SectionLabel>
        <Surface>
          <CheckboxCards />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Write preview action</SectionLabel>
        <Surface>
          <WritePreviewAction />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · forms/*
      </SizableText>
    </PlaygroundShell>
  )
}
