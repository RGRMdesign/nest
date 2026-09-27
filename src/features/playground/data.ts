/**
 * Catalogus van geïntegreerde Tamagui Bento OSS-composities.
 * Bron: https://tamagui.dev/bento via `bento-get` / code-download API
 */
export const bentoCatalog = [
  {
    id: 'forms',
    title: 'Forms',
    description: 'Inputs, switches, radio, checkboxes en sign-in layout',
    href: '/playground/forms',
    theme: 'blue',
  },
  {
    id: 'elements',
    title: 'Elements',
    description: 'Buttons, chips, avatars, table en popover',
    href: '/playground/elements',
    theme: 'green',
  },
  {
    id: 'shells',
    title: 'Shells',
    description: 'Tab bars en navigatie-composities',
    href: '/playground/shells',
    theme: 'purple',
  },
  {
    id: 'animation',
    title: 'Animation',
    description: 'Loading buttons, slide-in en number slider',
    href: '/playground/animation',
    theme: 'orange',
  },
  {
    id: 'signin',
    title: 'Sign in',
    description: 'Bento SignInScreen form layout',
    href: '/playground/signin',
    theme: 'pink',
  },
  {
    id: 'datepicker',
    title: 'Date picker',
    description: 'Bento DatePicker compositie',
    href: '/playground/datepicker',
    theme: 'cyan',
  },
] as const
