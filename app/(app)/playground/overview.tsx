import { SizableText, XStack, YStack } from 'tamagui'

import { mockRecent, mockStats } from '~/features/playground/data'
import { StatCard } from '~/features/playground/bento/primitives'
import { PlaygroundShell, SectionLabel, Surface } from '~/features/playground/PlaygroundShell'
import { Button } from '~/interface/buttons/Button'
import { H3 } from '~/interface/text/Headings'

export function OverviewPage() {
  return (
    <PlaygroundShell title="Overview" subtitle="Dashboard-sectie in Bento-stijl">
      <XStack flexWrap="wrap" gap="$3">
        {mockStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </XStack>

      <Surface theme="blue">
        <H3 size="$4">Snelle acties</H3>
        <SizableText size="$3" color="$color11" opacity={0.85}>
          Fictieve CTA’s — geen backend gekoppeld.
        </SizableText>
        <XStack gap="$2" flexWrap="wrap" mt="$2">
          <Button theme="blue" size="$4">
            Nieuw project
          </Button>
          <Button variant="outlined" size="$4">
            Uitnodigen
          </Button>
          <Button variant="transparent" size="$4">
            Rapport
          </Button>
        </XStack>
      </Surface>

      <YStack gap="$2">
        <SectionLabel>Recent</SectionLabel>
        <YStack
          bg="$color2"
          borderWidth={1}
          borderColor="$color5"
          rounded="$6"
          p="$2"
        >
          {mockRecent.map((item, i) => (
            <XStack
              key={item.id}
              p="$3"
              items="center"
              justify="space-between"
              borderTopWidth={i === 0 ? 0 : 1}
              borderColor="$color4"
            >
              <YStack gap="$1">
                <SizableText size="$4" fontWeight="600">
                  {item.title}
                </SizableText>
                <SizableText size="$3" color="$color10">
                  {item.meta}
                </SizableText>
              </YStack>
              <Button size="$3" variant="transparent">
                Open
              </Button>
            </XStack>
          ))}
        </YStack>
      </YStack>
    </PlaygroundShell>
  )
}
