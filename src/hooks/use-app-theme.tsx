import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme } from '@/hooks/use-color-scheme';

export type ThemePreference = 'light' | 'dark' | 'system';

type AppThemeContextValue = {
  preference: ThemePreference;
  resolved: 'light' | 'dark';
  setPreference: (value: ThemePreference) => void;
  cyclePreference: () => void;
};

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

const order: ThemePreference[] = ['system', 'light', 'dark'];

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [preference, setPreference] = useState<ThemePreference>('system');

  const value = useMemo<AppThemeContextValue>(() => {
    const resolved = preference === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : preference;

    return {
      preference,
      resolved,
      setPreference,
      cyclePreference: () => {
        setPreference((current) => order[(order.indexOf(current) + 1) % order.length]);
      },
    };
  }, [preference, systemScheme]);

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error('useAppTheme must be used within AppThemeProvider');
  }

  return context;
}
