/**
 * Color themes available from Tamagui createV5Theme / theme builder.
 * @see https://tamagui.dev/docs/guides/theme-builder
 */
export const THEME_COLOR_OPTIONS = [
  { id: 'base', label: 'Base', description: 'Standaard light/dark zonder kleur' },
  { id: 'accent', label: 'Accent', description: 'Inverse accent (contrast CTA)' },
  { id: 'gray', label: 'Gray', description: 'Neutraal grijs' },
  { id: 'neutral', label: 'Neutral', description: 'Zachte neutraal' },
  { id: 'blue', label: 'Blue', description: 'Radix blue' },
  { id: 'teal', label: 'Teal', description: 'Radix teal' },
  { id: 'green', label: 'Green', description: 'Radix green' },
  { id: 'yellow', label: 'Yellow', description: 'Radix yellow' },
  { id: 'orange', label: 'Orange', description: 'Radix orange' },
  { id: 'red', label: 'Red', description: 'Radix red' },
  { id: 'pink', label: 'Pink', description: 'Radix pink' },
  { id: 'purple', label: 'Purple', description: 'Radix purple' },
] as const

export type ThemeColorId = (typeof THEME_COLOR_OPTIONS)[number]['id']

export const DEFAULT_THEME_COLOR: ThemeColorId = 'base'

export function isThemeColorId(value: string | null | undefined): value is ThemeColorId {
  return THEME_COLOR_OPTIONS.some((option) => option.id === value)
}

/** Preview swatch colors (approximate Radix mid tones) for the picker UI */
export const THEME_COLOR_SWATCHES: Record<ThemeColorId, { light: string; dark: string }> = {
  base: { light: '#e8e8e8', dark: '#2a2a2a' },
  accent: { light: '#111111', dark: '#f5f5f5' },
  gray: { light: '#8b8d98', dark: '#696e77' },
  neutral: { light: '#8d8d86', dark: '#6f6f69' },
  blue: { light: '#0090ff', dark: '#3b9eff' },
  teal: { light: '#12a594', dark: '#0d9b8a' },
  green: { light: '#30a46c', dark: '#3dd68c' },
  yellow: { light: '#ffe629', dark: '#f5d90a' },
  orange: { light: '#f76b15', dark: '#ff8b3e' },
  red: { light: '#e5484d', dark: '#ff6369' },
  pink: { light: '#d6409f', dark: '#f65cb6' },
  purple: { light: '#8e4ec6', dark: '#bf7af0' },
}
