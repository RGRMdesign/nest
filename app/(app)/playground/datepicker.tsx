import { SizableText, Separator, YStack } from 'tamagui'

import { DatePickerExample } from '~/components/bento/elements/datepickers/DatePicker'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function DatePickerPage() {
  return (
    <PlaygroundShell title="Date picker" subtitle="Bento DatePicker compositie">
      <YStack gap="$2">
        <SectionLabel>Date picker</SectionLabel>
        <Surface>
          <DatePickerExample />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · elements/datepickers
      </SizableText>
    </PlaygroundShell>
  )
}
