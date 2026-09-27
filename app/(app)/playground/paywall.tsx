import { SizableText, Theme, XStack, YStack } from 'tamagui'

import { mockPlans } from '~/features/playground/data'
import { PlaygroundShell, SectionLabel } from '~/features/playground/PlaygroundShell'
import { Button } from '~/interface/buttons/Button'
import { H3 } from '~/interface/text/Headings'

export function PaywallPage() {
  return (
    <PlaygroundShell title="Paywall" subtitle="Prijsplannen — puur fictief">
      <SectionLabel>Kies een plan</SectionLabel>
      <YStack gap="$3">
        {mockPlans.map((plan) => (
          <Theme key={plan.id} name={plan.highlighted ? 'blue' : undefined}>
            <YStack
              bg={plan.highlighted ? '$color3' : '$color2'}
              borderWidth={plan.highlighted ? 2 : 1}
              borderColor={plan.highlighted ? '$color8' : '$color5'}
              rounded="$6"
              p="$4"
              gap="$3"
            >
              <XStack justify="space-between" items="center">
                <H3 size="$5">{plan.name}</H3>
                {plan.highlighted ? (
                  <YStack bg="$color9" px="$2" py="$1" rounded="$3">
                    <SizableText size="$1" color="$color1" fontWeight="700">
                      POPULAR
                    </SizableText>
                  </YStack>
                ) : null}
              </XStack>

              <XStack items="flex-end" gap="$1">
                <SizableText size="$9" fontWeight="800">
                  {plan.price}
                </SizableText>
                <SizableText size="$3" color="$color10" mb="$2">
                  {plan.period}
                </SizableText>
              </XStack>

              <YStack gap="$2">
                {plan.features.map((feature) => (
                  <SizableText key={feature} size="$4">
                    ✓ {feature}
                  </SizableText>
                ))}
              </YStack>

              <Button
                theme={plan.highlighted ? 'blue' : undefined}
                variant={plan.highlighted ? 'default' : 'outlined'}
                size="$4"
                mt="$2"
              >
                Kies {plan.name}
              </Button>
            </YStack>
          </Theme>
        ))}
      </YStack>
    </PlaygroundShell>
  )
}
