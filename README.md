# Expo NativeWind Playground

Cross-platform playground om te beoordelen of **Expo + React Native + NativeWind + gluestack-ui v5** een bruikbare basis is voor latere applicaties. Eén codebase voor iOS, Android en web (inclusief desktop).

## Waarom deze stack

- **Expo + React Native** zijn het fundament: routing, native modules, web via React Native Web.
- **Expo Router** geeft file-based routes die op alle platforms hetzelfde pad houden (`/`, `/components`, `/playground`).
- **NativeWind v5** legt styling in Tailwind-utilities en CSS-tokens. Applicatiecode praat in semantische klassen, niet in hex-waarden.
- **gluestack-ui v5** levert kant-en-klare componenten als **lokale bronbestanden** in `src/components/ui`. De app hangt niet aan een gesloten runtime-componentlaag.
- **Gesture Handler + Reanimated** zijn de huidige Expo-aanbeveling voor native gestures.

### Belangrijke afwijking van het oorspronkelijke plan

NativeWind **v4 blijft officieel de stabiele release**. NativeWind **v5 is RC0** (`5.0.0-rc.0`) en door NativeWind zelf nog als pre-release gemarkeerd. gluestack-ui v5 koppelt officieel aan NativeWind v5 / Tailwind v4. Voor deze evaluatie is daarom de officiële v5-RC-setup gevolgd, niet de oudere v4-tutorials.

De officiële default-template van Expo SDK 57 legt routes in `src/app/` in plaats van `app/` in de root. Die structuur is aangehouden, met dunne routebestanden en schermen in `src/screens/`.

## Geïnstalleerde versies

Vastgelegd in september 2026:

| Pakket | Versie |
| --- | --- |
| Expo SDK | ~57.0.25 |
| React | 19.2.3 |
| React Native | 0.86.3 |
| React Native Web | ~0.21.0 |
| Expo Router | ~57.0.23 |
| NativeWind | 5.0.0-rc.0 |
| react-native-css | 3.1.0-rc.0 |
| Tailwind CSS | ^4.3.3 |
| gluestack-ui core / utils | ^5.0.15 / ^5.0.6 |
| Gesture Handler | ~2.32.0 |
| Reanimated | 4.5.1 |
| Worklets | 0.10.1 |
| lightningcss (pinned) | 1.30.1 |

NativeWind documenteert het geteste doel als Expo 57.0.22, React Native 0.86.3, Reanimated 4.5.1 en Worklets 0.10.1. De RC-engine en NativeWind moeten als paar blijven: `nativewind@5.0.0-rc.0` + `react-native-css@3.1.0-rc.0`.

## Starten

```bash
npm install
npm run start          # Metro / Expo Dev Tools
npm run web            # web
npm run ios            # iOS (macOS + Xcode of Expo Go)
npm run android        # Android (emulator, device of Expo Go)
npm run lint
npm run typecheck
npm test
```

Web-export (statisch):

```bash
npx expo export --platform web
```

iOS en Android gebruiken Expo Go zolang je binnen de modules van het SDK blijft. Na extra native modules is een development build nodig (`npx expo run:ios` / `npx expo run:android`).

## Styling en theming

Tokens staan in `styles/global.css` en volgen de **gluestack-ui v5 Expo starter defaults** (neutraal grijs, geen custom brand-palette):

