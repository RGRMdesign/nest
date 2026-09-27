/** Fictieve data voor Nest playground-schermen (geen backend). */

export const playgroundScreens = [
  {
    id: 'overview',
    title: 'Overview',
    description: 'Dashboard met stats, acties en recente items',
    href: '/playground/overview',
    theme: 'blue',
  },
  {
    id: 'profile',
    title: 'Profile',
    description: 'Profielheader, stats en actieknoppen',
    href: '/playground/profile',
    theme: 'purple',
  },
  {
    id: 'feed',
    title: 'Feed',
    description: 'Sociale feed met posts en interacties',
    href: '/playground/feed',
    theme: 'green',
  },
  {
    id: 'forms',
    title: 'Forms',
    description: 'Inputs, toggles en formuliervelden',
    href: '/playground/forms',
    theme: 'orange',
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Instellingenlijst met switches',
    href: '/playground/preferences',
    theme: 'pink',
  },
  {
    id: 'elements',
    title: 'Elements',
    description: 'Buttons, avatars, chips en badges',
    href: '/playground/elements',
    theme: 'yellow',
  },
  {
    id: 'paywall',
    title: 'Paywall',
    description: 'Prijsplannen en CTA-sectie',
    href: '/playground/paywall',
    theme: 'red',
  },
  {
    id: 'chat',
    title: 'Chat',
    description: 'Gesprekkenlijst met previews',
    href: '/playground/chat',
    theme: 'cyan',
  },
] as const

export const mockUser = {
  name: 'Alex Rivera',
  handle: '@alexrivera',
  bio: 'Product designer · coffee enthusiast · building Nest playgrounds',
  location: 'Amsterdam',
  joined: 'Maart 2024',
  followers: '12.4k',
  following: '891',
  posts: '342',
  avatar: null as string | null,
}

export const mockStats = [
  { label: 'Actieve users', value: '24.8k', delta: '+12%' },
  { label: 'Sessies', value: '189k', delta: '+8%' },
  { label: 'Conversie', value: '3.2%', delta: '+0.4%' },
  { label: 'Revenue', value: '€42k', delta: '+18%' },
]

export const mockFeed = [
  {
    id: '1',
    author: 'Maya Chen',
    handle: '@mayachen',
    time: '2u',
    body: 'Net de nieuwe Nest playground uitgeprobeerd — die Bento-achtige forms voelen zo soepel op native én web.',
    likes: 128,
    comments: 14,
  },
  {
    id: '2',
    author: 'Jordan Blake',
    handle: '@jblake',
    time: '5u',
    body: 'Tip: houd je eerste viewport lean. Één compositie, één CTA, en een echte visual als anker.',
    likes: 86,
    comments: 9,
  },
  {
    id: '3',
    author: 'Sam Okonkwo',
    handle: '@samoko',
    time: '1d',
    body: 'Tamagui + Takeout = schrijf één keer, ship naar iOS, Android en web. De todo-backend kan later.',
    likes: 210,
    comments: 31,
  },
]

export const mockChats = [
  {
    id: '1',
    name: 'Design Crit',
    preview: 'Kunnen we de hero iets rustiger maken?',
    time: '09:41',
    unread: 2,
  },
  {
    id: '2',
    name: 'Maya Chen',
    preview: 'Screenshots staan klaar in Figma',
    time: 'Gisteren',
    unread: 0,
  },
  {
    id: '3',
    name: 'Release Crew',
    preview: 'Playground v0.1 is live op web',
    time: 'Ma',
    unread: 5,
  },
  {
    id: '4',
    name: 'Jordan Blake',
    preview: 'Nice work op de preferences sheet',
    time: 'Zo',
    unread: 0,
  },
]

export const mockPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '€0',
    period: '/mo',
    features: ['Playground schermen', 'Web preview', 'Mock data'],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '€29',
    period: '/mo',
    features: ['Alle Bento secties', 'iOS + Android builds', 'Theme tokens', 'Priority support'],
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '€79',
    period: '/mo',
    features: ['Alles in Pro', 'Shared library', 'SSO (fictief)', 'Dedicated channel'],
    highlighted: false,
  },
]

export const mockRecent = [
  { id: '1', title: 'Profile refresh', meta: 'UI · 2 uur geleden' },
  { id: '2', title: 'Feed interactions', meta: 'Prototype · gisteren' },
  { id: '3', title: 'Paywall copy', meta: 'Content · 3 dagen geleden' },
]
