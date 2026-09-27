import { useState } from 'react'
import { Separator, SizableText, YStack } from 'tamagui'

import { PreferenceRow } from '~/features/playground/bento/primitives'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'

export function PreferencesPage() {
  const [push, setPush] = useState(true)
  const [email, setEmail] = useState(true)
  const [sounds, setSounds] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [haptics, setHaptics] = useState(true)
  const [compact, setCompact] = useState(false)

  return (
    <PlaygroundShell title="Preferences" subtitle="Instellingenlijst à la Bento">
      <YStack gap="$2">
        <SectionLabel>Notificaties</SectionLabel>
        <Surface>
          <PreferenceRow
            label="Push"
            description="Meldingen op dit apparaat"
            checked={push}
            onCheckedChange={setPush}
          />
          <Separator borderColor="$color4" />
          <PreferenceRow
            label="E-mail"
            description="Samenvatting per week"
            checked={email}
            onCheckedChange={setEmail}
          />
          <Separator borderColor="$color4" />
          <PreferenceRow
            label="Geluiden"
            description="Audio bij nieuwe events"
            checked={sounds}
            onCheckedChange={setSounds}
          />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Ervaring</SectionLabel>
        <Surface>
          <PreferenceRow
            label="Haptics"
            description="Lichte trillingen bij acties"
            checked={haptics}
            onCheckedChange={setHaptics}
          />
          <Separator borderColor="$color4" />
          <PreferenceRow
            label="Compacte lijsten"
            description="Dichter opeen op feed en chat"
            checked={compact}
            onCheckedChange={setCompact}
          />
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Privacy</SectionLabel>
        <Surface>
          <PreferenceRow
            label="Analytics"
            description="Anonieme gebruiksdata (demo)"
            checked={analytics}
            onCheckedChange={setAnalytics}
          />
        </Surface>
      </YStack>

      <SizableText size="$2" color="$color9" text="center">
        State is ephemeral — herladen wist je keuzes.
      </SizableText>
    </PlaygroundShell>
  )
}
