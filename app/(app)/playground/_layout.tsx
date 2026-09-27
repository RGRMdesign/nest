import { Slot, Stack } from 'one'
import { isWeb } from 'tamagui'

export function PlaygroundLayout() {
  if (isWeb) {
    return <Slot />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="forms" />
      <Stack.Screen name="elements" />
      <Stack.Screen name="shells" />
      <Stack.Screen name="animation" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="datepicker" />
    </Stack>
  )
}
