import { Slot, Stack } from 'one'

export function PlaygroundLayout() {
  return process.env.VITE_PLATFORM === 'web' ? (
    <Slot />
  ) : (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="overview" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="feed" />
      <Stack.Screen name="forms" />
      <Stack.Screen name="preferences" />
      <Stack.Screen name="elements" />
      <Stack.Screen name="paywall" />
      <Stack.Screen name="chat" />
    </Stack>
  )
}
