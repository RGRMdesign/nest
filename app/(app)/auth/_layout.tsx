import { Slot, Stack } from 'one'
import { isWeb } from 'tamagui'

export function AuthAndOnboardingLayout() {
  if (isWeb) {
    return <Slot />
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen name="login" />
      <Stack.Screen name="login/password" />
      <Stack.Screen name="signup/[method]" />
    </Stack>
  )
}
