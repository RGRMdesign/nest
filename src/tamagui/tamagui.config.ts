import { createV5Theme, defaultChildrenThemes, defaultConfig } from '@tamagui/config/v5'
import { createTamagui } from 'tamagui'

import { animationsRoot } from './animationsRoot'
import { fonts } from './fonts'

/**
 * Theme suite via Tamagui theme builder helper (createV5Theme).
 * @see https://tamagui.dev/docs/guides/theme-builder
 *
 * Includes light/dark, accent (inverse), and color children:
 * gray, blue, red, yellow, green, orange, pink, purple, teal, neutral.
 */
export const themes = createV5Theme({
  childrenThemes: {
    ...defaultChildrenThemes,
  },
})

export const config = createTamagui({
  ...defaultConfig,
  animations: animationsRoot,
  fonts,
  // tamagui optimization - reduce bundle size by avoiding themes js on client
  // tamagui will hydrate it from CSS which improves lighthouse scores
  themes: process.env.VITE_ENVIRONMENT === 'client' ? ({} as typeof themes) : themes,
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}

  interface TypeOverride {
    groupNames(): 'button' | 'message' | 'icon' | 'item' | 'frame' | 'card'
  }
}
