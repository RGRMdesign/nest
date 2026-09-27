import type { ReactNode } from 'react'
import { Link } from 'one'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { isWeb, ScrollView, SizableText, Theme, XStack, YStack } from 'tamagui'

import { APP_NAME } from '~/constants/app'
import { ThemeColorPicker } from '~/features/theme/ThemeColorPicker'
import { Button } from '~/interface/buttons/Button'
import { CaretLeftIcon } from '~/interface/icons/phosphor/CaretLeftIcon'
import { PageContainer } from '~/interface/layout/PageContainer'
import { ThemeSwitch } from '~/interface/theme/ThemeSwitch'
import { H2, H3 } from '~/interface/text/Headings'

type PlaygroundShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
  showBack?: boolean
}

/**
 * Shared shell for playground screens — Bento-achtige page layout.
 */
export function PlaygroundShell({
  title,
  subtitle,
  children,
  showBack = true,
}: PlaygroundShellProps) {
  const insets = useSafeAreaInsets()

  const header = (
    <YStack
      borderBottomWidth={1}
      borderColor="$color4"
      bg="$background"
      pt={isWeb ? '$3' : insets.top + 8}
      pb="$3"
    >
      <PageContainer>
        <XStack items="center" gap="$3" px="$1">
          {showBack ? (
            <Link href="/playground" asChild>
              <Button
                circular
                size="$3"
                variant="transparent"
                icon={<CaretLeftIcon size={18} />}
                aria-label="Terug naar playground"
              />
            </Link>
          ) : (
            <Theme name="blue">
              <YStack
                px="$2.5"
                py="$1"
                rounded="$3"
                bg="$color3"
                borderWidth={1}
                borderColor="$color6"
              >
                <SizableText size="$2" fontWeight="700" color="$color11" letterSpacing={1}>
                  {APP_NAME.toUpperCase()}
                </SizableText>
              </YStack>
            </Theme>
          )}

          <YStack flex={1} gap="$1">
            <H2 size="$5" fontWeight="700">
              {title}
            </H2>
            {subtitle ? (
              <SizableText size="$3" color="$color10" numberOfLines={2}>
                {subtitle}
              </SizableText>
            ) : null}
          </YStack>

          <YStack items="flex-end" gap="$2">
            <XStack items="center" gap="$2">
              <ThemeSwitch />
            </XStack>
            <ThemeColorPicker variant="compact" />
          </YStack>
        </XStack>
      </PageContainer>
    </YStack>
  )

  const body = (
    <PageContainer py="$5" gap="$5" pb={isWeb ? '$10' : insets.bottom + 40}>
      {children}
    </PageContainer>
  )

  if (isWeb) {
    return (
      <YStack
        flex={1}
        bg="$background"
        minH="100vh"
        width="100%"
      >
        {header}
        <ScrollView flex={1}>{body}</ScrollView>
      </YStack>
    )
  }

  return (
    <YStack flex={1} bg="$background">
      {header}
      <ScrollView flex={1}>{body}</ScrollView>
    </YStack>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <H3 size="$2" color="$color10" textTransform="uppercase" letterSpacing={1.2} mb="$2">
      {children}
    </H3>
  )
}

export function Surface({
  children,
  theme,
}: {
  children: ReactNode
  theme?: string
}) {
  const content = (
    <YStack
      bg="$color2"
      borderWidth={1}
      borderColor="$color5"
      rounded="$6"
      p="$4"
      gap="$3"
      overflow="hidden"
    >
      {children}
    </YStack>
  )

  if (theme) {
    return <Theme name={theme as any}>{content}</Theme>
  }

  return content
}
