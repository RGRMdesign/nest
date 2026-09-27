import { Button, View, XStack } from 'tamagui'

type Direction = 'left' | 'right' | 'top' | 'bottom'

/**
 * Minimal direction control for the OSS SlideIn demo.
 * Full DirectionSlide UI is a Pro Bento part; this keeps the free demo usable.
 */
export function DirectionSlide({
  direction,
  setDirection,
}: {
  direction: Direction
  setDirection: (direction: Direction) => void
}) {
  const options: Direction[] = ['left', 'right', 'top', 'bottom']

  return (
    <XStack gap="$2" flexWrap="wrap" justify="center">
      {options.map((option) => (
        <Button
          key={option}
          size="$3"
          theme={direction === option ? 'blue' : undefined}
          onPress={() => setDirection(option)}
        >
          {option}
        </Button>
      ))}
      {/* keep View import used for layout parity with Bento demos */}
      <View display="none" />
    </XStack>
  )
}
