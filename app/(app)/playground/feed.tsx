import { SizableText, XStack, YStack } from 'tamagui'

import { mockFeed } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel } from '~/features/playground/PlaygroundShell'
import { Avatar } from '~/interface/avatars/Avatar'
import { Button } from '~/interface/buttons/Button'

export function FeedPage() {
  return (
    <PlaygroundShell title="Feed" subtitle="Sociale posts met fictieve interacties">
      <SectionLabel>Voor jou</SectionLabel>
      <YStack gap="$3">
        {mockFeed.map((post) => (
          <YStack
            key={post.id}
            bg="$color2"
            borderWidth={1}
            borderColor="$color5"
            rounded="$6"
            p="$4"
            gap="$3"
          >
            <XStack gap="$3" items="center">
              <Avatar size={40} name={post.author} image={null} />
              <YStack flex={1}>
                <SizableText size="$4" fontWeight="700">
                  {post.author}
                </SizableText>
                <SizableText size="$2" color="$color10">
                  {post.handle} · {post.time}
                </SizableText>
              </YStack>
            </XStack>

            <SizableText size="$4" lineHeight={24}>
              {post.body}
            </SizableText>

            <XStack gap="$2">
              <Button size="$3" variant="transparent">
                Like · {post.likes}
              </Button>
              <Button size="$3" variant="transparent">
                Reacties · {post.comments}
              </Button>
              <Button size="$3" variant="transparent">
                Delen
              </Button>
            </XStack>
          </YStack>
        ))}
      </YStack>
    </PlaygroundShell>
  )
}
