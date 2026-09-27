import { Slot, Stack } from 'one'
import { isWeb } from 'tamagui'

export function AppLayout() {
  if (isWeb) {
    return <Slot />
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="settings" />
    </Stack>
  )
}
