export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 22,
  full: 9999,
} as const;

export const motion = {
  fast: 150,
  base: 250,
  slow: 400,
} as const;

export const layout = {
  pageMaxWidth: 1120,
  contentMaxWidth: 760,
  sidebarWidth: 248,
  desktopBreakpoint: 900,
  touchTarget: 44,
} as const;

export const swipe = {
  threshold: 96,
  archiveOffset: 120,
} as const;
