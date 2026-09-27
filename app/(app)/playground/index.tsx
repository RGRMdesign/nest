import { Link } from 'one'
import { SizableText, Theme, XStack, YStack } from 'tamagui'

import { playgroundScreens } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { CaretRightIcon } from '~/interface/icons/phosphor/CaretRightIcon'
import { H3 } from '~/interface/text/Headings'

export function PlaygroundIndexPage() {
  return (
    <PlaygroundShell
      title="Playground"
      subtitle="Fictieve schermen gebouwd met Tamagui in Bento-stijl. Backend niet vereist."
      showBack={false}
    >
      <Surface theme="blue">
        <H3 size="$4">Nest × Takeout</H3>
        <SizableText size="$4" color="$color11" opacity={0.9}>
          Deze app start vanuit Tamagui Takeout Free en toont Bento-achtige UI-secties voor
          iOS, Android en web. Kies een scherm om te verkennen.
        </SizableText>
      </Surface>

      <YStack gap="$2">
        <SectionLabel>Schermen</SectionLabel>
        <YStack
          bg="$color2"
          borderWidth={1}
          borderColor="$color5"
          rounded="$6"
          overflow="hidden"
        >
          {playgroundScreens.map((screen, index) => (
            <Link key={screen.id} href={screen.href as any} asChild>
              <XStack
                items="center"
                gap="$3"
                p="$4"
                borderTopWidth={index === 0 ? 0 : 1}
                borderColor="$color4"
                cursor="pointer"
                hoverStyle={{ bg: '$color3' }}
                pressStyle={{ bg: '$color4', opacity: 0.9 }}
              >
                <Theme name={screen.theme as any}>
                  <YStack
                    width={40}
                    height={40}
                    rounded="$4"
                    bg="$color4"
                    items="center"
                    justify="center"
                  >
                    <SizableText size="$4" fontWeight="700" color="$color11">
                      {screen.title.slice(0, 1)}
                    </SizableText>
                  </YStack>
                </Theme>
                <YStack flex={1} gap="$1">
                  <SizableText size="$4" fontWeight="700">
                    {screen.title}
                  </SizableText>
                  <SizableText size="$3" color="$color10">
                    {screen.description}
                  </SizableText>
                </YStack>
                <CaretRightIcon size={16} opacity={0.5} />
              </XStack>
            </Link>
          ))}
        </YStack>
      </YStack>
    </PlaygroundShell>
  )
}
