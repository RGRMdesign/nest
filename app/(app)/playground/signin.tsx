import { SizableText, Separator, YStack } from 'tamagui'

import { SignInScreen } from '~/components/bento/forms/layouts/SignInScreen'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function SignInPage() {
  return (
    <PlaygroundShell title="Sign in" subtitle="Bento SignInScreen form layout">
      <YStack gap="$2">
        <SectionLabel>Sign-in form</SectionLabel>
        <Surface>
          <SignInScreen />
        </Surface>
      </YStack>

      <Separator />
      <SizableText size="$2" color="$color9" text="center">
        Bron: tamagui.dev/bento · forms/layouts/SignInScreen
      </SizableText>
    </PlaygroundShell>
  )
}
