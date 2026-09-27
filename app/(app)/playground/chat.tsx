import { Circle, SizableText, XStack, YStack } from 'tamagui'

import { ListRow } from '~/features/playground/bento/primitives'
import { mockChats } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel } from '~/features/playground/PlaygroundShell'

export function ChatPage() {
  return (
    <PlaygroundShell title="Chat" subtitle="Gesprekkenlijst met unread badges">
      <SectionLabel>Inbox</SectionLabel>
      <YStack
        bg="$color2"
        borderWidth={1}
        borderColor="$color5"
        rounded="$6"
        px="$3"
        overflow="hidden"
      >
        {mockChats.map((chat, index) => (
          <YStack
            key={chat.id}
            borderTopWidth={index === 0 ? 0 : 1}
            borderColor="$color4"
          >
            <ListRow
              title={chat.name}
              subtitle={chat.preview}
              avatarName={chat.name}
              right={
                <YStack items="flex-end" gap="$2" minW={56}>
                  <SizableText size="$2" color="$color9">
                    {chat.time}
                  </SizableText>
                  {chat.unread > 0 ? (
                    <Circle size={22} bg="$blue9" items="center" justify="center">
                      <SizableText size="$1" color="white" fontWeight="700">
                        {chat.unread}
                      </SizableText>
                    </Circle>
                  ) : (
                    <XStack height={22} />
                  )}
                </YStack>
              }
            />
          </YStack>
        ))}
      </YStack>
    </PlaygroundShell>
  )
}
