'use no memo'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { Theme } from 'tamagui'

import {
  DEFAULT_THEME_COLOR,
  isThemeColorId,
  type ThemeColorId,
} from '~/features/theme/themeColors'

const STORAGE_KEY = 'nest.theme.color'

type ThemeColorContextValue = {
  colorId: ThemeColorId
  setColorId: (id: ThemeColorId) => void
}

const ThemeColorContext = createContext<ThemeColorContextValue | null>(null)

function readStoredColor(): ThemeColorId {
  try {
    if (typeof localStorage === 'undefined') return DEFAULT_THEME_COLOR
    const raw = localStorage.getItem(STORAGE_KEY)
    return isThemeColorId(raw) ? raw : DEFAULT_THEME_COLOR
  } catch {
    return DEFAULT_THEME_COLOR
  }
}

function writeStoredColor(id: ThemeColorId) {
  try {
    if (typeof localStorage === 'undefined') return
    if (id === DEFAULT_THEME_COLOR) {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      localStorage.setItem(STORAGE_KEY, id)
    }
  } catch {
    // ignore persistence failures (private mode, etc.)
  }
}

export function ThemeColorProvider({ children }: { children: ReactNode }) {
  const [colorId, setColorIdState] = useState<ThemeColorId>(DEFAULT_THEME_COLOR)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setColorIdState(readStoredColor())
    setHydrated(true)
  }, [])

  const setColorId = useCallback((id: ThemeColorId) => {
    setColorIdState(id)
    writeStoredColor(id)
  }, [])

  const value = useMemo(
    () => ({
      colorId: hydrated ? colorId : DEFAULT_THEME_COLOR,
      setColorId,
    }),
    [colorId, hydrated, setColorId]
  )

  const content =
    value.colorId === 'base' ? (
      children
    ) : (
      <Theme name={value.colorId as any}>{children}</Theme>
    )

  return <ThemeColorContext.Provider value={value}>{content}</ThemeColorContext.Provider>
}

export function useThemeColor() {
  const ctx = useContext(ThemeColorContext)
  if (!ctx) {
    throw new Error('useThemeColor must be used within ThemeColorProvider')
  }
  return ctx
}
