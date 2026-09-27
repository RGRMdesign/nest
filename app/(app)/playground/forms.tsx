import { useState } from 'react'
import { Label, SizableText, TextArea, XStack, YStack } from 'tamagui'

import { PreferenceRow } from '~/features/playground/bento/primitives'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { Button } from '~/interface/buttons/Button'
import { Input } from '~/interface/forms/Input'

export function FormsPage() {
  const [name, setName] = useState('Alex Rivera')
  const [email, setEmail] = useState('alex@nest.local')
  const [bio, setBio] = useState('Building playful UIs with Tamagui Bento patterns.')
  const [newsletter, setNewsletter] = useState(true)
  const [marketing, setMarketing] = useState(false)

  return (
    <PlaygroundShell title="Forms" subtitle="Input-, textarea- en preference-velden">
      <YStack gap="$2">
        <SectionLabel>Account</SectionLabel>
        <Surface>
          <YStack gap="$2">
            <Label htmlFor="name">Naam</Label>
            <Input id="name" value={name} onChangeText={setName} size="$4" />
          </YStack>
          <YStack gap="$2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              value={email}
              onChangeText={setEmail}
              size="$4"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </YStack>
          <YStack gap="$2">
            <Label htmlFor="bio">Bio</Label>
            <TextArea
              id="bio"
              value={bio}
              onChangeText={setBio}
              size="$4"
              minH={100}
              bg="$color1"
              borderWidth={1}
              borderColor="$color6"
              rounded="$4"
              p="$3"
            />
          </YStack>
        </Surface>
      </YStack>

      <YStack gap="$2">
        <SectionLabel>Voorkeuren</SectionLabel>
        <Surface>
          <PreferenceRow
            label="Nieuwsbrief"
            description="Wekelijkse productupdates"
            checked={newsletter}
            onCheckedChange={setNewsletter}
          />
          <PreferenceRow
            label="Marketing"
            description="Tips en campagnes (fictief)"
            checked={marketing}
            onCheckedChange={setMarketing}
          />
        </Surface>
      </YStack>

      <XStack gap="$2">
        <Button theme="blue" flex={1} size="$5">
          Opslaan
        </Button>
        <Button
          variant="outlined"
          flex={1}
          size="$5"
          onPress={() => {
            setName('Alex Rivera')
            setEmail('alex@nest.local')
            setBio('Building playful UIs with Tamagui Bento patterns.')
          }}
        >
          Reset
        </Button>
      </XStack>

      <SizableText size="$2" color="$color9" text="center">
        Wijzigingen blijven lokaal — er is geen backend.
      </SizableText>
    </PlaygroundShell>
  )
}
