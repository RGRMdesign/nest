import { SizableText, Separator, YStack } from 'tamagui'

import { Tabbar } from '~/components/bento/shells/tabbars/TabBar'
import { TabBarSecondExample } from '~/components/bento/shells/tabbars/TabBarSecondExample'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function ShellsPage() {
  return (
    <PlaygroundShell title="Shells" subtitle="Bento shells — tab bar composities">
      <YStack gap="$2">
        <SectionLabel>Tab bar</SectionLabel>
        <Surface>
          <Tabbar />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Tab bar (second example)</SectionLabel>
        <Surface>
          <TabBarSecondExample />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · shells/tabbars
      </SizableText>
    </PlaygroundShell>
  )
}
