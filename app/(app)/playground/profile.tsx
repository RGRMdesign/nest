import { SizableText, XStack, YStack } from 'tamagui'

import { Chip } from '~/features/playground/bento/primitives'
import { mockUser } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { Avatar } from '~/interface/avatars/Avatar'
import { Button } from '~/interface/buttons/Button'
import { H3 } from '~/interface/text/Headings'

export function ProfilePage() {
  return (
    <PlaygroundShell title="Profile" subtitle="Profielscherm met header en stats">
      <Surface>
        <XStack gap="$4" items="center">
          <Avatar size={72} name={mockUser.name} image={mockUser.avatar} />
          <YStack flex={1} gap="$1">
            <H3 size="$5">{mockUser.name}</H3>
            <SizableText size="$3" color="$color10">
              {mockUser.handle}
            </SizableText>
            <XStack gap="$2" mt="$2" flexWrap="wrap">
              <Chip active>Designer</Chip>
              <Chip>Amsterdam</Chip>
              <Chip>Nest</Chip>
            </XStack>
          </YStack>
        </XStack>

        <SizableText size="$4" color="$color11" mt="$2">
          {mockUser.bio}
        </SizableText>

        <XStack gap="$2" mt="$3">
          <Button theme="blue" flex={1} size="$4">
            Volgen
          </Button>
          <Button variant="outlined" flex={1} size="$4">
            Bericht
          </Button>
        </XStack>
      </Surface>

      <XStack gap="$3">
        {[
          { label: 'Posts', value: mockUser.posts },
          { label: 'Followers', value: mockUser.followers },
          { label: 'Following', value: mockUser.following },
        ].map((stat) => (
          <YStack
            key={stat.label}
            flex={1}
            items="center"
            gap="$1"
            bg="$color2"
            borderWidth={1}
            borderColor="$color5"
            rounded="$5"
            py="$4"
          >
            <SizableText size="$6" fontWeight="700">
              {stat.value}
            </SizableText>
            <SizableText size="$2" color="$color10">
              {stat.label}
            </SizableText>
          </YStack>
        ))}
      </XStack>

      <YStack gap="$2">
        <SectionLabel>Over</SectionLabel>
        <Surface>
          <XStack justify="space-between">
            <SizableText color="$color10">Locatie</SizableText>
            <SizableText fontWeight="600">{mockUser.location}</SizableText>
          </XStack>
          <XStack justify="space-between">
            <SizableText color="$color10">Lid sinds</SizableText>
            <SizableText fontWeight="600">{mockUser.joined}</SizableText>
          </XStack>
        </Surface>
      </YStack>
    </PlaygroundShell>
  )
}
