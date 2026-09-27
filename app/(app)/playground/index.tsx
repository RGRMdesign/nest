import { Link } from 'one'
import { SizableText, Theme, XStack, YStack } from 'tamagui'

import { bentoCatalog } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { CaretRightIcon } from '~/interface/icons/phosphor/CaretRightIcon'
import { H3 } from '~/interface/text/Headings'

export function PlaygroundIndexPage() {
  return (
    <PlaygroundShell
      title="Bento playground"
      subtitle="Echte Tamagui Bento OSS-composities van tamagui.dev/bento — iOS, Android en web."
      showBack={false}
    >
      <Surface theme="blue">
        <H3 size="$4">Nest × Takeout × Bento</H3>
        <SizableText size="$4" color="$color11" opacity={0.9}>
          Gratis Bento-secties zijn geïnstalleerd via de officiële code-download API (zelfde bron als{' '}
          <SizableText tag="span" fontWeight="700">
            npx bento-get
          </SizableText>
          ). Pro-composities vragen een Bento-licentie.
        </SizableText>
      </Surface>

      <YStack gap="$2">
        <SectionLabel>Bento secties</SectionLabel>
        <YStack
          bg="$color2"
          borderWidth={1}
          borderColor="$color5"
          rounded="$6"
          overflow="hidden"
        >
          {bentoCatalog.map((screen, index) => (
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