- kleuren: `background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, `ring` en bijbehorende foregrounds
- `accent` is een subtiele hover-surface (lichtgrijs) met donkere `accent-foreground` — nodig voor outline/ghost buttons
- radii: `--radius-sm` tot `--radius-xl`
- typografie: `--font-sans`, `--font-heading`, `--font-mono` (standaard systeemfonts)

Tailwind mapt die variabelen naar utilities zoals `bg-background`, `text-foreground`, `bg-card`, `border-border`, `bg-primary` en `text-primary-foreground`.

Dark mode:

- **Native:** `prefers-color-scheme` via NativeWind + `Appearance.setColorScheme`. `userInterfaceStyle` staat op `automatic`.
- **Web:** dezelfde media query, plus class-overrides in `styles/theme.web.css` voor een handmatige toggle. NativeWind v5 RC weigert `:root.dark` op native; daarom staat die override alleen in het web-bestand.

JS-spiegels voor layout en motion staan in `src/lib/theme.ts` en `src/lib/colors.ts`. Gebruik die alleen waar CSS-utilities niet kunnen (bijv. Reanimated-drempels). `NativeTabs` gebruikt platformdefaults — geen custom tabbalkleuren — zodat Liquid Glass op iOS 26+ werkt.

Schermen gebruiken `ScreenScaffold` met `ScrollView`/`View` (niet `SafeAreaView` + `className`): NativeWind v5 stylet `SafeAreaView` van `react-native-safe-area-context` niet; NativeTabs regelt insets via `contentInsetAdjustmentBehavior`.

### Look & feel wijzigen

1. Pas RGB-tokens in `styles/global.css` aan (en de web-overrides in `styles/theme.web.css`). Houd `accent` een subtiele surface-kleur, geen brand-oranje.
2. Wijzig radii of fonts in hetzelfde `@theme`-blok.
3. Optioneel: pas varianten in een lokaal gluestack-bestand onder `src/components/ui/<naam>` aan.
4. Houd hex-spiegels in `src/lib/colors.ts` gelijk als je ze in JS nodig hebt.

Geen verspreide hex-waarden in schermen. Geen extra UI-kits (Tamagui, Paper, NativeBase).

## gluestack-componenten toevoegen

```bash
npx gluestack-ui@latest add <component> --path src/components/ui -y
```

Config staat in `gluestack-ui.config.json`. Nieuwe bestanden landen in `src/components/ui`. Daarna importeren vanuit `@/components/ui/<naam>`.

De CLI voegde per ongeluk het v4-Babel-preset `nativewind/babel` toe. Dat is verwijderd: NativeWind v5 herschrijft imports via Metro.

## Wat is NativeWind en wat is gluestack

| Deel | Laag |
| --- | --- |
| Routes, schermen, playground-layout, tokens, theme toggle | React Native + NativeWind |
| Knoppen, inputs, select, tabs, dialog, sheet, toast, badge, avatar | lokale gluestack-bestanden |
| Swipeable inbox-kaart | Gesture Handler + Reanimated, gestyled met NativeWind-tokens |

## Vendor independence

**Afhankelijk van gluestack**

- Bestanden onder `src/components/ui/**` (lokale kopieën).
- `GluestackUIProvider`, overlay- en toast-providers.
- Runtime-helpers `@gluestack-ui/core` en `@gluestack-ui/utils`.
- Enkele peers: `react-aria`, `react-stately`, `@legendapp/motion`, `@expo/html-elements`.

**Afhankelijk van NativeWind**

- `className` in vrijwel alle UI.
- `styles/global.css`, Metro `withNativewind`, PostCSS, `react-native-css`.
- Semantische utilities in schermen.

**gluestack later vervangen**

1. Houd de schermen op semantische tokens (`bg-card`, `text-foreground`, …).
2. Vervang imports vanuit `@/components/ui/*` door eigen primitives of een andere kit.
3. Verwijder `GluestackUIProvider` en de `@gluestack-ui/*` packages.
4. Gooi `src/components/ui` weg of vervang het bestand voor bestand.

Omdat de kit lokaal staat, is dit een bronvervanging, geen runtime-migratie.

**NativeWind later vervangen**

1. Tokens verhuizen naar een ander themabestand (`src/lib/theme.ts` of StyleSheet).
2. Alle `className`-utilities herschrijven naar die API.
3. Metro/PostCSS/NativeWind-configuratie verwijderen.
4. gluestack-componenten zouden mee moeten, want hun `tva`-styling is NativeWind-specifiek. Dat is de duurste stap.

## Platformverschillen

- **Navigatie:** native gebruikt `NativeTabs` zonder custom kleuren (Liquid Glass op iOS 26+); web heeft een bovenbalk. Tabs schuiven niet.
- **Inbox-kaart:** iOS/Android swipen met drempel, veer en haptic. Desktop web toont een zichtbare Archiveren-knop. Swipe is daar geen natuurlijke interactie.
- **Thema:** `Appearance.setColorScheme('unspecified')` herstelt systeemkeuze op native. Web gebruikt document-classes.
- **`:root.dark`:** werkt niet in de native NativeWind-compiler.
- **Elevation:** Android kan `elevation-*` utilities gebruiken; deze playground houdt schaduwen bewust licht.
- **Touch targets:** interactieve controls hebben minimaal 44px (`min-h-11`).
- **iOS/Android:** sheets en selects gebruiken Actionsheet. Safe areas zitten in `ScreenScaffold`.
- **Web:** focus-ringen komen uit gluestack `data-[focus-visible]` + `--ring`. Geen DOM-elementen in gedeelde native componenten.

## Skills

Officiële Expo-skills staan in `.agents/skills` (`npx skills add expo/skills`). Gebruikt voor structuur, router, design tokens en Reanimated/gestures. `@expo/ui` is bewust niet de UI-kit van deze playground; die evaluatie gaat over gluestack-ui.

## Architectuur

```
src/app/                 # routes only
src/screens/             # schermlichamen
src/components/ui/       # lokale gluestack-componenten
src/components/playground/
src/lib/                 # tokens, helpers, testdata
styles/                  # CSS-tokens
```
